/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledListItem, createStyles } from "./style";

const ListItem = ({ children, className, hasIcon, space, column, sx }) => {
    const listProps = {
        css: (theme) => createStyles(theme, hasIcon),
    };
    return (
        <StyledListItem
            className={cn(className, "list-item")}
            sx={sx}
            space={space}
            column={column}
            {...listProps}
        >
            {children}
        </StyledListItem>
    );
};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    hasIcon: PropTypes.bool,
    space: PropTypes.number,
    column: PropTypes.number,
};

ListItem.displayName = "ListItem";

export default ListItem;
