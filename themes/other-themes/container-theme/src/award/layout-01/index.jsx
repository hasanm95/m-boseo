/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType, ButtonType } from "@boseo/helper/types";
import { AwardItem, SectionTitle } from "gatsby-theme-component";
import { Button } from "gatsby-theme-ui";
import { StyledSection, StyledContent } from "./style";

const AwardArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 order-lg-0 order-1">
                    <StyledContent>
                        {data?.items?.map((item, i) => (
                            <AwardItem
                                key={item.id}
                                title={item.title}
                                image={item.images?.[0]}
                                className={`item-${i}`}
                            />
                        ))}
                    </StyledContent>
                </div>
                <div
                    className="col-xl-5 col-lg-6 col-12 offset-xl-1 offset-lg-0 order-lg-1 order-0"
                    sx={{ textAlign: ["center", null, null, "left"] }}
                >
                    {data?.section_title && (
                        <SectionTitle {...data.section_title} />
                    )}

                    {data?.buttons?.map(({ id, path, content, ...rest }) => (
                        <Button
                            key={id}
                            path={path}
                            {...rest}
                            sx={{ mt: ["35px", null, "40px", "50px"] }}
                        >
                            {content}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    </StyledSection>
);

AwardArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default AwardArea;
