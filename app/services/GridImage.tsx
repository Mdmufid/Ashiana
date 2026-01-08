import Image from "next/image";
import React from "react";
import ShimmerImage from "../components/ShimmerImage";

interface IProps {
  images: string[];
}

export default function GridImage(props: IProps) {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 sm:grid-cols-1">
      {props.images.map((item, index) => (
        <ShimmerImage className="h-64 object-cover" key={index} alt={`image ${index}`} src={item} height={1200} width={1200} />
      ))}
    </div>
  );
}
