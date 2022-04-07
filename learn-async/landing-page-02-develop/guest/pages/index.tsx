/* eslint-disable @next/next/no-page-custom-font */
import { useCallback } from "react";
import SEO from "components/seo";

const HomePage = ({ isMobile }: { isMobile: boolean }) => {
  const renderHome = useCallback(() => {
    const HomeMobile = require("components/views/home.mobile").default;
    const Header = require("components/layout/header").default;
    const HomeDesktop = require("components/views/home").default;

    if (isMobile) {
      return (
        <>
          <Header />
          <HomeMobile />
        </>
      );
    }

    return (
      <>
        <Header />
        <HomeDesktop />
      </>
    );
  }, []);

  return (
    <>
      <SEO />
      {renderHome()}
    </>
  );
};

export default HomePage;

HomePage.getInitialProps = ({ req }: any) => {
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
