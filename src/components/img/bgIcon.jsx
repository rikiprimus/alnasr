import React from 'react'

const bgIcon = ({ icon }) => {
  return (
    <div className='bg-bgicon text-tgreen rounded-lg p-[3px] h-6 w-6 md:p-[5px] md:h-9 md:w-9'>
      {icon}
    </div>
  )
}

export default bgIcon