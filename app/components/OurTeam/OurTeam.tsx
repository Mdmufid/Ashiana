import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

function OurTeam() {
  return (
    <section className="w-full px-28 sm:px-5">
      <div className="w-full">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl uppercase">
          Meet the Director
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
            One Team, Infinite Possibilities
          </p>
        </div>
      </div>

      {/* <ul className="w-full grid grid-cols-3 mt-32 sm:grid-cols-1 sm:mt-14 sm:place-items-center sm:gap-5">
        <li className="w-72 relative group/teammamber overflow-hidden border">
          <Image
            className="size-full"
            src="/ourteam/t-01.jpg"
            alt="hello"
            height={1200}
            width={1200}
          />
          <div className="w-full absolute h-24 bg-white translate-y-[100%] overflow-hidden group-hover/teammamber:translate-y-[0%] transition-all duration-500 bottom-0 px-8 py-4">
            <h2 className="josefin-sans-400">Alisson Taylor</h2>
            <span className="josefin-sans-300 text-sm">Team Manager</span>
          </div>
        </li>
        <li className="w-72 relative group/teammamber overflow-hidden border -translate-y-20 sm:-translate-y-0">
          <Image
            className="size-full"
            src="/ourteam/t-03.jpg"
            alt="hello"
            height={1200}
            width={1200}
          />
          <div className="w-full absolute h-24 bg-white translate-y-[100%] overflow-hidden group-hover/teammamber:translate-y-[0%] transition-all duration-500 bottom-0 px-8 py-4">
            <h2 className="josefin-sans-400">Alisson Taylor</h2>
            <span className="josefin-sans-300 text-sm">Team Manager</span>
          </div>
        </li>
        <li className="w-72 relative group/teammamber overflow-hidden border">
          <Image
            className="size-full"
            src="/ourteam/t-02.jpg"
            alt="hello"
            height={1200}
            width={1200}
          />
          <div className="w-full absolute h-24 bg-white translate-y-[100%] overflow-hidden group-hover/teammamber:translate-y-[0%] transition-all duration-500 bottom-0 px-8 py-4">
            <h2 className="josefin-sans-400">Alisson Taylor</h2>
            <span className="josefin-sans-300 text-sm">Team Manager</span>
          </div>
        </li>
      </ul> */}

      <div className="w-full grid grid-cols-2 mt-10 relative">
        <Image
          className="w-96"
          src="/ourteam/t-03.jpg"
          alt="hello"
          height={1200}
          width={1200}
        />

        <div>
          <h2 className="font-tex uppercase text-gray-600 tracking-[0.1em] text-3xl">
            Subrata Kundu
          </h2>
          <p className="josefin-sans-400 text-xl text-gray-500 mt-1">
            Creative Director
          </p>
          <div className="mt-3 h-[1px] w-60 bg-slate-200"></div>
          <p className="mt-5 tracking-widest font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quos.
            Qui nemo quo quod iure minus. Beatae temporibus tempore asperiores
            fugit libero eum repellat, adipisci ducimus maxime illum sapiente
            fuga?
          </p>
          <p className="mt-5 tracking-widest font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quos.
            Qui nemo quo quod iure minus. Beatae temporibus tempore asperiores
            fugit libero eum repellat, adipisci ducimus maxime illum sapiente
            fuga?
          </p>

          <div className="mt-3 absolute bottom-10 h-[1px] w-60 bg-slate-200"></div>
          <Link
            href="/contact-us"
            className="absolute bottom-0 flex items-center gap-2 font-semibold tracking-widest josefin-sans-400"
          >
            Contact Us
            <FaLongArrowAltDown className="rotate-[270deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
