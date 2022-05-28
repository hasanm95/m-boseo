import React from "react";
import PropTypes from "prop-types";
import { BreadCrumb01 } from "gatsby-theme-component";
import { StyledSection } from "./style";

const PageHeader = ({ data }) => (
    <StyledSection className="page-title-area">
        {data?.pageName && (
            <BreadCrumb01
                pageName={data.pageName}
                prevList={data.prevList}
                type={data.type}
                showTitle
            />
        )}
    </StyledSection>
);

PageHeader.propTypes = {
    data: PropTypes.shape({
        pageName: PropTypes.string,
        prevList: PropTypes.arrayOf(PropTypes.shape({})),
        type: PropTypes.string,
    }),
};

export default PageHeader;
