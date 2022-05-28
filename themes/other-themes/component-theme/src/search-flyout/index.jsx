/** @jsx jsx */
import { jsx } from "theme-ui";
import { memo } from "react";
import PropTypes from "prop-types";
import SearchForm from "../forms/search-form";
import { StyledSearchContent } from "./style";

const SearchFlyout = ({ show, isInSticky }) => (
    <StyledSearchContent show={show} isInSticky={isInSticky}>
        <SearchForm />
    </StyledSearchContent>
);

SearchFlyout.propTypes = {
    show: PropTypes.bool.isRequired,
    isInSticky: PropTypes.bool,
};

export default memo(SearchFlyout);
