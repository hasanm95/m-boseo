/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import WidgetBox from "../widget-box";
import WidgetTitle from "../widget-title";
import NewsletterForm from "../forms/newsletter-form/layout-01";

const FooterNewsLetterWidget = ({ data }) => (
    <WidgetBox>
        {data?.title && (
            <WidgetTitle sx={{ mb: ["19px", null, null, "37px"] }}>
                {data.title}
            </WidgetTitle>
        )}
        <p sx={{ mb: "15px" }}>We are not spammers.!</p>
        <NewsletterForm />
    </WidgetBox>
);

FooterNewsLetterWidget.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
    }),
};
export default FooterNewsLetterWidget;
