import { ComponentTitle, CoursesListCarousel, NewsList, SearchInput } from "components";
import { FeaturedNews1, FeaturedNews2, ViewAboutMe } from "./_components";
import NewsPapers from "components/views/home/component/newsPapers";
import React, { memo } from "react";

function NewsDesktop() {
  return (
    <div className="bg-grayf6">
      <div className="xl:px-[94px] lg:px-[50px] px-5 container mt-40 pt-5 mx-auto pb-14">
        <ComponentTitle title={"báo chí"} className={"mb-[53px]"} />
        <NewsPapers hidden={true} />
        <ComponentTitle title={"tin mới"} className={"mt-[70px]"} />
        <NewsList />
        <ComponentTitle title={"Tin nổi bật"} />
        <div className="grid grid-cols-3 mt-16 gap-11">
          <div className="col-span-2">
            <FeaturedNews1 />
          </div>
          <nav>
            <SearchInput placeholder="Tìm kiếm bài viết" />
            <FeaturedNews2 />
          </nav>
        </div>
        <ViewAboutMe />
        <ComponentTitle title={"các khoá đào tạo"} className={"mt-16 mb-12"} />
        <div className="pb-24">
          <CoursesListCarousel />
        </div>
      </div>
    </div>
  );
}

export default memo(NewsDesktop);
