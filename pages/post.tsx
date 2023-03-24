import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export async function getStaticProps({ locale }:any) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Post({ allPostsData }: any) {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{t('post')}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, summary }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <p className={utilStyles.postSummary}>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                <br />
                {summary}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
