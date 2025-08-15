import React, { FC, useEffect, useRef } from 'react';
import './MarqueeTag.css';

const MarqueeTag: FC = () => {
    const marqueeRef = useRef<HTMLSpanElement>(null);
    const marqueeText = "TRUSTED BY META, MICROSOFT, AND THE COMMUNITY • WE DON'T FOLLOW BEST PRACTICES, WE SET THEM • REACT NATIVE CORE CONTRIBUTORS • ";

    useEffect(() => {
        const selectText = () => {
            if (marqueeRef.current) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(marqueeRef.current);
                selection?.removeAllRanges();
                selection?.addRange(range);
            }
        };

        // Initial selection
        selectText();

        // Reselect when user clicks elsewhere
        const handleMouseUp = () => {
            setTimeout(selectText, 10);
        };

        // Reselect on any click
        const handleClick = () => {
            setTimeout(selectText, 10);
        };

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className='marqueeTag-container'>
            <div className="marquee-wrapper">
                <div className="marquee">
                    <span 
                        ref={marqueeRef}
                        className="marquee-text"
                    >
                        {marqueeText}
                        {marqueeText}
                        {marqueeText}
                        {marqueeText}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MarqueeTag;