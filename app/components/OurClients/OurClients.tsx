import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import ClientsList from "./ClientsList";

function ProjectTimeline() {
  return (
    <section className="w-full mt-20 sm:mt-10 max-layout px-28 sm:px-5 md:px-10">
      <div className="w-full">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl md:w-full">
          OUR CLIENTS
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
            Designing the Extraordinary, Project by Project
          </p>
          <Link
            className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-5"
            href="/projects/residential"
          >
            <span>Our Projects</span>
            <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </Link>
        </div>
      </div>
      <ClientsList />
    </section>
  );
}

export default ProjectTimeline;
