import { ComponentTitle, CoursesListCarousel, NewsList, SearchInput } from "components";
import { fetcher, formatContentView } from "utils/common";
import { useRouter } from "next/router";
import DetailContent from "./content";
import FeaturedNews2 from "../_components-desktop/_components/featured-news2";
import Icons from "styles/images/icon";
import Image from "next/image";
import React, { memo } from "react";
import useSWR from "swr";

function NewsDetail() {
  const router = useRouter();
  const id = Number(router.query.id);
  const { data, error } = useSWR(`/api/view-detail/${id}`, fetcher);
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  const renderTitle = () => {
    if (data)
      return (
        <div className=" flex justify-start items-center gap-3 mb-10">
          <p className="text-2xl">Báo chí</p>
          <Image src={Icons.doubleRight} alt="icon" />
          <p className="text-2xl line-clamp-1">{formatContentView(data.title, 80)}</p>
        </div>
      );
  };
  return (
    <div className="bg-grayf6 pt-5">
      <div className="container xl:px-[94px] lg:px-[50px] px-5 mt-40 mx-auto pb-14">
        {renderTitle()}
        <div className="grid grid-cols-3 gap-12 mb-11">
          <div className="col-span-2">{data && <DetailContent data={data} />}</div>
          <nav>
            <SearchInput placeholder="Tìm kiêm bài viết" />
            <FeaturedNews2 />
          </nav>
        </div>
        <ComponentTitle title={"tin mới"} />
        <NewsList />
        <ComponentTitle title={"các khoá đào tạo"} className={"mt-9 mb-12"} />
        <CoursesListCarousel />
      </div>
    </div>
  );
}

export default memo(NewsDetail);
