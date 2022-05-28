/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
// import { DiscussionEmbed } from "disqus-react";
import loadable from "@loadable/component";
import { disqusShortname } from "@boseo/shared/data/api-keys";
import { StyledComment, StyledTitleWrap } from "./style";

const DiscussionEmbed = loadable(() => import("disqus-react"), {
    resolveComponent: (components) => components.DiscussionEmbed,
});

const BlogComment = ({ slug, title, siteUrl, className, sx }) => {
    const disqusConfig = {
        url: siteUrl + slug,
        identifier: slug,
        title,
    };
    return (
        <StyledComment className={cn("blog-comment", className)} sx={sx}>
            <StyledTitleWrap>
                <h3>Leave your thought here</h3>
                <p>
                    Your email address will not be published. Required fields
                    are marked *
                </p>
            </StyledTitleWrap>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </StyledComment>
    );
};

BlogComment.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    siteUrl: PropTypes.string,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default BlogComment;
