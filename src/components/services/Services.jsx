import React, { useState } from 'react'
import './services.css'
import TaskListProject from './TaskListProject';
import figmaMovieTicket from '../../assets/figma-movieTicketReservation.png'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => { setToggleState(index) }



  return (

    <section className="services section" id="services">
      <h2 className="section__title">PROJECTS</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className='bx bx-book-content services__icon'></i>
            <h3 className="services__title">
              Task List Grocery Buddy
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title taskList__title ">Grocery Buddy</h3>
              <p className="services__modal-description taskList__description">
                Designed and developed a dynamic task list application using React.js, demonstrating proficiency in modern frontend development.
              </p>

              <TaskListProject />

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className='bx bx-book-content services__icon'></i>
            <h3 className="services__title">
              Movie Trailer Pop-up
            </h3>
          </div>

          <a className="services__button" href='https://joshbakit.github.io/videoTrailerPopUp/' target='_blank'>
            View more
            <i className="uil uil-arrow-right"></i>
          </a>
        </div>

        <div className="services__content">
          <div>
            <i className='bx bx-book-content services__icon'></i>
            <h3 className="services__title">
              Character Counter
            </h3>
          </div>

          <a className="services__button" href='https://joshbakit.github.io/realTimeCharacterCounter/' target='_blank'>
            View more
            <i className="uil uil-arrow-right"></i>
          </a>
        </div>

        <div className="services__content">
          <div>
            <i className='bx bx-book-content services__icon'></i>
            <h3 className="services__title">
              Responsive Soccer Website
            </h3>
          </div>

          <a className="services__button" href='https://joshua-benas-football-soccer.netlify.app/#' target='_blank'>
            View more
            <i className="uil uil-arrow-right"></i>
          </a>
        </div>

        <div className="services__content">
          <div>
            <i className='bx bx-book-content services__icon'></i>
            <h3 className="services__title">
              UI Figma - Movie Ticket Reservation App
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title taskList__title ">Ticket Reservation Prototype</h3>
              <p className="services__modal-description taskList__description">
                Designed and developed Figma movie ticket reservation design.
              </p>

              <img src={figmaMovieTicket} className='figmaMovieTicket' alt="figmaMovieTicket" />

              <a href="https://www.figma.com/design/QP8ICAytaUyiw7wYdBAx2M/interstellar-movieTicketBooking?node-id=0%3A1&t=tJ92oHIQi0Kr2Sbs-1">
                <p>
                  https://tinyurl.com/3aefnvtw
                </p>
              </a>

            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className='bx bx-code services__icon' ></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">UI/UX Design</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className='bx bx-badge-check' ></i>
                  <p className="services__modal-info">
                    I build web applications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check' ></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check' ></i>
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check' ></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check' ></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className='bx bx-edit services__icon'></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClickCapture={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Visual Design</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className='bx bx-badge-check services__modal-icon' ></i>
                  <p className="services__modal-info">
                    I build web applications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check services__modal-icon' ></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check services__modal-icon' ></i>
                  <p className="services__modal-info">
                    I create UX element interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check services__modal-icon' ></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className='bx bx-badge-check services__modal-icon' ></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>


    </section>

  )
}

export default Services
