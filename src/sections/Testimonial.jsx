import React, { useRef } from 'react'
import ButtonSlider from '../components/button/ButtonSlider'
import CardTestimonial from '../components/card/cardTestimonial'

import { MdArrowBack, MdArrowForward, MdOutlineStar } from 'react-icons/md'
import Testimonial1 from '../assets/photo/testimonial1.svg'

const Testimonial = () => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'next' ? 300 : -300; // Sesuaikan jumlah geseran sesuai kebutuhan
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', // Agar geseran terasa halus
      });
    }
  };
  
  return (
    <div className='flex flex-col px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-[60px]'>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-4'>
        <div className='relative'>
          <div className='md:absolute bottom-0'>
            <ButtonSlider 
              object1={<MdArrowBack />}
              object2="Previous"
              onClick={() => handleScroll('previous')}
            />
          </div>
        </div>
        <div className='flex flex-col w-full text-end md:w-[700px] gap-2'>
          <p className='font-kufam text-[30px] md:text-[60px] font-black text-abu'>Testimonials from our customers</p>
          <p className='font-nunit font-semibold text-[15px] pb-4 md:text-[24px] text-abu'>We have 100.000+ customers, here are our customer testimonials</p>
        </div>
      </div>
      <div className='flex flex-col gap-6 md:gap-[52px] min-w-[900px] overflow-x-auto' ref={containerRef}>
        <div className='flex gap-[50px] min-w-[3000px] h-[220px]'>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
        </div>
        <div className='flex gap-[50px] min-w-[3000px] h-[220px]'>
          <div className='min-w-[220px]'></div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
          <div className='min-w-[300px]'>
            <CardTestimonial 
              image={Testimonial1}
              rating="5.0"
              nama="Humaira Khaira"
              text="I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service."
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <ButtonSlider 
          object1="Next"
          object2={<MdArrowForward />}
          onClick={() => handleScroll('next')}
        />
      </div>
    </div>
  )
}

export default Testimonial