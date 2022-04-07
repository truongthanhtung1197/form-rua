import { LATEST_VIEW_FILTER } from "constants/view.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher, formatDate } from "utils/common";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import useSWR from "swr";

function NewsPapers({ hidden }: { hidden: boolean }) {
  const { data, error } = useSWR(`/api/view?filter=${JSON.stringify(LATEST_VIEW_FILTER)}`, fetcher);
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const latestNews = data?.data[0];
  const nextNews = data.data[1];
  const renderLatestNews = () => {
    if (data)
      return (
        <div className="md:flex justify-between gap-[30px]">
          <div className="w-[45%] md:bg-gray800 flex rounded-lg">
            <div className="my-auto w-full h-full relative">
              <Image
                src={latestNews.mediaContent.url || {}}
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                alt="Duong Xuan Phi"
                placeholder="blur"
                blurDataURL={latestNews.mediaContent.urlBlur}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex mb-[30px] gap-1">
              <p className="md:text-[20px] text-sm font-bold md:mr-[14px]">
                {latestNews.newspaper}
              </p>
              <p className="md:text-[20px] text-sm font-normal opacity-40">
                {formatDate(latestNews.newsAt)}
              </p>
            </div>
            <Link href={`${ROUTERS.VIEW_DETAIL}/${latestNews.id}`}>
              <a className="md:text-[24px] text-xl leading-[22px] font-semibold md:leading-[30px] line-clamp-3">
                {latestNews.title}
              </a>
            </Link>

            <div className="flex flex-col items-start">
              <p className="mt-[17px] font-normal md:text-[20px] text-sm leading-[16.71px] md:leading-[28.64px] opacity-50 line-clamp-6">
                {latestNews.description}
              </p>
              <Link href={`${ROUTERS.VIEW_DETAIL}/${latestNews.id}`}>
                <a className="md:block hidden mt-[17px] font-normal text-[20px] leading-[23.87px] opacity-50 mb-[34px] hover:font-semibold">
                  Xem thêm
                </a>
              </Link>
            </div>
            <Link href={`${ROUTERS.VIEW_DETAIL}/${nextNews.id}`}>
              <a className="border rounded-lg border-gray300 flex md:mt-0 mt-[30px]">
                <div className="ml-[18px] my-[18px] relative w-[123px] h-[154px]">
                  <Image
                    src={nextNews.mediaContent.url || {}}
                    layout="fill"
                    alt="Duong Xuan Phi"
                    placeholder="blur"
                    objectFit="contain"
                    objectPosition={"center"}
                    blurDataURL={nextNews.mediaContent.urlBlur}
                  />
                </div>
                <div className="my-[18px] flex-1 mx-[23px]">
                  <p className="md:text-[20px] text-sm font-bold leading-[23.87px]">
                    Theo {nextNews.newspaper}
                  </p>
                  <p className="md:text-[20px] text-sm font-normal opacity-40 mt-[8px] leading-[23.87px]">
                    {formatDate(nextNews.newsAt)}
                  </p>
                  <p className="md:text-lg text-sm font-bold md:mt-[24px] mt-4 md:leading-[24px] leading-[18px] line-clamp-2">
                    {nextNews.title}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      );
  };
  return (
    <section className="flex flex-col">
      <p className={`text-[48px] mb-[22px] ${hidden ? "hidden" : ""}`}>BÁO CHÍ</p>
      {renderLatestNews()}
    </section>
  );
}

export default memo(NewsPapers);
