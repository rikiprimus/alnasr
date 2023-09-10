import React from 'react'
import ButtonCard from '../button/Buttoncard'

const cardPackage = ({ image, rank, sell, title, price, icon1, icon2, icon3,icon4, icon5 }) => {
  return (
    <div className='flex flex-col justify-start gap-[20px] border-[1px] rounded-xl shadow-lg pl-[26px] py-[28px] w-full md:w-[350px]'>
      <img src={image} className='w-[300px]'/>
      <div className='flex justify-between items-center'>
        <p className='font-nunito font-semibold text-orange'>{rank}</p>
        <div className='bg-bgtext px-[30px] py-[10px] rounded-l-full'>
          <p className='font-nunito font-semibold text-tgreen text-center'>{sell}</p>
        </div>
      </div>
      <p className='font-kufam font-semibold text-primary'>{title}</p>
      <p className='flex gap-2 font-nunito font-semibold text-primary text-[20px]'>$ {price} / <p className='text-tgreen font-bold'>person</p></p>
      <div className='flex gap-2'>
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