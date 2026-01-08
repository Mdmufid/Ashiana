"use client";

import React, { useState } from "react";

type PType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default function Readmoretext(props: PType) {
  const [hasCollapse, setHasCollapse] = useState(true);

  const onReadMoreBtnClick = () => {
    setHasCollapse(!hasCollapse);
  };
  return (
    <div>
      <p
        className={`${props.className} ${
          hasCollapse ? "max-h-40" : "max-h-[500px]"
        } overflow-hidden transition-all duration-300`}
      >
        {props.children}
      </p>
      <div className="flex items-center justify-end">
        <button
          onClick={onReadMoreBtnClick}
          style={{ color: "blue" }}
          className={props.className + " pt-0 p-0 pb-0 py-0 m-0 mt-0 mb-0 my-0"}
        >
          {hasCollapse ? "Read More.." : "Read Less.."}
        </button>
      </div>
    </div>
  );
}
