import React from "react";
import P from "./P";

interface IProps {
  options: {
    heading?: string;
    text: string;
  }[];
}

export default function NormalListOption({ options }: IProps) {
  return (
    <ul className="w-full space-y-3">
      {/* <p className="read-only:hidden text-[14.4px]"></p> */}
      {options.map((item, index) => (
        <li key={index}>
          {item.heading ? (
            // <SubHeading
            //   type="H4"
            //   className="float-left mr-2 text-[14.4px] mt-1"
            //   text={item.heading + " :"}
            // />
            <h4 className="float-left mr-2 text-[14.4px] font-semibold text-gray-700">
              {item.heading} :{" "}
            </h4>
          ) : null}
          <P className="text-[14.4px] mt-0" text={item.heading ? item.text : "--- " + item.text} />
        </li>
      ))}
    </ul>
  );
}
