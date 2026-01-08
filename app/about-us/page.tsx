import React from "react";
import Image from "next/image";
import ProjectSlider from "./ProjectSlider";
import ShowCases from "./ShowCases";
import ContactUs from "../components/ContactUs/ContactUs";
import { Metadata } from "next";
import ShimmerImage from "../components/ShimmerImage";

export const metadata: Metadata = {
  title: "About Us | Ashiana Interiors Kolkata",
  description:
    "Learn everything about us and get insights into our design philosophy and expertise. Discover Ashiana Interiors Kolkata - Crafting spaces with passion.",
  alternates: {
    canonical: "/about-us",
  },
};

function page() {
  return (
    <section className="min-h-[35rem]">
      <div className="w-full relative overflow-hidden h-[32rem] sm:h-[21rem]">
        <Image
          className="size-full object-cover object-left-bottom"
          src="/banner/v1-1.webp"
          alt="banner imag"
          height={1980}
          width={1980}
        />
      </div>

      <div className="px-28 sm:px-5 max-layout">
        <div className="w-full grid grid-cols-2 mt-20 gap-20 sm:grid-cols-1 sm:mt-9">
          <div className="w-full">
            <h1 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-8xl sm:text-4xl sm:w-full">
              About Us
            </h1>
            <div className="w-full bg-[#0738421f] h-[1px] my-6 sm:my-3"></div>
            <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow sm:text-[1.3rem]">
              Where Imagination Meets Interiors
            </p>
          </div>

          <div className="w-full">
            <div className="relative h-[18rem] sm:flex sm:justify-center sm:h-[18rem]">
              <ShimmerImage
                className="w-72 absolute"
                src="/about/sa3.webp"
                alt="img1"
                height={1200}
                width={1200}
              />
              <ShimmerImage
                className="w-72 absolute right-48 top-3 sm:right-0 sm:top-0 sm:hidden"
                src="/about/sa8.webp"
                alt="img2"
                height={1200}
                width={1200}
              />
              <ShimmerImage
                className="w-72 absolute right-40 top-7 sm:right-0 sm:top-0 sm:hidden"
                src="/about/sa10.webp"
                alt="img3"
                height={1200}
                width={1200}
              />
            </div>
          </div>
        </div>

        <div className="w-full space-y-6 text-justify">
          <p className="josefin-sans-400 text-gray-500 tracking-wider sm:mt-10">
            Since 1995, Ashiana Interiors has built a legacy of creating
            elegant, functional, and inspiring interiors across Kolkata and
            beyond. Ashiana Interiors Kolkata is the best interior design firm
            dedicated to transforming spaces into personalized havens that
            reflect individual style and functionality. With a commitment to
            excellence and a passion for innovation, we craft bespoke interiors
            that resonate with our client&apos;s visions and aspirations.
          </p>
          <p className="josefin-sans-400 text-gray-500 tracking-wider sm:mt-10">
            At Ashiana Interiors Kolkata, we believe in the power of
            collaboration. Our team of experienced designers works closely with
            clients, listening attentively to their needs and preferences, to
            deliver exceptional results that surpass expectations. From
            conceptualization to execution, we prioritize communication and
            transparency, ensuring a seamless and enjoyable design experience
            for every client.
          </p>
          <p className="josefin-sans-400 text-gray-500 tracking-wider sm:mt-10">
            Driven by a relentless pursuit of quality, we source materials and
            furnishings from trusted suppliers, ensuring that every aspect of
            our designs meets the highest standards of craftsmanship and
            durability. Whether it&apos;s a residential space, commercial
            establishment, or hospitality venue, we approach each project with
            creativity, precision, and attention to detail, resulting in spaces
            that are both aesthetically stunning and functionally efficient.
          </p>

          <p className="josefin-sans-400 text-gray-500 tracking-wider sm:mt-10">
            At Ashiana Interiors Kolkata, we don&apos;t just create interiors;
            we curate experiences that enrich lives and inspire admiration.
            Trust us to bring your vision to life and transform your space into
            a reflection of your unique personality and lifestyle.
          </p>
        </div>

        <ProjectSlider />
        <ShowCases />
      </div>

      {/* <OurTeam /> */}
      <ContactUs />
    </section>
  );
}

export default page;
