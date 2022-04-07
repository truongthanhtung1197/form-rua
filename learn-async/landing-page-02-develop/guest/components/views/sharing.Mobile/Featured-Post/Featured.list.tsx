import { fetcher } from "utils/common";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import useSWR from "swr";

function FeaturedList() {
  const { data, error } = useSWR(`/api/sharing/Featured-Posts`, fetcher);
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  return (
    <div>
      <div className="mt-[42px] grid grid-cols-1 gap-[26px] text-left px-4  ">
        <h1 className="font-normal text-[36px] leading-[43px]">BÀI NỔI BẬT</h1>
        {data &&
          data.map((item: { title: string; date: string }, index: number) => (
            <div key={index}>
              <article className=" grid gap-[13px]">
                <h2 className="text-[20px] font-semibold leading-[25px] text-gray800">
                  {item.title}
                </h2>
                <p className="text-[18px] leading-[21px] mt-[-10px] font-normal opacity-40">
                  {item.date}
                </p>
              </article>
            </div>
          ))}

        <div className=" mt-[42px] ">
          <div className="flex justify-between gap-5  mb-12  ">
            <h1 className="text-[24px] leading-[29px] font-normal ">Video</h1>
            <div className="flex-auto h-[1px] bg-graysearch mt-[20px]"></div>
          </div>
          <div className="mt-[32px]">
            <div>
              <Image src={Images.VideoF} alt="icon" layout="responsive" />
              <h1 className="text-[18px] mt-[10px] leading-[23px] font-semibold px-4">
                Một ngày lênh đênh trên biển cách đất liền hơn 1000km
              </h1>
            </div>
          </div>
        </div>
        <section className="flex flex-wrap gap-4 justify-center  ">
          <button className="border w-[100px] text-center text-[18px] leading-[21px] font-normal border-gray300 rounded-md h-[34px] ">
            Kinh tế
          </button>
          <button className="border border-gray300 w-[96px] text-center text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
            Xã hội
          </button>
          <button className="border w-[117px] border-gray300 text-center text-[18px] leading-[21px] font-normal h-[34px] rounded-md ">
            Giáo dục
          </button>
          <button className="border w-[111px] border-gray300 text-center  text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
            Tâm lý
          </button>
          <button className="border w-[136px] border-gray300 text-center  text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
            Cuộc sống
          </button>
        </section>
      </div>
    </div>
  );
}
export default memo(FeaturedList);
