"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setShowImageDialog } from "@/redux/slices/showImageDialog";

function OpenShowImageDialgoBtn({
  imgSrc,
  className,
  children,
}: {
  imgSrc: string;
  className?: string;
  children: React.ReactNode;
}) {
  const despatch = useDispatch();
  const onBtnClick = () => {
    despatch(
      setShowImageDialog({
        imgSrc: imgSrc,
        visibility: true,
      })
    );
  };
  return (
    <button className={className} onClick={onBtnClick}>
      {children}
    </button>
  );
}

export default OpenShowImageDialgoBtn;
