"use client";

import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setShowImageDialog } from "@/redux/slices/showImageDialog";

function ShowImageDialog() {
  const { imgSrc, visibility } = useSelector(
    (state: RootState) => state.showImageDialog
  );
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(setShowImageDialog({ visibility: false, imgSrc: "" }));
  };

  return (
    <div
      onClick={closeDialog}
      className={`w-full h-full bg-[#00000042] backdrop-blur-lg ${
        visibility ? "block" : "hidden"
      } fixed top-0 bottom-0 z-[60]`}
    >
      <div className="size-full relative flexCenter">
        <Image
          className="w-[600px] sm:w-full"
          src={imgSrc}
          alt=""
          height={1200}
          width={1200}
        />
        <AiOutlineClose
          onClick={closeDialog}
          size={25}
          color="#fff"
          className="border-2 p-0 absolute top-5 cursor-pointer right-64 sm:right-10 sm:top-10"
        />
      </div>
    </div>
  );
}

export default ShowImageDialog;
