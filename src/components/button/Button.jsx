import React from "react";

const Button = ({ text }) => {
  return (
    <button 
      type="button"
      className="text-primary text-[12px] md:text-[18px] px-[16px] py-[10px] md:px-[40px] md:py-[18px] font-semibold h-full bg-orange rounded-xl hover:shadow-lg"
    >
      {text}
    </button>
  )
}

export default Button