import { ComponentTitle, CoursesListCarousel, NewsList, SearchInput } from "components";
import { FeaturedNews2 } from "../_components-desktop/_components";
import FeaturedNews from "../_components-mobile/featured-news";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import NewsPapers from "components/views/home/component/newsPapers";
import React, { memo } from "react";
import ViewAboutMe from "../_components-mobile/view-about-me";

function ViewsMobile() {
  return (
    <div className="mx-5 mt-28">
      <NewsPapers hidden={true} />
      <SearchInput placeholder="Tìm kiếm bài viết" />
      <NewsList />
      <ComponentTitle title={"bài mới"} className={"my-3"} />
      <FeaturedNews />
      <div className="flex justify-end items-center gap-2 mt-5">
        <Link href="">
          <a className="text-sm text-gray800">Xem thêm</a>
        </Link>
        <Image src={Icons.next} alt="icon" />
      </div>
      <div className="pb-7">
        <FeaturedNews2 />
      </div>
      <div className="-mx-5">
        <ViewAboutMe />
      </div>
      <ComponentTitle title={"các khoá đào tạo"} className={"mt-16 mb-12"} />
      <div className="mb-11">
        <CoursesListCarousel />
      </div>
    </div>
  );
}

export default memo(ViewsMobile);
