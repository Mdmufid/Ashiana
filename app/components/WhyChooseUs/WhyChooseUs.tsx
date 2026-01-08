import React from "react";
import {
  FaArtstation,
  FaCreativeCommonsSa,
  FaDigitalOcean,
  FaGlobeAfrica,
} from "react-icons/fa";

function WhyChooseUs() {
  const gridInfoList = [
    {
      title: "Customized Design Solutions",
      subtitle:
        "Tailored designs crafted to suit the unique preferences and lifestyle of each client.",
      image: <FaGlobeAfrica size={60} />,
    },
    {
      title: "Innovative Space Optimization",
      subtitle:
        "Expertise in maximizing the functionality and aesthetics of any space, no matter the size or layout.",
      image: <FaArtstation size={60} />,
    },
    {
      title: "Seamless Project Management",
      subtitle:
        "Smooth execution from concept to completion, with dedicated project managers ensuring timelines and budgets are met.",
      image: <FaDigitalOcean size={60} />,
    },
    {
      title: "Post-Project Support & Maintenance",
      subtitle:
        "Continued support and maintenance services post-project completion, ensuring client satisfaction and peace of mind.",
      image: <FaCreativeCommonsSa size={60} />,
    },
  ];
  return (
    <section className="w-full px-28 sm:px-5 mt-0 sm:mt-10 max-layout">
      <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl">
        WHY CHOOSE US?
      </h2>
      <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:pt-5 sm:mt-5 sm:flex-col sm:items-start">
        {/* <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
          Your Vision, Our Design Expertise
        </p> */}
      </div>
      <ul className="w-full grid grid-cols-4 gap-[30px] sm:grid-cols-1 sm:px-5 sm:pb-10 mt-16 md:grid-cols-2">
        {gridInfoList.map((item, index) => (
          <li key={index} className="w-full text-[#203556] flex flex-col justify-start items-center relative">
            {item.image}
            <div className="size-8 bg-[#203556] text-white flexCenter rounded-full font-semibold text-sm absolute right-[5rem] -top-5">
              {index + 1}
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-[1.4rem] mt-[1rem] text-[#203556] josefin-sans-400 text-center">
                {item.title}
              </h3>
              <p className="text-[1rem] mt-[0.2rem] text-[#597274] text-center">
                {item.subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseUs;
