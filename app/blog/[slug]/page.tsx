import React, { cache } from "react";
import { Metadata } from "next";
import { wordpressApi } from "@/lib/wordpressApi";
import "@/app/blog_content.css";
import BlogContent from "../BlogContent";
import { getSingleBlogInfo } from "@/lib/get";


interface IProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ["slug"]: string }>;
}): Promise<Metadata> {
  const blogSlug = (await params)["slug"];
  const categoryPageInfo = await getSingleBlogInfo(blogSlug);

  return {
    title: categoryPageInfo.rankmath_meta.seo_title,
    description: categoryPageInfo.rankmath_meta.seo_description,
    keywords: categoryPageInfo.rankmath_meta.meta_keywords,
    openGraph: {
      title: categoryPageInfo.rankmath_meta.og_title,
      description: categoryPageInfo.rankmath_meta.og_description,
      images: categoryPageInfo.rankmath_meta.og_image,
      url: `/blog/${blogSlug}`,
      type: "article",
      locale: "en_US",
      siteName: "Ashiana Interiors",
    },
  };
}

export default function page({ params }: IProps) {
  return (
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
            Loading...
          </span>
        </div>
      }
    >
      <BlogContent params={params} />
    </React.Suspense>
  );
}
