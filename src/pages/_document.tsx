import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A fan-run, semi public archive to all things HGSN (and its author)" />
          <meta name="robots" content="noindex" />
          
          {/* OpenGraph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteConfig.title} />
          <meta property="og:url" content="https://hgsn.space" />
          <meta property="og:title" content={siteConfig.title} />
          <meta property="og:description" content="A fan-run, semi public archive to all things HGSN (and its author)" />
          <meta property="og:image" content="https://hgsn.space/banner.jpg" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta property="og:image:type" content="image/jpeg" />
          
          {/* Favicon and Fonts */}
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
    )
  }
}

export default MyDocument
