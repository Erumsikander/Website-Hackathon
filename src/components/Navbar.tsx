import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonFillExclamation } from "react-icons/bs";
import Link from 'next/link';
function Navbar() {
  return (
    <header>
    {/* Main Navigation */}
    <div className=' w-[1200px] bg-[#f3df9d] flex justify-end items-center px-20 py-4'>
    
      <nav className='  bg-[#f3df9d] hidden md:flex space-x-16 items-center px-32'>

      <Link target='blank' href="/pages/home">Home</Link>
          <Link target='blank' href={"/pages/shop"}>Shop</Link>
          <Link target='blank' href="/pages/about">About</Link>
          <Link target='blank' href="/pages/contact">Contact</Link>
      </nav>
 {/* Search icons*/}

 <div 
 className='flex items-center space-x-6'>
  <BsPersonFillExclamation className='size-6'/>
  <div>
    <CiSearch className=' black size-6'/>
  </div>
  <CiHeart className='size-6'/>
  <IoCartOutline className=' size-6'/>

 </div>
    </div>
   </header>
  )
}

export default Navbar


