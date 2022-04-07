import { fetcher } from "utils/common";
import Image from "next/image";
import Images from "styles/images/icon";
import React, { memo } from "react";
import useSWR from "swr";

function CommentViews() {
  const { data, error } = useSWR(`/api/sharing/comments`, fetcher);
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  return (
    <div className="not-italic mt-[54px]">
      <section>
        <h2 className="font-semibold text-[24px] leading-[29px]">Bình luận</h2>
        {data?.data &&
          data?.data.map(
            (items: { name: string; createdAt: string; content: string }, index: number) => (
              <div key={index}>
                <h1 className="font-semibold text-[24px] leading-[29px] mt-[19px]">{items.name}</h1>
                <p className="opacity-50">{items.createdAt}</p>
                <p className="mt-4">{items.content}</p>
              </div>
            )
          )}
      </section>

      <section className="flex">
        <div className="w-1/12 mt-[19px]">
          <Image src={Images.share} alt="iconShare" />
        </div>
        {data &&
          data.map((items: { name: string; createdAt: string; content: string }, index: number) => (
            <div className="flex-1" key={index}>
              <h1 className="font-semibold text-[24px] leading-[29px] mt-[19px]">{items.name}</h1>
              <p className="opacity-50">{items.createdAt}</p>
              <p className="mt-4">{items.content}</p>
            </div>
          ))}
      </section>

      <button className=" text-[20px] font-semibold leading-[24px] bg-gray500 w-[160px] h-[45px] border rounded-md border-none mt-[10px]">
        Trả lời
      </button>

      <section className="mt-[50px]">
        <h1 className="text-[24px] leading-[29px] font-semibold">Chia sẻ ý kiến của bạn</h1>
      </section>
    </div>
  );
}

export default memo(CommentViews);
