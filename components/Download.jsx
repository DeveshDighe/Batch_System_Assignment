import Image from 'next/image'
import React from 'react'

const Download = () => {
  return (
    <div className='  flex items-center justify-center py-16 relative px-6'>
      <Image width={1100} height={1100} src={'/images/Frame.png'} alt='image'/>
      <Image className=' max-sm:hidden absolute top-36 left-10' width={50} height={50} src={'/images/Star 8.png'} alt='image'/>
      <Image className=' max-md:hidden -z-10 absolute top-[-100px] left-32' width={500} height={500} src={'/images/red.png'} alt='image'/>
    </div>
  )
}

export default Download