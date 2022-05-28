/** @jsx jsx */
import { jsx } from "theme-ui";
import { Children } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledList } from "./style";

const List = ({ children, className, hasIcon, space, column, sx }) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el;
        if (child !== null) {
            const childType = child.type;
            const name = childType.displayName || childType.name;
            if (name === "ListItem") {
                return (
                    <child.type
                        hasIcon={hasIcon}
                        space={space}
                        column={column}
                        {...child.props}
                    />
                );
            }
        }
        return null;
    });
    return (
        <StyledList className={cn(className, "list")} sx={sx} column={column}>
            {RenderChild}
        </StyledList>
    );
};

List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
    hasIcon: PropTypes.bool,
    space: PropTypes.number,
    column: PropTypes.number,
};

List.defaultProps = {
    space: 12,
    column: 1,
};

export default List;
