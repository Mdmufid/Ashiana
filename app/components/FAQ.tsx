"use client";

import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import P from "../blog/P";

interface IPorps {
  faqs: { question: string; answer: string }[];
}

export default function FAQ(props: IPorps) {
  const [currenItem, setCurrentItem] = useState(-1);

  return (
    <ul className="w-full space-y-5">
      {props.faqs.map((faq, index) => (
        <li
          key={index}
          onClick={() => {
            if (index === currenItem) {
              setCurrentItem(-1);
            } else {
              setCurrentItem(index);
            }
          }}
          className="w-full bg-[#F4F4F4]"
        >
          <div className="w-full flex items-center cursor-pointer justify-between px-10 sm:px-5 bg-[#073842] py-5 text-white">
            <h2 className="josefin-sans-400 text-xl">{faq.question}</h2>
            <AiFillCaretRight
              className={`${
                currenItem === index ? "rotate-90" : "rotate-0"
              } transition-all duration-300`}
            />
          </div>
          <div
            className={`w-full px-10 overflow-hidden sm:px-5 ${
              currenItem === index ? "max-h-[500px] pb-5" : "max-h-0"
            } transition-all duration-300 ease-linear`}
          >
            <P text={faq.answer} />
          </div>
        </li>
      ))}
    </ul>
  );
}
