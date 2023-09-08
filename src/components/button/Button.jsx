import React from "react";

const Button = ({ text, weight, color, size }) => {
  return (
    <button 
      type="button"
      
      className={`font-${weight} text-${color} text-${size} bg-orange px-[40px] py-[18px] rounded-xl hover:shadow-lg`}
    >
      {text}
    </button>
  )
}

export default Button