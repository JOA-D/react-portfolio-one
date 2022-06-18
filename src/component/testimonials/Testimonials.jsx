import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eaque tenetur autem excepturi omnis esse voluptates sed, iusto minus ipsa, delectus recusandae doloremque, quibusdam facilis accusamus dicta vero voluptatem sint.'
  },
  {
    avatar: AVATAR2,
    name: 'Tina Show',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eaque tenetur autem excepturi omnis esse voluptates sed, iusto minus ipsa, delectus recusandae doloremque, quibusdam facilis accusamus dicta vero voluptatem sint.'
  },
  {
    avatar: AVATAR3,
    name: 'Tina Show',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eaque tenetur autem excepturi omnis esse voluptates sed, iusto minus ipsa, delectus recusandae doloremque, quibusdam facilis accusamus dicta vero voluptatem sint.'
  },
  {
    avatar: AVATAR4,
    name: 'Tina Show',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eaque tenetur autem excepturi omnis esse voluptates sed, iusto minus ipsa, delectus recusandae doloremque, quibusdam facilis accusamus dicta vero voluptatem sint.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
            // install Swiper modules
            modules={[ Pagination , Navigation ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      
      >

        {
          data.map( ({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials