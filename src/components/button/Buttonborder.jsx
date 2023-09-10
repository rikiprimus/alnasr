import React from "react";

const Button = ({ text }) => {
  return (
    <button 
      type="button" 
      className="text-orange text-[12px] md:text-[15px] font-semibold h-full bg-white rounded-xl border-2 border-orange hover:shadow-lg px-[16px] py-[10px] md:px-[25px] md:py-[14px]"
    >
      {text}
    </button>
  )
}

export default Button