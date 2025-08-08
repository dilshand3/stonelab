import React, { FC } from 'react';
import './AnimatedButton.css';
import SVGIcon from '../SVGIcon/SVGIcon';

interface IAnimatedbutton {
    title: string;
    path: string;
    viewBox: string;
}

const AnimatedButton: FC<IAnimatedbutton> = ({
    title, path, viewBox
}) => {
    return (
        <button className={'animatebtn-container'}>
            <span>{title}</span>
            <span className='icon-container'>
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

export default AnimatedButton;