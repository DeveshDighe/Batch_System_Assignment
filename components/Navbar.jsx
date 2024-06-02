"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const navigate = useRouter()
  
  const handleScrollToFooter = (id) => {
    if (id === "Home") {
      return navigate.push('/')
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className=' flex justify-between max-sm:mx-0  mt-6 max-md:mx-2 h-[40px] max-sm:gap-x-1 '>
        <div className=' w-[10%] max-lg:w-[6%] max-md:hidden'>
          
        </div>
        <figure className='  max-md:w-[15%] flex items-center justify-center'>
          <img src={'/images/icon.png'} alt="" />
        </figure>
        <div className=' flex gap-x-6  w-[60%] max-sm:gap-x-4 max-lg:w-[45%] max-md:w-[60%] items-center font-semibold max-md:text-sm max-sm:w-[70%] max-sm:text-[10px]'>
          <p className=' hover:font-semibold hover:text-red-500 cursor-pointer' onClick={()=>handleScrollToFooter('Home')}>Home</p>
          <p className=' hover:font-semibold hover:text-red-500 cursor-pointer' onClick={()=>handleScrollToFooter('Footer')}>About Us</p>
          <p className=' hover:font-semibold hover:text-red-500 cursor-pointer' onClick={()=>navigate.push('/pricing')}>Pricing</p>
          <p className=' hover:font-semibold hover:text-red-500 cursor-pointer' onClick={()=>handleScrollToFooter('Features')}>Features</p>
        </div>
        <div className=' flex items-center justify-center w-[8%] max-lg:w-[13%]  max-md:w-[15%]'>
          <button className=' w-full h-full bg-black text-white font-extralight max-md:text-sm max-sm:text-[10px]'>Download</button>
        </div>
        <div className='w-[10%] max-lg:w-[6%] relative max-md:hidden'>
          <figure className=' absolute top-5'>
            <Image width={45} height={45} src={'/images/Star 8.png'} alt='image'/>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Navbar