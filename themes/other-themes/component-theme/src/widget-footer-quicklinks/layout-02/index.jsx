/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import WidgetBox from "../../widget-box";
import { StyledItem, StyledLink } from "./style";

const FooterQuicklinksWidget = ({ className, sx, data }) => (
    <WidgetBox className={cn(className, "footer-quicklinks-widget")} sx={sx}>
        <ul className="footer-quicklinks">
            {data?.menu?.map((item) => (
                <StyledItem key={item.id}>
                    <StyledLink path={item.link}>{item.text}</StyledLink>
                </StyledItem>
            ))}
        </ul>
    </WidgetBox>
);

FooterQuicklinksWidget.propTypes = {
    sx: PropTypes.shape({}),
    className: PropTypes.string,
    data: PropTypes.shape({
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
