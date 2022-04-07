import Header from "components/layout/header";
import React from "react";
import SEO from "components/seo";

function SearchResultPage({ isMobile }: { isMobile: boolean }) {
  const renderSearchResult = () => {
    if (isMobile) {
      const SearchResultMobile = require("components/views/view/search-result-mobile").default;
      return <SearchResultMobile />;
    }
    const SearchResultDesktop = require("components/views/view/search-result").default;
    return <SearchResultDesktop />;
  };
  return (
    <>
      <Header />
      <SEO />
      {renderSearchResult()}
    </>
  );
}

export default SearchResultPage;
SearchResultPage.getInitialProps = ({ req }: any) => {
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
