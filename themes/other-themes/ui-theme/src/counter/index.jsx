/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import loadable from "@loadable/component";
import { StyledFact, StyledHeading, StyledTitle } from "./style";

const VisibilitySensor = loadable(() => import("react-visibility-sensor"));
const CountUp = loadable(() => import("react-countup"));

const Counter = ({ title, number, suffix }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <StyledFact>
            <CountUp start={focus ? 0 : null} end={number} duration={5}>
                {({ countUpRef }) => (
                    <StyledHeading>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                            onChange={(isVisible) =>
                                visibleChangeHandler(isVisible)
                            }
                        >
                            <Fragment>
                                {suffix && <span>{suffix}</span>}
                                <span className="sr-only">+</span>
                            </Fragment>
                        </VisibilitySensor>
                    </StyledHeading>
                )}
            </CountUp>
            <StyledTitle>{title}</StyledTitle>
        </StyledFact>
    );
};

Counter.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number.isRequired,
    suffix: PropTypes.string,
};

export default Counter;
