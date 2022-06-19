import React, {useContext} from 'react'
import './Port.css'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context';
import { Swiper, SwiperSlide } from 'swiper/react'

const Port = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id='Portfolio'>
        {/* header */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* swiper */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="ecommerce" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="hoc" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="musicapp" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Port