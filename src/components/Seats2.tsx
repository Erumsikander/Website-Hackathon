import React from 'react'

const Seats2 : React.FC = () => {
  const products = [
{
  id: 1,
  name :"Trenton modular sofa_3",
  image : "/images/seat-4.png",
  number : "Rs. 25,000.00",
},
{
  id: 2,
  name :"Granite dining table with dining chair",
  image : "/images/seat-5.png",
  number : "Rs. 25,000.00",
},
{
  id: 3,
  name :"Outdoor bar table and stool",
  image : "/images/seat-6.png",
  number : "Rs. 25,000.00",
},
{
  id: 4,
  name :"Plain console with teak mirror",
  image : "/images/seat-7.png",
  number : "Rs. 25,000.00",
  
},
];
 
  return (
    <div className='w-[1200px] bg-[#FFFFFF]'>
    <div> <h1 className=' text-3xl font-bold flex justify-center mt-6'>Top Picks For You</h1>
    <p className='flex justify-center text-[#9F9F9F] mt-4 '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
    <section className=' bg-[#FFFFFF] py-12'>
    <div className='container mx-auto px-8 md:px-12 mt-2'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
           {products.map((product) => (
            <div 
            key={product.id} 
            className='flex flex-col items-center text-center spaca-y-8'>
                {/* IMAGES */}
                <div className='w-full max-w-sm'>
                    <img 
                    src={product.image}
                    alt={product.name}
                    data-num={product.number}
                    className='w-full h-auto object-contain'/>
                </div>

                {/* NAMES */}
                <h2 className='text-1xl font-bold text-gray-800 mr-20'>
                  {product.name} <br /> {product.number}
                  </h2>
            </div>
            
            
        )    
    )
           } 

        </div>
    </div>
</section>

<h2 className='flex justify-center font-bold underline underline-offset-8 hover:no-underline hover:text-blue-800 mb-2  '>View More</h2>
</div>
</div>
  )
}

export default Seats2
