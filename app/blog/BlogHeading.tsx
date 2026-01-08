import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";

function BlogHeading({
  text,
  date,
  author,
  category,
}: {
  text: string;
  date: string;
  author: string;
  category?: string;
}) {
  return (
    <>
      <div className="flex items-center gap-6 flex-wrap sm:pt-5">
        <div className="flex items-center gap-1">
          <span className="pb-[0.28rem]">
            <CiCalendarDate color="#8E7FE9" size={18} />
          </span>
          <span className="text-[#8E7FE9] text-sm josefin-sans-400">
            {date}
          </span>
        </div>
        <div className="h-[15px] w-[1px] bg-gray-400"></div>
        <div className="flex items-center gap-1">
          <span className="pb-[0.28rem]">
            <RiAccountPinCircleLine color="#8E7FE9" size={18} />
          </span>
          <span className="text-[#8E7FE9] text-sm josefin-sans-400">
            {author}
          </span>
        </div>
        {category ? (
          <>
            {" "}
            <div className="h-[15px] w-[1px] bg-gray-400"></div>
            <div className="flex items-center gap-1">
              <span className="pb-[0.28rem]">
                <BiCategory color="#8E7FE9" size={18} />
              </span>
              <span className="text-[#8E7FE9] text-sm josefin-sans-400">
                {category}
              </span>
            </div>
          </>
        ) : null}

        {/* <span className="text-[#C83642] text-sm josefin-sans-400">{author}</span> */}
      </div>
      <h1 className="text-4xl font-tex font-[800] text-gray-800 mt-3 uppercase">
        {text}
      </h1>
      {/* <ul className="w-full flex items-start gap-3 mb-8 mt-3">
      {tags?.map((item, key) => <li className="josefin-sans-400 text-sm text-blue-500" key={key}>#{item}</li>)}
    </ul> */}
    </>
  );
}

export default BlogHeading;
