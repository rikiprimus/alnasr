import React from "react";

const Button = ({ text, weight, bgColor, color, size }) => {
  return (
    <button 
      type="button" 
      className={`font-${weight} text-${color} text-${size} bg-white border-2 border-orange px-[40px] py-[18px] rounded-xl hover:shadow-lg`}
    >
      {text}
    </button>
  )
}

export default Button