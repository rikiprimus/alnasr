import React from 'react'
import BgIcon from '../components/img/bgIcon'
import { MdFlightTakeoff, MdAirplaneTicket, MdOutlineLocalPlay, MdOutlineHomeWork, MdOutlineFastfood } from 'react-icons/md'
import Arabia1 from '../assets/photo/arabia1.svg'
import Arabia2 from '../assets/photo/arabia2.svg'
import Arabia3 from '../assets/photo/arabia3.svg'
import Arabia4 from '../assets/photo/arabia4.svg'
import Arabia5 from '../assets/photo/arabia5.svg'
import ButtonCard from '../components/button/Buttoncard'
import CardPackage from '../components/card/cardPackage'
import bgIcon from '../components/img/bgIcon'

const Package = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-[30px] md:px-[100px] py-[100px] md:py-[150px] gap-[70px]'>
      <div className='flex flex-col gap-4 items-center'>
        <p className='font-kufam text-center text-[34px] md:text-[54px] font-black text-abu'>Al Nasr Special Umrah and Hajj Packages</p>
        <p className='font-nunit font-semibold text-center text-[14px] md:text-[24px] text-abu'>Choose your package according to your needs, guaranteed cheap and complete</p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-[70px]'>
        <CardPackage 
          image={Arabia1}
          rank="Bronze"
          title="Al Nasr Special Umrah 9 Days"
          sell="Best Seller"
          price="1,950"
          icon1={<BgIcon 
            icon={<MdFlightTakeoff className='w-full h-full'/>}
          />
          }
          icon2={<BgIcon 
            icon={<MdAirplaneTicket className='w-full h-full'/>}
          />
          }
          icon3={<BgIcon 
            icon={<MdOutlineHomeWork className='w-full h-full'/>}
          />
          }
          icon4={<BgIcon 
            icon={<MdOutlineLocalPlay className='w-full h-full'/>}
          />
          }
        />
        <CardPackage 
          image={Arabia2}
          rank="Silver"
          title="Al Nasr Special Umrah 17 Days"
          sell="Special Seller"
          price="2,750"
          icon1={<BgIcon 
            icon={<MdFlightTakeoff className='w-full h-full'/>}
          />
          }
          icon2={<BgIcon 
            icon={<MdAirplaneTicket className='w-full h-full'/>}
          />
          }
          icon3={<BgIcon 
            icon={<MdOutlineHomeWork className='w-full h-full'/>}
          />
          }
          icon4={<BgIcon 
            icon={<MdOutlineLocalPlay className='w-full h-full'/>}
          />
          }
        />
        <CardPackage 
          image={Arabia3}
          rank="Gold"
          title="Al Nasr Special Umrah 25 Days"
          sell="Long Trip"
          price="4,250"
          icon1={<BgIcon 
            icon={<MdFlightTakeoff className='w-full h-full'/>}
          />
          }
          icon2={<BgIcon 
            icon={<MdAirplaneTicket className='w-full h-full'/>}
          />
          }
          icon3={<BgIcon 
            icon={<MdOutlineHomeWork className='w-full h-full'/>}
          />
          }
          icon4={<BgIcon 
            icon={<MdOutlineLocalPlay className='w-full h-full'/>}
          />
          }
          icon5={<BgIcon 
            icon={<MdOutlineFastfood className='w-full h-full'/>}
          />
          }
        />
        <CardPackage 
          image={Arabia4}
          rank="Diamond"
          title="Al Nasr Special Umrah 30 Days"
          sell="Best Seller"
          price="20,000"
          icon1={<BgIcon 
            icon={<MdFlightTakeoff className='w-full h-full'/>}
          />
          }
          icon2={<BgIcon 
            icon={<MdAirplaneTicket className='w-full h-full'/>}
          />
          }
          icon3={<BgIcon 
            icon={<MdOutlineHomeWork className='w-full h-full'/>}
          />
          }
          icon4={<BgIcon 
            icon={<MdOutlineLocalPlay className='w-full h-full'/>}
          />
          }
          icon5={<BgIcon 
            icon={<MdOutlineFastfood className='w-full h-full'/>}
          />
          }
        />
        <CardPackage 
          image={Arabia5}
          rank="Platinum"
          title="Al Nasr Special Umrah 30 Days"
          sell="Special Offering"
          price="25,000"
          icon1={<BgIcon 
            icon={<MdFlightTakeoff className='w-full h-full'/>}
          />
          }
          icon2={<BgIcon 
            icon={<MdAirplaneTicket className='w-full h-full'/>}
          />
          }
          icon3={<BgIcon 
            icon={<MdOutlineHomeWork className='w-full h-full'/>}
          />
          }
          icon4={<BgIcon 
            icon={<MdOutlineLocalPlay className='w-full h-full'/>}
          />
          }
          icon5={<BgIcon 
            icon={<MdOutlineFastfood className='w-full h-full'/>}
          />
          }
        />
        <div className='flex flex-col justify-center items-center gap-[20px] border-[1px] rounded-xl shadow-lg pl-[26px] py-[28px] w-full md:w-[350px]'>
          <p className='font-nunito font-semibold text-tgreen text-[20px]'>Soon Program</p>
        </div>
      </div>
    </div>
  )
}

export default Package