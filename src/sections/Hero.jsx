import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Rectangle from '../assets/photo/rectangle.svg';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center px-[30px] md:px-[100px] pb-[100px] gap-[78px]'>
      <Navbar />
      <div className='w-full flex flex-col justify-center gap-[100px] md:gap-0 lg:flex-row'>
        <div className='flex flex-col w-full  lg:w-[650px]'>
          <div className='flex items-center mb-[35px]'>
            <p className='font-nunito font-[24px] text-tgreen text-[15px] bg-bggreen px-[35px] py-[5px] rounded-full md:text-[25px]'>No. 1 in Indonesia</p>
          </div>
          <div className='w-full mb-[15px]'>
            <p className='font-kufam text-[34px] md:text-[54px] font-black text-abu'>Make it easy for your Umrah worship with Al Nasr Travel</p>
          </div>
          <div className='mb-[32px]'>
            <p className='font-nunito text-[14px] md:text-[24px] text-abu'>Facilitate your Umrah pilgrimage with us, we already have hundreds of thousands of customers, you can go for Umrah to Mecca and Medina</p>
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
          <div className='w-full h-[200px] md:w-[650px] md:h-[300px] bg-tgreen rounded-xl'></div>
          <div className='absolute'>
            <img src={Rectangle} className='w-[250px] md:w-max'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero