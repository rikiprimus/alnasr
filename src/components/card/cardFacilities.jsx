import React from 'react'

const cardFacilities = ({ icon, title, subtitle }) => {
  return (
    <div className='flex h-[50px] md:h-[120px] p-2 gap-2 lg:p-6 lg:gap-4 bg-white shadow-lg rounded-lg'>
      {icon}
      <div className='flex flex-col w-[100px] md:w-full'>
        <p className='font-kufam font-bold text-primary text-[10px] md:text-[20px] '>{title}</p>
        <p className='font-nunito text-primary text-[8px] md:text-[15px]'>{subtitle}</p>
      </div>
    </div>
  )
}

export default cardFacilities