import { LIST_POST_HIGHLIGHT_2_SHARING } from "constants/sharings.constants";
import { ROUTERS } from "constants/router.constant";
import { fetcher, formatDate } from "utils/common";
import Icons from "styles/images/icon";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import useSWR from "swr";

interface Ifeatured_1 {
  title: string;
  sharingAt: string;
}
function FeaturedPosts() {
  const { data, error } = useSWR(
    `${ROUTERS.API_SHARING_LIST_FEATURED_2}?filter=${JSON.stringify(
      LIST_POST_HIGHLIGHT_2_SHARING
    )}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;

  return (
    <div className="flex-1 not-italic">
      <div className="w-[326px] ">
        <div>
          <Image src={Images.DXP01} placeholder="blur" alt="avtDPX" />
        </div>
        <p className="font-semibold leading-[28px] text-[20px] text-center mt-[17px] ">
          Một kẻ Dại Khờ luôn theo đuổi ước mơ tới cùng và mong muốn truyền cảm hứng sống cho tất cả
          mọi người!
        </p>
        <div className=" h-11 bg-gray200 rounded-lg flex justify-between px-4 mt-[22px] my-6">
          <input
            type="text"
            placeholder="Tìm Kiếm Bài Viết"
            className=" bg-gray200 w-[327px] h-full text-graysearch focus:outline-none"
          />
          <span className="mt-[12px] mr-[10px]">
            <Image src={Icons.search} width={22} height={22} alt="icon" />
          </span>
        </div>
      </div>

      <div className="mt-[72px] grid grid-cols-1 gap-[26px] w-[326px] px-6  ">
        <h1 className="font-normal text-[36px] leading-[43px]">BÀI NỔI BẬT</h1>
        {data?.data.map((item: Ifeatured_1, index: number) => (
          <div key={index}>
            <article className="w-[272px] grid gap-[13px]">
              <h2 className="text-[20px] font-semibold leading-[25px] text-gray800">
                {item.title}
              </h2>
              <p className="text-[18px] leading-[21px] font-normal opacity-40">
                {formatDate(item.sharingAt)}
              </p>
            </article>
          </div>
        ))}
      </div>

      <div className="w-[326px] mt-[91px]">
        <div className="flex relative ">
          <h1 className="text-[24px] laeding-[29px] font-semibold ">Video</h1>
          <div className="border-b absolute left-[80px] bottom-[10px] border-graysearch w-[245px] "></div>
        </div>
        <div className="mt-[32px]">
          <div>
            <Image src={Images.VideoF} alt="icon" />
            <h1 className="text-[18px] leading-[23px] font-semibold px-3">
              Một ngày lênh đênh trên biển cách đất liền hơn 1000km
            </h1>
          </div>
        </div>
      </div>

      <section className="flex flex-wrap gap-2 justify-center mt-[31px] mr-[80px]">
        <button className="border w-[95px] text-center text-[18px] leading-[21px] font-normal border-gray300 rounded-md h-[34px] ">
          Kinh tế
        </button>
        <button className="border border-gray300 w-[95px] text-center text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
          Xã hội
        </button>
        <button className="border w-[95px] border-gray300 text-center text-[18px] leading-[21px] font-normal h-[34px] rounded-md ">
          Giáo dục
        </button>
        <button className="border w-[95px] border-gray300 text-center  text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
          Tâm lý
        </button>
        <button className="border w-[95px] border-gray300 text-center  text-[18px] leading-[21px] font-normal h-[34px] rounded-md">
          Cuộc sống
        </button>
      </section>
    </div>
  );
}
export default memo(FeaturedPosts);
