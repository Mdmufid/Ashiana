import React from "react";

function ImageDetails({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="flexCenter flex-col px-10 min-h-40 sm:px-3">
      <h2 className="josefin-sans-500 text-xl sm:text-center">{heading}</h2>
      <p className="text-center text-gray-600 josefin-sans-400 text-[1rem]">
        {description}
      </p>
    </div>
  );
}

export default ImageDetails;
