import React from 'react'
import './about.css';
import CV from '../../assets/joshuaBenas-ResumePDF.pdf'
import profile from '../../assets/home_profile_avatar.png'
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={profile} alt="" className='about__img' />
        <div className="about__data">
          <Info />
          <p className="about__description">IT, Videographer / Video Editor and shifting to programming.</p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <i className="uil uil-import"></i>
            </a>
        </div>
      </div>
    </section>
  )
}

export default About
 