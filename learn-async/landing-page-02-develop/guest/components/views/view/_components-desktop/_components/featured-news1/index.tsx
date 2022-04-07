import { HIGHLIGHT1_VIEW_FILTER } from "constants/view.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher, formatDate } from "utils/common";
import Image from "next/image";
import Link from "next/link";
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
          <div key={news.id} className="grid grid-cols-2 mb-16 gap-[53px]">
            <div className="relative w-full aspect-w-4 aspect-h-3">
              <Image
                src={news.mediaContent.url || {}}
                blurDataURL={news.mediaContent.urlBlur}
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
            <article>
              <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}`}>
                <a className="uppercase text-darkblue font-semibold text-lg">{news.title}</a>
              </Link>
              <p className="opacity-40 text-lg py-4">{formatDate(news.newsAt)}</p>
              <p className="text-justify text-gray800 text-lg line-clamp-4">{news.description}</p>
            </article>
          </div>
        )
      );
  };

  return <>{renderFeaturedNews()}</>;
}

export default memo(FeaturedNews);
