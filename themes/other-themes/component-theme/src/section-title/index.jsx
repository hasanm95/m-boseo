/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledSubtitle, StyeldTitle, StyledDesc } from "./style";

const SectionTitle = ({
    title,
    subtitle,
    description,
    color,
    sx,
    titleProps,
    titleStyle,
    descProps,
    className,
}) => {
    const hasTitle = Boolean(title);
    const hasDesc = Boolean(description);
    return (
        <div className={cn("section-title", className)} sx={sx}>
            {subtitle && (
                <StyledSubtitle
                    hasTitle={hasTitle}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                    color={color}
                />
            )}
            {title && (
                <StyeldTitle
                    hasDesc={hasDesc}
                    titleStyle={titleStyle}
                    sx={titleProps}
                    color={color}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            {description && (
                <StyledDesc
                    sx={descProps}
                    color={color}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    sx: PropTypes.shape({}),
    descProps: PropTypes.shape({}),
    titleProps: PropTypes.shape({}),
    titleStyle: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

SectionTitle.defaultProps = {
    titleStyle: 1,
};

export default SectionTitle;
