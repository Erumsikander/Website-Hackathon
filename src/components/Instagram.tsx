import React from 'react'

const Instagram = () => {
  return (
  <main className='w-[1200px] h-[450]'>
      <div  className='bg-cover bg-center h-screen' style={{backgroundImage: "url('/images/pic-4.png')"}}>
  
  <div className='flex flex-col items-center justify-center h-full '>
  <h1 className='relative text-black text-6xl font-black w-[454px] h-[90px] mt-30'>Our Instagram</h1>
<h1 className='text-2xl flex justify-center mb-4 '>Follow our store on Instagram</h1>

<button className=' rounded-3xl shadow-2xl  items-center justify-center bg-[#ebd8d8] font-bold border-x-0  w-[255px] h-[64px] border-black hover:bg-black hover:text-white'>
  Follow Us 
</button></div>
  </div>
  </main>
  )
}

export default Instagram
