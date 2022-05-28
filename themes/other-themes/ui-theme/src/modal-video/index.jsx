/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Portal } from "react-portal";
import ReactModalVideo from "react-modal-video";
import { StyledModalVideo } from "./style";

const ModalVideo = ({ channel, isOpen, videoId, onClose }) => (
    <Portal>
        <StyledModalVideo>
            <ReactModalVideo
                channel={channel}
                isOpen={isOpen}
                videoId={videoId}
                onClose={onClose}
            />
        </StyledModalVideo>
    </Portal>
);

ModalVideo.propTypes = {
    channel: PropTypes.string,
    isOpen: PropTypes.bool,
    videoId: PropTypes.string,
    onClose: PropTypes.func,
};

ModalVideo.defaultProps = {
    channel: "youtube",
};

export default ModalVideo;
