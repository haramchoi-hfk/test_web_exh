import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";


export default function Contact() {
    return (
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Contact</h2>
                <p className={utilStyles.lightText}>haram.choi.haram@gmail.com</p>
            </section>
        </Layout>
    )
}