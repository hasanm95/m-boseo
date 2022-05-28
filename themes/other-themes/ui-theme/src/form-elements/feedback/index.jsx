import PropTypes from "prop-types";
import { StyledFeedback } from "./style";

const Feedback = ({ state, showState, showErrorOnly, children }) => (
    <StyledFeedback
        state={state}
        showState={showState}
        showErrorOnly={showErrorOnly}
        className="feedback-text"
    >
        {children}
    </StyledFeedback>
);

Feedback.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.oneOf(["success", "warning", "error"]),
    showState: PropTypes.bool,
    showErrorOnly: PropTypes.bool,
};

export default Feedback;
