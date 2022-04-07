import AbouDXP from "./component/aboutDXP";
import Banner from "./component/banner";
import CoursesList from "components/courses-list-carousel";
import Foundation from "./component/foundation";
import GoToTop from "components/goToTop";
import NewsPapers from "./component/newsPapers";
import React, { memo } from "react";
import Values from "./component/values";
import ViewAboutMe from "./component/aboutMe.view";

const Home = () => (
  <section className="mt-[99px]">
    <Banner />
    <Foundation />
    <AbouDXP />
    <div className="container xl:px-[94px] lg:px-[50px] mx-auto">
      <p className="leading-[57.28px] text-[48px] mb-[32px] mt-[78px]">CÁC KHOÁ ĐÀO TẠO</p>
      <CoursesList />
      <div className="mt-[61px]">
        <NewsPapers hidden={false} />
      </div>
      <ViewAboutMe />
      <Values />
    </div>

    <div className="flex w-full justify-end my-[15px] pr-[40px]">
      <GoToTop />
    </div>
  </section>
);
export default memo(Home);
