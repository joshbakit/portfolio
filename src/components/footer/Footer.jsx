import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Joshbakit.dev</h2>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">My Education</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-facebook-messenger"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-benas-7a68b8207/" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/joshbakit" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://www.instagram.com/joshbakit" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCniB-dWjDKn71yG1muMuBbQ" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-youtube"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Joshbakit.dev All Rights Reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
