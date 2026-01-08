"use client";

import React, { useEffect, useState } from "react";
import Navoptions from "./Navoptions";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { nav_options } from "@/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSliderSlice } from "@/redux/slices/mobileSliderSlice";
import { RootState } from "@/redux/store";
import { Link } from "react-alice-carousel";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { usePathname } from "next/navigation";

interface IProps {
  pReferral: React.RefObject<HTMLDivElement>;
}

function NavMenu({ pReferral }: IProps) {
  const mobileNavVisibility = useSelector(
    (state: RootState) => state.mobileSlider
  );
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (mobileNavVisibility) {
        handleCloseHambargerMenu();
      }
    };
    pReferral.current?.addEventListener("scroll", handleScroll);
    return () => pReferral.current?.addEventListener("scroll", handleScroll);
  }, []);

  const handleHambargerMenu = () => {
    dispatch(setMobileSliderSlice(true));
    // setMobileNavVisibility(true);
  };

  const handleCloseHambargerMenu = () => {
    dispatch(setMobileSliderSlice(false));
    // setMobileNavVisibility(false);
  };

  return (
    <>
      <nav
        className={`flex-grow font-[600] h-full flex overflow-hidden sm:hidden items-center gap-7 justify-end josefin-sans-500 sm:absolute sm:flex-col sm:bg-[#ffffffef] sm:right-0 sm:text-black sm:top-[90px] sm:h-auto sm:w-full sm:items-start sm:gap-5 sm:px-6 sm:drop-shadow-2xl sm:transition-all duration-250`}
      >
        {nav_options.map((navItem, index) => (
          <Navoptions key={index} navItem={navItem} />
        ))}
      </nav>
      {pathname === "/best-interior-designer-in-kolkata" ? (
        <div className="gap-3 mr-4 mt-1 hidden sm:flex items-center justify-center">
          <Link
            className="flex gap-2 items-center size-10 bg-gray-200 flexCenter rounded-md"
            href={"tel:9831234910"}
          >
            <FiPhoneCall size={18} />
          </Link>
          <Link
            className="flex gap-2 items-center size-10 bg-gray-200 flexCenter rounded-md"
            href={"mailto:subrata.ash@gmail.com"}
          >
            <MdOutlineEmail size={18} />
          </Link>
        </div>
      ) : null}

      <RxHamburgerMenu
        onClick={handleHambargerMenu}
        size={28}
        className={`cursor-pointer hidden ${
          mobileNavVisibility ? "sm:hidden" : "sm:block"
        }`}
      />
      <TfiClose
        onClick={handleCloseHambargerMenu}
        size={20}
        className={`cursor-pointer hidden ${
          mobileNavVisibility ? "sm:block" : "sm:hidden"
        }`}
      />
    </>
  );
}

export default NavMenu;
