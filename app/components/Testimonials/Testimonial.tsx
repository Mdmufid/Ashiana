"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import StarRating from "./StarRating";
import { MOBILE_VIEW_WIDTH, TAB_VIEW_WIDTH } from "@/app/constant";

function Testimonial() {
  const [sliderPreviewView, setSliderPreviewView] = useState(3);
  const swiperRef = useRef<any>(null);
  const testimonials = [
    {
      icon: "/testimonial/testi-1.png",
      name: "Ayesha Pachal",
      ratings: 5,
      message:
        "Excellent company to work with if you are looking to have your interiors done. Beautiful finishes and wonderfully executed work. Designs are superb and one of a kind, extremely talented and wonderful group of people",
    },
    {
      icon: "/testimonial/testi-style3-2.png",
      name: "Avijit Deb",
      ratings: 5,
      message: `Perseverance, good workmanship and dedication is what I saw in the entire team that worked on my home for false ceiling. Thanks to Ashish Kumar who is responsively managing the team. I wish you all the best for your future`,
    },
    {
      icon: "/testimonial/testi33.png",
      name: "Abhishek Banerjee",
      ratings: 5,
      message: `Thank you, Ashiana Interiors, for the change my cafe looks it&apos;s awesome and I&quot;m really happy on your design planning again thank you so much keep it up. According to me you will be the best Interiors designer`,
    },
  ];

  useEffect(() => {
    if (window.innerWidth <= MOBILE_VIEW_WIDTH) {
      setSliderPreviewView(1);
    } else if (window.innerWidth <= TAB_VIEW_WIDTH) {
      setSliderPreviewView(2);
    } else {
      setSliderPreviewView(3);
    }
  }, []);
  return (
    <section className="w-full max-layout px-28 sm:px-5 sm:min-h-full mt-0 sm:mt-10 md:px-10">
      <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl md:w-full">
        TESTIMONIALS
      </h2>
      <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:pt-5 sm:mt-5 sm:flex-col sm:items-start">
        <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
          See what our clients are saying
        </p>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={sliderPreviewView}
        className="w-full"
        effect={"coverflow"}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide className="overflow-auto" key={index}>
            <div className="mt-20 mb-20">
              <div className="w-full bg-[#355888] flex flex-col items-center testimonialBorderRedious">
                <div className="size-28 rounded-full bg-white -translate-y-10 overflow-hidden p-3">
                  <Image
                    className="size-full object-cover"
                    src={item.icon}
                    alt={`user icon ${index}`}
                    height={1200}
                    width={1200}
                  />
                </div>
                <div className="px-5 pb-9">
                  <h3 className="josefin-sans-500 text-white text-center text-lg">
                    {item.name}
                  </h3>

                  <div className="flexCenter pt-1">
                    <StarRating currentRatings={item.ratings} />
                  </div>

                  <p className="text-center josefin-sans-400 text-white pt-4 text-sm">
                    {`"${item.message}"`}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
