import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilepic1 from '../../img/profile6.jpg'
import profilepic2 from '../../img/profile2.jpg'
import profilepic3 from '../../img/profile3.jpg'
import profilepic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clients= [
        {
            img: profilepic1,
            review: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit,Voluptate commodi quibusdam facere nulla, expedita maxime? Reiciendis quo debitis doloremque expedita earum ducimus quam! Atque porro distinctio itaque architecto natus ad",
        },{
            img: profilepic2,
            review: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit,Voluptate commodi quibusdam facere nulla, expedita maxime? Reiciendis quo debitis doloremque expedita earum ducimus quam! Atque porro distinctio itaque architecto natus ad",
        },
        {
            img: profilepic3,
            review: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit,Voluptate commodi quibusdam facere nulla, expedita maxime? Reiciendis quo debitis doloremque expedita earum ducimus quam! Atque porro distinctio itaque architecto natus ad",
        },
        {
            img: profilepic4,
            review: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit,Voluptate commodi quibusdam facere nulla, expedita maxime? Reiciendis quo debitis doloremque expedita earum ducimus quam! Atque porro distinctio itaque architecto natus ad",
        },
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span> Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={{Pagination}}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="client" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
                
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial