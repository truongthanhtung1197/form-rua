import Header from "components/layout/header";
import LoginPage from "components/views/login";
import React from "react";
import SEO from "components/seo";

function Login() {
  return (
    <>
      <SEO />
      <Header />
      <LoginPage />
    </>
  );
}

export default Login;
