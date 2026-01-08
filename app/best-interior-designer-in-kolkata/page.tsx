import Image from "next/image";
import React from "react";
import { MdWifiCalling3 } from "react-icons/md";

import About1 from "@/public/New Images/Recent/IMG1.jpeg";
import About2 from "@/public/New Images/Recent/IMG2.jpeg";
import About3 from "@/public/New Images/Recent/IMG3.jpeg";

import gallery8 from "@/public/New Images/Recent/IMG11.jpeg";
import ModularFurniture from "@/public/New Images/Residential/Residential9.jpeg";

import FalseCeling from "@/public/New Images/Recent/IMG1.jpeg";
import ELECTRICALCiling from "@/public/services/ELECTRICALID.webp";
import Link from "next/link";
import OpenLendingPagePopup from "../components/Popup/OpenLendingPagePopup";
import LandingPageForm from "../components/LandingPageForm";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import KitchenIcon from "@/public/lending-page-icon/kitchen.png";
import InteriordesignerIcon from "@/public/lending-page-icon/interiordesigner.png";
import ModulaerFurnitureIcon from "@/public/lending-page-icon/modularfurniture.png";
import FalseceilingIcon from "@/public/lending-page-icon/falseceiling.png";
import ElectricalservicesIcon from "@/public/lending-page-icon/electricalservices.png";
import FloorIcon from "@/public/lending-page-icon/Floor.png";
import PlumbingIcon from "@/public/lending-page-icon/plumbing.png";
import PaintingIcon from "@/public/lending-page-icon/painting.png";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import LendingPageSlider from "../components/LendingPageSlider";
import { FaGlobeAfrica } from "react-icons/fa";
import {
  FaArtstation,
  FaCreativeCommonsSa,
  FaDigitalOcean,
} from "react-icons/fa6";

import OpenLendingPagePopupAfterSomeSecounds from "../components/OpenLendingPagePopupAfterSomeSecounds";
import GalleryList from "../components/LandingPage/GalleryList";

const services = [
  {
    id: "1st",
    img: gallery8,
    heading: "BEST INTERIOR DESIGNS SOLUTION",
    description:
      "Welcome to Ashiana, where your dream home becomes a reality. At Ashiana, we specialize in creating exquisite interiors that blend functionality with elegance. Our team of expert designers is dedicated to transforming your living space into a haven of comfort and style. From modern minimalism to timeless classics, we tailor each project to reflect your unique taste and lifestyle. Explore our portfolio to discover a world of inspiring designs and innovative solutions. Let Ashiana bring your vision to life, ensuring every detail exceeds your expectations. Start your journey to a beautiful home with us today.",
    imgPosition: "left",
  },
  {
    id: "2nd",
    img: About2,
    heading: "BEST MODULAR KITCHEN DESIGNS SOLUTION",
    description:
      "A modular kitchen is a necessity in modern homes due to its efficiency, functionality, and aesthetic appeal. It offers customizable layouts that maximize space utilization, provide ample storage options, and enhance workflow during meal preparation. Modular kitchens are designed to accommodate various kitchen appliances, accessories, and personal preferences, ensuring a tailored experience that fits individual lifestyles. Choosing Ashiana for your modular kitchen ensures you benefit from our expertise in creating bespoke designs that combine style with practicality. We prioritize quality craftsmanship,   ",
    imgPosition: "right",
  },
  {
    id: "3rd",
    img: ModularFurniture,
    heading: "BEST MODULAR FURNITURE DESIGNS SOLUTION",
    description:
      "Modular furniture is essential for its versatility and adaptability. It allows businesses and homeowebers likewise to maximize their space efficiently, accommodating changing needs and layouts without major disruptions. Ashiana Interiors specializes in modular furniture that is customizable to fit specific tailored requirements, whether it's office cubicles, flexible seating arrangements, plush living room seatings, adjustable and lit Puja decks at home or modular storage solutions. This flexibility promotes a dynamic work environment, promotes ease and comfort,enhances productivity.                      ",
    imgPosition: "left",
  },
  {
    id: "4th",
    img: FalseCeling,
    heading: "BEST FALSE CEILING DESIGNS SOLUTION",
    description:
      "False ceilings play a crucial role in home decor, enhancing both residential and commercial spaces. They conceal structural elements like wiring and piping, creating a clean and polished look. Moreover, false ceilings offer opportunities for creative lighting solutions, such as recessed lights and LED strips, which add ambiance and functionality. In commercial settings, they contribute to a professional atmosphere while aiding in sound insulation and climate control. Residentially, they allow for personalized aesthetics, from minimalist designs to intricate patterns, transforming the feel of any room.    ",
    imgPosition: "right",
  },
  {
    id: "5th",
    img: ELECTRICALCiling,
    heading: "BEST ELECTRICAL SERVICES SOLUTION",
    description:
      "Welcome to Ashiana Interiors, your trusted partner for comprehensive electrical solutions. We specialize in a wide array of electrical services tailored for residential and commercial spaces. From basic installations to intricate rewiring projects, our skilled electricians deliver quality craftsmanship and adhere to stringent safety standards. We offer installation of lighting, switches, outlets, electrical panels, and backup power systems. Choose Ashiana Interiors for reliable service, attention to detail, and commitment to enhancing the efficiency and safety of your electrical infrastructure. ",
    imgPosition: "left",
  },
  // {
  //   id: "6th",
  //   img: FlooringImg,
  //   heading: "BEST FLOOR DESIGNS SOLUTION",
  //   description:
  //     "Ashiana understands the transformative power of flooring in Kolkata homes. We're not just installers; we're your trusted partner in crafting the perfect foundation for your dream space. From timeless elegance to modern innovation, we offer a curated selection of flooring options to suit any style and budget: Explore the endless possibilities of tile flooring. We offer a vast selection of ceramic, porcelain, and mosaic tiles, perfect for kitchens, bathrooms, and high-traffic areas. Our expert designers can help you choose the right size, pattern, and texture to complement your overall design scheme.",
  //   imgPosition: "right",
  // },
  // {
  //   id: "7th",
  //   img: PlumbingImg,
  //   heading: "BEST PLUMBING SERVICES SOLUTION",
  //   description:
  //     "At Ashiana, we understand the importance of a well-functioning plumbing system for your Kolkata home. We offer a comprehensive range of services to ensure your water flows smoothly and efficiently:Our skilled plumbers can install an entirely new plumbing system, whether for a new construction project or a complete renovation. We use high-quality materials and adhere to all building codes for a safe and reliable system.Our expertise extends to precise pipe laying and fitting, ensuring a leak-free and efficient water flow throughout your space. We can handle various pipe materials.",
  //   imgPosition: "left",
  // },
  // {
  //   id: "8th",
  //   img: PaintImg,
  //   heading: "BEST WALL PAINTING EXPERTS",
  //   description:
  //     "At Ashiana, we believe your Kolkata home deserves a canvas that reflects your unique style. That's why we offer a comprehensive range of painting and wallpaper services, empowering you to transform your walls and breathe new life into your space.Our skilled plumbers can install an entirely new plumbing system, whether for a new construction project or a complete renovation. We use high-quality materials and adhere to all building codes for a safe and reliable system.Our expertise extends to precise pipe laying and fitting, ensuring a leak-free and efficient water flow throughout your space.",
  //   imgPosition: "right",
  // },
];

const services_with_icons = [
  {
    name: "Interior Design",
    icon: InteriordesignerIcon,
    link: "#1st",
  },
  {
    name: "Modular Kitchen",
    icon: KitchenIcon,
    link: "#2nd",
  },
  {
    name: "Modular Furniture",
    icon: ModulaerFurnitureIcon,
    link: "#3rd",
  },
  {
    name: "False Ceiling",
    icon: FalseceilingIcon,
    link: "#4th",
  },
  {
    name: "Electrical Services",
    icon: ElectricalservicesIcon,
    link: "#5th",
  },
  {
    name: "Floor Design",
    icon: FloorIcon,
    link: "#6th",
  },
  {
    name: "Plumbing Services",
    icon: PlumbingIcon,
    link: "#7th",
  },
  {
    name: "Wall Painting ",
    icon: PaintingIcon,
    link: "#8th",
  },
];

const gridInfoList = [
  {
    title: "Customized Design Solutions",
    subtitle:
      "Tailored designs crafted to suit the unique preferences and lifestyle of each client.",
    image: <FaGlobeAfrica size={50} />,
  },
  {
    title: "Innovative Space Optimization",
    subtitle:
      "Expertise in maximizing the functionality and aesthetics of any space, no matter the size or layout.",
    image: <FaArtstation size={50} />,
  },
  {
    title: "Seamless Project Management",
    subtitle:
      "Smooth execution from concept to completion, with dedicated project managers ensuring timelines and budgets are met.",
    image: <FaDigitalOcean size={50} />,
  },
  {
    title: "Post-Project Support & Maintenance",
    subtitle:
      "Continued support and maintenance services post-project completion, ensuring client satisfaction and peace of mind.",
    image: <FaCreativeCommonsSa size={50} />,
  },
];

const clients = Array.from(
  { length: 21 },
  (_, i) => `/clients/${i + 1}.webp`
).map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function page() {
  return (
    <section className="pt-[90px]">
      <OpenLendingPagePopupAfterSomeSecounds />

      <LendingPageSlider />
      <div className="w-[86%] mx-auto">
        {/* About us section */}
        <div className="mt-8 relative">
          <div className="flex flex-wrap justify-between gap-5">
            <h2 className="font-tex flex-grow text-[#073842] leading-[1em] text-left text-[2.8rem] uppercase md:w-full sm:text-2xl sm:text-center sm:w-full sm:pb-5">
              Interior Decoration at Your Budget
            </h2>
            <div className="flex items-center flex-wrap gap-y-3 gap-5 text-lg font-semibold text-[#073842] sm:hidden">
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
          </div>
          <div className="w-full border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>
          <div className="grid grid-cols-2 py-10 sm:grid-cols-1 sm:pt-0">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
              <div className="relative row-span-2 group/gallery overflow-hidden">
                <h5 className="bg-[#000000cc] group-hover/gallery:-translate-y-[200%] transition-all duration-300 text-sm text-white font-semibold absolute top-3 right-3 px-3 rounded-full">
                  Residential
                </h5>
                <Image
                  className="h-full object-cover"
                  src={About1}
                  alt="About 1"
                />
              </div>

              <div className="relative group/gallery overflow-hidden">
                <h5 className="bg-[#000000cc] group-hover/gallery:-translate-y-[200%] transition-all duration-300 text-sm text-white font-semibold absolute top-3 right-3 px-3 rounded-full">
                  Kitchen
                </h5>
                <Image className="size-full object-cover" src={About2} alt="About 2" />
              </div>

              <div className="relative group/gallery overflow-hidden">
                <h5 className="bg-[#000000cc] group-hover/gallery:-translate-y-[200%] transition-all duration-300 text-sm text-white font-semibold absolute top-3 right-3 px-3 rounded-full">
                  Residential
                </h5>
                <Image className="size-full object-cover" src={About3} alt="About 3" />
              </div>
            </div>

            <div className="flex justify-center flex-col gap-5 px-10 sm:px-0">
              <h3 className="font-tex uppercase text-4xl tracking-widest text-[#073842] sm:text-2xl sm:pt-4">
                Award winning interior designs
              </h3>
              <p className="tracking-wider leading-6 font-tex-reg text-sm">
                Founded in the heart of Kolkata, Ashiana Interiors has pioneered
                the city&apos;s aesthetic for over two decades. With a rich
                history steeped in creativity and craftsmanship, our journey
                began with a vision to redefine interior design, blending
                tradition with contemporary flair.
              </p>

              <div>
                <LandingPageForm />
              </div>

              <div className="w-full">
                <Link href="tel:9831234910">
                  <button className="w-auto text-black flexCenter mt-3 gap-2 border-black border rounded-md text-sm px-4 py-2 min-w-32 font-semibold tracking-wider">
                    <MdWifiCalling3 />
                    Make A Call Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* END-TO-END INTERIOR SOLUTIONS */}
        <div className="mt-6">
          <h2 className="font-tex flex-grow text-[#073842] leading-[1em] text-left text-[2.8rem] uppercase sm:w-full sm:text-2xl md:w-full sm:text-center">
            End-to-end interior solutions
          </h2>
          <div className="w-full border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>

          <ul className="mt-10 flex flex-wrap justify-center gap-10">
            {services_with_icons.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="flexCenter block basis-40 flex-col gap-3 py-4 font-semibold text-[#073842]"
                >
                  <Image
                    className="w-14 h-14 grayscale object-cover"
                    src={item.icon}
                    alt=""
                  />
                  <h2>{item.name}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Gallery */}
        <div className="mt-10 mb-20">
          <h2 className="font-tex  flex-grow text-[#073842] leading-[1em] text-left text-[2.8rem] uppercase sm:w-full sm:text-2xl md:w-full sm:text-center">
            OUR GALLERY
          </h2>
          <div className="w-full border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>
          <GalleryList />
        </div>

        {/* Why Choose Us */}
        <section className="w-full mt-10">
          <h2 className="font-tex flex-grow text-[#073842] leading-[1em] text-left text-[2.8rem] uppercase sm:w-full sm:text-2xl md:w-full sm:text-center">
            Why Choose Us
          </h2>
          <div className="w-full border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>

          <ul className="w-full grid grid-cols-4 gap-[30px] sm:grid-cols-1 sm:px-5 sm:pb-10 mt-16 md:grid-cols-2">
            {gridInfoList.map((item, index) => (
              <li
                key={index}
                className="w-full text-[#203556] flex flex-col justify-start items-center relative"
              >
                {item.image}
                <div className="w-full">
                  <h3 className="font-semibold text-[1.3rem] mt-[1rem] text-[#203556] josefin-sans-400 text-center">
                    {item.title}
                  </h3>
                  <p className="text-[15px] mt-[0.2rem] text-[#597274] text-center">
                    {item.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* All Services List */}
        <div className="mt-16">
          <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[2.8rem] uppercase sm:w-full sm:text-2xl md:w-full sm:text-center">
            Our Premium Services
          </h2>
          <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>
          <ul>
            {services.map((item, index) => (
              <li
                key={index}
                className="grid relative grid-cols-2 max-h-[35em] overflow-hidden sm:grid-cols-1 sm:max-h-full"
              >
                <div className="absolute -top-20" id={item.id}></div>
                <div
                  className={`${
                    item.imgPosition === "left" ? "order-1" : "order-2"
                  } sm:order-1`}
                >
                  <Image
                    className={`min-h-[35rem] max-h-[35rem] object-cover sm:min-h-60 sm:max-h-60`}
                    src={item.img}
                    alt=""
                  />
                </div>
                <div
                  className={`flex flex-col space-y-5 justify-center py-10 ${
                    item.imgPosition === "left"
                      ? "order-2 px-10 sm:px-0"
                      : "order-1 pr-10 sm:pr-0"
                  } sm:order-2`}
                >
                  <h2 className="font-tex text-4xl leading-[2.8rem] text-[#073842] sm:text-2xl">
                    {item.heading}
                  </h2>
                  {/* <p className="ext-sm leading-8 text-gray-500">
                    {item.description}
                  </p> */}

                  <div className="w-full">
                    <OpenLendingPagePopup>
                      <div className="w-auto text-black mt-3 border-black border rounded-md text-sm px-4 py-2 min-w-32 font-semibold tracking-wider">
                        Contact us
                      </div>
                    </OpenLendingPagePopup>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Clients */}
        <div className="mt-10">
          <h2 className="font-tex flex-grow text-[#073842] leading-[1em] text-left text-[2.8rem] uppercase sm:w-full sm:text-2xl md:w-full sm:text-center">
            Our satisfied Clients
          </h2>
          <div className="w-full border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>
          <div className="mt-10">
            <ImageCarousel
              direction="left-to-right"
              images={clients}
              speed={60000}
            />
          </div>
        </div>

        <div className="mt-10">
          <div
            className="elfsight-app-bbe512e4-6e88-469a-8d1e-870b9210a367"
            data-elfsight-app-lazy
          ></div>
        </div>

        <div className="pb-10 mt-10">
          <h2 className="font-tex flex-grow text-[#073842] leading-[1em] text-left text-[2.8rem] uppercase sm:w-full sm:text-2xl md:w-full sm:text-center">
            Contact Us
          </h2>
          <div className="w-full border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-4 sm:pt-4 md:flex-col md:items-start md:mt-4"></div>

          <div className="flexCenter mt-10">
            <div className="w-[68%] space-y-7 sm:w-full">
              {/* <div>
              <h2 className="font-tex text-4xl uppercase text-[#073842]">
                Contact Us
              </h2>
              <p>
                Fill out the contact form, and we will get back to you soon.
              </p>
            </div> */}

              <LandingPageForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
