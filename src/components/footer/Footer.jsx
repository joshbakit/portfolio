import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Joshbakit.dev</h2>

                <ul className="footer__list">
                    <li>
                        <a href="#About" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#Projects" className="footer__link">Porjects</a>
                    </li>
                    <li>
                        <a href="#Testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="www.instagram.com" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-facebook-messenger"></i>
                    </a>
                    <a href="www.messenger.com" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="www.github.com" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="www.instagram.com" className="home__social-icon footer__social-link" target='_blank'>
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="www.youtube.com" className="home__social-icon footer__social-link" target='_blank'>
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
