"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { GrLinkNext } from "react-icons/gr";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { MOBILE_VIEW_WIDTH } from "../constant";

export default function ImageSlider() {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  const imagesList = [
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
    "https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-interior-composition-with-beige-sofa-wooden-coffee-table-elegant-home-accessories-template-copy-space-dining-room-background-1-1536x1024.jpg",
  ];

  const onPrevBtnClicked = () => {
    setCurrentIndex((preIndex) => preIndex - 1);
  };

  const onNextBtnClicked = () => {
    setCurrentIndex((preIndex) => preIndex + 1);
  };

  useEffect(() => {
    setSliderPreviewView(window?.innerWidth <= MOBILE_VIEW_WIDTH ? 1 : 3);
    if (currentIndex !== -1) {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideTo(currentIndex);
      }
    }
  }, [currentIndex]);

  return (
    <section className="w-full flex items-center justify-center px-10 relative sm:px-5">
      <Swiper
        ref={swiperRef}
        spaceBetween={100}
        slidesPerView={sliderPreviewView}
        className="w-full"
        effect={"coverflow"}
        loop={true}
      >
        {imagesList.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={`min-w-[350px] h-96 overflow-hidden ${
                index === currentIndex ? "scale-100" : "scale-100"
              } transition-all duration-500`}
            >
              <Image
                className={`size-full object-cover`}
                src={src}
                alt="img"
                height={1200}
                width={1200}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={onNextBtnClicked}
        className="size-16 flexCenter bg-[#00000057] drop-shadow-xl absolute top-[45%] right-20 z-10 cursor-pointer hover:scale-95 transition-all duration-300 sm:right-0"
      >
        <GrLinkNext size={23} className=" text-white" />
      </div>
      <div
        onClick={onPrevBtnClicked}
        className="size-16 flexCenter bg-[#00000057] drop-shadow-xl absolute top-[45%] left-20 z-10 cursor-pointer hover:scale-95 transition-all duration-300 sm:left-0"
      >
        <GrLinkNext size={23} className="text-white rotate-180" />
      </div>
    </section>
  );
}
