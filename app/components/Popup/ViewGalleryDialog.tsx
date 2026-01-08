"use client";

import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import ShimmerImage from "../ShimmerImage";

import Demo from "@/public/New Images/Execution4.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setImageBigScreen } from "@/redux/slices/openImageBigScreen";
import Image from "next/image";

export default function ViewGalleryDialog() {
  const dispatch = useDispatch();
  const { imgInfo, visibility } = useSelector(
    (state: RootState) => state.openImageBigScreen
  );
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((pre) => {
      if (pre === 0) return imgInfo.length - 1;
      return pre - 1;
    });
  };

  const goNext = () => {
    setCurrent((pre) => {
      if (pre >= imgInfo.length - 1) return 0;
      return pre + 1;
    });
  };

  const closeDialog = () => {
    setCurrent(0);
    dispatch(
      setImageBigScreen({
        imgInfo: [],
        visibility: false,
      })
    );
  };

  return (
    <div
      className={`h-screen w-full bg-[#ffffff81] backdrop-blur-2xl fixed z-[60] ${
        visibility ? "flex flex-col justify-center" : "hidden"
      }`}
    >
      <button
        onClick={closeDialog}
        className={`bg-black z-20 active:scale-75 transition-all duration-300 inline-block size-10 rounded-full text-white cursor-pointer absolute right-14 sm:right-3 top-5 flexCenter`}
      >
        <MdClose size={23} />
      </button>

      {/* controller next button */}
      <button
        onClick={goNext}
        className={`
        size-10 z-20 bg-black rounded-full flexCenter text-white absolute right-14 sm:right-3 active:scale-75 transition-all duration-300 cursor-pointer  ${
          typeof imgInfo === "string" ? "hidden" : "flex"
        } items-center justify-center`}
      >
        <GrFormNext size={23} />
      </button>

      {typeof imgInfo === "string" ? (
        <ShimmerImage className="size-full" src={Demo} alt="Gallery images" />
      ) : (
        <ul className="relative size-full">
          {imgInfo.map((item, index) => (
            <li
              className={`absolute sm:top-[34%] inset-0 w-full aspect-video ${
                current === index
                  ? "z-10 opacity-100 blur-none"
                  : "z-0 opacity-0 blur-2xl"
              } transition-all duration-500`}
              key={index}
            >
              <Image
                className="size-full"
                alt="Gallery Images"
                src={item.img}
              />
            </li>
          ))}
        </ul>
      )}

      {/* controller prev button */}
      <button
        onClick={goPrev}
        className={`size-10 z-20 bg-black rounded-full text-white absolute left-14 sm:left-3 active:scale-75 transition-all duration-300 cursor-pointer  ${
          typeof imgInfo === "string" ? "hidden" : "flex"
        } items-center justify-center`}
      >
        <GrFormPrevious size={23} />
      </button>
    </div>
  );
}
