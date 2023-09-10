import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const cardTestimonial = ({ image,rating, nama, text }) => {
  return (
    <div className='flex w-[300px] h-[180px] md:w-[500px] md:h-[220px] p-6 gap-4 rounded-lg border shadow-lg'>
      <div className='flex flex-col items-center gap-8'>
        <img src={image} className='w-[250px]'/>
        <div className='flex justify-center items-center gap-[2px] text-yellow bg-bgtext px-[10px] rounded-full h-[30px] w-[70px]'>
          <MdOutlineStar className='h-full w-[20px] text-yellow-400'/>
          <p className='font-nunito font-medium text-tgreen text-[15px] md:text-[12px]'>{rating}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex justify-center items-center gap-[2px] text-yellow bg-bgtext px-[10px] rounded-full h-[30px] w-[90px] md:w-[150px]'>
          <p className='font-nunito font-medium text-tgreen text-[10px] md:text-[12px]'>Al Nasr Umrah</p>
        </div>
        <p className='font-kufam text-[15px] md:text-[30px] font-black text-abu'>{nama}</p>
        <p className='font-nunito font-medium text-[9px] md:text-[14px] text-abu'>{text}</p>
      </div>
    </div>
  )
}

export default cardTestimonial