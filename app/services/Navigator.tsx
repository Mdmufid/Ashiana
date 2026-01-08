import Link from "next/link";
import React from "react";

interface IProps {
  className?: string;
  info: {
    text: string;
    link: string;
  }[];
}

export default function Navigator(props: IProps) {
  return (
    <div className={`flex items-center gap-3 ${props.className}`}>
      {props.info.map((eachInfo, index) => {
        if (index === props.info.length - 1) {
          return <Link key={index} href={eachInfo.link}>{eachInfo.text}</Link>;
        } else {
          return (
            <>
              <Link key={index} href={eachInfo.link}>{eachInfo.text}</Link>
              <span>|</span>
            </>
          );
        }
      })}
    </div>
  );
}
