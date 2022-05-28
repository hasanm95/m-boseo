import Footer01 from "gatsby-theme-layout/src/footer/layout-01";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query Footer04ShadowQuery {
            footer: general(section: { eq: "footer-04" }) {
                ...Footer01
            }
            contact: general(section: { eq: "contact" }) {
                ...Contact01
            }
        }
    `);
    return <Footer01 data={{ ...data?.footer, ...data?.contact }} />;
};

export default Footer;
