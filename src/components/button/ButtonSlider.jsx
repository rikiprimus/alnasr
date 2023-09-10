import React from 'react'

const ButtonSlider = ({ object1, object2, onClick }) => {
  return (
    <button 
      type="button"
      className="flex justify-center items-center gap-2 text-primary text-[12px] md:text-[18px] px-[16px] py-[10px] md:px-[40px] md:py-[18px] font-semibold h-[60px] bg-orange rounded-xl hover:shadow-lg"
      onClick={onClick}
    >
      {object1}
      {object2}
    </button>
  )
}

export default ButtonSlider