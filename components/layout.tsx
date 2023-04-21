import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './footer';
import Header from './header';
import mainPic from '../public/main.png'

export const siteTitle = 'Haram Choi';

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Haram Choi" />
        <meta name="description" content="Haram Choi's personal website" />
        <meta name="keywords" content="Haram Choi, haramchoi, haram, choi, media art, philosophy"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Haram Choi" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tileImage" content="/ms-icon-144x144.png" />
        <meta name="title" content={siteTitle} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale" content="kr_KO" />
        <meta property="og:url" content="https://haramchoi.surge.sh" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Haram Choi's personal website" />
        <meta property="og:image" content="https://haramchoi.com/main.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@haramchoi" />
        <meta name="twitter:creator" content="@haramchoi" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content="Haram Choi" />
        <meta name="twitter:image" content="https://haramchoi.surge.sh/main.png" />

      </Head>
      <Header />
      <main className={utilStyles.mainPadding}>{children}</main>
      <Footer />

    </div>
  );
}