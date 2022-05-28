import styled, { themeGet } from "@boseo/shared/styled";
import { modalVideo, modalVideoInner } from "@boseo/shared/animations";

export const StyledModalVideo = styled.div`
    position: relative;
    z-index: 999999;
    .modal-video {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000000;
        cursor: pointer;
        opacity: 1;
        animation-timing-function: ease-out;
        animation-duration: 0.3s;
        animation-name: ${modalVideo};
        transition: opacity 0.3s ease-out;
        padding: 0 10px;
    }
    .modal-video-effect-exit {
        opacity: 0;
    }
    .modal-video-effect-exit .modal-video-movie-wrap {
        transform: translate(0, 100px);
    }
    .modal-video-body {
        max-width: 940px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: table;
    }
    .modal-video-inner {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .modal-video-movie-wrap {
        width: 100%;
        height: 0;
        position: relative;
        padding-bottom: 56.25%;
        background-color: ${themeGet("colors.shaft")};
        animation-timing-function: ease-out;
        animation-duration: 0.3s;
        animation-name: ${modalVideoInner};
        transform: translate(0, 0);
        transition: transform 0.3s ease-out;
    }
    .modal-video-movie-wrap iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }
    .modal-video-close-btn {
        position: absolute;
        z-index: 2;
        top: -35px;
        right: -35px;
        display: inline-block;
        width: 35px;
        height: 35px;
        overflow: hidden;
        border: none;
        background: transparent;
    }
    .modal-video-close-btn:before {
        transform: rotate(45deg);
    }
    .modal-video-close-btn:after {
        transform: rotate(-45deg);
    }
    .modal-video-close-btn:before,
    .modal-video-close-btn:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: ${themeGet("colors.white")};
        border-radius: 5px;
        margin-top: -6px;
    }
`;
