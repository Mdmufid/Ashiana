import React from "react";
import ReadBlogLayot from "./ReadBlogLayot";
import { getSingleBlogInfo } from "@/lib/get";

interface IProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogContent({ params }: IProps) {
  const { slug } = await params;
  const singleBlog = await getSingleBlogInfo(slug);
  return (
    <ReadBlogLayot
      blogId="-1"
      bannerImg={singleBlog.thumbnail ?? ""}
      altTag={singleBlog.altTag}
      date={singleBlog.date}
      heading={singleBlog.title}
    >
      <div className="mt-5">
        <div
          className="blog_content not-tailwind"
          dangerouslySetInnerHTML={{ __html: singleBlog.content.rendered }}
        ></div>
      </div>
    </ReadBlogLayot>
  );
}
