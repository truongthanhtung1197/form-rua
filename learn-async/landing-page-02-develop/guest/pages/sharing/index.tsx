import Header from "components/layout/header";
import React, { useCallback } from "react";
import SEO from "components/seo";

function Sharing({ isMobile }: { isMobile: boolean }) {
  const renderSharing = useCallback(() => {
    if (isMobile) {
      const PostMobile = require("components/views/sharing.Mobile").default;
      return (
        <div>
          <Header />
          <PostMobile />
        </div>
      );
    }
    const Posts = require("components/views/sharing").default;
    return (
      <div>
        <Header />
        <Posts />
      </div>
    );
  }, []);
  return (
    <>
      <SEO />
      {renderSharing()}
    </>
  );
}

export default Sharing;

Sharing.getInitialProps = ({ req }: any) => {
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
