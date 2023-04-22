import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useRouter } from "next/router";



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Post({ allPostsData, locale }: any) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Post</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, summary }: any) => (
            <li className={utilStyles.listItem} key={id}>
              {/* <Link href={`/posts/${id}`} locale={false}>{title}</Link> */}
              <Link href={`/posts/${id}`} >{title}</Link>
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
