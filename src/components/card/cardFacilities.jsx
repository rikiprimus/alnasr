import React from 'react'

const cardFacilities = ({ icon, title, subtitle }) => {
  return (
    <div className='flex gap-4 p-6 bg-white shadow-lg rounded-lg'>
      {icon}
      <div className='flex flex-col'>
        <p className='font-kufam font-bold text-primary text-[24px]'>{title}</p>
        <p className='font-nunito'>{subtitle}</p>
      </div>
    </div>
  )
}

export default cardFacilities