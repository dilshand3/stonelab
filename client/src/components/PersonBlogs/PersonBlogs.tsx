import React, { FC } from 'react';
import './PersonBlogs.css';
import SVGIcon from '../SVGIcon/SVGIcon';
import { icons } from '../SVGIcon/svg';
import Image from 'next/image';

export interface IPersonBlogs {
    paragraph: string;
    name: string;
    img: string;
    position: string;
}

const PersonBlogs: FC<IPersonBlogs> = ({
    paragraph, name, img, position
}) => {
    return (
        <div className='personBlogs-container'>
            <div className='blogs-paragraph'>{paragraph}</div>
            <SVGIcon
                path={icons.comma.path}
                viewBox={icons.comma.viewBox}
                height='50'
                width='50'
                className='commaIcon' />
            <div className='author-section'>
                <Image
                    src={img}
                    alt='blogspersonImg'
                    height={50}
                    width={50}
                    className='blogpersonImg' />
                <div className='blogUser-detail'>
                    <div className='author-name'>{name}</div>
                    <div className='author-position'>{position}</div>
                </div>
            </div>
        </div>

    )
}

export default PersonBlogs;