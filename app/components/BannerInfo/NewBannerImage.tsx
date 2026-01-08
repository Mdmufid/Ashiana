import Image from "next/image";
import React from "react";

interface IProps {
  hasOverIndex : boolean;
  banner_texts: string[];
  banner_images: string[];
  currentBannerIndex: number;
}
export default function NewBannerImage({
  hasOverIndex,
  banner_texts,
  banner_images,
  currentBannerIndex,
}: IProps) {
  return (
    <div className="size-full relative overflow-hidden flex">
      {banner_images.map((item, index) => (
        <div
          key={item}
          style={{ translate: `-${currentBannerIndex * 100}%` }}
          className={`size-full flex-shrink-0 bannerImg transition-all ${currentBannerIndex === index ? "scale-100" : "scale-125"} duration-[800ms] ease-in`}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className={`size-full object-cover`}
            src={`/banner/${item}`}
            alt={`Banner 1`}
            fill
            loading="eager"
          />
        </div>
      ))}

      {/* {banner_images.map((item, index) => (
        <div
          key={index}
          style={{ translate: `-${hasOverIndex ? currentBannerIndex * 100 : 0}%` }}
          className={`size-full flex-shrink-0 bannerImg ${hasOverIndex ? "transition-all duration-[800ms] ease-in z-20" : "z-0"}`}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className={`size-full object-cover`}
            src={`/banner/${item}`}
            alt={`Banner 2`}
            fill
            loading="eager"
          />
        </div>
      ))} */}
      <div className="w-full absolute top-0 bottom-0 bg-[#0000007e] flex">
        {banner_texts.map((bannerText, index) => (
          <div
            style={{ translate: `-${currentBannerIndex * 100}%` }}
            key={`bannerText${index}`}
            className={`flexCenter size-full flex-shrink-0 pt-8 ${currentBannerIndex === index ? "opacity-100" : "opacity-0"} transition-all duration-[800ms] ease-in`}
          >
            <h2
              dangerouslySetInnerHTML={{ __html: bannerText }}
              className="font-tex text-white leading-[1em] w-full max-w-[850px] text-center text-7xl ease-in sm:text-4xl sm:max-w-full"
            ></h2>
          </div>
        ))}
      </div>
    </div>
  );
}
