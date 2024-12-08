
import React from 'react'

const Seats1 : React.FC = () => {
    const products = [
{
    id: 1,
    name :"Side table",
    image : "/images/seat-2.png",
    link : "#",
},
{
    id: 2,
    name :"Side table",
    image : "/images/seat-3.png",
    link : "#",
},
  ];
  return (
    <section className=' bg-[#efd5d5] py-12 w-[1200px] h-[572px]'>
        <div className='container mx-auto px-4 md:px-12 mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
               {products.map((product) => (
                <div 
                key={product.id} 
                className='flex flex-col items-center text-center spaca-y-4'>
                    {/* IMAGES */}
                    <div className='w-full max-w-sm'>
                        <img 
                        src={product.image}
                        alt={product.name}
                        className='w-full h-auto object-contain'/>
                    </div>

                    {/* NAMES */}
                    <h2 className='text-3xl font-bold text-gray-800 mr-60'>{product.name}</h2>
                <a href={product.link}
                className='tetx-black font-medium mr-60 underline hover:no-underline hover:text-gray-800 trasition'>
                    View More
                </a>
                </div>
            )    
        )
               } 

            </div>


        </div>

    </section>
  )
}

export default Seats1;
