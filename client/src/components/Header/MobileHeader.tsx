'use client'
import React, { FC } from 'react';
import './MobileHeader.css';
import SVGIcon from '../SVGIcon/SVGIcon';
import { icons } from '../SVGIcon/svg';
import { toggleMenu } from '@/redux/states/states';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';

const MobileHeader: FC = () => {
    const dispatch = useDispatch();
    const showMenu = useSelector((state: RootState) => state.appState.showMenu);
    return (
        <>
            <header className={showMenu ? "mobile-header-container white-container" : "mobile-header-container"}>
                <span className={showMenu ? "brand-logo black" : "brand-logo"}>{"{stonelab}"}</span>
                <span className="menu-icon-wrapper" onClick={() => dispatch(toggleMenu())}>
                    <div className='menu-icon-container'>
                        <SVGIcon
                            path={icons.plusicon.path}
                            viewBox={icons.plusicon.viewBox}
                            height='20'
                            width='18'
                            className={showMenu ? 'menuIcon-white' : 'menuIcon'}
                        />
                    </div>
                </span>
            </header>
        </>
    )
}

export default MobileHeader;