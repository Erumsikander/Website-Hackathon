import React from 'react'

type BlogProps = {
  image: string;   
  title: string;    
  date: string;    
  readTime: number;
}

const Blog : React.FC<BlogProps> = ( { image , title, date, readTime} ) => {
  return (

    <div className=" rounded-lg w-[393px] h-[393px] container mx-auto px-4 py-8 shadow-md overflow-hidden bg-white">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-sm text-gray-500 flex items-center mt-2">
        <span className="mr-4">⏱️ {readTime} min</span>
        <span>📅 {date}</span>
      </div>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>
    </div>
  </div>
  )
}


export default Blog

