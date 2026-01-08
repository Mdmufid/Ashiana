"use client";

import React from "react";
import gallery1 from "@/public/New Images/Recent/IMG4.jpeg";
import gallery2 from "@/public/New Images/Recent/IMG5.jpeg";
import gallery3 from "@/public/New Images/Recent/IMG6.jpeg";
import gallery4 from "@/public/New Images/Recent/IMG7.jpeg";

import gallery5 from "@/public/New Images/Recent/IMG8.jpeg";
import gallery6 from "@/public/New Images/Recent/IMG9.jpeg";
import gallery7 from "@/public/New Images/Recent/IMG10.jpeg";
import gallery8 from "@/public/New Images/Recent/IMG11.jpeg";
import gallery9 from "@/public/New Images/Recent/IMG12.jpeg";
import gallery10 from "@/public/New Images/Recent/IMG13.jpeg";
import gallery11 from "@/public/New Images/Recent/IMG14.jpeg";
import gallery12 from "@/public/New Images/Recent/IMG15.jpeg";
import gallery13 from "@/public/New Images/Recent/IMG16.jpeg";
import gallery14 from "@/public/New Images/Recent/IMG17.jpeg";
import ShimmerImage from "../ShimmerImage";
import { useDispatch } from "react-redux";
import { setImageBigScreen } from "@/redux/slices/openImageBigScreen";
import { StaticImageData } from "next/image";
import { IGallery } from "@/types";

export default function GalleryList() {
  const dispatch = useDispatch();

  const galleries: IGallery[] = [
    {
      id: 1,
      label: "Office and Retail",
      img: gallery1,
    },
    {
      id: 2,
      label: "Office and Retail",
      img: gallery2,
    },
    {
      id: 3,
      label: "Office and Retail",
      img: gallery3,
    },
    {
      id: 4,
      label: "Showroom",
      img: gallery4,
    },
    {
      id: 5,
      label: "Showroom",
      img: gallery5,
    },
    {
      id: 6,
      label: "Execution",
      img: gallery6,
    },
    {
      id: 7,
      label: "Execution",
      img: gallery7,
    },
    {
      id: 8,
      label: "Execution",
      img: gallery8,
    },
    {
      id: 9,
      label: "Execution",
      img: gallery9,
    },
    {
      id: 10,
      label: "Execution",
      img: gallery10,
    },
    {
      id: 11,
      label: "Showroom",
      img: gallery11,
    },
    {
      id: 12,
      label: "Showroom",
      img: gallery12,
    },
    {
      id: 13,
      label: "Showroom",
      img: gallery13,
    },
    {
      id: 14,
      label: "Showroom",
      img: gallery14,
    },
  ];

  const galleryItemOnClick = (index: number) => {
    //do swap after deep copy
    const newArray = structuredClone(galleries);

    newArray[0] = newArray[index];
    newArray[index] = galleries[0];

    dispatch(
      setImageBigScreen({
        imgInfo: newArray,
        visibility: true,
      })
    );
  };

  return (
    <ul className="w-full grid grid-cols-4 sm:grid-cols-1 gap-7 mt-10">
      {galleries.map((item, index) => (
        <li
          onClick={() => galleryItemOnClick(index)}
          className="rounded-md group/gallery relative overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
          key={item.id}
        >
          <h5 className="bg-[#000000cc] text-sm group-hover/gallery:-translate-y-[200%] transition-all duration-200 text-white font-semibold absolute top-3 right-3 px-3 rounded-full">
            {item.label}
          </h5>
          <ShimmerImage
            className="size-full"
            src={item.img}
            alt=""
            height={1500}
            width={1500}
          />
        </li>
      ))}
    </ul>
  );
}
