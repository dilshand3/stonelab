import React, { FC } from 'react';
import './Footer.css';
import Link from 'next/link';
import FooterList from '@/components/FooterList/FooterList';
import { footerlistData1,footerlistData2, footerlistData3 } from '@/utils/data'

const EmailSvg: FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 2.66699H2.66668H1.33334V4.00033V12.0003V13.3337H2.66668H8.00001V12.0003H2.66668V4.00033H13.3333V8.00033H14.6667V4.00033V2.66699H13.3333ZM4.00001 5.33366H5.33334V6.66699H4.00001V5.33366ZM6.66668 8.00033H5.33334V6.66699H6.66668V8.00033ZM9.33334 8.00033V9.33366H6.66668V8.00033H9.33334ZM10.6667 6.66699V8.00033H9.33334V6.66699H10.6667ZM10.6667 6.66699V5.33366H12V6.66699H10.6667ZM16 12.0003H14.6667V10.667H13.3333V9.33366H12V10.667H13.3333V12.0003H9.33334V13.3337H13.3333V14.667H12V16.0003H13.3333V14.667H14.6667V13.3337H16V12.0003Z" fill="#201F24" />
        </svg>
    )
}

const Footer: FC = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-cellOne'>
                <span>Never miss what&#39;s next</span>
                <div className='footer-inputcontianer'>
                    <input type="email" placeholder='Your email' />
                    <div>
                        <span>Sign up</span>
                        <EmailSvg />
                    </div>
                </div>
            </div>
            <div className='footer-cellTwo'>
                <FooterList {...footerlistData2} />
            </div>
            <div className='footer-cellThree'>
                <FooterList {...footerlistData1} />
            </div>
            <div className='footer-cellFour'>
            <FooterList {...footerlistData3}/>
            </div>
        </footer>
    )
}

export default Footer;