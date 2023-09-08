import Button from '../components/button/button';
import Buttonborder from '../components/button/Buttonborder';
import Businessman from '../assets/photo/arabia-businessman.svg';
import Background from '../assets/photo/backgroundarabia.svg';

const Aboutus = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-bgblue px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-[100px] md:gap-0 lg:flex-row'>
        <div className='flex flex-col items-center justify-center w-full lg:w-[650px]'>
          <img src={Background} className='w-[250px] md:w-max'/>
          <div className='absolute'>
            <img src={Businessman} className='w-[250px] md:w-max'/>
          </div>
        </div>
        <div className='flex flex-col w-full lg:w-[650px]'>
          <div className='w-full mb-[15px]'>
            <p className='font-kufam text-[34px] md:text-[54px] font-black text-abu'>A Wonderful Agency To Fulfill your Dreams</p>
          </div>
          <div className='mb-[15px]'>
            <p className='font-nunito text-[14px] md:text-[24px] text-abu'>The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have been trusted since 2006 and have obtained a license from SAUDI ARABIA to become this travel agency.</p>
          </div>
          <div className='flex flex-col gap-4 mb-[15px]'>
            <div className='font-nunito text-[14px] md:text-[24px] text-abu'>
              Flight Jakarta Saudi - Saudi Jakarta
            </div>
            <div className='font-nunito text-[14px] md:text-[24px] text-abu'>
              Tickets are included in the cost
            </div>
            <div className='font-nunito text-[14px] md:text-[24px] text-abu'>
              Comfortable hotel with a rating of 4
            </div>
            <div className='font-nunito text-[14px] md:text-[24px] text-abu'>
              We cover the Visa Fee and it's Included
            </div>
          </div>
          <div className='flex justify-center md:justify-start gap-[50px]'>
            <Button
              text='Learn More'
              href='/learnmore'
              weight='semibold'
              bgColor='orange'
              color='primary'
              size='18px'
            />
            <Buttonborder 
              text='Contact Us'
              href='/learnmore'
              weight='semibold'
              bgColor='white'
              color='orange'
              size='18px'
            />
          </div>
        </div>
      </div>
  )
}

export default Aboutus