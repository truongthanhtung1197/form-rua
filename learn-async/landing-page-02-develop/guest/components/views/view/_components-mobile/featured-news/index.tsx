import { HIGHLIGHT1_VIEW_FILTER } from "constants/view.constant";
import { fetcher, formatContentView } from "utils/common";
import Image from "next/image";
import React, { memo } from "react";
import useSWR from "swr";

function FeaturedNews() {
  const { data, error } = useSWR(
    `/api/view?filter=${JSON.stringify(HIGHLIGHT1_VIEW_FILTER)}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderFeaturedNews = () => {
    if (data)
      return data.data.map(
        (news: {
          title: string;
          newsAt: string;
          description: string;
          id: number;
          mediaContent: any;
        }) => (
          <div key={news.id} className="mt-4 pb-3 border-b border-solid border-gray300">
            <h1 className="text-darkblue font-semibold text-xl line-clamp-2">{news.title}</h1>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="relative">
                <Image
                  src={news.mediaContent.url || {}}
                  blurDataURL={news.mediaContent.urlBlur}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <article>
                <p className="opacity-40 text-xs">{news.newsAt}</p>
                <p className="text-gray800 text-sm leading-[14px] mt-3">
                  {formatContentView(news.description, 120)}
                </p>
              </article>
            </div>
          </div>
        )
      );
  };

  return <>{renderFeaturedNews()}</>;
}

export default memo(FeaturedNews);
