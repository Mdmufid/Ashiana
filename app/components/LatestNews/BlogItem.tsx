import { IBlog } from "@/types/blogs";
import Link from "next/link";
import React from "react";
import ShimmerImage from "../ShimmerImage";

interface IProps {
  blogitem: IBlog;
}

export default function BlogItem({ blogitem }: IProps) {
  return (
    <li>
      <Link
        href={`/blog/${blogitem.url_key}`}
        className="w-full flex-shrink-0 block"
      >
        <div className="w-full h-48 overflow-hidden">
          <ShimmerImage
            src={blogitem.image}
            className="object-cover size-full"
            alt=""
            width={1200}
            height={1200}
          />
        </div>
        <p className="josefin-sans-400 text-sm text-gray-600 pt-4">
          {blogitem.date} / {blogitem.category}
        </p>
        <h2 className="josefin-sans-500 text-lg text-gray-800 line-clamp-2">
          {blogitem.heading}
        </h2>
      </Link>
    </li>
  );
}
