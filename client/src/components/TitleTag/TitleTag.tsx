import React, { FC } from 'react';
import './TitleTag.css';

const TitleTag: FC<{ title: string }> = ({ title }) => {
    return (
        <div className='titleTagContainer'>
            <p>//</p>
            <p>{title.toUpperCase()}</p>
        </div>
    )
}

export default TitleTag;