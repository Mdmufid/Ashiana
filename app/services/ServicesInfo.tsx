import Image from "next/image";
import React from "react";
import CollepseMenuLayout from "./CollepseMenuLayout";
import IntersectionObserverComponent from "../components/IntersectionObserverComponent";
import { IoMdArrowDown } from "react-icons/io";
import Link from "next/link";
import { encodeUrl } from "@/utils/decodeUrl";
import { FaLongArrowAltDown } from "react-icons/fa";

interface IProps {
  otherchildren?: React.ReactNode;
  catName?: string;
  topHeading?: string;
  imagePosition: "left" | "right";
  imagesrc: string;
  menuinfo: { heading: string; subtitle: string }[];
  description?: string;
  readMoreLink?: string;
}

function ServicesInfo({
  otherchildren,
  catName,
  topHeading,
  imagePosition,
  imagesrc,
  menuinfo,
  description,
  readMoreLink,
}: IProps) {
  return (
    <section className="w-full h-full">
      <div className="w-full grid grid-cols-2 max-h-full sm:grid-cols-1 overflow-hidden">
        {imagePosition === "left" ? (
          <>
            <IntersectionObserverComponent
              beforeAnimation="opacity-[0.5] drop-shadow-md"
              afterAnimation="opacity-[1] drop-shadow-none"
              className="overflow-hidden h-[30rem] sm:h-[13rem] w-full"
            >
              <Image
                className="object-cover size-full"
                src={imagesrc}
                alt="img"
                height={1200}
                width={1200}
              />
            </IntersectionObserverComponent>

            <div className="w-full px-14 sm:px-0 overflow-hidden relative">
              {/* <IntersectionObserverComponent
                beforeAnimation="translate-x-[50%]"
                afterAnimation="translate-x-0"
              > */}
              <a id={catName?.replaceAll(" ", "_")}></a>
              {topHeading ? (
                <div className="w-full flex items-center justify-between pb-5 sm:flex-col sm:items-start sm:pt-5">
                  <h3 className="text-[1.5rem] josefin-sans-400 text-[#073842] sm:text-[1.4rem]">
                    {topHeading}
                  </h3>
                  <Link
                    className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-0"
                    href={`/services/${encodeUrl(catName || "")}`}
                  >
                    <span>Explore more</span>
                    <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
                    <IoMdArrowDown className="-rotate-[130deg]" size={20} />
                  </Link>
                </div>
              ) : null}
              {description ? (
                <>
                  <p
                    dangerouslySetInnerHTML={{ __html: description || "" }}
                    className="tracking-widest text-gray-600 text-justify leading-7"
                  ></p>

                  <Link
                    href={readMoreLink || ""}
                    className="flex items-center gap-3 underline text-[16px] font-medium josefin-sans-400 text-gray-600 pt-5"
                  >
                    Read More
                    <FaLongArrowAltDown className="-rotate-90" />
                  </Link>
                </>
              ) : (
                <CollepseMenuLayout info={menuinfo} />
              )}

              {otherchildren}
              <span
                // href="/contact-us"
                className="font-medium text-[20px] my-5 sm:my-4 flex items-center gap-2 bottom-0 josefin-sans-400 sm:static"
              >
                <span>
                  For {catName} Solutions in Kolkata :{" "}
                  <Link href="/contact-us" className="underline text-[16px]">
                    Contact us now
                  </Link>
                </span>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={`w-full px-14 sm:px-0 relative sm:order-1`}>
              <a id={catName?.replaceAll(" ", "_")}></a>
              {topHeading ? (
                <div className="w-full flex items-center justify-between pb-5 sm:flex-col sm:items-start sm:pt-5">
                  <h3 className="text-[1.5rem] josefin-sans-400 text-[#073842] sm:text-[1.4rem]">
                    {topHeading}
                  </h3>
                  <Link
                    className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-0"
                    href={`/services/${encodeUrl(catName || "")}`}
                  >
                    <span>Explore more</span>
                    <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
                    <IoMdArrowDown className="-rotate-[130deg]" size={20} />
                  </Link>
                </div>
              ) : null}

              {description ? (
                <>
                  <p
                    dangerouslySetInnerHTML={{ __html: description || "" }}
                    className="tracking-widest text-gray-600 text-justify leading-7"
                  ></p>

                  <Link
                    href={readMoreLink || ""}
                    className="flex items-center gap-3 underline text-[16px] font-medium josefin-sans-400 text-gray-600 pt-5"
                  >
                    Read More
                    <FaLongArrowAltDown className="-rotate-90" />
                  </Link>
                </>
              ) : (
                <CollepseMenuLayout info={menuinfo} />
              )}
              {otherchildren}
              <span
                // href="/contact-us"
                className="font-medium text-[20px] sm:my-4 flex items-center gap-2 my-10 bottom-0 josefin-sans-400 sm:static"
              >
                <span>
                  For {catName} Solutions in Kolkata :{" "}
                  <Link href="/contact-us" className="underline text-[16px]">
                    Contact us now
                  </Link>
                </span>
              </span>
            </div>
            <IntersectionObserverComponent
              beforeAnimation="opacity-[0.5] drop-shadow-md"
              afterAnimation="opacity-[1] drop-shadow-none"
              className="overflow-hidden h-[30rem] sm:h-[13rem] w-full sm:order-2"
            >
              <Image
                className="object-cover size-full"
                src={imagesrc}
                alt="img"
                height={1200}
                width={1200}
              />
            </IntersectionObserverComponent>
          </>
        )}
      </div>
    </section>
  );
}

export default ServicesInfo;
