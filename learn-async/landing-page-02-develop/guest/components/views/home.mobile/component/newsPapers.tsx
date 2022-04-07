import { NEWSPAPERS } from "components/views/home/home.constant";
import Image from "next/image";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";
import images from "styles/images/home";

function NewsPapers() {
  return (
    <section className="flex flex-col items-center bg-grayf6">
      <p className="mb-[18px] mt-[45px] text-[24px]">BÁO CHÍ</p>
      <div className="mx-[15px]">
        <Image
          src={images.DXP_onWindow}
          width={490}
          height={276}
          alt="Duong Xuan Phi"
          placeholder="blur"
          blurDataURL={images.DXP_onWindow}
        />
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex">
            <p className="text-[14px] font-bold mr-[14px]">{NEWSPAPERS.source}</p>
            <p className="text-[14px] font-normal opacity-40">{NEWSPAPERS.date}</p>
          </div>
          <p className="text-[20px] font-semibold leading-[22px]">{NEWSPAPERS.title}</p>
          <div className="flex flex-col items-start">
            <p className="mt-[15px] font-normal text-[14px] leading-[16.71px] opacity-50">
              {NEWSPAPERS.content}
            </p>
          </div>
          <div className="h-[141px] border rounded-lg border-graysearch flex mt-[30px]">
            <div className="ml-[18px] my-[18px] relative w-[115px] h-[104px]">
              <Image
                src={images.DXP_mobile}
                layout="fill"
                alt="Duong Xuan Phi"
                placeholder="blur"
                objectFit="cover"
                blurDataURL={images.DXP_mobile}
              />
            </div>
            <div className="my-[18px] flex-1 mx-[23px]">
              <p className="text-[14px] font-bold leading-[16.71px]">Nhà Đầu Tư</p>
              <p className="text-[14px] font-normal opacity-40 mt-[4px] leading-[16.71px]">
                12/09/2019
              </p>
              <p className="text-[14px] font-bold mt-[16px] leading-[18px]">
                Lần đầu tiên có người lượm đá cuội bên suối bán với giá 500 nghìn/viên?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[16px] flex ml-auto flex-1 mx-[15px]">
        <Seemore navigation={""} />
      </div>
    </section>
  );
}

export default memo(NewsPapers);
