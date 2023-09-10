import React, { useState } from 'react'
import Grid1 from '../assets/photo/grid1.jpg'
import Grid2 from '../assets/photo/grid2.jpg'
import Grid3 from '../assets/photo/grid3.jpg'
import Grid4 from '../assets/photo/grid4.jpg'
import Grid5 from '../assets/photo/grid5.jpg'
import Grid6 from '../assets/photo/grid6.jpg'
import Grid7 from '../assets/photo/grid7.jpg'
import Grid8 from '../assets/photo/grid8.jpg'
import Grid9 from '../assets/photo/grid9.jpg'
import Grid10 from '../assets/photo/grid10.jpg'
import Grid11 from '../assets/photo/grid11.jpg'
import Grid12 from '../assets/photo/grid12.jpg'

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    Grid1,
    Grid2,
    Grid3,
    Grid4,
    Grid5,
    Grid6,
    Grid7,
    Grid8
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center bg-bgblue px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-[30px] md:gap-[70px]'>
      <div className='flex flex-col gap-2 md:gap-4 items-center'>
        <p className='font-kufam text-center text-[30px] md:text-[44px] font-black text-abu'>Facilities We Provide For You</p>
        <p className='font-nunit font-semibold text-center text-[14px] md:text-[20px] text-abu'>We provide comfort for our customers, with the various facilities we provide that we provide</p>
      </div>
      <div className='w-full grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-[80px]'>
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => handlePhotoClick(photo)}
            className="relative"
          >
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              className={`w-full h-full rounded-xl transition-transform duration-300 transform-gpu hover:scale-105 ${selectedPhoto === photo ? 'lg:float-left' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery