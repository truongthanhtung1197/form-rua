import { useCallback } from "react";
import Header from "components/layout/header";
import SEO from "components/seo";

const AboutMe = ({ isMobile }: { isMobile: Boolean }) => {
  const renderAboutMe = useCallback(() => {
    if (isMobile) {
      const AboutMeMobi = require("components/views/aboutMe.Mobile").default;
      return (
        <div>
          <Header />
          <AboutMeMobi />
        </div>
      );
    }
    const AboutMeDestop = require("components/views/aboutMe/index").default;

    return (
      <>
        <Header />
        <AboutMeDestop />;
      </>
    );
  }, []);

  return (
    <>
      <SEO />
      {renderAboutMe()}
    </>
  );
};

export default AboutMe;

AboutMe.getInitialProps = ({ req }: any) => {
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
