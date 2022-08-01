import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

import '../index.css';

const  HomeContainer =() => {

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
            <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
            <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery}  alt="HomeImage" className="w-full h-full object-contain" />
            </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in{" "}<span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your  City</span></p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <buttom type="buttom" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-center">Order Now</buttom>
      </div>

      <div className='py-2 flex-1 flex items-center relative margin-b390'>
        <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt='hero-bg' />
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap herobg'>

        {heroData && heroData.map(n=>(
                <div key={n.id} className='lg:w-190 p-3 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                <img src={n.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-10 lg:-mt-20'/>
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-sx text-red-600'>$</span>{n.price}</p>
            </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
