import { HIGHLIGHT2_VIEW_FILTER } from "constants/view.constant";
import { ROUTERS } from "constants/router.constant";
import { fetcher, formatDate } from "utils/common";
import Link from "next/link";
import React, { memo } from "react";
import useSWR from "swr";

function FeaturedNews2() {
  const { data, error } = useSWR(
    `/api/view?filter=${JSON.stringify(HIGHLIGHT2_VIEW_FILTER)}`,
    fetcher
  );
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderSuggestion = () => {
    if (data)
      return data.data.map((news: { title: string; newsAt: string; id: number }) => (
        <article key={news.id} className="md:mt-16 mt-7 md:mx-[30px]">
          <Link href={`${ROUTERS.VIEW_DETAIL}/${news.id}`}>
            <a className="font-semibold text-xl text-gray800 line-clamp-2">{news.title}</a>
          </Link>
          <p className="opacity-40 text-lg">{formatDate(news.newsAt)}</p>
        </article>
      ));
  };
  return <>{renderSuggestion()}</>;
}

export default memo(FeaturedNews2);
