/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { HeadingType, ItemType, SectionTitleType } from "@boseo/helper/types";
import { StaticImage } from "gatsby-plugin-image";
import { List, ListItem } from "gatsby-theme-ui";
import { ReportForm, SectionTitle } from "gatsby-theme-component";
import { StyledSection, StyledShapeWrap, StyledShape } from "./style";

const DividerArea = ({ data }) => (
    <StyledSection className="divider-area">
        <div className="container" sx={{ position: "relative" }}>
            <div className="row">
                {data?.show_form && (
                    <div
                        className="col-lg-5 offset-lg-1 col-xl-4 offset-xl-2"
                        sx={{ mb: "36px" }}
                    >
                        <ReportForm heading={data.heading} />
                    </div>
                )}
                <div className="col-lg-5 offset-lg-1">
                    {data?.section_title && (
                        <SectionTitle
                            title={data?.section_title.title}
                            subtitle={data?.section_title.subtitle}
                            desc={data?.section_title.description}
                            descProps={{ pr: "30px" }}
                            titleStyle={2}
                        />
                    )}
                    {data?.items && (
                        <List hasIcon column={2} sx={{ mt: "30px" }}>
                            {data.items.map((item) => (
                                <ListItem key={item.id}>
                                    <i className="fa fa-check-circle-o" />
                                    {item.title}
                                </ListItem>
                            ))}
                        </List>
                    )}
                </div>
            </div>
            <StyledShapeWrap>
                <StyledShape layout={1}>
                    <StaticImage
                        src="../../images/shape/d01.png"
                        alt="Boseo-HasTech"
                    />
                </StyledShape>
                <StyledShape layout={2}>
                    <StaticImage
                        src="../../images/shape/d02.png"
                        alt="Boseo-HasTech"
                    />
                </StyledShape>
                <StyledShape layout={3}>
                    <StaticImage
                        src="../../images/shape/d03.png"
                        alt="Boseo-HasTech"
                    />
                </StyledShape>
                <StyledShape layout={4}>
                    <StaticImage
                        src="../../images/shape/d04.png"
                        alt="Boseo-HasTech"
                    />
                </StyledShape>
                <StyledShape layout={5}>
                    <StaticImage
                        src="../../images/shape/d05.png"
                        alt="Boseo-HasTech"
                    />
                </StyledShape>
                <StyledShape layout={6}>
                    <StaticImage
                        src="../../images/shape/d06.png"
                        alt="Boseo-HasTech"
                    />
                </StyledShape>
            </StyledShapeWrap>
        </div>
    </StyledSection>
);

DividerArea.propTypes = {
    data: PropTypes.shape({
        heading: PropTypes.shape(HeadingType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        section_title: PropTypes.shape(SectionTitleType),
        show_form: PropTypes.bool,
    }),
};

export default DividerArea;
