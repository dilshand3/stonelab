import React, { FC, useEffect, useRef } from 'react';
import './MobMenu.css';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import SVGIcon from '@/components/SVGIcon/SVGIcon';
import { icons } from '@/components/SVGIcon/svg';
import { listItemData } from '@/utils/data';

export interface IListItem {
    title: string;
    route: string;
}

const ListItem: FC<IListItem> = ({ title, route }) => {
    return (
        <Link href={`/${route}`} className='listItemTab'>
            <span>{title}</span>
            <span>
                <SVGIcon
                    path={icons.downarrow.path}
                    viewBox={icons.downarrow.viewBox}
                    height='20'
                    width='20'
                    className='listItemArrow'
                />
            </span>
        </Link>
    )
}

const MobMenu: FC = () => {
    const MobileMenuRef = useRef<HTMLDivElement>(null);
    const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

    const showMenu = useSelector((state: RootState) => state.appState.showMenu);

    useEffect(() => {
        if (MobileMenuRef.current && !menuTimelineRef.current) {
            gsap.set(MobileMenuRef.current, {
                y: "-100%",
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none"
            });

            menuTimelineRef.current = gsap.timeline({ paused: true })
                .set(MobileMenuRef.current, {
                    visibility: "visible",
                    pointerEvents: "auto"
                })
                .to(MobileMenuRef.current, {
                    y: "0%",
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });

            menuTimelineRef.current.eventCallback("onReverseComplete", () => {
                if (MobileMenuRef.current) {
                    gsap.set(MobileMenuRef.current, {
                        visibility: "hidden",
                        pointerEvents: "none"
                    });
                }
            });
        }

        if (menuTimelineRef.current) {
            showMenu
                ? menuTimelineRef.current.play()
                : menuTimelineRef.current.reverse();
        }
    }, [showMenu]);

    return (
        <div ref={MobileMenuRef} className='mobmenu-container'>
            {
                listItemData.map((val, index) => (
                    <ListItem
                        key={index}
                        title={val.title}
                        route={val.route}
                    />
                ))
            }
            <button className='mobMenuBtn'>
                <span>Hire us</span>
                <SVGIcon
                    path={icons.turnArrow.path}
                    viewBox={icons.turnArrow.viewBox}
                    height='22'
                    width='22'
                    className='mobmenuBtnIcon'
                />
            </button>
        </div>
    )
}

export default MobMenu;