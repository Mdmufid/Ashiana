"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import React, { useEffect, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

import WhatsappIcon from "@/public/WhatsApp.svg";
import Image from "next/image";

function FloatingButton() {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const popUpFormOnClick = () => {
    dispatch(setPopupDilaogVisibility(true));
  };

  const openPhone = () => {
    window.open("tel:9831234910");
  };

  const openWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=%2B919831234910&text&type=phone_number&app_absent=0"
    );
  };

  //${pathname !== "/best-interior-designer-in-kolkata" ? "bg-black" : "bg-green-700"}

  return (
    <div className="fixed bottom-8 right-14 z-50 flex flex-col sm:flex-row items-center sm:right-3 sm:bottom-4 flexCenter">
      {pathname !== "/best-interior-designer-in-kolkata" ? (
        <>
          <button
            onClick={openWhatsapp}
            title="Show Contact Us Dialog Btn"
            className={`size-12 flexCenter z-[1] bg-black`}
          >
            <FaWhatsapp color="#fff" size={18} />
          </button>
          <button
            onClick={openPhone}
            title="Show Contact Us Dialog Btn"
            className={`size-12 bg-black flexCenter z-[2]`}
          >
            <IoMdCall color="#fff" size={18} />
          </button>
          <button
            title="Show Contact Us Dialog Btn"
            onClick={popUpFormOnClick}
            className={`size-12 bg-black flexCenter z-[3]`}
          >
            <BiMessageAdd color="#fff" size={20} />
          </button>
        </>
      ) : (
        <button
          onClick={openWhatsapp}
          title="Show Contact Us Dialog Btn"
          className={`size-12 flexCenter z-[1]`}
        >
          <Image src={WhatsappIcon} alt="Whatsapp icon" />
        </button>
      )}
    </div>
  );
}

export default FloatingButton;
