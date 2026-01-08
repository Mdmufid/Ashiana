import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import AboutTabs from "./AboutTabs";

function About() {
  return (
    <section className="w-full min-h-[45rem] max-layout px-28 sm:px-5 sm:min-h-full mt-16 sm:mt-10 md:px-10">
      <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl md:w-full">
        ABOUT US
      </h2>
      <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:pt-5 sm:mt-5 sm:flex-col sm:items-start">
        <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
          Your Vision, Our Design Expertise
        </p>
        <Link
          className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-4"
          href="/about-us"
        >
          <span>About Us</span>
          <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
          <IoMdArrowDown className="-rotate-[130deg]" size={20} />
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 gap-5 sm:grid-cols-1 pt-10">
        {/* <div className="relative sm:hidden flexCenter">
          <Image
            className="w-96 absolute"
            src="/about/1.webp"
            alt="img1"
            height={1200}
            width={1200}
          />
          <Image
            className="w-80 absolute" // right-36 top-10
            src="/about/image2.jpg"
            alt="img2"
            height={1200}
            width={1200}
          />
          <Image
            className="w-72 absolute" //right-28 top-20
            src="/about/image3.jpg"
            alt="img3"
            height={1200}
            width={1200}
          />
        </div> */}

        <AboutTabs />
        <div className="px-10 flexCenter min-h-[24rem] relative sm:px-0 sm:items-start">
          <Image
            className="w-96"
            src="/about/about-us-1.png"
            alt=""
            width={1280}
            height={720}
            // height={}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
