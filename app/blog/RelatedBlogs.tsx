import React from "react";
import ShimmerImage from "../components/ShimmerImage";
import Link from "next/link";
import blogInfo from "@/public/bloginfo.json";

interface IProps {
  blogId: string;
  category : string
}

export default function RelatedBlogs({ blogId, category }: IProps) {
  const relatedBlogs =
    blogId == "-1"
      ? []
      : blogInfo.filter(
          (item) => item.category === category && item.id !== blogId
        );
  return (
    <article>
      {relatedBlogs.length === 0 ? (
        <h2 className="w-full text-center text-sm text-gray-500 mt-5">
          No Related Blogs Avilable
        </h2>
      ) : (
        <ul className="my-4 space-y-7">
          {relatedBlogs.map((blogInfo) => (
            <li
              key={blogInfo.id}
              className="relative overflow-hidden rounded-lg min-h-48 navItemClipPath"
            >
              <Link href={`/blog/${blogInfo.url_key}`}>
                <ShimmerImage
                  className="object-cover size-full min-h-48"
                  alt=""
                  src={blogInfo.image}
                  height={1200}
                  width={1200}
                />
                <div className="absolute bottom-0 w-full bg-[#000000c4] drop-shadow-2xl px-5 text-gray-200 py-3">
                  <h2 className="josefin-sans-400 line-clamp-1 leading-6">
                    {blogInfo.heading}
                  </h2>
                  <p className="text-xs text-gray-400">{blogInfo.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
