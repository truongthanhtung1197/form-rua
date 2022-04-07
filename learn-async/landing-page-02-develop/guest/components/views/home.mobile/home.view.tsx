import { memo } from "react";
import AboutDXP from "./component/aboutDXP";
import Banner from "./component/banner";
import CoursesList from "components/views/courses/_components/courses-list";
import Foundation from "components/views/home/component/foundation";
import GoToTop from "components/goToTop";
import NewsPapers from "./component/newsPapers";
import RigisterForm from "components/register-form";
import Values from "../home.mobile/component/values";
import ViewAboutMe from "components/views/home/component/aboutMe.view";

const Index = () => {
  return (
    <div className="bg-grayf6">
      <Banner />
      <Foundation />
      <AboutDXP />
      <div className="mx-[33px]">
        <p className="leading-[28.64px] text-[24px] my-[21px]">CÁC KHOÁ ĐÀO TẠO</p>
        <CoursesList />
      </div>
      <div className="mx-[15px] bg-white p-[24px] rounded-lg mt-[17px]">
        <RigisterForm />
      </div>
      <NewsPapers />
      <ViewAboutMe />
      <Values />
      <div className="flex justify-center mt-[20px] mb-[5px]">
        <GoToTop />
      </div>
    </div>
  );
};
export default memo(Index);
