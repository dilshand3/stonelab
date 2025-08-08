import React, { FC, useEffect } from 'react';
import "./Hero.css"
import Header from '@/components/Header/Header';
import MobileHeader from '@/components/Header/MobileHeader';
import BigTech from '@/components/BigTech/BigTech';
import AnimatedButton from '@/components/AnimatedButton/AnimatedButton';
import { icons } from '@/components/SVGIcon/svg';
import AdsLayout from '@/components/AdsLayout/AdsLayout';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import MobMenu from '@/section/MobMenu/MobMenu';
import AnimatedButton2 from '@/components/AnimatedButton2/AnimatedButton2';
import { AdsLayoutData } from '@/utils/data';
import ServiceDailaugeBox from '@/components/DailaugeBox/ServiceDailaugeBox/ServiceDailaugeBox';
import AboutusDailaugeBox from '@/components/DailaugeBox/AboutUs/AboutusDailaugeBox';

const Hero: FC = () => {
    const showMenu = useSelector((state: RootState) => state.appState.showMenu);
    const showServiceDailaugeBox = useSelector((state: RootState) => state.appState.showServiceDailaugeBox);
    const showAboutusDailaugeBox = useSelector((state: RootState) => state.appState.showAboutusDailaugeBox);

    useEffect(() => {
        showMenu
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMenu]);

    return (
        <div className='heroContainer desktop-width'>
            <Header />
            <MobileHeader />
            <MobMenu />
            <ServiceDailaugeBox show={showServiceDailaugeBox} />
            <AboutusDailaugeBox show={showAboutusDailaugeBox} />
            <section className='hero-section'>
                <h1>
                    Your Web & Mobile Application Development Experts.
                </h1>
                <div className='hero-innerSection'>
                    <BigTech />
                    <p>
                        Work with expert stonelab developers to solve challenges, ship faster, and scale with confidence, on every platform.
                    </p>
                    <div className='hero-btnContainer'>
                        <AnimatedButton
                            title='Hire us'
                            path={icons.rightArrow.path}
                            viewBox={icons.rightArrow.viewBox}
                        />
                        <AnimatedButton2
                            title='Check all services'
                            path={icons.rightArrow.path}
                            viewBox={icons.rightArrow.viewBox}
                        />
                    </div>
                </div>
            </section>
             <section className='adslayout-section'>
                {
                    AdsLayoutData.map((val, index) => (
                        <AdsLayout
                            key={index}
                            title={val.title}
                            para={val.para}
                            path={val.path}
                            viewBox={val.viewBox}
                            buttonTitle={val.buttonTitle}
                        />
                    ))
                }
            </section>
            {/* <section>
                <div>
                    <BigTech />

                    <div>
                        <AnimatedButton
                            title='Hire us'
                            path={icons.rightArrow.path}
                            viewBox={icons.rightArrow.viewBox}
                        />
                        <AnimatedButton2
                            title='Check all services'
                            path={icons.rightArrow.path}
                            viewBox={icons.rightArrow.viewBox}
                        />
                    </div>
                </div>
            </section>
            <section className='adslayout-section'>
                {
                    AdsLayoutData.map((val, index) => (
                        <AdsLayout
                            key={index}
                            title={val.title}
                            para={val.para}
                            path={val.path}
                            viewBox={val.viewBox}
                            buttonTitle={val.buttonTitle}
                        />
                    ))
                }
            </section> */}
        </div>
    )
}

export default Hero;