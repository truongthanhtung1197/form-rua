import "react-multi-carousel/lib/styles.css";
import { LIST_VIEW_FILTER } from "constants/view.constant";
import { NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher, formatDate } from "utils/common";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import useSWR from "swr";
function NewsList() {
  const { data, error } = useSWR(`/api/view?filter=${JSON.stringify(LIST_VIEW_FILTER)}`, fetcher);
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderNews = () => {
    if (data)
      return data?.data.map(
        (news: {
          newsAt: string;
          title: string;
          newspaper: string;
          id: number;
          mediaContent: any;
        }) => {
          return (
            <div key={news.id} className="md:mx-6 mx-4 relative">
              <div className="relative h-[190px] w-full">
                <Image
                  src={news.mediaContent.url || {}}
                  blurDataURL={news.mediaContent.urlBlur}
                  alt="dxp"
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="opacity-40 mt-3 text-sm">{formatDate(news.newsAt)}</p>
              <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}`}>
                <a className="md:text-xl text-lg font-semibold sm:line-clamp-4  leading-[21.48px] min-h-[100px] md:my-4 my-2 text-justify">
                  {news.title}
                </a>
              </Link>
              <p className="text-right sm:text-lg text-sm font-bold mt-2">Theo {news.newspaper}</p>
            </div>
          );
        }
      );
  };
  const buttonLeft = () => (
    <div className="w-8 h-[190px] top-0 cursor-pointer justify-center absolute left-6 bg-black opacity-50 flex items-center ">
      <Image src={Icons.left} width={21} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-8 h-[190px] cursor-pointer top-0 justify-center  absolute right-6 bg-black opacity-50 flex items-center">
      <Image src={Icons.right} width={21} height={35} alt="arrow right" />
    </div>
  );

  return (
    <div className="mt-[23px]">
      <div className="mt-5 gap-5">
        <Carousel
          responsive={NEWS_RESPONSIVE}
          draggable={false}
          showDots
          swipeable
          dotListClass="dot-list-news"
          sliderClass="slider-news"
          customLeftArrow={buttonLeft()}
          customRightArrow={buttonRight()}
          containerClass="container-news"
          partialVisible
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderNews()}
        </Carousel>
      </div>
    </div>
  );
}

export default memo(NewsList);
