import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default function Project() {
    const { t } = useTranslation('common');
    return (
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>{t('project')}</h2>
                <ul className={utilStyles.list}>

                </ul>
            </section>
        </Layout>
    )
}