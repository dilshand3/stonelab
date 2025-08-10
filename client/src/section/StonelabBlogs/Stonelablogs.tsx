import React, { FC, useEffect, useRef } from 'react';
import './Stonelablogs.css';
import TitleTag from '@/components/TitleTag/TitleTag';
import SVGIcon from '@/components/SVGIcon/SVGIcon';
import { icons } from '@/components/SVGIcon/svg';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stonelablogs: FC = () => {
    const textRef1 = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const wrapLetters = (element: HTMLParagraphElement) => {
            const text = element.textContent || '';
            element.innerHTML = text
                .split('')
                .map((char, index) => {
                    return `<span data-char="${index}" style="color: #d4d2d8; display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`;
                })
                .join('');
        };
        if (textRef1.current) {
            wrapLetters(textRef1.current);

            const spans1 = textRef1.current.querySelectorAll('span');

            gsap.timeline({
                scrollTrigger: {
                    trigger: textRef1.current,
                    start: "top 85%",
                    end: "bottom 60%",
                }
            }).to(spans1, {
                color: "#201F24",
                duration: 0.03,
                stagger: {
                    each: 0.005,
                    from: "start"
                },
                ease: "none"
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='stonelabblogs-container'>
            <Image
                src={"/zaheer.jpg"}
                height={100}
                width={100}
                alt='stonelab blogs'
            />
            <div>
                <TitleTag title='INNOVATING SINCE 2023' />
                <span>
                    <SVGIcon
                        path={icons.comma.path}
                        viewBox={icons.comma.viewBox}
                        height='70'
                        width='70'
                    />
                    <p ref={textRef1}>
                        Stonelab established to support startups and enterprises in creating high-quality    apps at low costs, simplifying the development process. Additionally,
                        <br />
                        we are gearing up to launch innovative products designed to empower developers and enhance their workflow across various projects.
                    </p>
                </span>
                <span className='founder-title'>
                    <big>Zaheer khan hansal</big>
                    <small>Co-Founder of stonelab community</small>
                </span>
            </div>
        </div>
    )
}

export default Stonelablogs;