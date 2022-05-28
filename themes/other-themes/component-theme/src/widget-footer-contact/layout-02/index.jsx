/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import WidgetBox from "../../widget-box";
import WidgetTitle from "../../widget-title";
import { StyledInfo } from "./style";

const FooterContactWidget = ({ data }) => (
    <WidgetBox>
        {data?.title && (
            <WidgetTitle
                sx={{
                    mb: ["20px", null, null, "25px"],
                    mt: [null, null, null, 0],
                }}
            >
                {data.title}
            </WidgetTitle>
        )}
        <StyledInfo>
            {data?.contact_info?.address && (
                <p
                    dangerouslySetInnerHTML={{
                        __html: data.contact_info.address || "Adreess",
                    }}
                />
            )}
            {data?.contact_info?.email && (
                <p>
                    <a href={`mailto:${data.contact_info.email}`}>
                        {data.contact_info.email}
                    </a>
                </p>
            )}

            {data?.contact_info?.phone && <p>{data.contact_info.phone}</p>}
        </StyledInfo>
    </WidgetBox>
);

FooterContactWidget.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        contact_info: PropTypes.shape({
            address: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
        }),
    }),
};

export default FooterContactWidget;
