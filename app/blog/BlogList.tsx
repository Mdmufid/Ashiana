import Link from "next/link";
import Pagination from "../components/Pagination";
import ShimmerImage from "../components/ShimmerImage";
import { wordpressApi } from "@/lib/wordpressApi";
import bloginfo from "@/public/bloginfo.json";

interface IBlogInfo {
  id: string;
  image: string | null;
  heading: string;
  date: string;
  category: string;
  short_description: string;
  url_key: string;
  altTag?: string;
}

interface IProps {
  searchParams: { page?: string };
}

export default async function BlogList({ searchParams }: IProps) {
  const api = await wordpressApi();
  const NUMBER_OF_BLOGS_SHOW = 30;

  const currentPage = parseInt(searchParams?.page || "1");
  const response = await api.get<IBlogInfo[]>(
    `/wp-json/custom/ashiana/v1/posts?page=${currentPage}&per_page=${NUMBER_OF_BLOGS_SHOW}`
  );
  const blogList = response.data;
  const WORDPRESS_DATA_LENGTH = blogList.length;
  let WORDPRESS_TOTAL_PAGES = Number(response.headers["x-wp-totalpages"]);

  let totalPages = WORDPRESS_TOTAL_PAGES;

  if (WORDPRESS_DATA_LENGTH < NUMBER_OF_BLOGS_SHOW) {
    blogList.push(
      ...bloginfo
        .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .slice(
          Math.round(
            (currentPage - 1) * (NUMBER_OF_BLOGS_SHOW - WORDPRESS_DATA_LENGTH)
          ),
          Math.round(
            currentPage * (NUMBER_OF_BLOGS_SHOW - WORDPRESS_DATA_LENGTH)
          )
        )
    );

    totalPages =
      bloginfo.length / NUMBER_OF_BLOGS_SHOW +
      WORDPRESS_DATA_LENGTH / NUMBER_OF_BLOGS_SHOW;
  }
  return (
    <>
      <ul className="w-full grid grid-cols-3 gap-10 my-10 sm:grid-cols-1">
        {blogList.map((blog, index) => (
          <li key={index} className="w-full blogItemShdow">
            <Link href={`/blog/${blog.url_key}`}>
              <ShimmerImage
                className="h-[12rem] object-cover navItemClipPath"
                src={blog.image ?? ""}
                alt={blog.altTag ?? ""}
                height={1200}
                width={1200}
              />
              <div className="px-5 py-5 space-y-4">
                <div className="w-full flex items-center text-[0.80rem] gap-2">
                  <span className="text-[#F83131] font-semibold">
                    {blog.date}
                  </span>{" "}
                  <div className="w-[1px] h-[15px] bg-gray-400"></div>{" "}
                  <span className="text-gray-500">{blog.category}</span>
                </div>

                <div>
                  <h2 className="font-bold text-xl text-gray-700 line-clamp-2 uppercase">
                    {blog.heading}
                  </h2>
                  <p className="line-clamp-3 text-gray-500 blurFadeLayout text-sm mt-2">
                    {blog.short_description}
                  </p>
                </div>
                <button className="font-bold text-xs text-[#F83131]">
                  Read More..
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination page={currentPage} totalPage={totalPages} />
    </>
  );
}
