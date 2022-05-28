import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { HeadingType, TextType, ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import { AnalyzeForm } from "gatsby-theme-component";
import {
    StyledSection,
    StyledContent,
    StyledHeading,
    StyledText,
    StyledSubheading,
    StyledImageWrap,
} from "./style";

const HeroArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <StyledContent>
                        {data?.headings?.[0] && (
                            <StyledHeading as={data.headings[0]?.level}>
                                {data.headings[0]?.content}
                            </StyledHeading>
                        )}
                        {data?.texts?.[0] && (
                            <StyledText
                                dangerouslySetInnerHTML={{
                                    __html: data.texts[0].content,
                                }}
                            />
                        )}
                        {data?.headings?.[1] && (
                            <StyledSubheading as={data.headings[1]?.level}>
                                {data.headings[1]?.content}
                            </StyledSubheading>
                        )}
                        {data?.show_form && <AnalyzeForm layout={2} />}
                    </StyledContent>
                </div>
            </div>
        </div>
        <StyledImageWrap>
            {data?.images?.[0]?.src && (
                <Image
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Hero"}
                    className="img-man wow animated fadeInRightBig"
                />
            )}

            <StaticImage
                className="img-round"
                src="../../images/shape/round-shape.png"
                alt="Boseo-HasTech"
            />
        </StyledImageWrap>
    </StyledSection>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        show_form: PropTypes.bool,
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};
export default HeroArea;
