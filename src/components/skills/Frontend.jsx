import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Language</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills_data">
                        <i className='bx bxl-html5 skills__data-icon'></i>
                        <div>
                            <h3 className="skills__name">HTML5</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-css3 skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">CSS3</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-javascript skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">
                    <div className="skills_data">
                        <i className='bx bxl-tailwind-css skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-github skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Github</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-react skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">ReactJs</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills_data">
                        <i className='bx bxl-nodejs skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">NodeJs</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bx-badge-check skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Frontend
