"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { GoArrowDownLeft } from "react-icons/go";
import { MOBILE_VIEW_WIDTH, TAB_VIEW_WIDTH } from "@/app/constant";
import OpenContactPopupBtn from "../Popup/OpenContactPopupBtn";

function SpecialServices() {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [sliderPreviewView, setSliderPreviewView] = useState(4);
  const spacialServicesArray = [
    { name: "Civil", image: "/spicalservices/civil.jpg" },
    { name: "Electrician", image: "/spicalservices/Electrician.jpg" },
    { name: "Furniture", image: "/spicalservices/Furniture.jpg" },
    { name: "False Ceiling", image: "/spicalservices/False-Ceiling.jpg" },
    {
      name: "Painting Services",
      image: "/spicalservices/Painting-Services.jpg",
    },
  ];

  const onPrevBtnClicked = () => {
    setCurrentIndex((preIndex) => preIndex - 1);
  };

  const onNextBtnClicked = () => {
    setCurrentIndex((preIndex) => preIndex + 1);
  };

  useEffect(() => {
    if (window.innerWidth <= MOBILE_VIEW_WIDTH) {
      setSliderPreviewView(1);
    } else if (window.innerWidth <= TAB_VIEW_WIDTH) {
      setSliderPreviewView(3);
    } else {
      setSliderPreviewView(4);
    }
    if (currentIndex !== -1) {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideTo(currentIndex);
      }
    }
  }, [currentIndex]);
  return (
    <section className="w-full px-28 sm:px-5 sm:min-h-full mt-20 sm:mt-10 md:px-10 max-layout">
      <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl md:w-full">
        SOME SPECIAL SERVICES
      </h2>
      <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:pt-5 sm:mt-5 sm:flex-col sm:items-start">
        <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
          See some of our special services in Kolkata. Click to submit your
          interior design requirements.
        </p>
      </div>
      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          spaceBetween={120}
          slidesPerView={sliderPreviewView}
          className="w-full cursor-grab active:cursor-grabbing mt-8"
          effect={"coverflow"}
          loop={true}
        >
          {spacialServicesArray.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="min-w-60 h-72 relative spacialServiceBorderRadius overflow-hidden">
                <Image
                  className="size-full object-cover"
                  src={item.image}
                  alt=""
                  height={1200}
                  width={1200}
                />
                <div className="size-full bg-[#000000a4] absolute top-0 text-white">
                  <div className="size-full flex items-end relative">
                    <h2 className="josefin-sans-400 px-4 py-1 pb-2">
                      {item.name}
                    </h2>
                    <OpenContactPopupBtn
                      title={`Open Contact Form Button ${index}`}
                      className="size-12 bg-white absolute right-0 flexCenter cursor-pointer group/request"
                    >
                      <div className="size-6 bg-gray-800 rounded-full flexCenter group-hover/request:rotate-[360deg] transition-all duration-1000 arrowRotateTransitonTimingFunction">
                        <GoArrowDownLeft className="text-white rotate-180" />
                      </div>
                    </OpenContactPopupBtn>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button title = "go next" onClick={onPrevBtnClicked} className="size-10 bg-[#00000083] absolute top-[40%] -left-16 z-10 flexCenter cursor-pointer">
          <GrFormNextLink className="rotate-180" size={25} color="#fff" />
        </button>

        <button title = "go back" onClick={onNextBtnClicked} className="size-10 bg-[#00000083] absolute top-[40%] -right-16 z-10 flexCenter cursor-pointer">
          <GrFormNextLink size={25} color="#fff" />
        </button> */}
      </div>
    </section>
  );
}

export default SpecialServices;
