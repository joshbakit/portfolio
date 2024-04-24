import React from 'react';
// import emailjs from 'emailjs-com';

function Social() {



  return (
    <div className='home__social'>
      <a href="mailto:benasjoshuac@gmail.com" className="home__social-icon" target='_blank'>
        <i className='bx bxl-gmail' ></i>
      </a>
      <a href="https://www.linkedin.com/in/joshua-benas-7a68b8207/" className="home__social-icon" target='_blank'>
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/joshbakit" className="home__social-icon" target='_blank'>
        <i className="uil uil-github"></i>
      </a>
      <a href="https://www.instagram.com/joshbakit/?next=%2F" className="home__social-icon" target='_blank'>
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCniB-dWjDKn71yG1muMuBbQ" className="home__social-icon" target='_blank'>
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  )
}

export default Social
