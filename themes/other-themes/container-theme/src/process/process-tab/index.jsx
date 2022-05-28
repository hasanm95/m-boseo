/** @jsx jsx */
import { jsx } from "theme-ui";
import { Children, Fragment } from "react";
import PropTypes from "prop-types";
import { Tab, TabPanel, TabList } from "react-tabs";
import { SectionTitleType } from "@boseo/helper/types";
import { SectionTitle } from "gatsby-theme-component";
import { Image } from "gatsby-theme-ui";
import {
    StyledSection,
    StyledTabs,
    StyledWrap,
    StyledLinkContent,
    StyledImg,
    StyledWhiteShape,
    StyledBottomLine,
    StyledTabContent,
} from "./style";

const ProcessTab = ({ data, children, spacing }) => {
    const childArr = Children.toArray(children);

    return (
        <StyledSection spacing={spacing}>
            <div className="container">
                {data?.section_title && (
                    <SectionTitle
                        sx={{
                            textAlign: "center",
                            mb: ["33px", null, "48px", "68px"],
                        }}
                        {...data.section_title}
                    />
                )}
                <StyledTabs>
                    <TabList>
                        {childArr?.map((item) => (
                            <Tab key={item.key}>
                                <StyledWrap className="nav-btn">
                                    <StyledLinkContent className="content">
                                        {item.props.data?.section_title && (
                                            <Fragment>
                                                {item.props.data.section_title
                                                    ?.image?.src && (
                                                    <StyledImg>
                                                        <Image
                                                            src={
                                                                item.props.data
                                                                    .section_title
                                                                    .image.src
                                                            }
                                                            alt={
                                                                item.props.data
                                                                    .section_title
                                                                    .image
                                                                    ?.alt ||
                                                                "Process Tab"
                                                            }
                                                        />
                                                    </StyledImg>
                                                )}
                                                {item.props.data.section_title
                                                    ?.title && (
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.props
                                                                .data
                                                                .section_title
                                                                .title,
                                                        }}
                                                    />
                                                )}
                                            </Fragment>
                                        )}
                                    </StyledLinkContent>
                                    <StyledWhiteShape />
                                    <StyledBottomLine className="bottom-line" />
                                </StyledWrap>
                            </Tab>
                        ))}
                    </TabList>
                    <StyledTabContent>
                        {childArr?.map((item) => (
                            <TabPanel key={item.key}>{item}</TabPanel>
                        ))}
                    </StyledTabContent>
                </StyledTabs>
            </div>
        </StyledSection>
    );
};

ProcessTab.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
    }),
    children: PropTypes.node.isRequired,
    spacing: PropTypes.oneOf([1, 2]),
};

ProcessTab.defaultProps = {
    spacing: 1,
};

export default ProcessTab;
