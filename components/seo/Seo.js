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
        content="Bareja Studio: Modern Websites ⭐ Web Analytics"
      ></meta>
      <meta name="theme-color" content="#ff286e" />
      <meta property="og:type" content="website"></meta>
      <meta property="og:site_name" content="Bareja Studio"></meta>
      <meta property="og:image" content="./images/logo.svg"></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:image" content="./images/logo.svg"></meta>
      <meta name="twitter:site" content="@PLsPolska"></meta>
      <meta
        name="twitter:title"
        content="Bareja Studio: Modern Websites ⭐ Web Analytics"
      ></meta>
      <meta
        name="description"
        content="Create a modern and Innovative Website together. Engage Your Target Audience and Measeure all online activities with professional web analytics . …  read more
 "
      ></meta>
      <meta
        property="og:description"
        content="Create a modern and Innovative Website together. Engage Your Target Audience and Measeure all online activities with professional web analytics . …  read more"
      ></meta>
      <meta
        name="twitter:description"
        content="Create a modern and Innovative Website together. Engage Your Target Audience and Measeure all online activities with professional web analytics . …  read more"
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
    </Head>
  );
};
