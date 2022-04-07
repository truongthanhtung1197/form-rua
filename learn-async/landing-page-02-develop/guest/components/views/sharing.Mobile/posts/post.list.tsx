import "react-multi-carousel/lib/styles.css";
import { NEWS_RESPONSIVE } from "constants/course.constant";
import { fetcher } from "utils/common";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import useSWR from "swr";

function PostList() {
  const { data, error } = useSWR(`/api/posts`, fetcher);
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  const renderPost = () => {
    if (data)
      return data?.map(
        (item: { date: string; title: string; description: string }, index: number) => {
          return (
            <article key={index} className=" text-lg bg-cover px-2 not-italic  ">
              <Image src={Images.VideoF} height={148} width={268} alt="DXP" placeholder="blur" />
              <p className="opacity-50 px-2">{item.date}</p>
              <h3 className="text-[20px] font-semibold text-justify leading-[24px] px-2">
                {item.title}
              </h3>
            </article>
          );
        }
      );
  };
  return (
    <div>
      <div className="mt-[34px]">
        <Carousel
          responsive={NEWS_RESPONSIVE}
          partialVisible
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderPost()}
        </Carousel>
      </div>
    </div>
  );
}

export default memo(PostList);
