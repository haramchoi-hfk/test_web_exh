import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './footer';
import Header from './header';
import mainPic from '../public/main.png'

export const siteTitle = 'Haram Choi';
const post = {children:"", whoami:"post"};

export default function Layout({ children, home }: any) {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Haram Choi" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
            <Image priority src={mainPic} className={utilStyles.mainImageContainer} alt={siteTitle} />
        ) : (
          <>
          </>)}
      </header>
      <main>{children}</main>
      <Footer />

    </div>
  );
}