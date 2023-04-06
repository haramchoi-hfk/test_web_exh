import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from "next/link";
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Post({ postData }: any) {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        {postData.title}
      </Head>
      <article>
        <h1 className={utilStyles.headingMd}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <br />
      <a className={utilStyles.mainPadding}>
        <Link href="/post">
          &lt;_{t('goback')}
        </Link>
      </a>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, locale }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}