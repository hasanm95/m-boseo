/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { SectionTitleType, ButtonType, ItemType } from "@boseo/shared";
import { Button } from "gatsby-theme-ui";
import { IconBox01, SectionTitle } from "gatsby-theme-component";
import { StyledSection } from "./style";

const ServicesArea = ({ data, spacing, sx }) => (
    <StyledSection className="services" spacing={spacing} sx={sx}>
        <div className="container">
            <div className="row">
                <div
                    className="col-xl-4 col-lg-5 col-md-10"
                    sx={{ mb: "40px" }}
                >
                    {data?.section_title && (
                        <SectionTitle
                            {...data.section_title}
                            sx={{ mt: "25px" }}
                            descProps={{ pr: "20px" }}
                        />
                    )}
                    {data?.buttons?.map(({ id, path, content, ...rest }) => (
                        <Button
                            key={id}
                            path={path}
                            {...rest}
                            sx={{ mt: ["25px", null, null, "45px", "76px"] }}
                        >
                            {content}
                        </Button>
                    ))}
                </div>
                <div className="col-xl-6 col-lg-7 offset-xl-2 offset-lg-0">
                    <div className="row">
                        {data?.items?.map((item, i) => {
                            let styles;
                            if (i === 1) {
                                styles = { mt: [0, null, null, "30px"] };
                            } else if (i === 2) {
                                styles = { mt: [0, null, null, "-30px"] };
                            }
                            return (
                                <div
                                    className="col-md-6"
                                    sx={{ mb: "30px", ...styles }}
                                    key={item.id}
                                >
                                    <IconBox01
                                        title={item?.title}
                                        desc={item?.description}
                                        image={item?.images?.[0]}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </StyledSection>
);

ServicesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
    spacing: PropTypes.oneOf([1, 2]),
    sx: PropTypes.shape({}),
};

ServicesArea.defaultProps = {
    spacing: 1,
};

export default ServicesArea;
