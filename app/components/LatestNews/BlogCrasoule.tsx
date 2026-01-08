"use client";

import { IBlog } from "@/types/blogs";
import React, { useEffect, useRef, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import BlogItem from "./BlogItem";
import { MOBILE_VIEW_WIDTH, TAB_VIEW_WIDTH } from "@/app/constant";

interface IProps {
  blogsData: IBlog[];
}

export default function BlogCrasoule({ blogsData }: IProps) {
  const [blogs, setBlogs] = useState<IBlog[][]>([]);
  const [currentCrasoulIndex, setCurrentCrasoulIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    function forNotMobile() {
      const newList: IBlog[][] = [];
      let count = 0;
      let currentIndex = 0;
      blogsData.forEach((_, index) => {
        currentIndex = blogsData.length - 1 - index;
        if (!newList[count]) {
          newList[count] = [blogsData[currentIndex]];
        } else {
          newList[count].push(blogsData[currentIndex]);
        }
        if ((index + 1) % 3 === 0) {
          count++;
        }
      });
      setBlogs(newList);
    }

    function forMobileDevices() {
      const newList: IBlog[][] = [];
      let currentIndex = 0;
      blogsData.forEach((_, index) => {
        currentIndex = blogsData.length - 1 - index;
        newList.push([blogsData[currentIndex]]);
      });
      setBlogs(newList);
    }

    function forTabDevices() {
      const newList: IBlog[][] = [];
      let count = 0;
      let currentIndex = 0;
      blogsData.forEach((_, index) => {
        currentIndex = blogsData.length - 1 - index;
        if (!newList[count]) {
          newList[count] = [blogsData[currentIndex]];
        } else {
          newList[count].push(blogsData[currentIndex]);
        }
        if ((index + 1) % 2 === 0) {
          count++;
        }
      });
      setBlogs(newList);
    }

    if (window.innerWidth < MOBILE_VIEW_WIDTH) {
      forMobileDevices();
    } else if (window.innerWidth === TAB_VIEW_WIDTH) {
      forTabDevices();
    } else {
      forNotMobile();
    }
  }, []);

  const goNext = () => {
    setCurrentCrasoulIndex((preIndex) => {
      if (preIndex === blogs.length - 1) return 0;
      return preIndex + 1;
    });
  };

  const goPrev = () => {
    setCurrentCrasoulIndex((preIndex) => {
      if (preIndex === 0) return blogs.length - 1;
      return preIndex - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Define a minimum distance for a valid swipe

    if (distance > minSwipeDistance) {
      //swipe left
      goNext();
    } else if (distance < -minSwipeDistance) {
      //swipe right
      goPrev();
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="flex overflow-hidden w-full relative">
      {blogs.map((eachUL, index) => {
        return (
          <ul
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ translate: `-${currentCrasoulIndex * 100}%` }}
            key={index}
            className="w-full flex-shrink-0 grid grid-cols-3 gap-6 px-28 mt-10 sm:grid-cols-1 sm:px-5 transition-all duration-500 md:px-10 md:grid-cols-2"
          >
            {eachUL.map((item) => (
              <BlogItem key={item.id} blogitem={item} />
            ))}
          </ul>
        );
      })}
      <div className="absolute top-0 bottom-0 flexCenter left-14 sm:left-0">
        <button
          onClick={goPrev}
          className="size-10 bg-[#374151] rounded-full flexCenter cursor-pointer active:scale-95"
        >
          <GrLinkNext size={13} color="#fff" className="rotate-180" />
        </button>
      </div>
      <div className="absolute top-0 bottom-0 flexCenter right-14 sm:right-0">
        <button
          onClick={goNext}
          className="size-10 bg-[#374151] rounded-full flexCenter cursor-pointer active:scale-95"
        >
          <GrLinkNext size={13} color="#fff" />
        </button>
      </div>
    </div>
  );
}
