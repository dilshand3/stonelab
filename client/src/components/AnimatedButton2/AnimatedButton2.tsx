import React, { FC } from 'react';
import './AnimatedButton2.css';
import SVGIcon from '../SVGIcon/SVGIcon';

interface IAnimatedbutton2 {
    title: string;
    path: string;
    viewBox: string;
}

const AnimatedButton2: FC<IAnimatedbutton2> = ({
    title, path, viewBox
}) => {
    return (
        <button className={'animatebtn-container2'}>
            <span>{title}</span>
            <span>
                <SVGIcon
                    path={path}
                    viewBox={viewBox}
                    height='16'
                    width='16'
                />
            </span>
        </button >
    )
}

export default AnimatedButton2;