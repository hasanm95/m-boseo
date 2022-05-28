/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType } from "@boseo/helper/types";
import { Counter } from "gatsby-theme-ui";
import { StyledSection } from "./style";

const FunFactArea = ({ data }) => (
    <StyledSection className="funfact-area">
        <div className="container">
            <div className="row">
                {data?.items?.map((item) => (
                    <div
                        className="col-6 col-lg-3"
                        key={item.id}
                        sx={{ mb: ["18px", null, null, 0] }}
                    >
                        <Counter
                            number={item.number}
                            title={item.title}
                            suffix={item.suffix}
                        />
                    </div>
                ))}
            </div>
        </div>
    </StyledSection>
);

FunFactArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default FunFactArea;
