/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Anchor } from "gatsby-theme-ui";
import cn from "clsx";
import { StyledBreadCrumb, StyledTitle } from "./style";

const BreadCrumb = ({ pageName, prevList, className, showTitle, type, sx }) => (
    <div className={cn("page-title-content", className)} sx={sx}>
        {showTitle && (
            <StyledTitle className="title">
                {type && <span>{type} :</span>} {pageName}
            </StyledTitle>
        )}
        <StyledBreadCrumb className="bread-crumbs">
            {prevList.map((item) => (
                <Anchor key={item.title} path={item.path}>
                    {item.title} /{" "}
                </Anchor>
            ))}
            <span> {pageName}</span>
        </StyledBreadCrumb>
    </div>
);

BreadCrumb.propTypes = {
    pageName: PropTypes.string.isRequired,
    className: PropTypes.string,
    showTitle: PropTypes.bool,
    prevList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            path: PropTypes.string,
        })
    ),
    type: PropTypes.string,
    sx: PropTypes.shape({}),
};

BreadCrumb.defaultProps = {
    prevList: [{ title: "Home", path: "/" }],
};

export default BreadCrumb;
