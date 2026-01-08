"use client";

import React, { useEffect, useState } from "react";
import Banner1 from "@/public/New Images/Execution4.jpeg";
import Banner2 from "@/public/New Images/OfficeAndRetail/OfficeAndRetail8.jpeg";
import Banner3 from "@/public/New Images/Residential/Residential16.jpeg";
import Banner4 from "@/public/New Images/OfficeAndRetail/OfficeAndRetail7.jpeg";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

export default function LendingPageSlider() {
  const banners = [Banner1, Banner2, Banner3, Banner4];
  const texts = ["inspiring lifestyles. <br /> inspiring lifestyles.", "Your vision, <br /> our expertise.", "Discover the <br /> Art of Living", "Creating Harmony <br /> Through Design"];
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((pre) => {
      if (pre === 0) return banners.length - 1;
      return pre - 1;
    });
  };

  
  const goNext = () => {
    setCurrent((pre) => {
      if (pre >= banners.length - 1) return 0;
      return pre + 1;
    });
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      goNext();
    }, 5000);

    return () => clearTimeout(timeOutId);
  }, [current]);

  return (
    <div className="h-[30rem] w-full overflow-hidden relative aspect-video sm:h-[15rem]">
      <div className="z-20 absolute inset-0 flex justify-between items-center w-full">
        <button
          onClick={goPrev}
          className="size-10 flexCenter bg-white active:scale-95"
        >
          <MdChevronLeft size={20} />
        </button>
        <button
          onClick={goNext}
          className="size-10 flexCenter bg-white active:scale-95"
        >
          <MdChevronRight size={20} />
        </button>
      </div>
      {banners.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            current === index ? "z-10 opacity-100" : "z-0 opacity-0"
          } transition-all duration-1000`}
        >
          <Image src={item} alt="" className="size-full object-cover" />
          <div className="absolute top-0 size-full p-10 px-28 flex flex-col gap-y-3 items-center justify-center bg-[#0000007c] sm:px-0">
            <h2 dangerouslySetInnerHTML={{__html : texts[index]}} className={`text-[2.8rem] leading-[3rem] font-tex text-center w-full text-white tracking-widest sm:leading-[1.8rem] sm:text-[1.5rem] ${index === current ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
              
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
