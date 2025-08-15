import React, { FC, FormEvent, useState } from 'react';
import './HireusSection.css';
import TitleTag from '@/components/TitleTag/TitleTag';
import PersonBlogs from '@/components/PersonBlogs/PersonBlogs';
import { PersonBlogsData1 } from '@/utils/data';
import { icons } from '@/components/SVGIcon/svg';
import SVGIcon from '@/components/SVGIcon/SVGIcon';
import BigTech2 from '@/components/BigTech2/BigTech2';

const HireusSection: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        enquiry: '',
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        console.log('Form Submitted', {
            Name: formData.name,
            Number: formData.number,
            Enquiry: formData.enquiry,
        });

        setFormData({
            name: '',
            number: '',
            enquiry: '',
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="hireusSection-container desktop-width">
            <section className='hireusSection-one'>
                <TitleTag title="hire us" />
                <h1>Your challenge is next!</h1>
                <p>
                    Let us know what you're building, we are always happy to help!
                </p>
                <BigTech2 />
                {/* <PersonBlogs {...PersonBlogsData1} /> */}
            </section>
            <section className="hireus-form">
                <form onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <label htmlFor="name">Name (required)</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=""
                            required
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="number">Number (required)</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder=""
                            required
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="enquiry">How can we help? (optional)</label>
                        <textarea
                            id="enquiry"
                            name="enquiry"
                            value={formData.enquiry}
                            onChange={handleChange}
                        />
                    </div>
                    <small>
                        By submitting, you agree to be contacted about your request.
                        Learn more in our Privacy Policy.
                    </small>
                    <div>
                        <button className='form-btn'>
                            <span>Hire us</span>
                            <SVGIcon
                                path={icons.turnArrow.path}
                                viewBox={icons.turnArrow.viewBox}
                                height='22'
                                width='22'
                            />
                        </button>
                        <small>
                            Fill the form we will contact u in 24hours
                        </small>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default HireusSection;