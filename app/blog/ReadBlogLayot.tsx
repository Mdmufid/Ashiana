import React from "react";
import SocialLinks from "../components/SocialLinks";
import BlogHeading from "./BlogHeading";
import MainBannerImgae from "./MainBannerImgae";
import RelatedBlogs from "./RelatedBlogs";

interface IProps {
  blogId: string;
  children: React.ReactNode;
  heading: string;
  bannerImg: string;
  date: string;
  author?: string;
  category?: string;
  altTag?: string;
}

function ReadBlogLayot({
  blogId,
  children,
  heading,
  bannerImg,
  date,
  category,
  altTag,
}: IProps) {
  return (
    <main className="w-full">
      <div className="px-28 sm:px-0 sm:max-w-full py-[100px] flex items-start sm:flex-col">
        <div className="w-[66%] bg-[#ECEBF7] rounded-[2.3rem] px-12 py-12 relative sm:w-full sm:px-5">
          <SocialLinks className="absolute top-0 bottom-0 -left-4 sm:h-20 sm:top-2 sm:right-0 sm:flex-row" />
          <BlogHeading
            text={heading}
            date={date}
            author="By Ashiana Interiors"
            category={category}
          />
          <MainBannerImgae src={bannerImg} altTag={altTag} />
          {children}
        </div>

        <div className="w-[34%] px-5 py-2 sm:w-full sm:py-10">
          <h2 className="font-tex tracking-wider text-gray-700 text-xl">
            Related Blogs
          </h2>
          <RelatedBlogs blogId={blogId} category={category ?? ""} />
        </div>
      </div>
    </main>
  );
}

export default ReadBlogLayot;
