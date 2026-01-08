import React from "react";
import ShimmerImage from "../components/ShimmerImage";

function MainBannerImgae({ src, altTag }: { src: string, altTag ? : string }) {
  return (
    <ShimmerImage
      className="mt-10 rounded-t-[1.3rem] aspect-video"
      src={src}
      alt={altTag || ""}
      height={1980}
      width={1980}
    />
  );
}

export default MainBannerImgae;
