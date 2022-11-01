import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Diego Molina",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi optio dolorem iure eaque sed deserunt neque voluptate temporibus. Vitae?'
  },
  {
    avatar: AVTR2,
    name: "Guillermo Romero",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi optio dolorem iure eaque sed deserunt neque voluptate temporibus. Vitae?'
  },
  {
    avatar: AVTR3,
    name: "Cristian Silva",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi optio dolorem iure eaque sed deserunt neque voluptate temporibus. Vitae?'
  },
]

const Testimonials = () => {

  return (
    <section id="testimonials">
      <h5> Experiencia con compañeros de trabajo</h5>
      <h2> Recomendaciones</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar 1" />
          </div>
          <h5 className='job__name'>{name}</h5>
          <small className='job__review'>
          {review}
          </small>
        </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
