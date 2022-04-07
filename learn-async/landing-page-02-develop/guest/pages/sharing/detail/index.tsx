import Header from "components/layout/header";
import React, { useCallback } from "react";
import SEO from "components/seo";
function SharingPostDetail({ isMobile }: { isMobile: boolean }) {
  const renderDetail = useCallback(() => {
    if (isMobile) {
      const PostDetailMobi = require("components/views/sharing.Mobile/Post-Detail").default;
      return (
        <div>
          <Header />
          <PostDetailMobi />
        </div>
      );
    }
    const PostDetail = require("components/views/sharing/Post-Detail").default;
    return (
      <div>
        <Header />
        <PostDetail />
      </div>
    );
  }, []);
  return (
    <>
      <SEO />
      {renderDetail()}
    </>
  );
}

export default SharingPostDetail;

SharingPostDetail.getInitialProps = ({ req }: any) => {
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
