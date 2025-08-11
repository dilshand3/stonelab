import React, { FC, useState, useEffect } from 'react';
import './StatsCard.css';
import Image from 'next/image';

const StatsCard: FC = () => {
    const [Statsdata, setStatsdata] = useState<object[]>([
        {
            key1: '250+',
            key2: '/gitCommitSvg.svg',
            key3: 'Commit in Github'
        },
        {
            key1: '20mln+',
            key2: '/download.svg',
            key3: 'Download on npm'
        },
        {
            key1: '10k+',
            key2: '/github.svg',
            key3: 'Star on Github'
        }
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            setStatsdata((prevData) => {
                const newData = [...prevData];
                const firstItem = newData.shift();
                newData.push(firstItem!);
                return newData;
            });
        }, 2000)
        return () => clearInterval(interval);
    }, [])

    const currentItem = Statsdata[0] as { key1: string; key2: string; key3: string };

    return (
        <div className='statsCard-container'>
            <span>
                {currentItem.key1}
            </span>
            <div className='statsCard-Content'>
                <div className='statsCard-description'>
                    <Image
                        src={currentItem.key2}
                        alt='statsIcon'
                        height={30}
                        width={30}
                        className='statsCard-Icon'
                    />
                    <span>
                        {currentItem.key3} 
                    </span>
                </div>
                <div className='statsCard-line'>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                </div>
            </div>
        </div>
    )
}

export default StatsCard