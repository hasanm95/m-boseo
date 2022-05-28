/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType } from "@boseo/helper/types";
import { Testimonial02 } from "gatsby-theme-component";
import { StyledSection } from "./style";

const TestimonialArea = ({ data }) => (
    <StyledSection className="testimonial-area">
        <div className="container">
            <div className="row gx-md-50">
                {data?.items?.map((item) => (
                    <div
                        className="col-lg-6"
                        sx={{ mb: ["30px", null, "50px"] }}
                        key={item.id}
                    >
                        <Testimonial02
                            name={item.title}
                            designation={item.designation}
                            company={item.company}
                            desc={item.description}
                            image={item.images?.[0]}
                        />
                    </div>
                ))}
            </div>
        </div>
    </StyledSection>
);

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
