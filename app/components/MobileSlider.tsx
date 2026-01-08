"use client";

import React, { useState } from "react";
import { nav_options } from "@/constant";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSliderSlice } from "@/redux/slices/mobileSliderSlice";
import { RootState } from "@/redux/store";

export default function MobileSlider() {
  const [isSubMenuVisiable, setIsSubMenuVisiable] = useState(false);
  const sliderVisibility = useSelector(
    (state: RootState) => state.mobileSlider
  );
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const onAngleDownBtnClick = (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsSubMenuVisiable(!isSubMenuVisiable);
  };
  const closeSlider = () => {
    dispatch(setMobileSliderSlice(false));
  };
  const onMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    path: string
  ) => {
    event.stopPropagation();
    router.push(path);
    closeSlider();
  };

  const onSubMenuClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    path: string
  ) => {
    event.stopPropagation();
    router.push(path);
    closeSlider();
  };

  return (
    <aside
      onClick={closeSlider}
      className={`size-full z-[60] fixed flex justify-end top-[90px] ${
        sliderVisibility ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500`}
    >
      <div className="w-[75%] h-full bg-[#ffffff] shadow-2xl overflow-hidden">
        <ul className="size-full pt-4 overflow-y-scroll h-[90%] pb-10">
          {nav_options.map((item) => (
            <li
              key={item.id}
              onClick={(e) => onMenuItemClick(e, item.path)}
              className="w-full relative"
            >
              <div
                className={`josefin-sans-400 font-semibold py-3 px-5 flex justify-between items-center ${
                  pathname === item.path ? "bg-gray-700 text-white" : ""
                }`}
              >
                <span>{item.name}</span>
                {item.submenu ? (
                  <FaAngleDown
                    onClick={(e) => onAngleDownBtnClick(e)}
                    className={`${
                      isSubMenuVisiable ? "rotate-180" : "rotate-0"
                    } transition-all duration-300`}
                  />
                ) : null}
              </div>
              <ul
                className={`w-full overflow-hidden list-decimal ${
                  item.submenu && isSubMenuVisiable ? "max-h-96" : "max-h-0"
                } transition-all duration-300`}
              >
                {item.submenu?.map((subMenuItem) => (
                  <li
                    key={subMenuItem.id}
                    onClick={(e) => onSubMenuClick(e, subMenuItem.path)}
                    className={`josefin-sans-400 text-[12px] flex items-center gap-3 px-7 py-4 ${
                      pathname === subMenuItem.path
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                  >
                    {subMenuItem.icon ?  <subMenuItem.icon /> : null}
                    {subMenuItem.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
