import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './footer';
import Header from './header';
import mainPic from '../public/main.png'

export const siteTitle = 'Haram Choi';

export default function Layout({ children, me}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Haram Choi" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main className={utilStyles.mainPadding}>{children}</main>
      <Footer />

    </div>
  );
}