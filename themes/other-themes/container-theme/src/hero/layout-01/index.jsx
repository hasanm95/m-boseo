/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { HeadingType, TextType, ImageType } from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import { ShapeLayer, Shape, AnalyzeForm } from "gatsby-theme-component";
import { StyledSection, StyledContent, StyledTitle, StyledDesc } from "./style";

const HeroArea = ({ data }) => (
    <StyledSection>
        <div
            className="container"
            sx={{ position: "relative", height: "100%" }}
        >
            <div className="row" sx={{ justifyContent: "center" }}>
                <div className="col-lg-12">
                    <StyledContent>
                        {data?.headings?.[0] && (
                            <StyledTitle as={data.headings[0]?.level}>
                                {data.headings[0].content}
                            </StyledTitle>
                        )}
                        {data?.texts?.[0] && (
                            <StyledDesc
                                dangerouslySetInnerHTML={{
                                    __html: data?.texts[0].content,
                                }}
                            />
                        )}
                        {data?.show_form && <AnalyzeForm />}
                    </StyledContent>
                </div>
            </div>
            {data?.images?.[0].src && (
                <Image
                    className="vector-agency"
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Hero Bg"}
                />
            )}

            <ShapeLayer sx={{ display: ["none", null, "block"] }}>
                <Shape layout={1} />
                <Shape layout={2} />
                <Shape layout={3} />
                <Shape layout={4} />
                <Shape layout={5} />
                <Shape layout={6} />
                <Shape layout={7} />
                <Shape layout={8} />
            </ShapeLayer>
        </div>
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
