import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div id='Features' className=' flex flex-col lg:flex-row h-[650px] max-md:h-auto justify-between   max-lg:ml-[5%] ml-[10%]'>
      <div className='w-full p-4 h-full max-lg:hidden'>
        <div className='relative'>
          <figcaption className='absolute top-8 right-20 '>
            <Image className=' rotate-180' width={500} height={500} src={'/images/Ellipse 2157.png'} alt='Ellipse' />
          </figcaption>
          <figcaption className='absolute top-16 right-32'>
            <Image className=' rotate-180' width={500} height={500} src={'/images/Ellipse 2157.png'} alt='Ellipse' />
          </figcaption>

          <figcaption className='absolute top-24 right-44'>
            <Image className=' rotate-180' width={500} height={500} src={'/images/Ellipse 2157.png'} alt='Ellipse' />
          </figcaption>
          <figcaption className='absolute top-0 right-32'>
            <Image className='' width={450} height={450} src={'/images/iPhone-13-Pro-FrontStr.png'} alt='iPhone' />
          </figcaption>
          <figcaption className='absolute top-[-20px] left-[-100px] -z-10'>
            <Image className='rotate-180' width={800} height={800} src={'/images/red.png'} alt='Decorative Red Element' />
          </figcaption>
        </div>
      </div>
      <div className='  w-full pt-14 pr-2 '>
        <div>
          <h5 className=' text-red-400 text-2xl max-md:text-lg'>FEATURES</h5>
          <h1 className=' text-[50px] max-md:text-[35px] font-SecondF font-bold'>Uifry Premium</h1>
        </div>
        <div className=' my-6'>
          <div className=' flex gap-x-3'>
            <Image width={25} height={25} src={'/images/star-05.png'} alt='image'/>
            <p className=' md:text-lg font-semibold '>Budgeting Intervals</p>
          </div>
          <div>
            <p className=' md:text-lg opacity-70 my-4'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
        <div className=' my-6'>
          <div className=' flex gap-x-3'>
            <Image width={25} height={25} src={'/images/cube-02.png'} alt='image'/>
            <p className='  md:text-lg font-semibold '>Budgeting Intervals</p>
          </div>
          <div>
            <p className='  md:text-lg opacity-70 my-4'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
        <div className=' my-6'>
          <div className=' flex gap-x-3'>
            <Image width={25} height={25} src={'/images/cube-04.png'} alt='image'/>
            <p className='  md:text-lg font-semibold '>Budgeting Intervals</p>
          </div>
          <div>
            <p className='  md:text-lg opacity-70 my-4'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features