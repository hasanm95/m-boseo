/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ContactInfo } from "gatsby-theme-component";
import { ItemType } from "@boseo/helper/types";
import { StyledSection } from "./style";

const ContactInfoArea = ({ data }) => (
    <StyledSection className="contact-info-area">
        <div className="container">
            <h2 className="sr-only">Contact Section</h2>
            <div className="row">
                {data?.items?.map((item, i) => (
                    <div
                        className={`${
                            i !== 0 ? "col-sm-6 col-lg-3" : "col-lg-6"
                        }`}
                        key={item.id}
                        sx={{ mb: "30px" }}
                    >
                        <ContactInfo
                            layout={i === 0 ? 2 : 1}
                            iconClass={item.iconClass}
                            title={item.title}
                            desc={item.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    </StyledSection>
);

ContactInfoArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ContactInfoArea;
