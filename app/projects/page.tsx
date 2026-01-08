import React from "react";
import Link from "next/link";
import { decodeUrl, encodeUrl } from "@/utils/decodeUrl";
import OpenShowImageDialgoBtn from "../components/Popup/OpenShowImageDialgoBtn";
import ShimmerImage from "../components/ShimmerImage";
import { Metadata } from "next";
import Readmoretext from "../components/Readmoretext";
import { IoMdArrowDown } from "react-icons/io";

export const metadata: Metadata = {
  title: "Projects Gallery | Ashiana Interiors",
  description:
    "Explore the Ashiana Interiors Projects Gallery for inspiring interior designs and innovative solutions in Kolkata. Check our previous projects and contact us!",
  alternates: {
    canonical: "/projects",
  },
};

function ProjectsPage({ searchParams }: { searchParams: { catname: string } }) {
  const originalCatName = searchParams.catname || "residential";
  const catname = decodeUrl(originalCatName);

  const catnames = [
    "RESIDENTIAL",
    "OFFICE INTERIOR",
    "HOTEL & RESTAURANT",
    "JEWELLERY SHOWROOM",
    "EXTERIOR DESIGN",
  ];

  const datas: any = {
    residential: [
      "r1.webp",
      "r2.webp",
      "r3.webp",
      "r4.webp",
      "r5.webp",
      "r6.webp",
      "r7.webp",
    ],
    "office-interior": ["o1.webp", "o2.webp", "o3.webp", "o4.webp"],
    "jewellery-showroom": [
      "j1.webp",
      "j2.webp",
      "j3.webp",
      "j4.webp",
      "j5.webp",
      "j6.webp",
      "j7.webp",
      "j8.webp",
      "j9.webp",
    ],
    "hotel-and-restaurant": ["h1.webp", "h2.webp", "h3.webp", "h4.webp"],
    "exterior-design": ["ou1.webp", "ou2.webp", "ou3.webp", "ou4.webp"],
  };

  const selectedCatIndex = catnames.indexOf(catname.toLocaleUpperCase());

  return (
    <main className="w-full flex flex-col items-start pt-[90px]">
      {/* <Navbar className="text-gray-800" /> */}

      <div className="px-20 sm:px-5 w-full">
        <h1 className="font-tex text-[#073842] leading-[1em] text-8xl mt-3 text-center sm:text-6xl">
          Projects
        </h1>

        <Readmoretext className="text-sm text-gray-700 josefin-sans-400 text-center pt-6 leading-7 hidden sm:block">
          Discover the creativity and expertise of Ashiana Interiors Kolkata
          through our Projects Gallery. Each project showcases our commitment to
          excellence, featuring innovative designs and meticulous attention to
          detail. From modern living spaces to elegant commercial interiors, our
          gallery highlights various styles tailored to meet our clients&apos; unique
          needs. Explore the craftsmanship and quality that set us apart in the
          interior design industry. Whether you seek inspiration or wish to see
          our capabilities firsthand, our Projects Gallery is the perfect place
          to start your journey toward transforming your space.{" "}
          <Link className="text-blue-600" href={"/contact-us"}>
            Contact us
          </Link>{" "}
          today!!
        </Readmoretext>
        <p className="text-sm text-gray-700 josefin-sans-400 text-center pt-6 leading-7 sm:hidden">
          Discover the creativity and expertise of Ashiana Interiors Kolkata
          through our Projects Gallery. Each project showcases our commitment to
          excellence, featuring innovative designs and meticulous attention to
          detail. From modern living spaces to elegant commercial interiors, our
          gallery highlights various styles tailored to meet our clients&apos; unique
          needs. Explore the craftsmanship and quality that set us apart in the
          interior design industry. Whether you seek inspiration or wish to see
          our capabilities firsthand, our Projects Gallery is the perfect place
          to start your journey toward transforming your space.{" "}
          <Link className="text-blue-600" href={"/contact-us"}>
            Contact us
          </Link>{" "}
          today!!
        </p>

        {/* <div className="flex items-center gap-4"> */}
          {/* <IoMdArrowDown className="rotate-90" size={25}/> */}
          <ul className="w-full my-10 flex items-center justify-center gap-6 overflow-x-scroll sm:justify-start hiddenScrollbar">
            {catnames.map((catname, index) => (
              <Link
                className="block flex-shrink-0"
                key={catname}
                href={encodeUrl(`/projects?catname=${catname.toLowerCase()}`)}
              >
                <li
                  className={`font-tex ${
                    index === selectedCatIndex
                      ? "bg-[#07384221]"
                      : "border shdowCategory border-[#07384221]"
                  } text-xs px-3 py-3 tracking-wider`}
                >
                  {catname}
                </li>
              </Link>
            ))}
          </ul>
        {/* </div> */}

        <ul className="grid grid-cols-3 flex-grow gap-10 sm:grid-cols-1">
          {datas[`${originalCatName}`].map((src: any, index: any) => (
            <li key={index} className={`w-full transition-all duration-500`}>
              <OpenShowImageDialgoBtn
                className="overflow-hidden w-full"
                imgSrc={`/projects/${originalCatName}/${src}`}
              >
                {/* categoryBorderRedious */}

                <ShimmerImage
                  src={`/projects/${originalCatName}/${src}`}
                  alt=""
                  placeholder="blur"
                  blurDataURL="/loading.webp"
                  className="h-[18%] sm:h-[220px] object-cover"
                  width={520}
                  height={362}
                />
                {/* <Image
                  src={`/projects/${originalCatName}/${src}`}
                  alt=""
                  placeholder="blur"
                  blurDataURL="/loading.webp"
                  className="h-[220px] object-cover"
                  width={520}
                  height={362}
                /> */}
                {/* <div className="py-3 space-y-4 text-left">
                  <h2 className="font-tex text-xl text-[#073842] tracking-wider">
                    Modern Minimalism
                  </h2>
                  <span className="text-[#7F7F7F] font-semibold text-xs">
                    HIGH LINE
                  </span>
                </div> */}
              </OpenShowImageDialgoBtn>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ProjectsPage;
