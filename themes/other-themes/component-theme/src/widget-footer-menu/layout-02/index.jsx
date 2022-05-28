import PropTypes from "prop-types";
import { StyledMenu, StyledItem, StyledLink } from "./style";

const FooterMenuWidget = ({ data }) => (
    <StyledMenu>
        {data?.menu?.map((item) => (
            <StyledItem key={item.id}>
                <StyledLink path={item.link}>{item.text}</StyledLink>
            </StyledItem>
        ))}
    </StyledMenu>
);

FooterMenuWidget.propTypes = {
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

export default FooterMenuWidget;
