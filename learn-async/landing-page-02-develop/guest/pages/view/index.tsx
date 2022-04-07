import Header from "components/layout/header";
import React from "react";
import SEO from "components/seo";
function ViewPage({ isMobile }: { isMobile: boolean }) {
  const renderView = () => {
    if (isMobile) {
      const ViewMobile = require("components/views/view/_components-mobile").default;
      return <ViewMobile />;
    }
    const ViewDesktop = require("components/views/view/_components-desktop").default;
    return <ViewDesktop />;
  };
  return (
    <>
      <Header />
      <SEO />
      {renderView()}
    </>
  );
}

export default ViewPage;

ViewPage.getInitialProps = ({ req }: any) => {
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
