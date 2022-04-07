import { EditorDynamic } from "components/form/editor";
import { formatDate } from "utils/common";
import Image from "next/image";
import Images from "styles/images/home/gallery/photos";
import React, { memo } from "react";

function DetailContent({ data }: any) {
  return (
    <div className="mb-11">
      <div className="h-[300px] w-full bg-gray300 relative">
        <Image src={Images.img14} alt="" layout="fill" placeholder="blur" objectFit="cover" />
      </div>
      <article>
        <p className="text-xl font-bold my-2">
          {data.newspaper} <span className="font-normal opacity-40">{formatDate(data.newsAt)}</span>
        </p>
        <h1 className="font-bold text-2xl leading-[30px] text-justify mb-5">{data.title}</h1>
        <p className="text-lg leading-[30px]">
          <EditorDynamic content={data.content} />
        </p>
      </article>
    </div>
  );
}

export default memo(DetailContent);
