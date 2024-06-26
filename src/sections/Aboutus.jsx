import React from 'react';
//component
import Button from '../components/button/Button';
import Buttonborder from '../components/button/Buttonborder';
import BgIcon from '../components/img/bgIcon';
//image
import Businessman from '../assets/photo/arabia-businessman.svg';
import Logo from '../assets/logo/logo.svg';

import { MdFlightTakeoff, MdAirplaneTicket, MdOutlineLocalPlay, MdOutlineHomeWork } from 'react-icons/md'

const Aboutus = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-bgblue px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-[40px] lg:gap-[100px] md:flex-row'>
        
        <div className='relative flex flex-col items-center justify-center h-[370px] md:h-[580px] w-full lg:w-[650px]'>
          <div className='absolute top-0'>
            <img src={Businessman} className='w-[250px] md:w-max'/>
          </div>
          <div className='absolute w-[200px] md:w-[250px] flex items-center gap-[11px] md:gap-[23px] bg-white bottom-0 py-[8px] px-[18px] md:py-[14px] mdpx-[28px] rounded-xl shadow-lg'>
            <img src={Logo} className='w-[150px] h-[50px]' />
            <p className='font-bold font-kufam text-[17px] md:w-[58px] h-[43px] text-start text-tgreen' >Al Hajj Umrah</p>
          </div>
        </div>
        
        <div className='flex flex-col w-full gap-2 md:gap-4 lg:w-[650px]'>
          <div className='w-full'>
            <p className='font-kufam text-[30px] lg:text-[45px] font-black text-abu'>A Wonderful Agency To Fulfill your Dreams</p>
          </div>
          <div>
            <p className='font-nunito font-semibold text-[15px] lg:text-[20px] text-abu'>The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have been trusted since 2006 and have obtained a license from SAUDI ARABIA to become this travel agency.</p>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex items-center gap-2'>
              <BgIcon 
                icon={<MdFlightTakeoff className='w-full h-full' />}
              />
              <p className='font-nunito font-semibold text-[14px] lg:text-[24px] text-abu'>Flight Jakarta Saudi - Saudi Jakarta</p>
            </div>
            <div className='flex items-center gap-2'>
              <BgIcon 
                icon={<MdAirplaneTicket className='w-full h-full' />}
              />
              <p className='font-nunito font-semibold text-[14px] lg:text-[24px] text-abu'>Tickets are included in the cost</p>
            </div>
            <div className='flex items-center gap-2'>
              <BgIcon 
                icon={<MdOutlineHomeWork className='w-full h-full' />}
              />
              <p className='font-nunito font-semibold text-[14px] lg:text-[24px] text-abu'>Comfortable hotel with a rating of 4</p>
            </div>
            <div className='flex items-center gap-2'>
              <BgIcon 
                icon={<MdOutlineLocalPlay className='w-full h-full' />}
              />
              <p className='font-nunito font-semibold text-[14px] lg:text-[24px] text-abu'>We cover the Visa Fee and it's Included</p>
            </div>
          </div>
          
          <div className='flex justify-center md:justify-start gap-[50px]'>
            <Button
              text='Learn More'
            />
            <Buttonborder 
              text='Contact Us'
            />
          </div>
        </div>
      </div>
  )
}

export default Aboutus