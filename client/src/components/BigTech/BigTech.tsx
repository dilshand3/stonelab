import React, { FC } from 'react';
import './BigTech.css';
import Image from 'next/image';
import TitleTag from '../TitleTag/TitleTag';

const BigTech: FC = () => {
    return (
        <div className='bigTechContainer'>
            <TitleTag title='Trusted by' />
            <div className='bigtechList'>
                <Image
                    src={"/meta.svg"}
                    alt='metasvg'
                    height={0}
                    width={0}
                    className='bigtechSvg'
                />
                <Image
                    src={"/expensify.svg"}
                    alt='metasvg'
                    height={0}
                    width={0}
                    className='bigtechSvg'
                />
                <Image
                    src={"/amazon.svg"}
                    alt='metasvg'
                    height={0}
                    width={0}
                    className='bigtechSvg'
                />
            </div>
        </div>
    )
}

export default BigTech;