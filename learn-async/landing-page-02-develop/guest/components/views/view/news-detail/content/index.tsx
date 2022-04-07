import { EditorDynamic } from "components/form/editor";
import { formatDate } from "utils/common";
import Image from "next/image";
import React, { memo } from "react";

function DetailContent({ data }: any) {
  const { url, urlBlur } = data.mediaContent || {};
  return (
    <>
      <div className=" w-full aspect-w-7 aspect-h-4 relative">
        <Image
          src={url}
          blurDataURL={urlBlur}
          alt="DXP"
          layout="fill"
          placeholder="blur"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <article>
        <h1 className="font-bold text-2xl leading-[30px] text-justify  my-5">{data?.title}</h1>
        <p className="text-xl leading-[30px]">
          <EditorDynamic content={data?.content} />
        </p>
        <p className="text-xl font-bold text-right my-3">{data.author}</p>
        <p className="text-xl font-bold">
          {data.newspaper}
          <span className="font-normal opacity-40 ml-2">{formatDate(data.newsAt)}</span>
        </p>
        <div className="flex justify-between items-start gap-3 mt-5">
          <p className="pt-3 text-xl font-semibold">Link báo:</p>
          <div className="px-5 py-4 bg-gray200 rounded-lg flex-1 text-xl">{data.url}</div>
        </div>
      </article>
    </>
  );
}

export default memo(DetailContent);
