import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills_data">
                        <i className='bx bx-badge-check skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Adobe PS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bx-badge-check skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Adobe Premier</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-figma skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills_data">
                        <i className='bx bxl-wordpress skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">WordPress</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bx-badge-check skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bx-badge-check skills__data-icon' ></i>
                        <div>
                            <h3 className="skills__name">Capcut</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend
