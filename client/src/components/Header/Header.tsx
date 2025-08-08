import React, { FC, useState } from 'react';
import "./Header.css";
import SVGIcon from '../SVGIcon/SVGIcon';
import { icons } from '../SVGIcon/svg';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import { listItemData } from '@/utils/data';
import Link from 'next/link';
import {  useDispatch } from 'react-redux';
import { toggleServiceDailaugeBox, toggleAboutusDailaugeBox } from '@/redux/states/states';

export interface IListItem {
    title: string;
    route: string;
}

const ListItem: FC<IListItem & {
    isAnyItemHovered: boolean;
    isCurrentItemHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}> = ({ title, route, isAnyItemHovered, isCurrentItemHovered, onMouseEnter, onMouseLeave }) => {
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        onMouseEnter();
        if (title.toLowerCase() === 'service' || title.toLowerCase() === 'services') {
            dispatch(toggleServiceDailaugeBox());
        } else if (title.toLowerCase().includes('about')) {
            dispatch(toggleAboutusDailaugeBox())
        }
    };
    const handleMouseLeave = () => {
        onMouseLeave();
        if (title.toLowerCase() === 'service' || title.toLowerCase() === 'services') {
            dispatch(toggleServiceDailaugeBox());
        } else if (title.toLowerCase().includes('about')) {
            dispatch(toggleAboutusDailaugeBox())
        }
    };

    return (
        <Link href={route} className={`listItem ${isAnyItemHovered && !isCurrentItemHovered ? 'non-hover' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className='listItemName'>{title}</span>
            <span>
                <SVGIcon
                    path={icons.downarrow.path}
                    viewBox={icons.downarrow.path}
                    height='20'
                    width='20'
                    className='headerArrow'
                />
            </span>
        </Link>
    )
}

const Header: FC = () => {
    const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
    return (
        <div className='desktop-header-container desktop-width'>
            <span className="brand-logo">{"{stonelab}"}</span>
            <div className='navList'>
                {
                    listItemData.map((val, index) => (
                        <ListItem
                            key={index}
                            title={val.title}
                            route={val.route}
                            isAnyItemHovered={hoveredItemIndex !== null}
                            isCurrentItemHovered={hoveredItemIndex === index}
                            onMouseEnter={() => setHoveredItemIndex(index)}
                            onMouseLeave={() => setHoveredItemIndex(null)}
                        />
                    ))
                }
            </div>
            <AnimatedButton
                title='Hire us'
                path={icons.turnArrow.path}
                viewBox={icons.turnArrow.viewBox}
            />
        </div>
    )
}

export default Header;