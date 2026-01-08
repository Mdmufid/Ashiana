import React from "react";

function P({ text, className }: { text: string, className ? : string }) {
  return <p dangerouslySetInnerHTML={{__html : text}} className={`mt-5 josefin-sans-400 text-gray-600 text-justify ${className}`}></p>;
}

export default P;
