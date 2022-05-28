/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Anchor } from "gatsby-theme-ui";
import { StyledMeta, StyleItem, createStyles } from "./style";

const BlogMeta = ({ metaList, color, className, sx }) => {
    const metaProps = {
        css: (theme) => createStyles(theme, color),
    };
    return (
        <StyledMeta
            className={cn("blog-meta", className)}
            sx={sx}
            {...metaProps}
        >
            {metaList?.map((meta) => (
                <StyleItem className="meta-item" key={meta.title}>
                    {meta?.text && <Fragment>{meta.text}</Fragment>}{" "}
                    {meta?.path && (
                        <Anchor path={meta.path}>{meta.title}</Anchor>
                    )}
                    {!meta?.path && <Fragment>{meta.title}</Fragment>}
                </StyleItem>
            ))}
        </StyledMeta>
    );
};

BlogMeta.propTypes = {
    metaList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            path: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
    color: PropTypes.oneOf(["primary", "light"]),
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

BlogMeta.defaultProps = {
    color: "primary",
};

export default BlogMeta;
