import React, { FC } from 'react';
import './AppLogosList.css';
import TitleTag from '@/components/TitleTag/TitleTag';
import Image from 'next/image';
import { applogoDataList } from '@/utils/data';

const Logos: FC<{ url: string }> = ({ url }) => {
    return (
        <div className='img-container'>
            <Image
                src={url}
                height={130}
                width={130}
                className='applogoList-img'
                alt='app-logos'
            />
        </div>
    )
}

const AppLogosList: FC = () => {
    return (
        <div className='applogoList-container desktop-width'>
            <TitleTag title='Plateform based on JS' />
            <section className='applogoList-grid'>
                {
                    applogoDataList.map((val, index) => (
                        <Logos
                            key={index}
                            url={val}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default AppLogosList;