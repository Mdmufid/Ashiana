"use client";

import React from "react";
import "./style.css";

interface IProps {
  images: {id : string, image : string}[];
  speed: number;
  direction: "left-to-right" | "right-to-left";
}

export default function ImageCarousel({ images, direction, speed } : IProps) {

  const speedObj : any = { "--speed": `${speed}ms` };

  return <div className="inner">
  <div className="wrapper">
    <section className={direction} style={speedObj}>
      {images.map(({ id, image }) => (
        <div className="image" key={id}>
          <img className="eachClientLogo" src={image} alt={id} />
        </div>
      ))}
    </section>
    <section className={direction} style={speedObj}>
      {images.map(({ id, image }) => (
        <div className="image" key={id}>
          <img className="eachClientLogo" src={image} alt={id} />
        </div>
      ))}
    </section>
    <section className={direction} style={speedObj}>
      {images.map(({ id, image }) => (
        <div className="image" key={id}>
          <img className="eachClientLogo" src={image} alt={id} />
        </div>
      ))}
    </section>
  </div>
</div>;
}
