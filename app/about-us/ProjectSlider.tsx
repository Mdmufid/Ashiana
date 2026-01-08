"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import ImageLayout from "./ImageLayout";
import ImageDetails from "./ImageDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

function ProjectSlider() {
  const swiperRef = useRef<any>(null);
  const [isForSmallDevice, setIsForSmallDevice] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 639) {
        setIsForSmallDevice(true);
      }
    }
  }, []);

  const projectsDoneItems = [
    {
      id: "1",
      img: "/about/dso1.webp",
      heading: "Customized Solutions",
      description:
        "Tailoring designs to meet the unique needs and preferences of each client, ensuring a truly personalized experience.",
      imgPostion: "top",
    },
    {
      id: "2",
      img: "/about/dh7.webp",
      heading: "Innovative Designs",
      description:
        "Embracing creativity and innovation to deliver fresh and cutting-edge designs that set trends and inspire awe.",
      imgPostion: "bottom",
    },
    {
      id: "3",
      img: "/about/dh10.webp",
      heading: "Client Satisfaction",
      description:
        "Dedication to exceeding client expectations, with a commitment to delivering exceptional service and creating spaces that evoke joy and satisfaction.",
      imgPostion: "top",
    },
  ];
  return (
    <div className="w-full relative mt-20 sm:cursor-move">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={isForSmallDevice ? 1 : 3}
        className="w-full"
        effect={"coverflow"}
      >
        {projectsDoneItems.map((item) => (
          <SwiperSlide key={item.id}>
            <li
              className={`flex flex-col justify-between gap-20 sm:min-w-full sm:min-h-[350px]`}
            >
              {/* {item.imgPostion === "top" ? (
                <ImageLayout img={item.img} />
              ) : (
                <ImageDetails
                  heading={item.heading}
                  description={item.description}
                />
              )}

              <div className="w-full h-[2px] bg-[#CCD1D8] relative flexCenter">
                <div className="size-4 bg-gray-800 rounded-full"></div>
              </div>
              {item.imgPostion === "bottom" ? (
                <ImageLayout img={item.img} />
              ) : (
                <ImageDetails
                  heading={item.heading}
                  description={item.description}
                />
              )} */}
              <ImageLayout img={item.img} />
              <div className="w-full h-[2px] bg-[#CCD1D8] relative flexCenter">
                <div className="size-4 bg-gray-800 rounded-full"></div>
              </div>
              <ImageDetails
                heading={item.heading}
                description={item.description}
              />
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="absolute h-full flexCenter bg-slate-300  top-0">
        <IoArrowBackOutline
          size={35}
          className="mt-[2.12rem] rotate-180 z-10 text-gray-700"
        />
      </div> */}
    </div>
  );
}

export default ProjectSlider;
