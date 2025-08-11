import React, { FC } from 'react';
import './PersonBlogs.css';
import SVGIcon from '../SVGIcon/SVGIcon';
import { icons } from '../SVGIcon/svg';
import Image from 'next/image';

interface IPersonBlogs {
    paragraph: string;
    name: string;
    img: string;
    position: string;
}

const PersonBlogs: FC = () => {
    return (
        <div className='personBlogs-container'>
            <div className='blogs-paragraph'>We have the most experienced engineers in the Javascript community.</div>
            <SVGIcon
                path={icons.comma.path}
                viewBox={icons.comma.viewBox}
                height='50'
                width='50'
                className='commaIcon' />
            <div className='author-section'>
                <Image
                    src={"/zaheer.jpg"}
                    alt='blogspersonImg'
                    height={50}
                    width={50}
                    className='blogpersonImg' />
                <div className='blogUser-detail'>
                    <div className='author-name'>Tom Occhino</div>
                    <div className='author-position'>DIRECTOR OF ENGINEERING @ META</div>
                </div>
            </div>
        </div>

    )
}

export default PersonBlogs;