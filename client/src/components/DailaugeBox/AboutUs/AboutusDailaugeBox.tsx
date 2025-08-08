import React, { FC } from 'react';
import './AboutusDailaugeBox.css';

const AboutusDailaugeBox: FC<{ show: boolean }> = ({
  show
}) => {
  return (
    <div className={`aboutusDailaugeBox ${show ? 'showdailauge' : ''}`}>
      AboutusDailaugeBox
    </div>
  )
}

export default AboutusDailaugeBox