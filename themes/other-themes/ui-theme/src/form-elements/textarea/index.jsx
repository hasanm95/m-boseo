/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { StyledTextarea } from "./style";
import Feedback from "../feedback";

const Textarea = forwardRef(
    (
        {
            className,
            disabled,
            state,
            feedbackText,
            id,
            name,
            placeholder,
            onChange,
            onClick,
            onBlur,
            value,
            layout,
            readonly,
            showState,
            showErrorOnly,
            sx,
        },
        ref
    ) => (
        <>
            <StyledTextarea
                disabled={disabled}
                ref={ref}
                className={cn(className, "form-control", state)}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}
                onBlur={onBlur}
                value={value}
                layout={layout}
                readOnly={readonly}
                state={state}
                showState={showState}
                showErrorOnly={showErrorOnly}
                sx={sx}
            />
            {feedbackText && showState && (
                <Feedback
                    state={state}
                    showState={showState}
                    showErrorOnly={showErrorOnly}
                >
                    {feedbackText}
                </Feedback>
            )}
        </>
    )
);

Textarea.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    feedbackText: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    layout: PropTypes.oneOf([1, 2]),
    showState: PropTypes.bool,
    showErrorOnly: PropTypes.bool,
    state: PropTypes.oneOf(["success", "warning", "error"]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    sx: PropTypes.shape({}),
};

Textarea.displayName = "Textarea";

Textarea.defaultProps = {
    type: "text",
    showErrorOnly: true,
    layout: 1,
};

export default Textarea;
