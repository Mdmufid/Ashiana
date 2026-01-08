import React from "react";
import { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blogs on Interior Design | Ashiana Interiors",
  description:
    "Discover inspiring interior designs with Ashiana Interiors Kolkata. Read our blogs for tips, trends, and expert insights to transform your dream home.",
  alternates: {
    canonical: "/blogs",
  },
};

interface IProps {
  searchParams: { page?: string };
}

function page({ searchParams }: IProps) {
  return (
    <main className="w-full flex flex-col items-center pt-[90px]">
      <div className="max-layout px-20 sm:px-5 sm:max-w-full">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-4xl">
            OUR <span className="text-[#F83131]">BLOGS</span>
          </h2>
          <div className="w-[4rem] bg-[#F83131] h-[1.5px] mt-3"></div>
        </div>
        <React.Suspense
          fallback={
            <div className="py-16 text-center">
              <span className="text-sm text-gray-500 flex items-center gap-y-3 flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="animate-spin lucide lucide-loader-circle-icon lucide-loader-circle"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Loading Blogs...
              </span>
            </div>
          }
        >
          <BlogList searchParams={searchParams} />
        </React.Suspense>
      </div>
    </main>
  );
}

export default page;
