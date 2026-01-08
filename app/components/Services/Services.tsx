"use client";

import { nav_options } from "@/constant";
import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";

export default function Services() {
  return (
    <section className="w-full min-h-full max-layout px-28 sm:px-5 flex flex-col items-center mt-10 sm:mt-10 md:px-10">
      <div className="max-w-[1524px] min-w-full">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] uppercase sm:w-full sm:text-4xl md:w-full">
          Beautify your interiors
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow sm:text-[20px]">
            We are elevating Kolkata&apos;s living spaces with elegance &
            innovation.
          </p>
          <Link
            className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-4"
            href="/services"
          >
            <span>All Services</span>
            <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </Link>
        </div>

        <div className="px-20 py-6 sm:px-0 sm:py-0 md:px-0">
          <ul className="w-full grid grid-cols-3 gap-3 py-10 sm:grid-cols-1 sm:pt-5 sm:pb-10">
            {nav_options[2].submenu?.map((service) => (
              <li key={service.id}>
                <Link
                  className="flex items-center gap-2 josefin-sans-400"
                  href={service.path}
                >
                  <MdOutlineAdd />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="w-full grid grid-cols-3 sm:grid-cols-1 md:place-items-center">
            <li className="w-full space-y-5 sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
              <p className="font-tex text-8xl tracking-wider text-stroke-2 text-transparent inline-block">
                900
              </p>
              <div className="w-[90%] border-b border-[#07384242]"></div>
              <p className="josefin-sans-500 tracking-wide text-xl text-gray-800 ">
                Clients
              </p>
            </li>
            <li className="w-full space-y-5 sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
              <p className="font-tex text-8xl tracking-wider text-stroke-2 text-transparent inline-block">
                900
              </p>
              <div className="w-[90%] border-b border-[#07384242]"></div>
              <p className="josefin-sans-500 tracking-wide text-xl text-gray-800">
                Projects Completed
              </p>
            </li>
            <li className="w-full space-y-5 sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
              <p className="font-tex text-8xl tracking-wider text-stroke-2 text-transparent inline-block">
                4L
              </p>
              <div className="w-[90%] border-b border-[#07384242]"></div>
              <p className="josefin-sans-500 tracking-wide text-xl text-gray-800">
                Square Feet
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
