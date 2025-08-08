import React, { FC } from 'react';
import './AdsLayout.css';
import SVGIcon from '../SVGIcon/SVGIcon';
import AnimatedButton2 from '../AnimatedButton2/AnimatedButton2';
import { icons } from '../SVGIcon/svg';

export interface IAdslayout {
    path: string;
    viewBox: string;
    title: string;
    para: string;
    buttonTitle: string;
}

const AdsLayout: FC<IAdslayout> = ({
    path, viewBox, title, para, buttonTitle
}) => {
    return (
        <div className='adslayout-container'>
            <div>
                <SVGIcon
                    path={path}
                    viewBox={viewBox}
                    height={'24'}
                    width={'24'}
                />
                <h4>{title}</h4>
                <p>{para}</p>
            </div>
            <AnimatedButton2
                title={buttonTitle}
                path={icons.rightArrow.path}
                viewBox={icons.rightArrow.viewBox}
            />
        </div>
    )
}

export default AdsLayout;