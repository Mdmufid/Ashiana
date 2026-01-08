"use client";

import React, { useState } from "react";
import TabItem from "../TabItem";

function AboutTabs() {
  const [currentTabIndex, setCurretnTabIndex] = useState(0);

  const tabDatas = [
    {
      tabName: "History",
      tabDescription:
        "Founded in the year 1995, in the heart of Kolkata, Ashiana Interiors has pioneered the city's aesthetic for over two decades. With a rich history steeped in creativity and craftsmanship, our journey began with a vision to redefine interior design, blending tradition with contemporary flair. From humble beginnings to becoming a trusted name synonymous with elegance and sophistication, we have consistently delighted clients with our innovative designs and attention to detail. Today, Ashiana Interiors is a testament to Kolkata's evolving interior designs, continually pushing boundaries to create timeless spaces that resonate with charm and character.",
    },
    {
      tabName: "Mission",
      tabDescription:
        "At Ashiana Interiors Kolkata, our mission is to redefine the art of interior design by seamlessly blending creativity, functionality, and elegance. We strive to create personalized spaces that reflect the unique vision and lifestyle of each client, enhancing their living experience through innovative design solutions and impeccable craftsmanship.",
    },
    {
      tabName: "Vision",
      tabDescription:
        "At Ashiana Interiors Kolkata, our vision transcends mere aesthetics; we strive to create living spaces that echo individuality and inspire a sense of belonging. With meticulous attention to detail and a passion for innovation, we aim to craft interiors that not only fulfill functional needs but also evoke emotions and enrich lives. Our commitment lies in transforming visions into reality, shaping environments that resonate with timeless elegance and contemporary flair, and making every space a reflection of personal style and refined taste.",
    },
  ];

  const onAnyTabItemClicked = (index : number) => {
    setCurretnTabIndex(index);
  };

  return (
    <div className="w-full px-2 sm:px-0">
      <ul className="w-full flex items-center gap-7 text-[21px] josefin-sans-400">
        {tabDatas.map((item, index) => (
          <TabItem onClick={onAnyTabItemClicked} key={index} text={item.tabName} isSelected={index === currentTabIndex} index={index}/>
        ))}
      </ul>

      <p className="josefin-sans-400 text-[#46696B] py-10 text-lg text-justify">
        {tabDatas[currentTabIndex].tabDescription}
      </p>
    </div>
  );
}

export default AboutTabs;
