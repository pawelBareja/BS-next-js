import Head from 'next/head';
import { homeSchema } from './schemas';
import { homeBreadcrumbs } from './breadcrumbs';

export const Seo = () => {
  return (
    <Head>
      <title>🚀 Bareja Studio: Modern Websites ⭐ Web Analytics</title>
      <meta
        name="robots"
        content="noindex, nofollow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      ></meta>
      <meta
        property="og:title"
        content="Bareja Studio: Web Design ⭐ Web Analytics"
      ></meta>
      <meta name="theme-color" content="#ff286e"></meta>
      <meta name="msapplication-navbutton-color" content="#ff286e"></meta>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="#ff286e"
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:site_name" content="Bareja Studio"></meta>
      <meta property="og:image" content="./images/logo.svg"></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:image" content="./images/logo.svg"></meta>
      <meta name="twitter:site" content="@PLsPolska"></meta>
      <meta
        name="twitter:title"
        content="Bareja Studio: Web Design ⭐ Web Analytics"
      ></meta>
      <meta
        name="description"
        content="Hi, I am Paweł web developer, providing fresh, creative projects to businesses who be noticed online…  read more
 "
      ></meta>
      <meta
        property="og:description"
        content="Hi, I am Paweł web developer, providing fresh, creative projects to businesses who be noticed online…  read more"
      ></meta>
      <meta
        name="twitter:description"
        content="Hi, I am Paweł web developer, providing fresh, creative projects to businesses who be noticed online…  read more"
      ></meta>
      <meta property="og:url" content="https://barejastudio.pl/"></meta>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbs) }}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <meta name="google-site-verification" content="iVQejhgGdZ9NSe5MdX0ZtN4acfJDOc6kEDGVd7tE0cs" />
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQ5QRXW');`}}></script>


    </Head>
  );
};
