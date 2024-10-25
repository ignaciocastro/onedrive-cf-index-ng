import Document, { Head, Html, Main, NextScript } from 'next/document';
import siteConfig from '../../config/site.config';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* HTML Meta Tags */}
          <title>The Summer Hikaru Archived</title>
          <meta name="description" content="A fan-run, semi public archive to all things HGSN (and its author)" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://hgsn.space" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="The Summer Hikaru Archived" />
          <meta property="og:description" content="A fan-run, semi public archive to all things HGSN (and its author)" />
          <meta property="og:image" content="https://hgsn.space/banner.jpg" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="hgsn.space" />
          <meta property="twitter:url" content="https://hgsn.space" />
          <meta name="twitter:title" content="The Summer Hikaru Archived" />
          <meta name="twitter:description" content="A fan-run, semi public archive to all things HGSN (and its author)" />
          <meta name="twitter:image" content="https://hgsn.space/banner.jpg" />

          {/* Additional Meta Tags */}
          <meta name="robots" content="noindex" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
