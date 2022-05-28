import Header04 from "gatsby-theme-layout/src/header/layout-04";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
    const data = useStaticQuery(graphql`
        query Heder04ShadowQuery {
            header: general(section: { eq: "header-04" }) {
                ...Header01
            }
            navigation: general(section: { eq: "menu" }) {
                ...Menu01
            }
            contact: general(section: { eq: "contact" }) {
                ...Contact01
            }
        }
    `);

    return (
        <Header04
            data={{ ...data.header, ...data.navigation, ...data.contact }}
        />
    );
};

export default Header;
