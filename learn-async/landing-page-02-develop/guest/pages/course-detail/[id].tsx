import { Header } from "components";
import React from "react";

function CourseDetailPage({ isMobile }: { isMobile: boolean; data: any }) {
  const renderCourseDetailPage = () => {
    if (isMobile) {
      const CourseDetailMobile = require("components/views/course-detail/mobile").default;
      return <CourseDetailMobile />;
    }
    const CourseDetailDesktop = require("components/views/course-detail").default;
    return <CourseDetailDesktop />;
  };

  return (
    <div className="bg-grayf6">
      <Header />
      {renderCourseDetailPage()}
    </div>
  );
}

export default CourseDetailPage;

CourseDetailPage.getInitialProps = ({ req }: any) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }

  let isMobile = Boolean(
    userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );

  return {
    isMobile,
  };
};
