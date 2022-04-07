import { REVIEW_COURSE_FILTER } from "constants/review.const";
import { REVIEW_RESPONSIVE } from "constants/course.constant";
import { fetcher, formatDate } from "utils/common";
import Carousel from "react-multi-carousel";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/courses";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";

const EditorDynamic = dynamic(() => import("components/views/course-detail/_components/editor"), {
  ssr: false,
});

function ReviewList() {
  const { data, error } = useSWR(
    `/api/review?filter=${JSON.stringify(REVIEW_COURSE_FILTER)}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const buttonLeft = () => (
    <div className="w-5 h-full top-0 cursor-pointer justify-center rounded-l-xl absolute left-[7px] bg-black opacity-[0.25] flex items-center ">
      <Image src={Icons.left} width={15} height={35} alt="arrow feft" />
    </div>
  );
  const buttonRight = () => (
    <div className="w-5 h-full cursor-pointer top-0 justify-center rounded-r-xl absolute right-[7px] bg-black opacity-[0.25] flex items-center">
      <Image src={Icons.right} width={15} height={35} alt="arrow right" />
    </div>
  );
  const renderReview = () => {
    if (data?.data)
      return data?.data.map(
        (review: {
          id: number;
          reviewAt: string;
          reviewerName: string;
          content: string;
          mediaContents: any;
          ownerAvatar: any;
        }) => (
          <div key={review.id} className="border-b pb-8 mb-8 mr-10">
            <div className="flex justify-start items-center md:gap-4 gap-2">
              <div className="sm:w-12 w-6 sm:h-12 h-6 relative">
                {review.ownerAvatar && (
                  <Image
                    src={review.ownerAvatar.url || {}}
                    alt="DXP"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-full"
                  />
                )}
              </div>
              <div>
                <p className="font-semibold sm:text-2xl text-sm">
                  {review.reviewerName}
                  <span className="opacity-40 font-normal pl-2">
                    - {formatDate(review.reviewAt)}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-gray800 sm:text-xl text-[15px] sm:leading-8 leading-5 mt-5 mb-8">
              <EditorDynamic content={review.content} />
            </p>
            <div>
              <Carousel
                responsive={REVIEW_RESPONSIVE}
                customRightArrow={buttonRight()}
                customLeftArrow={buttonLeft()}
                containerClass="review_container"
              >
                {review.mediaContents &&
                  review.mediaContents.map((img: any) => {
                    return (
                      <div key={img.id} className="h-[120px] relative mx-2">
                        <Image
                          src={img.url || {}}
                          alt="dxp"
                          blurDataURL={img.urlBlur}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                    );
                  })}
                <div className="h-[120px] mx-2 relative">
                  <Image
                    src={Images.img2}
                    alt="dxp"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        )
      );
  };
  return (
    <div className="w-full md:py-9 py-8 md:flex-col flex-auto md:px-12 px-5 bg-white rounded-lg">
      <h1 className="font-semibold md:text-4xl text-2xl  md:mb-12 mb-7 md:uppercase">
        Cảm nhận của học viên
      </h1>
      <div className="max-h-[800px] overflow-y-scroll">{renderReview()}</div>
    </div>
  );
}

export default memo(ReviewList);
