import { keyframes } from "../styled";

export const shapeMoveOne = keyframes`
  0% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0); }
  30% {
    -webkit-transform: translateY(20px) translateX(30px) rotate(15deg);
    transform: translateY(20px) translateX(30px) rotate(15deg);
    -webkit-transform-origin: center center;
    transform-origin: center center; }
  50% {
    -webkit-transform: translateY(32px) translateX(50px) rotate(35deg);
    transform: translateY(32px) translateX(50px) rotate(35deg);
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom; }
  80% {
    -webkit-transform: translateY(20px) translateX(30px) rotate(15deg);
    transform: translateY(20px) translateX(30px) rotate(15deg);
    -webkit-transform-origin: left top;
    transform-origin: left top; }
  100% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0);
    -webkit-transform-origin: center center;
    transform-origin: center center; }
`;

export const shapeMoveTwo = keyframes`
  0% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0); }
  30% {
    transform: translateY(15px) translateX(10px) rotate(5deg);
    -webkit-transform-origin: center center;
    transform-origin: center center; }
  50% {
    transform: translateY(15px) translateX(10px) rotate(15deg);
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom; }
  80% {
    transform: translateY(15px) translateX(10px) rotate(5deg);
    -webkit-transform-origin: left top;
    transform-origin: left top; }
  100% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0);
    -webkit-transform-origin: center center;
    transform-origin: center center; }
`;

export const shapeMoveThree = keyframes`
  0% {
    transform: translateY(-50%) translateX(0); }
  50% {
    transform: translateY(-55%) translateX(-20px); }
  100% {
    transform: translateY(-50%) translateX(0); }
`;

export const modalVideo = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const modalVideoInner = keyframes`
    from {
      transform: translate(0, 100px)
    }
    to {
      transform: translate(0, 0)
    }
`;

export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0)
    }
    to {
        opacity: 1;
        transform: translateZ(0)
    }
`;

export const fadeInUp = `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

export const animationFour = keyframes`
  0% {
      -webkit-transform-origin: center;
      opacity: 1;
  }

  to {
      -webkit-transform: rotate(200deg);
      opacity: .4;
      transform: rotate(200deg);
  }
`;

export const animationFive = keyframes`
  0% {
    transform: translateY(0) translateX(0); }
  50% {
    transform: translateY(0) translateX(-28px); }
  100% {
    transform: translateY(0) translateX(0); }
`;
