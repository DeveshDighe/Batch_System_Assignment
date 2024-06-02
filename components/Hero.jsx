import Image from 'next/image';
import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <main id='Home' className='flex flex-co lg:flex-row justify-between '>
      <div className='w-full  lg:w-1/2 flex flex-col p-4'>
        <div className='relative w-full mb-8 lg-[30%] lg:ml-[20%] md:ml-[5%]'>
          <figcaption className='absolute right-0 top-[-50px] -z-10 max-sm:hidden'>
            <Image width={470} height={470} src={'/images/red.png'} alt='Decorative Red Element' />
          </figcaption>
          <p className='text-4xl lg:text-6xl font-bold mt-10 leading-tight'>Make The Best Financial Decisions</p>
          <p className='text-lg opacity-70 my-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className='flex flex-col sm:flex-row items-center gap-4 cursor-pointer'>
            <div className='flex items-center h-12 bg-black text-white px-4 rounded-md'>
              <button className='mr-2 font-bold'>Get Started</button>
              <HiOutlineArrowNarrowRight size={24} />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <img src="/images/Watch.png" alt="Watch" className='w-8 h-8' />
              <p className='text-lg font-semibold'>Watch Video</p>
            </div>
          </div>
        </div>
        <div className='relative'>
          <figcaption className='flex justify-center'>
            <Image width={500} height={400} src={'/images/Group 35924.png'} alt='Strip Image' />
            <Image className='absolute top-8' width={45} height={45} src={'/images/Star 8.png'} alt='Star' />
          </figcaption>
        </div>
      </div>
      <div className='w-full lg:w-1/2 p-4 flex pl-[10%] flex-col h-[700px] max-md:h-[700px] max-sm:hidden'>
        <div className='relative h-full'>
          <figcaption className='absolute top-24 left-28'>
            <Image width={500} height={500} src={'/images/Ellipse 2157.png'} alt='Ellipse' />
          </figcaption>
          <figcaption className='absolute top-20 left-36'>
            <Image width={500} height={500} src={'/images/Ellipse 2157.png'} alt='Ellipse' />
          </figcaption>
          <figcaption className='absolute top-16 left-44'>
            <Image width={500} height={500} src={'/images/Ellipse 2157.png'} alt='Ellipse' />
          </figcaption>
          <figcaption className='absolute top-[-30px]'>
            <Image width={450} height={450} src={'/images/iPhone-13-Pro-Front (2).png'} alt='iPhone' />
          </figcaption>
          <figcaption className='absolute left-24 top-8'>
            <Image width={550} height={550} src={'/images/iPhone-13-Pro-Front (1).png'} alt='iPhone' />
          </figcaption>
          <figcaption className='absolute left-48 top-28'>
            <Image width={450} height={450} src={'/images/iPhone-13-Pro-Front (2).png'} alt='iPhone' />
          </figcaption>
          <figcaption className='absolute right-20 top-80 left-12 -z-10 max-md:top-44 '>
            <Image className='rotate-180' width={470} height={470} src={'/images/red.png'} alt='Decorative Red Element' />
          </figcaption>
        </div>
      </div>
    </main>
  );
}

export default Hero;
