import React from 'react'
import Blog from '@/components/Blog';


const Index = () => {
    const blogs = [
      {
        id: 1,
        image: "/images/pic-1.png",
        title: "Going all-in with millennial design",
        date: "12th Oct 2022",
        readTime: 5,
      },
      {
        id: 2,
        image: "/images/pic-2.png",
        title: "Going all-in with millennial design",
        date: "12th Oct 2022",
        readTime: 5,
      },
      {
        id: 3,
        image: "/images/pic-3.png",
        title: "Going all-in with millennial design",
        date: "12th Oct 2022",
        readTime: 5,
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8 w-[1200px] h-[944px]">
        <h1 className="text-2xl font-bold text-center mb-4">Our Blogs</h1>
        <p className="text-center text-gray-600 mb-6 ">
          Find a bright idea to suit your taste with our great selection
        </p>
        <div className=" flex flex-row-3 gap-6 ">
          {blogs.map((blog) => (
            <Blog key={blog.id} {...blog} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View All Posts
          </button>
        </div>
      </div>    
    );
  }

export default Index
