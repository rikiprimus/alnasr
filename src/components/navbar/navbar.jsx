import { useState } from "react";
import Logo from "../../assets/logo/logo.svg"
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../button/button";

const navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div className='w-full flex justify-between items-center font-nunito'>
      <div>
        <a href="/home" >
          <img src={Logo} className="font-semibold h-[50px] sm:h-[65px]"/>
        </a>
      </div>
      <div className="hidden justify-start items-start gap-[22px] sm:gap-[44px] md:flex">
        <a href="/home" className="font-semibold text-primary text-[18px] hover:text-orange">Home</a>
        <a href="/aboutus" className="font-semibold text-primary text-[18px] hover:text-orange">About Us</a>
        <a href="/package" className="font-semibold text-primary text-[18px] hover:text-orange">Package</a>
        <a href="/facilities" className="font-semibold text-primary text-[18px] hover:text-orange">Facilities</a>
        <a href="/gallery" className="font-semibold text-primary text-[18px] hover:text-orange">Gallery Al Nasr</a>
      </div>
      <div className="hidden justify-center items-center md:flex">
        <Button 
          text='Contact Us'
          weight='semibold'
          bgColor='orange'
          color='primary'
          size='18px'
          border='none'
        />
      </div>
      <div className="flex cursor-pointer md:hidden" onClick={toggleMenu}>
          {!menuOpen ? <HiX size={50} /> : <HiMenu size={50} />}
      </div>
      <div className={!menuOpen ? 'fixed right-0 top-[152px] w-[60%] border-b-2 p-10 bg-orange h-full border ease-in-out duration-300 z-10 md:hidden': 'fixed right-[-100%]'}>
        <div className="flex flex-col justify-start items-start">
          <a href="/home" className="w-full p-4 font-semibold text-primary text-[18px] hover:text-orange">Home</a>
          <a href="/aboutus" className="w-full p-4 font-semibold text-primary text-[18px] hover:text-orange">About Us</a>
          <a href="/package" className="w-full p-4 font-semibold text-primary text-[18px] hover:text-orange">Package</a>
          <a href="/facilities" className="w-full p-4 font-semibold text-primary text-[18px] hover:text-orange">Facilities</a>
          <a href="/gallery" className="w-full p-4 font-semibold text-primary text-[18px] hover:text-orange">Gallery</a>
        </div>
      </div>
    </div>
  )
}

export default navbar