"use client";

import React from "react";

interface IPorps {
  className: string;
  currentIndex: number;
  banner_texts: string[];
}

function BannerText({ className, currentIndex, banner_texts }: IPorps) {
  return (
    <>
      {banner_texts.map((item, index) => (
        <h2
          key={item}
          className={
            className +
            ` transition-all duration-[1000ms]`
          }
        >
          <div dangerouslySetInnerHTML={{ __html: item }}></div>
        </h2>
      ))}
    </>
  );
}

export default BannerText;
