import React from 'react'
import BgIcon from '../components/img/bgIcon'
import CardFacilities from '../components/card/cardFacilities'

import { AiFillDatabase, AiFillHeart } from 'react-icons/ai'
import { MdHealthAndSafety, MdDirectionsBus, MdOutlineFastfood, MdOutlineHotel, MdOutlineCardMembership, MdLocalHospital } from 'react-icons/md'

const Facilities = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-bgblue px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-[70px]'>
      <div className='flex flex-col gap-4 items-center'>
        <p className='font-kufam text-center text-[34px] md:text-[54px] font-black text-abu'>Facilities We Provide For You</p>
        <p className='font-nunit font-semibold text-center text-[14px] md:text-[24px] text-abu'>We provide comfort for our customers, with the various facilities we provide that we provide</p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-[50px]'>
      <CardFacilities 
          icon={
            <BgIcon 
              icon={<MdHealthAndSafety className='w-full h-full'/>}
            />}
          title="Safety & Security"
          subtitle="We take care of your security in 24 hours"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<AiFillDatabase className='w-full h-full'/>}
            />}
          title="Conseling"
          subtitle="Provide counseling to stay fit spiritually and religius"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<MdDirectionsBus className='w-full h-full'/>}
            />}
          title="Vehicle In Saudi"
          subtitle="Bus and Car Vehicles While in Saudi"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<AiFillHeart className='w-full h-full'/>}
            />}
          title="Health In Saudi"
          subtitle="Free Health Facilities for every customer"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<MdLocalHospital className='w-full h-full'/>}
            />}
          title="Hostel Rate 5"
          subtitle="5 star hotel accommodation every customer"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<MdOutlineFastfood className='w-full h-full'/>}
            />}
          title="Food & Drink"
          subtitle="Provide food and drinks while in Saudi"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<MdOutlineCardMembership className='w-full h-full'/>}
            />}
          title="Membership"
          subtitle="Obtain a membership card for each customer"
        />
        <CardFacilities 
          icon={
            <BgIcon 
              icon={<MdOutlineHotel className='w-full h-full'/>}
            />}
          title="Vaccine"
          subtitle="Free meningitis vaccine for all customers"
        />
      </div>
    </div>
  )
}

export default Facilities