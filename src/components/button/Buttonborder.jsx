import React from "react";

const Button = ({ text }) => {
  return (
    <button 
      type="button" 
      className={`font-semibold text-orange text-[12px] md:text-[18px] px-[16px] py-[8px] md:px-[40px] md:py-[18px] bg-white border-2 border-orange rounded-xl hover:shadow-lg`}
    >
      {text}
    </button>
  )
}

export default Button