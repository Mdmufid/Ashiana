import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";

interface IPorps {
  isRestrictedPath : () => boolean;
  needToChnageHeaderBg ? : boolean;
  className?: string;
  pReferral: React.RefObject<HTMLDivElement>;
}

export default function Navbar({ isRestrictedPath, needToChnageHeaderBg, className, pReferral }: IPorps) {
  return (
    <div
      className={`w-full text-[#ffffffe1] drop-shadow-2xl flex items-center justify-center h-[90px]  ${className}`}
    >
      <div className="w-[86%] h-full flex items-center border-b border-[#ffffff6b] sm:w-full sm:px-5 md:px-0 md:w-[95%]">
        <Link aria-label="ashiana interiors logo" className="sm:flex-grow" href="/">
          <Image className="w-40" src={needToChnageHeaderBg ? "/black_logo.webp" : isRestrictedPath() ? "/black_logo.webp" : "/logo.webp"} alt="" height={1200} width={1200}/>
        </Link>

        <NavMenu pReferral={pReferral}/>
      </div>
    </div>
  );
}
