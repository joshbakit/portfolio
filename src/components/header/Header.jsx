import React, { useState } from 'react'
import './header.css'

const Header = () => {

    window.addEventListener(
        "scroll", function () {
            const header = document.querySelector(".header");
            if (this.scrollY >= 200) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        }
    )

    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (

        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">Joshbakit.dev</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#home')}>
                                <i className="uil uil-house-user  nav__icon" /> HOME
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#about')}>
                                <i className="uil uil-user-circle  nav__icon" /> ABOUT
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#skills')}>
                                <i className="uil uil-server  nav__icon" /> SKILLS
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#services')}>
                                <i className="uil uil-briefcase  nav__icon" /> PROJECTS
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#portfolio')}>
                                <i className="uil uil-files-landscapes-alt  nav__icon" /> PORTFOLIO
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav('#contact')}>
                                <i className="uil uil-message  nav__icon" /> CONTACT
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-bars"></i>
                </div>

            </nav>
        </header>

    )
}

export default Header
