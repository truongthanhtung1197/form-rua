import "react-multi-carousel/lib/styles.css";
import { LIST_POST_HIGHLIGHT_1_SHARING } from "constants/sharings.constants";
import { NEWS_RESPONSIVE } from "constants/course.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher } from "utils/common";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import useSWR from "swr";
function PostsList() {
  const { data, error } = useSWR(
    `${ROUTERS.API_SHARING_LIST_FEATURED_1}?filter=${JSON.stringify(
      LIST_POST_HIGHLIGHT_1_SHARING
    )}`,
    fetcher
  );
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  const renderNews = () => {
    if (data)
      return data?.data.map((item: { title: string }, index: number) => {
        return (
          <article key={index} className=" text-lg bg-cover px-2 not-italic">
            <Image src={Images.VideoF} height={169} width={244} alt="video" />
            <h3 className="text-[20px] font-semibold leading-[24px]">{item.title}</h3>
          </article>
        );
      });
  };
  const buttonLeft = () => (
    <div className="w-[26.45px] h-[169px] top-0 cursor-pointer justify-center  absolute left-0  bg-gray500 flex items-center ">
      <Image src={Icons.left} width={21} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-[26.45px] h-[169px] cursor-pointer top-0 justify-center  absolute right-0 bg-gray500  flex items-center">
      <Image src={Icons.right} width={21} height={35} alt="arrow right" />
    </div>
  );

  return (
    <div>
      <div className="mt-[34px]">
        <Carousel
          responsive={NEWS_RESPONSIVE}
          customLeftArrow={buttonLeft()}
          customRightArrow={buttonRight()}
          partialVisible
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {renderNews()}
        </Carousel>
      </div>
    </div>
  );
}

export default memo(PostsList);
