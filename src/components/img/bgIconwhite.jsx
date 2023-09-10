import React from 'react'

const bgIcon = ({ icon }) => {
  return (
    <div className='bg-white p-[3px] h-8 w-8 md:p-[5px] md:h-9 md:w-9 text-tgreen rounded-lg'>
      {icon}
    </div>
  )
}

export default bgIcon