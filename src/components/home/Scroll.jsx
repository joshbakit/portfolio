import React from 'react'
import './home.css'

const scroll = () => {
  return (
      <div className="home__scroll">
          <a href="" className="home__scroll-button button-flex">
              <i className="uil uil-mouse-alt"></i>
              <span className='home__scroll-name'>scroll down</span>
              <i className="uil uil-arrow-down home_scroll-arrow"></i>
          </a>
        </div>
  )
}

export default scroll
