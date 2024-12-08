import React from 'react'

const Footer = () => {
  return (
    <main className="bg-[#FFFFFF]">
    <div className="w-full  sm:h-full lg:h-[350px] bg-[#FFFFFF] flex justify-center items-center">
         <div className="sm:pl-[5%] md:pl-[10%] lg:pl-0 w-full gap-y-9 pt-3 sm:pb-6  flex sm:flex-col lg:flex-row justify-evenly text-black">
               <div className=" w-[200px]">
                <h2 className=" text-[#6e6969] font-bold mr-4">400 University Drive Suite 200 Coral</h2>
                <ul>
                  <li className="pt-2 text-[#6e6969] cursor-pointer">Gables,
                  </li>
                  <li className="pt-2 cursor-pointer text-[#6e6969]">FL 33134 USA  </li>
                </ul>   
               </div>
               <div className=" w-[48px] h-[px24]  text-2 ">
                <ul>
                  <li className="pt-1 cursor-pointer text-2xl text-[#6e6969]">Links</li>
                  <li className="pt-1 cursor-pointer">Home</li>
                  <li className="pt-1 cursor-pointer">Shop</li>
                  <li className="pt-1 cursor-pointer">About</li>
                  <li className="pt-1 cursor-pointer">Contact</li>
                </ul>
               </div>
               <div className=" w-[48px] h-[px24]  text-2 ">
                <h1 className="pt-1 cursor-pointer text-2xl text-[#6e6969]">Help</h1>
                <ul>
                  <li className="pt-1 cursor-pointer">Payment Options</li>
                  <li className="pt-1 cursor-pointer">Returns</li>
                  <li className="pt-1 cursor-pointer">Privacy Policies</li>
                </ul>
               </div>
               <div className=" w-[48px] h-[px24]  text-2 ">
                <h1 className="pt-1 cursor-pointer text-2xl text-[#6e6969] ">Newsletter</h1>
                <ul>
                  <li className='pt-6 cursor-pointer '>
            <input type="text" placeholder=' Inter Your Email Address'
            className='h-[21px] w-[150px] bg-transparent border-b-4'/>
          </li>
                </ul>
               </div>
               <div className=" gap-4 w-[48px] h-[px24]  text-2 ">
                <ul>
                  <li className="pt-1 cursor-pointer">
                    <button className=' mt-14 underline underline-offset-4 font-bold' >SUBSCRIBE</button>
                  </li>
                  </ul>
               </div>

               <div className="">
 </div>
         </div>
    </div>
    <div className='pl-28 pb-2'>
    <p>Copyright Rimel 2022. All right reserved</p>

</div>
    </main>
  )
}

export default Footer
