import React, { FC } from 'react';
import './BigTech2.css';
import Image from 'next/image';
import TitleTag from '../TitleTag/TitleTag';

const BigTech2: FC = () => {
    return (
        <div className='bigTechContainer2'>
            <TitleTag title='Trusted by' />
            <div className='bigtechList2'>
                <Image
                    src={"/meta.svg"}
                    alt='metasvg'
                    height={0}
                    width={0}
                    className='bigtechSvg2'
                />
                <Image
                    src={"/expensify.svg"}
                    alt='metasvg'
                    height={0}
                    width={0}
                    className='bigtechSvg2'
                />
                <Image
                    src={"/amazon.svg"}
                    alt='metasvg'
                    height={0}
                    width={0}
                    className='bigtechSvg2'
                />
            </div>
        </div>
    )
}

export default BigTech2;