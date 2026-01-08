import { cache } from "react";
import { wordpressApi } from "./wordpressApi";

export interface ISingleBlogPost {
  id: number;
  title: string;
  slug: string;
  content: {
    rendered: string;
  };
  date: string;
  thumbnail: string | null;
  categories: number[];
  altTag?: string;
  tags: string[];
  rankmath_meta: {
    focus_keyword: string;
    seo_title: string;
    seo_description: string;
    canonical_url: string;
    robots_meta: string[];
    advanced_robots: string;
    og_title: string;
    og_description: string;
    og_image: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    breadcrumb_title: string;
    pillar_content: string;
    cornerstone_content: string;
    meta_keywords: string;
  };
}

export const getSingleBlogInfo = cache(async (slug: string) => {
  const api = await wordpressApi();
  return (
    await api.get<ISingleBlogPost>(`/wp-json/custom/ashiana/v1/posts/${slug}`)
  ).data;
});