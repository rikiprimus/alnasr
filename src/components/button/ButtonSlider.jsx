import React from 'react'

const ButtonSlider = ({ object1, object2, onClick }) => {
  return (
    <button 
      type="button"
      className="flex justify-center items-center  text-primary text-[12px] md:text-[15px] font-semibold h-full bg-orange rounded-xl hover:shadow-lg px-[16px] py-[10px] md:px-[25px] md:py-[14px]"
      onClick={onClick}
    >
      {object1}
      {object2}
    </button>
  )
}

export default ButtonSlider