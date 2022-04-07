import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";

const DOMAIN = "https://duongxuanphi.vercel.app/";

interface ISEO {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}
function SEO({
  title = "Dương Xuân Phi",
  description = "Utopia Ecologe là khu nghỉ dưỡng sinh thái hoang sơ và bình yên đẹp nhất Tây Bắc.",
  image = DOMAIN + "images/banner.jpeg",
  keywords = "utopia eco lodge, utopia, at home in wild, nghi duong, hoang so, binh yen, sapa, sapa viet nam, tay bac",
}: ISEO) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Utopia Eco Lodge - At Home In Wild" />
      <meta property="og:url" content={DOMAIN + router.asPath} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Utopia Eco Lodge - At Home In Wild" />
      <meta name="twitter:creator" content="Utopia Eco Lodge - At Home In Wild" />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:url" content={DOMAIN + router.asPath} />
    </Head>
  );
}

export default SEO;
