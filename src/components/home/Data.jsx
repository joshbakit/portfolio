import React from 'react'
import CV from '../../assets/JoshuaBenasResume4-24-24.pdf'

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Joshua Benas</h1>
      <h3 className="home__subtitle">FrontEnd Developer</h3>
      <p className="home__description">Ready to make an impact in the programming world, showcases my passion, proficiency, and potential.</p>

      <a download="" href={CV} className="button button--flex">
        Download CV
        <i className="uil uil-import"></i>
      </a>
    </div>
  )
}

export default Data
