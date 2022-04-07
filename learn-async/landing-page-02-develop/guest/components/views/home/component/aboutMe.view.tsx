import "react-multi-carousel/lib/styles.css";
import { FILTER_ABOUTME } from "constants/home.constants";
import { fetcher, formatContent } from "utils/common";
import { formatDate } from "utils/common";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";
import images from "styles/images/home";
import useSWR from "swr";

function ViewAboutMe() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const buttonLeft = () => (
    <div className="w-[31px] h-full cursor-pointer justify-center rounded-l-xl absolute left-0 bg-black opacity-[0.7] flex items-center ">
      <div className="translate-y-[50%]">
        <Image
          src={images.icon_arrowLeft}
          width={21}
          height={35}
          alt="arrow feft"
          placeholder="blur"
          blurDataURL={images.icon_arrowLeft}
        />
      </div>
    </div>
  );
  const ButtonRight = () => (
    <div className="w-[31px] h-full cursor-pointer justify-center rounded-r-xl absolute right-0 bg-black opacity-[0.7] flex items-center ">
      <div className="translate-y-[50%]">
        <Image
          src={images.icon_arrowRight}
          width={21}
          height={35}
          alt="arrow right"
          placeholder="blur"
          blurDataURL={images.icon_arrowRight}
        />
      </div>
    </div>
  );
  const { data, error } = useSWR(`/api/about-me?filter=${JSON.stringify(FILTER_ABOUTME)}`, fetcher);
  if (error) return <div>Fail to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section>
      <div className="flex justify-center mt-[36px] mb-[27px] lg:mt-[45px] lg:mb-[56px]">
        <p className="text-[24px] lg:text-[48px] font-normal leading-[28.64px] lg:leading-[57.28px]">
          GÓC NHÌN VỀ TÔI
        </p>
      </div>
      <div className="bg-black h-[288px] rounded-xl relative">
        <Carousel
          responsive={responsive}
          showDots={true}
          renderDotsOutside={true}
          infinite={true}
          customLeftArrow={buttonLeft()}
          customRightArrow={ButtonRight()}
        >
          {data?.data.map((item: any, i: number) => {
            return (
              <div key={i} className="bg-black flex flex-col mt-[40px] mx-[40px] h-[248px]">
                <div className="flex">
                  <div className="w-[46px] h-[46px] relative rounded-[50%] overflow-hidden">
                    <Image
                      src={item.ownerAvatar.url}
                      layout="fill"
                      objectFit="cover"
                      alt="avatar"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={item.ownerAvatar.urlBlur}
                    />
                  </div>
                  <div className="ml-[18px]">
                    <p className="font-semibold text-white text-[20px] leading-[23.87px]">
                      {item.reviewerName}
                    </p>
                    <p className="font-semibold text-white text-[20px] leading-[23.87px]">
                      {formatDate(item.reviewAt)}
                    </p>
                  </div>
                </div>
                <div className="h-[156px] mt-[18px]">
                  <p className="text-white text-[18px] font-normal leading-[20px] line-clamp-7">
                    {formatContent(item.content)}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="absolute bottom-[-55px] lg:mr-0 mr-[15px] right-0">
          <Seemore navigation={""} />
        </div>
      </div>
    </section>
  );
}

export default memo(ViewAboutMe);
