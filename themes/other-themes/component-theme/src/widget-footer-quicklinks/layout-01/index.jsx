/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import WidgetBox from "../../widget-box";
import WidgetTitle from "../../widget-title";
import { StyledMenu, StyledItem, StyledLink } from "./style";

const FooterQuicklinksWidget = ({ data }) => (
    <WidgetBox sx={{ ml: ["0px", null, null, "50px"] }}>
        {data?.title && (
            <WidgetTitle sx={{ mb: ["19px", null, null, "37px"] }}>
                {data.title}
            </WidgetTitle>
        )}

        <StyledMenu>
            {data?.menu?.map((item) => (
                <StyledItem key={item.id}>
                    <StyledLink path={item.link}>{item.text}</StyledLink>
                </StyledItem>
            ))}
        </StyledMenu>
    </WidgetBox>
);

FooterQuicklinksWidget.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                title: PropTypes.string,
                link: PropTypes.string,
            })
        ),
    }),
};

export default FooterQuicklinksWidget;
