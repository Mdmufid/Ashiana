import React from "react";
import SubHeading from "./SubHeading";
import P from "./P";

interface IProps {
  className?: string;
  options: { heading: string; text: string }[];
  headingtype ? : "H3" | "H4" | "H1";
}

export default function ListWithHeading({ className, options, headingtype }: IProps) {
  return (
    <ul className={`w-full py-9 ${className}`}>
      {options.map((item, key) => (
        <li key={key} className="">
          <SubHeading type={headingtype} className={`${key === 0 ? "mt-[0px]" : ""} text-[14px] text-[#755dff] tracking-widest`} text={item.heading} />
          <P className="mt-[5px]" text={item.text} />
          {/* {<ComponentToLoad text={item} />} */}
        </li>
      ))}
    </ul>
  );
}
