import Header from "components/layout/header";
import React from "react";
import SEO from "components/seo";

function NewsDetailPage({ isMobile }: { isMobile: boolean }) {
  const renderNewsDetail = () => {
    if (isMobile) {
      const DetailMobile = require("components/views/view/news-detail-mobile").default;
      return <DetailMobile />;
    }
    const DetailDesktop = require("components/views/view/news-detail").default;
    return <DetailDesktop />;
  };
  return (
    <>
      <Header />
      <SEO />
      {renderNewsDetail()}
    </>
  );
}

export default NewsDetailPage;

NewsDetailPage.getInitialProps = ({ req }: any) => {
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
