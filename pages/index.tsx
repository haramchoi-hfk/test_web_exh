import Layout from "../components/layout";
import Image from 'next/image';
import mainPic from '../public/main.png'
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps({ locale }: any) {
    return {
        props: {
          locale
        },
    };
}

export const siteTitle = 'Haram Choi';

export default function Home() {
  return (
    <Layout>
      <Image priority src={mainPic} className={utilStyles.mainImageContainer} alt={siteTitle} />
    </Layout>
  );
}
