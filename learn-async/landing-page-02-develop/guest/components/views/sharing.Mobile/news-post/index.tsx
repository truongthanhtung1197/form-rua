import { fetcher } from "utils/common";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import useSWR from "swr";

function NewPots() {
  const { data, error } = useSWR(`/api/posts`, fetcher);
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  return (
    <>
      <div className="flex justify-between gap-5  mb-12 px-4 mb-[20px]  ">
        <h1 className="text-[24px] leading-[30px] font-semibold ">BÀI MỚI</h1>
        <div className="flex-auto h-[1px] bg-gray250 mt-[20px]"></div>
      </div>

      {data &&
        data.map((items: { date: string; title: string; description: string }, index: number) => (
          <div key={index}>
            <h1 className="font-semibold  text-[20px] leading-[22px] px-4 text-left mt-[17px]">
              {items.title}
            </h1>
            <div className="grid grid-cols-2 gap-2 mt-[24px] px-4">
              <div className="">
                <Image
                  src={Images.VideoF}
                  alt="video"
                  height={101}
                  width={163}
                  layout="responsive"
                />
              </div>
              <div className=" ">
                <p className="opacity-50 text-[12px] leading-[14px] font-normal mt-[5px]">
                  {items.date}
                </p>
                <p className="text-[14px] leading-[14px] font-normal mt-[5px]">
                  {items.description}
                </p>
              </div>
            </div>{" "}
            <div className="border-b mt-[12px] h-[1px] bottom-[10px] border-gray250 "></div>
          </div>
        ))}
    </>
  );
}

export default memo(NewPots);
