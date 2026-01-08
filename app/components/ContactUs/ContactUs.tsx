import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import OpenContactPopupBtn from "../Popup/OpenContactPopupBtn";

function ContactUs() {
  return (
    <section className="w-full mt-0 sm:mt-0">
      <div className="w-full px-28 sm:px-5 md:px-10 max-layout">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] uppercase sm:w-full sm:text-4xl md:w-full">
          Get in Touch
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
            Building Relationships, One Conversation at a Time
          </p>
          <Link
            className="josefin-sans-400 flex pt-3 md:pt-0 items-center gap-2 group/allserviceslbl relative"
            href="/contact-us"
          >
            <span>Contact Us</span>
            <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </Link>
        </div>
      </div>

      <div className="w-full relative h-96 mt-10">
        <div className="pimg2 w-full h-full"></div>
        <div className="size-full bg-[#0000009a] absolute top-0 bottom-0 flexCenter flex-col">
          <h2 className="font-tex text-7xl text-white sm:text-4xl sm:text-center md:text-center">
            Have a project in mind?
          </h2>
          <h3 className="josefin-sans-400 text-white tracking-wider text-xl pt-8">
            Do not hesitate to say <span>Hello</span>
          </h3>
          <OpenContactPopupBtn className="flexCenter mt-4 gap-3 josefin-sans-400 border-2 border-white px-5 py-2 pt-[0.55rem] rounded-2xl text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
            <span>Let&apos;s Talk</span>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </OpenContactPopupBtn>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
