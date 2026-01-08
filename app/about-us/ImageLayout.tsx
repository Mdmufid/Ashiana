import Image from "next/image";
import React from "react";
import ShimmerImage from "../components/ShimmerImage";

function ImageLayout({ img }: { img: string }) {
  return (
    <div className="w-full px-8 min-h-20 max-h-[15%] sm:px-3 overflow-hidden">
      {/* <Image src={img} alt="img 1" width={1200} height={1200} /> */}
      <ShimmerImage src={img} alt="img 1" width={1200} height={1200}/> 
    </div>
  );
}

export default ImageLayout;
