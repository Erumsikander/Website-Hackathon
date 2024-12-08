import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' w-[1200px] h-[700px] bg-[#f3df9d] flex justify-'>
    <div className='flex flex-col justify-ceneter w-[440px] h-[92px] ml-20 mt-52'> 
<h1  className='text-6xl font-bold'>
  Rocket single 
   seater
    </h1>
    <h1 className='underline underline-offset-8 font-bold w-[121px] h-[49px]'>Shop Now</h1>  
    </div>

  
  <div className=' mb-28 flex justify-between'>
    
<Image src={"/images/Seater-1.png"} alt='Hero Image' width={853} height={600} ></Image>
</div>
</div>
       
  )
}
export default Hero
