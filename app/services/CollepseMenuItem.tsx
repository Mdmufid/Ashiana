"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

interface IProps {
  index: number;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
  heading: string;
}

function CollepseMenuItem({
  currentIndex,
  index,
  setCurrentIndex,
  children,
  heading,
}: IProps) {

  const onCollapseItemClick = () => {
    if(currentIndex !== index) {
      setCurrentIndex(index);
    }else {
      setCurrentIndex(-1);
    }
  }

  const handleExpandButton = () => {
    setCurrentIndex(index);
  };

  const handleCollapseButton = () => {
    setCurrentIndex(-1);
  };

  return (
    <div className="w-full relative border-b border-gray-200 py-3">
      <div onClick={onCollapseItemClick} className="w-full flex items-center justify-between cursor-pointer">
        <h2 className="josefin-sans-400 text-gray-600 text-xl">{heading}</h2>
        {currentIndex !== index ? (
          <IoMdAdd
            onClick={handleExpandButton}
            className="cursor-pointer"
            size={20}
          />
        ) : (
          <FaMinus
            onClick={handleCollapseButton}
            className="cursor-pointer"
            size={20}
          />
        )}
      </div>
      <div
        style={{ maxHeight: currentIndex !== index ? "0px" : "250px" }}
        className={`w-full px-1 overflow-hidden transition-all ease-linear duration-500`}
      >
        {children}
      </div>
    </div>
  );
}

export default CollepseMenuItem;
