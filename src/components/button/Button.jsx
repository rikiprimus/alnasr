import React from "react";

const Button = ({ text, weight, bgColor, color, size, border  }) => {
  return (
    <button 
      type="button" 
      className={`font-${weight} bg-${bgColor} text-${color} text-${size} border-${border} border-2 px-[30px] py-[18px] rounded-xl hover:shadow-lg`}
    >
      {text}
    </button>
  )
}

export default Button