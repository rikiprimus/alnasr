import React, { useState} from 'react'
import { MdOutlineStar } from 'react-icons/md'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import Flyemirate from '../assets/logo/flyemirates.svg'
import Garuda from '../assets/logo/garuda.svg'
import Lionair from '../assets/logo/lionair.svg'
import Qatar from '../assets/logo/qatar.svg'
import Saudia from '../assets/logo/saudia.svg'

const Airplane = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-start items-center px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-4 md:gap-[70px]'>
      <div className='flex flex-col w-full md:w-[400px] gap-2'>
        <p className='font-kufam text-[34px] md:text-[30px] font-black text-abu'>Airways Accomadation</p>
        <p className='font-nunit font-semibold text-[20px] pb-4 md:text-[24px] text-abu'>We cooperate with several airlines for Umrah and Hajj </p>
        <div className='flex justify-center items-center text-yellow bg-bgicon px-[35px] py-[5px] rounded-full h-[50px] w-[200px]'>
          <MdOutlineStar className='h-full w-[30px] text-yellow-400'/>
          <p className='font-nunito font-medium text-tgreen text-[15px] md:text-[20px]'>5.0 Rating</p>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Flyemirate} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Garuda} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lionair} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Qatar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Saudia} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Airplane