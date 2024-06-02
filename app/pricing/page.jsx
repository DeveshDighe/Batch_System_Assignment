"use client"
import React from 'react'
import Whatee from '/Data.json'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Page = () => {
  const Pricing = Whatee.pricing

  const navigate = useRouter()
  console.log(Pricing, 'This is pricing');

  const handleSub = () => {
    toast.success('Subscibed')
    navigate.push("/")
  }
  return (
    <div className=' h-[600px] w-[900px] max-md:flex-col max-md:h-[1000px] max-md:w-full max-md:my-1 m-auto gap-x-2  flex justify-between my-6 mb-24 rounded-2xl max-md:mb-24 max-md:gap-y-2 '>
      <div className=' w-full border rounded-2xl py-6 px-2'>
        <p className=' text-4xl text-center font-SecondF'>{Pricing[0].plan} Plan</p>
        <div className=' flex gap-y-4 mt-10 flex-col'>{Pricing[0].features.map((fea) => (
          <p key={fea} className=' text-2xl border w-40 m-auto px-6 rounded-md bg-green-300 py-2'>{fea}</p>
        ))}
        </div>
        <div className=' flex gap-x-2 text-2xl justify-center my-8'>
          <p>Price :  </p><p>{Pricing[0].price}</p>
        </div>
        <div className=' flex justify-center'>
          <button className=' text-lg py-4 px-10 bg-black text-white rounded-lg' onClick={handleSub}>Subscribe Now</button>
        </div>
      </div>
      <div className=' w-full border rounded-2xl py-6 px-2'>
        <div className=' flex gap-x-2 justify-center'>
          <Image width={45} height={45} src={'/images/Star 8.png'} alt='image' />
          <p className=' text-4xl text-center font-SecondF'> {Pricing[1].plan} Plan</p>
          <Image width={45} height={45} src={'/images/Star 8.png'} alt='image'/>
        </div>
        <div className=' flex gap-y-4 mt-10 flex-col'>{Pricing[1].features.map((fea) => (
          <p key={fea} className='text-2xl border w-40 m-auto px-6 rounded-md bg-green-300 py-2'>{fea}</p>
        ))}
        </div>
        <div className=' flex gap-x-2 text-2xl justify-center my-8'>
          <p>Price :  </p><p>{Pricing[1].price}</p>
        </div>
        <div className=' flex justify-center'>
          <button className=' text-lg py-4 px-10 bg-black text-white rounded-lg' onClick={handleSub}>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Page