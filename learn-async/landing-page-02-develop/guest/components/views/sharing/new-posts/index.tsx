import { ComponentTitle } from "components";
import { LIST_NEWS_POST_SHARINGS } from "constants/sharings.constants";
import { ROUTERS } from "constants/router.constant";
import { fetcher } from "utils/common";
import { formatContent, formatDate } from "utils/common";
import Image from "next/image";
import Images from "styles/images/sharing";
import React, { memo } from "react";
import useSWR from "swr";

interface Ipost {
  title: string;
  content: string;
  sharingAt: String;
}

function PostsNew() {
  const { data, error } = useSWR(
    `${ROUTERS.API_SHARING_LIST_NEWS_POST}?filter=${JSON.stringify(LIST_NEWS_POST_SHARINGS)}`,
    fetcher
  );
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  return (
    <>
      <div className="mb-[25px]">
        <ComponentTitle title={"Bài mới"} className={"mt-[50px]"} />
      </div>
      <div className="grid grid-cols-2 mt-[40px] gap-x-[30px] gap-y-[52px] not-italic  ">
        {data?.data.map((items: Ipost, index: number) => (
          <div key={index}>
            <Image src={Images.VideoF} height={169} width={244} alt="video" layout="responsive" />

            <div className="px-[20px] ">
              <p className="opacity-50 mt-[5px]">{formatDate(items.sharingAt)}</p>
              <h1 className="font-bold text-[20px] leading-[24px] text-justify mt-[5px]">
                {items.title}
              </h1>
              <p className="text-[18px] leading-[21px] font-normal mt-[5px] ">
                {formatContent(items.content)}
              </p>
            </div>
          </div>
        ))}
        <button className="  ml-[430px] flex w-[190px] gap-2">
          <p className="text-[18px] leading-[21px] font-normal mt-[-2px]">Xem thêm</p>
          <Image src={Images.IconNext} alt="iconVideo" />
        </button>
      </div>
    </>
  );
}

export default memo(PostsNew);
