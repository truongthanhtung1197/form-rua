import { FILTER_CAROUSEL_POST } from "constants/carousel.post";
import { NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher, formatContent, formatDate } from "utils/common";
import Carousel from "react-multi-carousel";
import ComponentTitle from "components/layout/component_title";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";
import useSWR from "swr";
interface IpostList {
  title: string;
  content: string;
  sharingAt: string;
}
function PostList() {
  const { data, error } = useSWR(
    `${ROUTERS.API_CAROUSEL_POST}?filter=${JSON.stringify(FILTER_CAROUSEL_POST)}`,
    fetcher
  );
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  const renderNews = () => {
    if (data)
      return data?.data.map((item: IpostList, index: number) => {
        return (
          <div key={index} className="relative md:mx-6 mx-3">
            <div className="relative h-[190px] w-full">
              <Image
                src={Images.img2}
                alt="dxp"
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="opacity-40 mt-3">{formatDate(item.sharingAt)}</p>
            <h3 className="md:text-xl text-lg my-4 uppercase  line-clamp-2 text-justify">
              {item.title}
            </h3>
            <p className="md:text-lg text-sm md:leading-[21.48px] leading-[16.71px] line-clamp-4">
              {formatContent(item.content)}
            </p>
          </div>
        );
      });
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
    <div className="md:mt-20 mt-[30px]">
      <ComponentTitle title={"Bài viết"} />
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
          partialVisible={true}
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderNews()}
        </Carousel>
      </div>
    </div>
  );
}

export default memo(PostList);
