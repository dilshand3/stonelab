import React, { FC } from 'react';
import './ServiceDailaugeBox.css';

const ServiceDailaugeBox:  FC<{ show: boolean }> = ({show}) => {
    return (
        <div
            className={`ServiceDailaugeBox-container ${show ? 'showdailauge' : ''}`}
        >
            ServiceDailaugeBox
        </div>
    )
}

export default ServiceDailaugeBox