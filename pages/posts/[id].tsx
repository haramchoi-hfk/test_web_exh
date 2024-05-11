import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from "next/link";

export default function Post({ postData }: any) {

  return (
    <Layout>
      {/* <Head>
        {postData.title}
        <title key="title">{postData.title}</title>
        <meta name="author" content="Haram Choi" />
        <meta name="description" content={postData.summary} />
        <meta name="keywords" content={postData.keywords}></meta>
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.summary} />
        <meta property="og:image" content="TODO" />
      </Head> */}
      <article>
        <h1 className={utilStyles.headingMd}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          {/* <br/> */}
          {/* <Date dateString={postData.lastUpdate} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        
      </article>
      <br />
      <a className={utilStyles.mainPadding}>
        <Link href="/post">
          &larr; Back to posts
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

export async function getStaticProps({ params}: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    }
  }
}