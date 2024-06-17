import { useState } from "react";
//image
import Logo from "../../assets/logo/logo.svg";
//icon
import { HiMenu, HiX } from "react-icons/hi";
//component
import Button from "../button/Button";

const navbar = () => {
  //useState untuk open mobile navbar
  const [menuOpen, setMenuOpen] = useState(true); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div className='fixed z-20 top-0 left-0 bg-white w-full flex justify-between items-center font-nunito px-8 py-5 md:relative'>
      <div>
        <a href="/home" >
          <img src={Logo} className="font-semibold h-[45px] md:h-[55px]"/>
        </a>
      </div>
      <div className="hidden justify-start items-start gap-[22px] sm:gap-[44px] md:flex">
        <a href="/home" className="font-semibold text-primary text-[18px] md:text-[15px] hover:text-orange">Home</a>
        <a href="/aboutus" className="font-semibold text-primary text-[18px] md:text-[15px] hover:text-orange">About Us</a>
        <a href="/package" className="font-semibold text-primary text-[18px] md:text-[15px] hover:text-orange">Package</a>
        <a href="/facilities" className="font-semibold text-primary text-[18px] md:text-[15px] hover:text-orange">Facilities</a>
        <a href="/gallery" className="font-semibold text-primary text-[18px] md:text-[15px] hover:text-orange">Gallery Al Nasr</a>
      </div>
      <div className="hidden justify-center items-center md:flex">
        <Button 
          text='Contact Us'
        />
      </div>
      <div className="flex items-center justify-center h-[60px] w-[60px] cursor-pointer md:hidden" onClick={toggleMenu}>
          {!menuOpen ? <HiX size={35} /> : <HiMenu size={35} />}
      </div>
      <div className={!menuOpen ? 'fixed right-0 top-[102px] w-[60%] border-b-2 p-4 rounded-tl-xl bg-orange h-full border ease-in-out duration-300 z-10 md:hidden': 'hidden right-[-100]'}>
        <div className="flex flex-col justify-start items-start">
          <a href="/home" className="w-full p-4 font-semibold text-primary text-[18px]">Home</a>
          <a href="/aboutus" className="w-full p-4 font-semibold text-primary text-[18px]">About Us</a>
          <a href="/package" className="w-full p-4 font-semibold text-primary text-[18px]">Package</a>
          <a href="/facilities" className="w-full p-4 font-semibold text-primary text-[18px]">Facilities</a>
          <a href="/gallery" className="w-full p-4 font-semibold text-primary text-[18px]">Gallery</a>
        </div>
      </div>
    </div>
  )
}

export default navbar