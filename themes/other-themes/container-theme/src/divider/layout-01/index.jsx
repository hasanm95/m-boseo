/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { HeadingType, TextType, ButtonType } from "@boseo/helper/types";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "gatsby-theme-ui";
import {
    StyledContent,
    StyledContentInner,
    StyledTitle,
    StyledDesc,
    StyledShape,
} from "./style";

const DividerArea = ({ data }) => (
    <StyledContent className="divider">
        <StyledContentInner>
            {data?.headings?.[0]?.content && (
                <StyledTitle as={data?.headings[0]?.level}>
                    {data?.headings[0].content}
                </StyledTitle>
            )}
            {data?.texts?.[0]?.content && (
                <StyledDesc>{data?.texts[0].content}</StyledDesc>
            )}
            {data?.buttons?.map(({ id, content, path, ...rest }) => (
                <Button key={id} path={path} {...rest}>
                    {content}
                </Button>
            ))}
        </StyledContentInner>
        <div className="shape-layer">
            <StyledShape layout={1}>
                <StaticImage
                    src="../../images/shape/v01.png"
                    alt="Roomedia-HasTech"
                />
            </StyledShape>
            <StyledShape layout={2}>
                <StaticImage
                    src="../../images/shape/v02.png"
                    alt="Roomedia-HasTech"
                />
            </StyledShape>
            <StyledShape layout={3}>
                <StaticImage
                    src="../../images/shape/v03.png"
                    alt="Roomedia-HasTech"
                />
            </StyledShape>
            <StyledShape layout={4}>
                <StaticImage
                    src="../../images/shape/v04.png"
                    alt="Roomedia-HasTech"
                />
            </StyledShape>
            <StyledShape layout={5}>
                <StaticImage
                    src="../../images/shape/v05.png"
                    alt="Roomedia-HasTech"
                />
            </StyledShape>
        </div>
    </StyledContent>
);

DividerArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default DividerArea;
