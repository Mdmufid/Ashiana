import Link from "next/link";
import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import OpenContactPopupBtn from "../components/Popup/OpenContactPopupBtn";
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";
import FAQ from "../components/FAQ";
import SubHeading from "../blog/SubHeading";
import { encodeUrl } from "@/utils/decodeUrl";
import ShimmerImage from "../components/ShimmerImage";
import Navigator from "./Navigator";

interface IProps {
  navigatorInfo: { text: string; link: string }[];
  topheading: string;
  blogheading: string;
  topimage: string;
  blogimage: string;
  servicename: string;
  servicesList: {
    link: string;
    text: string;
  }[];
  children: React.ReactNode;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function EachServiceLayout(props: IProps) {
  return (
    <section>
      <div className="w-full relative overflow-hidden h-[25rem] sm:h-[18rem]">
        <Image
          className="size-full object-cover"
          src={props.topimage}
          alt="banner imag"
          height={1980}
          width={1980}
        />
        <div className="size-full bg-[#000000b2] absolute top-0 bottom-0 flex items-center px-32 sm:px-5">
          <div>
            <h2 className="text-white font-tex text-3xl tracking-wider mt-16 sm:mt-20 sm:line-clamp-2">
              {props.topheading}
            </h2>
            <Navigator
              className="text-white text-[0.8rem] mt-3"
              info={props.navigatorInfo}
            />
          </div>
        </div>
      </div>

      <div className="flex items-start px-10 py-10 sm:flex-col sm:px-5">
        <section className="w-[70%] sm:w-full">
          <ShimmerImage
            className="h-[38rem] w-full object-cover sm:h-[12rem]"
            alt="images"
            src={props.blogimage}
            width={1280}
            height={720}
          />
          <SubHeading
            type="H1"
            className="text-[36px] leading-[48px] sm:text-[20px] sm:leading-[30px] sm:tracking-wider"
            text={props.blogheading}
          />
          {props.children}
          <div className="mt-10">
            <FAQ faqs={props.faqs} />
          </div>
        </section>
        <section className="w-[30%] px-10 sm:px-0 sm:w-full sm:mt-10">
          <div className="w-full bg-[#F9F9F9] px-5 py-5 space-y-4 rounded-xl">
            {props.servicesList.map((service) =>
              //   <div className="w-full">
              service.link !== `/services/${encodeUrl(props.servicename)}` ? (
                <Link
                  key={service.text}
                  href={service.link}
                  className="flex border-b py-3 josefin-sans-400 text-sm items-center justify-between hover:text-yellow-500 transition-all duration-300"
                >
                  <span>{service.text}</span>

                  <IoMdArrowDown className="-rotate-[130deg]" size={20} />
                </Link>
              ) : null
            )}
          </div>
          <OpenContactPopupBtn>
            <ShimmerImage
              className="mt-6"
              src="/services/sidebanner.webp"
              alt=""
              height={1200}
              width={1200}
            />
          </OpenContactPopupBtn>

          <div className="w-full bg-[#F9F9F9] flex flex-col items-center mt-6 josefin-sans-400 ">
            <div className="w-full py-5 bg-[#267ECE] px-8">
              <h2 className="text-white text-2xl font-bold ">Working Hours:</h2>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <p className="font-semibold">Monday - Saturday :</p>
                <p className="text-gray-600 font-normal">10:00AM to 06:00PM</p>
              </div>
              <div>
                <p className="font-semibold">Sunday :</p>
                <p className="text-gray-600 font-normal">Close</p>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#F9F9F9] flex flex-col items-center mt-6 josefin-sans-400 ">
            <div className="w-full py-5 bg-[#267ECE] px-8">
              <h2 className="text-white text-2xl font-bold ">Get In Touch:</h2>
            </div>

            <Link
              href="mailto:subrata.ash@gmail.com"
              className="flex items-center gap-2 pt-10"
            >
              <MdOutlineMail />
              <span>subrata.ash@gmail.com</span>
            </Link>
            <Link
              href="tel:9831234910"
              className="flex items-center gap-2 pb-10 pt-3"
            >
              <FaSquarePhone />
              <span>9831234910</span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
