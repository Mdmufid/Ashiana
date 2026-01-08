import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";

interface IProps {
  bannerText ?  : string;
  setCurretBannerIndex : React.Dispatch<React.SetStateAction<number>>;
}

export default function BannerDetails({bannerText, setCurretBannerIndex} : IProps) {

  const goNext = () => {
    // setCurretBannerIndex((preIndex) => {
    //   if(preIndex)
    // })
  }

  return (
    <section className="size-full flex items-start justify-center relative">
      <h2 className="font-tex text-[#d3d3d3] leading-[1em] w-[850px] text-center text-8xl pt-28">
        Your Space, Your Signature Style
      </h2>
      <div className="absolute top-0 bottom-0 right-32 pt-40 space-y-8">
        <button className="size-[50px] border flexCenter cursor-pointer hover:bg-[#203556] hover:border-[#203556] transition-all duration-500">
          <IoChevronBackSharp size={30} color="#d3d3d3" fontWeight={100} />
        </button>
        <button className="size-[50px] border flexCenter cursor-pointer hover:bg-[#203556] hover:border-[#203556] transition-all duration-500">
          <IoChevronBackSharp className="rotate-180" size={30} color="#d3d3d3" fontWeight={100} />
        </button>
      </div>
    </section>
  );
}
