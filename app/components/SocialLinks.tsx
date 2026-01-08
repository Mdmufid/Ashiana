import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

interface IPorps {
  className?: string;
}

function SocialLinks({ className }: IPorps) {
  return (
    <div className={`flex flex-col justify-center gap-4 ${className}`}>
      <Link href="https://www.facebook.com/aashianainterio">
        <div className="flexCenter bg-[#006bf7] size-8 hover:scale-95 transition-all duration-300">
          <RiFacebookFill color="#fff" />
        </div>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=919831234910&text=Hi%20I%20contacted%20you%20through%20your%20website!%20Please%20call%20back%20as%20convenient,%20thanks!">
        <div className="flexCenter bg-[#43C051] size-8 hover:scale-95 transition-all duration-300">
          <FaWhatsapp color="#fff" />
        </div>
      </Link>
      <Link href="https://twitter.com/ashiana_int">
        <div className="flexCenter bg-[#1C96E8] size-8 hover:scale-95 transition-all duration-300">
          <FaTwitter color="#fff" />
        </div>
      </Link>
    </div>
  );
}

export default SocialLinks;
