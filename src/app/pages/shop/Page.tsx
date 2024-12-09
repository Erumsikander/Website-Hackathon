import Cards from "@/components/mainshop/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Analys from "@/components/Analys";
import Data from "@/product/Data"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center my-6">
        <Image src="/images/shop-1.png" alt="" />
        {/* <Image alt='' height={} width={}> */}
      </div>
      <div>
        <Image src="/images/shop-2.png" alt="" />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 my-20">
        {Data.map((item) => {
          const { price, imageUrl, title ,id} = item;
          return (
           <Link key={id} href={`/pages/detail/${id}`}> 
           <Cards key={id} title={title} imageUrl={imageUrl} price={price} /></Link>
          );
        })}
      </div>
     <Analys/>
      <Footer />
    </div>
  );
};

export default Page;