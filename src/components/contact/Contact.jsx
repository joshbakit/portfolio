import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_i4kahtk',
                'template_45b96tc',
                form.current,

                {
                    publicKey: 'vpZLjJWa1BtcHfARm',
                })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact me</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className='bx bxl-gmail contact__card-icon' ></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">benasjoshuac</span>

                            <a href="mailto:benasjoshuac@gmail.com" target="_blank" className="contact__card-data contact__button">
                                Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon' ></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className='bx bxs-contact contact__card-icon'></i>

                            <h3 className="contact__card-title">Text me</h3>
                            <span className="contact__card-data">+63966-947-0915</span>

                            {/* <a href="whatsapp.com" target="_blank" className="contact__card-data contact__button">
                                Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon' ></i>
                            </a> */}
                        </div>
                        <div className="contact__card">
                            <i className='bx bxl-messenger contact__card-icon' ></i>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fbmenow</span>

                            <a href="https://www.facebook.com/" target="_blank" className="contact__card-data contact__button">
                                Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon' ></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me you project</h3>

                    <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name='name'
                                className="contact__form-input"
                                placeholder='Insert your name'
                                required />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="contact__form-input"
                                placeholder='Insert your email'
                                required />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                id="" cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="write your project here"
                                required></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message
                            <i className="uil uil-telegram-alt"></i>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact
