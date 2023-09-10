import React from 'react'
import Logo from '../assets/logo/logo.svg'
import BgIconWhite from '../components/img/bgIconwhite'
import { RiInstagramFill, RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center font-nunito bg-tgreen text-white px-[30px] md:px-[100px] pt-[30px] md:pt-[60px] pb-[35px] md:pb-[30px] gap-[25px]'>
      <div className='w-full flex flex-col justify-center gap-8 md:flex-row md:justify-start lg:justify-center'>
        <div className='w-full md:w-[300px] flex flex-col gap-6'>
          <div className='w-full sm:w-[250px] flex items-center gap-[23px] bg-white bottom-0 py-[8px] px-[18px] md:py-[14px] mdpx-[28px] rounded-xl shadow-lg'>
            <img src={Logo} className='w-[150px] h-[50px]' />
            <p className='font-bold font-kufam text-[17px] w-[58px] h-[43px] text-start text-tgreen' >Al Hajj Umrah</p>
          </div>
          <div>
            <p>Comfortable and Quiet Worship, Our Service No. 1 in Indonesia</p>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 lg:[90px]'>
          <div className='w-[150px] flex flex-col gap-2'>
            <p className='font-semibold pb-2 md:pb-4 text-[15px] md:text-[20px]'>Quick Link</p>
            <a href='/About' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>About Us</a>
            <a href='/Flight' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Flight Accommodation </a>
            <a href='/Facilities' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Facilities</a>
            <a href='/Gallery' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Gallery</a>
          </div>
          <div className='w-[150px] flex flex-col gap-2'>
            <p className='font-semibold pb-2 md:pb-4 text-[15px] md:text-[20px]'>Package Umrah</p>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Umrah Bronze</a>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Umrah Silver</a>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Umrah Gold</a>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Umrah Priority</a>
          </div>
          <div className='w-[150px] flex flex-col gap-2'>
            <p className='font-semibold pb-2 md:pb-4 text-[15px] md:text-[20px]'>Package Hajj</p>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Hajj Diamond</a>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Hajj Platinum</a>
            <a href='/Package' className='font-medium text-[13px] md:text-[18px] hover:text-orange'>Al Nasr Hajj Priority</a>
          </div>
          <div className='w-[150px] flex flex-col gap-2'>
            <p className='font-semibold pb-2 md:pb-4 text-[15px] md:text-[20px]'>Office Place</p>
            <p className='font-medium text-[13px] md:text-[18px]'>Indonesia</p>
            <p className='font-medium text-[13px] md:text-[18px]'>Saudia Arabia</p>
            <p className='font-medium text-[13px] md:text-[18px]'>Uni Emirate Arab</p>
          </div>
        </div>
      </div>
      <div className='w-full border bg-white'></div>
      <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 md:flex-row md:justify-between'>
        <p className='font-nunito font-medium text-center text-[12px] md:text-[17px]'>Copyright © 2006 - 2023 Al Nasr Travel | All Reserverd</p>
        <div className='flex gap-2'>
          <BgIconWhite 
            icon={
              <RiInstagramFill className='w-full h-full' />
            }
          />
          <BgIconWhite 
            icon={
              <RiFacebookCircleFill className='w-full h-full' />
            }
          />
          <BgIconWhite 
            icon={
              <RiTwitterFill className='w-full h-full' />
            }
          />
          <BgIconWhite 
            icon={
              <RiYoutubeFill className='w-full h-full' />
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Footer