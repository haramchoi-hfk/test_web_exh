import Layout from "../components/layout";
import Image from 'next/image';
import mainPic from '../public/main.png'
import utilStyles from '../styles/utils.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from 'next-i18next'



export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export const siteTitle = 'Haram Choi';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Layout home>
      <Image priority src={mainPic} className={utilStyles.mainImageContainer} alt={siteTitle} />
    </Layout>
  );
}
