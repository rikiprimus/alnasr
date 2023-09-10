import React from 'react'
import ButtonCard from '../button/Buttoncard'

const cardPackage = ({ image, rank, sell, title, price, icon1, icon2, icon3,icon4, icon5 }) => {
  return (
    <div className='flex flex-col justify-start gap-[5px] md:gap-[20px] border-[1px] rounded-xl shadow-lg pl-[10px] py-[10px] md:pl-[23px] md:py-[28px] w-full md:w-[350px]'>
      <img src={image} className='w-[144px] md:w-[300px]'/>
      <div className='flex justify-between items-center'>
        <p className='font-nunito font-semibold text-orange text-[10px] md:text-[20px]'>{rank}</p>
        <div className='bg-bgtext px-[12px] py-[7px] md:px-[30px] md:py-[10px] rounded-l-full'>
          <p className='font-nunito font-semibold text-tgreen text-center text-[8px] md:text-[20px]'>{sell}</p>
        </div>
      </div>
      <p className='font-kufam font-semibold text-primary text-[10px] md:text-[20px]'>{title}</p>
      <p className='flex gap-[1px] font-nunito font-semibold text-primary text-[10px] md:text-[20px]'>$ {price} /<p className='text-tgreen font-bold'>person</p></p>
      <div className='flex gap-[4px] md:gap-2'>
        {icon1}
        {icon2}
        {icon3}
        {icon4}
        {icon5}
      </div>
      <div className=''>
        <ButtonCard
          text='View Detail'
        />
      </div>
    </div>
  )
}

export default cardPackage