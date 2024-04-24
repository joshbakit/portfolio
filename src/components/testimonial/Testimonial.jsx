import React from 'react'
import { Data } from './Data'
import './testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"


import { Pagination } from "swiper/modules"

const Testimonial = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My client say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container mySwiper"
                loop={true}
                grabCursor={true}
                spaceBetween={18}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,

                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                    },
                }}
                modules={[Pagination]}

            >

                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card mySwiper" key={id}>
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonial
