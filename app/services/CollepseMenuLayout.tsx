"use client";

import React, { useState } from "react";
import CollepseMenuItem from "./CollepseMenuItem";

interface IProps {
  info: { heading: string; subtitle: string }[];
}

function CollepseMenuLayout({ info }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <section className="w-full space-y-4">
      {info.map((item, index) => (
        <CollepseMenuItem
          key={index}
          heading={item.heading}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          index={index}
        >
          <p
            dangerouslySetInnerHTML={{ __html: item.subtitle }}
            className="py-3 text-[1rem] text-gray-600 text-justify"
          ></p>
        </CollepseMenuItem>
      ))}
    </section>
  );
}

export default CollepseMenuLayout;
