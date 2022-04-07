import { fetcher } from "utils/common";
import React, { memo } from "react";
import useSWR from "swr";

function CommentView() {
  const { data, error } = useSWR(`/api/comment`, fetcher);
  if (!data) return <div>Loading..</div>;
  if (error) return <div>Fail to load...</div>;
  return (
    <div>
      <div className="not-italic mt-[54px] ">
        <section>
          <h2 className="text-left font-normal text-[20px] leading-[24px]">Bình luận</h2>
          {data &&
            data.map(
              (items: { name: string; date: string; description: string }, index: number) => (
                <div key={index}>
                  <h1 className="font-normal text-left  text-[18px] leading-[21px] mt-[19px]">
                    {items.name}
                  </h1>
                  <p className="opacity-50 text-[14px] leading-[17px] mt-[5px]">{items.date}</p>
                  <p className="mt-4 text-[18px] leading-[21px] font-normal">{items.description}</p>
                </div>
              )
            )}
        </section>
        <div className="text-left">
          {" "}
          <button className="  text-[14 px] font-normal leading-[16px] bg-gray500 w-[120px] h-[30px] border rounded-md border-none mt-[20px]">
            Trả lời
          </button>
        </div>

        <section className="mt-[32px]">
          <h1 className="text-[18px] text-left leading-[21px] font-normal">
            Chia sẻ ý kiến của bạn
          </h1>
        </section>
      </div>
    </div>
  );
}
export default memo(CommentView);
