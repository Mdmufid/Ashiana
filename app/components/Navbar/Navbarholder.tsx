"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import { nav_options } from "@/constant";

interface IProps {
  pReferral: React.RefObject<HTMLDivElement>;
}

const Navbarholder = ({ pReferral }: IProps) => {
  const [needToChnageHeaderBg, setNeedToChnageHeaderBg] = useState(false);
  const pathname = usePathname();

  const isRestrictedPath = () => {
    const value = nav_options.find((value) => value.path === pathname);

    if (!value || pathname.includes("projects") || pathname.includes("blog")) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isRestrictedPath()) return;

      const currentScrollPosition = pReferral.current?.scrollTop || 0;

      if (currentScrollPosition > 0) {
        // if (!needToChnageHeaderBg) {
        setNeedToChnageHeaderBg(true);
        // }
      } else {
        // if (needToChnageHeaderBg) {
        setNeedToChnageHeaderBg(false);
        // }
      }
    };

    pReferral.current?.addEventListener("scroll", handleScroll);

    return () => pReferral.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 top-0 backdrop-blur-md ${
        needToChnageHeaderBg
          ? " bg-[#ffffffd3]"
          : isRestrictedPath()
          ? "bg-[#ffffffd3] text-gray-800"
          : "text-gray-800"
      } transition-all duration-500`}
    >
      <Navbar
        pReferral={pReferral}
        isRestrictedPath={isRestrictedPath}
        needToChnageHeaderBg={needToChnageHeaderBg}
        className={
          needToChnageHeaderBg
            ? "text-gray-800"
            : isRestrictedPath()
            ? "text-gray-800"
            : "text-white"
        }
      />
    </header>
  );
};

export default Navbarholder;
