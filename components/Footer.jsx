import Image from 'next/image'
import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div id='Footer' className=' grid  grid-cols-8 h-auto mx-[19%] max-xl:mx-[10%] max-md:grid-cols-3 max-lg:mx-[2%] max-md:gap-y-4 cursor-pointer'>
      <div className=' col-span-2  flex flex-col gap-y-2 max-md:col-span-3'>
        <Image height={150} width={150} src={'/images/icon.png'} alt='image'/>
        <div className=' flex gap-x-2 items-center text-sm mt-2'>
        <IoMail size={20} color='#fd5753' />
        <p className=' font-ThirdF'>Help@frybix.com</p>
        </div>
        <div className=' flex gap-x-2 items-center text-sm'>
        <FaPhoneAlt size={16} color='#fd5753' />
        <p className=' font-ThirdF'>+1 234 456 678 89</p>
        </div>
      </div>
      <div className=' col-span-1  flex flex-col gap-y-2 max-md:col-span-1'>
        <p className=' text-3xl font-ThirdF mb-2 max-lg:text-2xl max-sm:text-lg'>Links</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Home</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>About Us</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Bookings</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Blog</p>
      </div>
      <div className=' col-span-1  flex flex-col gap-y-2 max-md:col-span-1'>
        <p className=' text-3xl font-ThirdF mb-2 max-lg:text-2xl max-sm:text-lg'>Legal</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Terms Of Use</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Privacy Policy</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm' >Cookie Policy</p>
      </div>
      <div className=' col-span-1  flex flex-col gap-y-2 max-md:col-span-1'>
        <p className=' text-3xl font-ThirdF mb-2 max-lg:text-2xl max-sm:text-lg'>Product</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Take Tour</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Live Chat</p>
        <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Reviews</p>
      </div>
      <div className=' col-span-3  max-md:col-span-3'>
      <p className=' text-3xl font-ThirdF mb-2 max-lg:text-2xl  max-sm:text-lg'>Newsletter</p>
      <p className=' font-ThirdF hover:text-[#fd5753] transform duration-200 max-sm:text-sm'>Stay Up To Date</p>
      <div className=' w-[70%] grid grid-cols-2 h-16 mt-4'>
        <input className=' col-span-1' type="text" placeholder=' Your Email' />
        <button className=' col-span-1 bg-black rounded-md text-white'>Subscribe</button>
      </div>
      </div>
    </div>
    <div>
      <hr className=' my-10' />
      <p className=' text-lg text-center'>Copyright 2022 uifry.com all rights reserved</p>
    </div>
    </>
  )
}

export default Footer