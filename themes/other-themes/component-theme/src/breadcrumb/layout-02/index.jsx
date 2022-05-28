/* eslint-disable no-confusing-arrow */
/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    StyledCrumb,
    StyledItemLink,
    StyledItemSpan,
    StyledTitle,
} from "./style";

const Breadcrumb = ({ className, sx, prev, title }) => (
    <StyledCrumb className={cn(className, "breadcrumb")} sx={sx}>
        {prev?.map((item, i) =>
            item?.link ? (
                <StyledItemLink key={i} to={item.link}>
                    {item.text} /{" "}
                </StyledItemLink>
            ) : (
                <StyledItemSpan>{item.text} / </StyledItemSpan>
            )
        )}
        <StyledTitle>{title}</StyledTitle>
    </StyledCrumb>
);

Breadcrumb.propTypes = {
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    prev: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Breadcrumb;
