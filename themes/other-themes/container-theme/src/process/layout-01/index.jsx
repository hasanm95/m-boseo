/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import {
    HeadingType,
    ItemType,
    TextType,
    ImageType,
} from "@boseo/helper/types";
import { Image } from "gatsby-theme-ui";
import { StyledTitle, StyledDesc, StyledItem } from "./style";

const ProcessArea = ({ data }) => (
    <div className="row">
        <div className="col-xl-5 col-lg-6">
            {data?.headings?.[0]?.content && (
                <StyledTitle as={data.headings[0]?.level}>
                    {data.headings[0].content}
                </StyledTitle>
            )}

            {data?.texts?.[0]?.content && (
                <StyledDesc>{data.texts[0].content}</StyledDesc>
            )}

            <ul>
                {data?.items?.map((item) => (
                    <StyledItem key={item.id}>
                        <i className="fa fa-check-square-o" />
                        {item.title}
                    </StyledItem>
                ))}
            </ul>
        </div>
        <div className="col-xl-6 offset-xl-1 col-lg-6">
            {data?.images?.[0]?.src && (
                <Image
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Process"}
                />
            )}
        </div>
    </div>
);

ProcessArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default ProcessArea;
