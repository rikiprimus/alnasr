import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[78px]'>
      <Navbar />
      <div className='flex w-full'>
        <div className='flex flex-col w-[650px]'>
          <div className='flex items-center mb-[35px]'>
            <p className='font-nunito font-[24px] text-tgreen text-[25px] bg-bggreen px-[35px] py-[5px] rounded-full'>No. 1 in Indonesia</p>
          </div>
          <div className='w-full mb-[15px]'>
            <p className='font-kufam text-[54px] font-black text-abu'>Make it easy for your Umrah worship with Al Nasr Travel</p>
          </div>
          <div className='mb-[32px]'>
            <p className='font-nunito text-[24px] text-abu'>Facilitate your Umrah pilgrimage with us, we already have hundreds of thousands of customers, you can go for Umrah to Mecca and Medina</p>
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
        <div>
          //gambar
        </div>
      </div>
    </div>
  )
}

export default Hero