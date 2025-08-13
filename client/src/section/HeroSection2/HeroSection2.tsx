import React, { FC } from 'react';
import './HeroSection2.css';
import TitleTag from '@/components/TitleTag/TitleTag';
import AnimatedButton from '@/components/AnimatedButton/AnimatedButton';
import { icons } from '@/components/SVGIcon/svg';
import Image from 'next/image';
import { HeroSection2Data } from '@/utils/data';


const ImageSection: FC<{ src: string }> = ({ src }) => {
  return (
    <Image
      src={src}
      alt='techImageLogo'
      height={0}
      width={0}
      className='heroSection2-imagecontainer'
    />
  )
}

const HeroSection2: FC = () => {
  return (
    <div className='heroSection2'>
      <div className='heroSection2-container'>
        <TitleTag title='React Universe' />
        <h1 className='heroSection2-title'>We build apps in the React Universe</h1>
        <p className='heroSection2-para'>
          Instead of splitting development across multiple languages, platforms, and teams, we combine front and back-end development with cross-platform capabilities using a single programming model.
        </p>
        <section className='heroSection2-content'>

          {
            HeroSection2Data.map((val, index) => (
              <ImageSection
                key={index}
                src={val}
              />
            ))
          }
        </section>
        <AnimatedButton
          title='See tech stack'
          path={icons.code.path}
          viewBox={icons.code.viexBox}
        />
      </div>
    </div>
  )
}

export default HeroSection2;