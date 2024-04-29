import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => { setToggleState(index); }




    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Education and Experience</h2>
            <span className="section__subtitle">Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className='bx bx-medal qualification__icon'></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className='bx bx-crown qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Access Computer College</h3>
                                <span className="qualification__subtitle">B.S. Information Technology</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2013-2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Claret Tech Vocational</h3>
                                <span className="qualification__subtitle">Computer Programming - V.B. 6</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2012-2013
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Claret Tech Vocationnal</h3>
                                <span className="qualification__subtitle">Computer Hardware Servicing NCII</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">St. Vincent Rolling Hills School</h3>
                                <span className="qualification__subtitle">Tertiary High School</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2008 - 2012
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Lupang Pangako Elementary School</h3>
                                <span className="qualification__subtitle">Secondary Grade School</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2002 - 2008
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Network Engineer</h3>
                                <span className="qualification__subtitle">GampePlan Marketing Solution Inc. </span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2018 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Freelance</h3>
                                <span className="qualification__subtitle">FrontEnd</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Video Editor</h3>
                                <span className="qualification__subtitle">Princess ACM Youtube Vlog</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2021 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Video Grapher</h3>
                                <span className="qualification__subtitle">Princess ACM Youtube Vlog</span>
                                <div className="qualification__calendar">
                                    <i className='bx bx-calendar'></i>
                                    2021 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
