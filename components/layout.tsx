import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './footer';
import Header from './header';
import mainPic from '../public/main.png'
import { Analytics } from '@vercel/analytics/react';

export const siteTitle = 'Haram Choi';

export default function Layout({ children, me}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title key="title">{siteTitle}</title>
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
        <meta name="robots" content="all" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Haram Choi's personal website" />
        <meta property="og:image" content="https://haramchoi.vercel.app/main.png" />
        <meta property="og:url" content="https://haramchoi.vercel.app" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={utilStyles.mainPadding}>{children}</main>
      <Footer />

    </div>
  );
}