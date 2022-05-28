/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Button, Image } from "gatsby-theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import {
    HeadingType,
    TextType,
    ImageType,
    ButtonType,
} from "@boseo/helper/types";
import {
    StyledSection,
    StyledContent,
    StyledTitle,
    StyledDesc,
    StyledShape,
    StyledThumb,
    StyledBtnWrap,
} from "./style";

const HeroArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <StyledContent>
                        {data?.headings?.[0] && (
                            <StyledTitle
                                as={data?.headings[0]?.level}
                                dangerouslySetInnerHTML={{
                                    __html: data.headings[0].content,
                                }}
                            />
                        )}
                        {data?.texts?.[0] && (
                            <StyledDesc
                                dangerouslySetInnerHTML={{
                                    __html: data?.texts[0].content,
                                }}
                            />
                        )}
                        <StyledBtnWrap>
                            {data?.buttons?.map(
                                ({ id, path, content, ...rest }) => (
                                    <Button key={id} path={path} {...rest}>
                                        {content}
                                    </Button>
                                )
                            )}
                        </StyledBtnWrap>
                    </StyledContent>
                </div>
            </div>
        </div>
        {data?.images?.[0]?.src && (
            <StyledThumb className="thumb">
                <Image
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Hero"}
                />
            </StyledThumb>
        )}
        <StyledShape className="shape">
            <StaticImage
                src="../../images/shape/bg-shape-05.png"
                alt="Boseo-HasTech"
            />
        </StyledShape>
    </StyledSection>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default HeroArea;
