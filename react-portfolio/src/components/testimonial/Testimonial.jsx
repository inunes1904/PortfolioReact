import React from 'react'
import './testimonial.css'
import AV1 from '../../assets/avatar1.jpeg'
import AV2 from '../../assets/avatar2.jpeg'
import AV3 from '../../assets/avatar3.jpeg'

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from</h5>
        <h5>Co-workers & Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      //swiper modules
      modules = {[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img className='pic' src={AV1} alt="Salome" />
          </div>
          <h5 className='client__name'>Salomé Afonso</h5>
            <small className='client__review'>
             After working directly with Ivo nothing else to say, he exceeded all
             the expectations created not only in the part of developing automatisms, 
             brand efficiency, team management and a know how like never seen before.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img className='pic' src={AV2} alt="Salome" />
          </div>
          <h5 className='client__name'>Tiago Dias</h5>
            <small className='client__review'>
            Besides his vast technical skills that include 
            Information Systems, Design and business management, Ivo also has the entrepreneurial 
            spirit and together with me launched several projects, from the management and 
            coordination of events to brand management and associated logistics. I see Ivo as one 
            of the next leaders of the new generation of top managers in Portugal.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img className='pic' src={AV3} alt="Salome" />
          </div>
          <h5 className='client__name'>Hugo Campino</h5>
            <small className='client__review'>
            Highly qualified professional, transparent in communication, qualitative in delivery, 
            punctual with his commitments, high technical capacity and objective. Ivo is always 
            determined and secure, he dedicates himself with great enthusiasm to new developments, 
            he also has a great capacity for delivery and dedication. Best wishes for good projects
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial