/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import loadable from "@loadable/component";
import { StyledButton } from "./style";

const ModalVideo = loadable(() => import("../modal-video"));

const VideoButton = ({ children, channel, videoId, className, sx }) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalHandler = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <StyledButton
                type="button"
                onClick={modalHandler}
                className={cn("video-btn", className)}
                sx={sx}
            >
                <i className="fa fa-play-circle-o" />
                {children}
            </StyledButton>
            <ModalVideo
                isOpen={isOpen}
                onClose={modalHandler}
                videoId={videoId}
                channel={channel}
            />
        </>
    );
};

VideoButton.propTypes = {
    children: PropTypes.node.isRequired,
    channel: PropTypes.string,
    videoId: PropTypes.string,
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

VideoButton.defaultProps = {
    channel: "youtube",
};

export default VideoButton;
