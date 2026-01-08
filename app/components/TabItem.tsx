import React from "react";

interface IProps {
  onClick ? : (index : number) => void;
  index : number;
  text: string;
  isSelected: boolean;
}

function TabItem({ text, isSelected, onClick, index }: IProps) {
  return (
    <li onClick={() => onClick?.(index)} className="cursor-pointer group/tabitem">
      <span className="px-3">{text}</span>
      <div
        className={`bg-[#073842] ${
          isSelected ? "w-full" : "w-0"
        } h-[0.5px] group-hover/tabitem:w-full transition-all duration-500`}
      ></div>
    </li>
  );
}

export default TabItem;
