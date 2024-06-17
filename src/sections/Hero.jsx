import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Rectangle from '../assets/photo/rectangle.svg';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center gap-[78px] px-[30px] md:px-[100px] pb-[100px] pt-28 md:pt-0'>
      <Navbar />
      <div className='w-full flex flex-col justify-center gap-[100px] md:gap-10 md:flex-row md:my-28'>
        <div className='flex flex-col w-full gap-2 l:gap-6 md:w-[650px]'>
          <div className='flex items-center'>
            <p className='font-nunito font-[24px] bg-bgicon text-tgreen text-[15px] rounded-full px-[25px] py-[5px] lg:px-[35px] lg:text-[20px]'>No. 1 in Indonesia</p>
          </div>
          <div className='w-full'>
            <p className='font-kufam text-[30px] lg:text-[44px] font-black text-abu'>Make it easy for your Umrah worship with Al Nasr Travel</p>
          </div>
          <div>
            <p className='font-nunito text-[14px] lg:text-[24px] text-abu'>Facilitate your Umrah pilgrimage with us, we already have hundreds of thousands of customers, you can go for Umrah to Mecca and Medina</p>
          </div>
          <div>
            <Button 
              text='Contact Us'
              weight='semibold'
              bgColor='orange'
              color='primary'
              size='18px'
              border='none'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full lg:w-[650px]'>
          <div className='w-full h-[200px] lg:w-[550px] lg:h-[280px] bg-tgreen rounded-xl'></div>
          <div className='absolute'>
            <img src={Rectangle} className='w-[240px] lg:w-[370px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero