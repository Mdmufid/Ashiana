import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import blogsInfo from "@/public/bloginfo.json";
import BlogCrasoule from "./BlogCrasoule";

function LatestNews() {
  return (
    <section className="w-full h-auto max-layout sm:min-h-full sm:mt-14 pb-10 pt-0">
      <div className="w-full px-28 sm:px-5 md:px-10">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl md:w-full">
          Latest Blogs
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-5 sm:pt-4">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
            Discover our Latest Blogs
          </p>
          <Link
            className="josefin-sans-400 flex pt-2 items-center gap-2 group/allserviceslbl relative"
            href="/blog"
          >
            <span>More Blogs</span>
            <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </Link>
        </div>
      </div>

      <BlogCrasoule blogsData={blogsInfo} />
    </section>
  );
}

export default LatestNews;
