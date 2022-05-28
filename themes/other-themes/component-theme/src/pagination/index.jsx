/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    StyledNav,
    StyledList,
    StyledListItem,
    StyledListLink,
    StyledListSpan,
} from "./style";

const Pagination = ({
    className,
    sx,
    currentPage,
    numberOfPages,
    rootPage,
}) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage =
        currentPage - 1 === 1
            ? rootPage
            : `${rootPage}/page/${(currentPage - 1).toString()}`;
    const nextPage = `${rootPage}/page/${(currentPage + 1).toString()}`;

    return (
        <StyledNav className={cn("pagination", className)} sx={sx}>
            <StyledList>
                {isFirst ? (
                    <StyledListItem classname="prev">
                        <StyledListSpan>Prev</StyledListSpan>
                    </StyledListItem>
                ) : (
                    <StyledListItem classname="prev">
                        <StyledListLink path={previousPage}>
                            Prev
                        </StyledListLink>
                    </StyledListItem>
                )}

                {Array.from({ length: numberOfPages }, (_, i) => (
                    <Fragment key={`fragment-${i + 1}`}>
                        {currentPage === i + 1 ? (
                            <StyledListItem>
                                <StyledListLink
                                    active="true"
                                    path={`${rootPage}/${
                                        i === 0 ? "" : `page/${i + 1}`
                                    }`}
                                >
                                    {i + 1}
                                </StyledListLink>
                            </StyledListItem>
                        ) : (
                            <StyledListItem>
                                <StyledListLink
                                    path={`${
                                        i === 0
                                            ? rootPage
                                            : `${rootPage}/page/${i + 1}`
                                    }`}
                                >
                                    {i + 1}
                                </StyledListLink>
                            </StyledListItem>
                        )}
                    </Fragment>
                ))}
                {isLast ? (
                    <StyledListItem className="next">
                        <StyledListSpan>Next</StyledListSpan>
                    </StyledListItem>
                ) : (
                    <StyledListItem className="next">
                        <StyledListLink path={nextPage}>Next</StyledListLink>
                    </StyledListItem>
                )}
            </StyledList>
        </StyledNav>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
    rootPage: PropTypes.string,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

export default Pagination;
