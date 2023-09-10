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
        <p className='font-kufam text-[30px] lg:text-[45px] font-black text-abu'>Airways Accomadation</p>
        <p className='font-nunit font-semibold text-[15px] md:text-[20px] text-abu md:pb-4'>We cooperate with several airlines for Umrah and Hajj </p>
        <div className='flex justify-center items-center text-yellow bg-bgicon px-[20px] py-[7px] md:px-[35px] md:py-[5px] rounded-full w-[120px] md:w-[200px]'>
          <MdOutlineStar className='h-full w-[20px] md:w-[30px] text-yellow-400'/>
          <p className='font-nunito font-medium text-tgreen text-[12px] md:text-[20px]'>5.0 Rating</p>
        </div>
      </div>
      <div className='flex gap-6 md:gap-[52px] w-full overflow-x-auto'>
        <div className='flex gap-[50px] min-w-[1515px] md:gap-[100px] md:min-w-[1750px]'>
          <div className='flex ml-[35px] items-center min-w-[250px]'>
            <img src={Flyemirate} className='w-full'/>
          </div>
          <div className='flex items-center w-[250px]'>
            <img src={Garuda} className='w-full'/>
          </div>
          <div className='flex items-center w-[250px]'>
            <img src={Lionair} className='w-full'/>
          </div>
          <div className='flex items-center w-[250px]'>
            <img src={Qatar} className='w-full'/>
          </div>
          <div className='flex items-center w-[250px]'>
            <img src={Saudia} className='w-full'/>
          </div>
        </div>
      </div>
      {/*<Swiper
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
      </Swiper>*/}
    </div>
  )
}

export default Airplane