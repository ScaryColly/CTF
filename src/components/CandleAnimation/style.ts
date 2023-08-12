import { css, keyframes } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  wrapper: css({
    position: "absolute",
    left: "50%",
    top: "70%",
    transform: "scale(1.5, 1.5) translate(-50%, -50%)",
  }),
  candles: css({
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "250px",
    height: "150px",
    transform: "translate(-50%, -100%)",
    zIndex: 1,
  }),
  lightWave: css({
    position: "absolute",
    top: "35%",
    left: "35%",
    width: "75px",
    height: "75px",
    borderRadius: "100%",
    zIndex: 0,
    transform: "translate(-25%, -50%) scale(2.5, 2.5)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    animation: `${expandLight} 3s infinite linear`,
  }),
  candleOne: css({
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "35px",
    height: "100px",
    background: "#fff",
    border: "3px solid #673C63",
    borderBottom: "0px",
    borderRadius: "3px",
    transformOrigin: "center right",
    transform: "translate(60%, -25%)",
    boxShadow: "-2px 0px 0px #95c6f2 inset",
    animation: `${expandBody} 3s infinite linear`,
  }),
  candleEyes: css({
    position: "absolute",
    left: "50%",
    top: "0%",
    width: "35px",
    height: "30px",
    transform: "translate(-50%, 0%)",
  }),
  candleEyeOne: css({
    position: "absolute",
    left: "30%",
    top: "20%",
    width: "5px",
    height: "5px",
    borderRadius: "100%",
    background: "#673C63",
    transform: "translate(-70%, 0%)",
    animation: `${blinkEyes} 3s infinite linear`,
  }),
  candleEyeTwo: css({
    position: "absolute",
    left: "70%",
    top: "20%",
    width: "5px",
    height: "5px",
    borderRadius: "100%",
    background: "#673C63",
    transform: "translate(-70%, 0%)",
    animation: `${blinkEyes} 3s infinite linear`,
  }),
  candleTwoEyeOne: css({
    position: "absolute",
    left: "30%",
    top: "50%",
    width: "5px",
    height: "5px",
    display: "inline-block",
    border: "0px solid #673C63",
    borderRadius: "100%",
    float: "left",
    background: "#673C63",
    transform: "translate(-80%, 0%)",
    animation: `${changetoLower} 3s infinite linear`,
  }),
  candleTwoEyeTwo: css({
    position: "absolute",
    left: "70%",
    top: "50%",
    width: "5px",
    height: "5px",
    display: "inline-block",
    border: "0px solid #673C63",
    borderRadius: "100%",
    float: "left",
    background: "#673C63",
    transform: "translate(-80%, 0%)",
    animation: `${changetoGreater} 3s infinite linear`,
  }),
  candleOneMouth: css({
    position: "absolute",
    left: "40%",
    top: "20%",
    width: "0px",
    height: "0px",
    borderRadius: "20px",
    background: "#673C63",
    transform: "translate(-50%, -50%)",
    animation: `${uff} 3s infinite linear`,
  }),
  candleOneStick: css({
    position: "absolute",
    left: "50%",
    top: "0%",
    width: "3px",
    height: "15px",
    background: "#673C63",
    borderRadius: "8px",
    transform: "translate(-50%, -100%)",
  }),
  candleTwoStick: css({
    position: "absolute",
    left: "50%",
    top: "0%",
    width: "3px",
    background: "#673C63",
    borderRadius: "8px",
    transform: "translate(-50%, -100%)",
    height: "12px",
    transformOrigin: "bottom center",
    animation: `${stickAnimation} 3s infinite linear`,
  }),
  candleTwo: css({
    position: "absolute",
    left: "20%",
    top: "65%",
    width: "42px",
    height: "60px",
    background: "#fff",
    border: "3px solid #673C63",
    borderBottom: "0px",
    borderRadius: "3px",
    transform: "translate(60%, -15%)",
    transformOrigin: "center right",
    boxShadow: "-2px 0px 0px #95c6f2 inset",
    animation: `${shakeLeft} 3s infinite linear`,
  }),
  candleTwoFire: css({
    position: "absolute",
    top: "50%",
    left: "40%",
    display: "block",
    width: "16px",
    height: "20px",
    backgroundColor: "red",
    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
    background: "#FF9800",
    transform: "translate(-50%, -50%)",
    animation: `${danceFire} 3s infinite linear`,
  }),
  candleSmokeOne: css({
    position: "absolute",
    left: "30%",
    top: "50%",
    width: "30px",
    height: "3px",
    background: "grey",
    transform: "translate(-50%, -50%)",
    animation: `${moveLeft} 3s infinite linear`,
  }),
  candleSmokeTwo: css({
    position: "absolute",
    left: "30%",
    top: "40%",
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    background: "grey",
    transform: "translate(-50%, -50%)",
    animation: `${moveTop} 3s infinite linear`,
  }),
  floor: css({
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "350px",
    height: "5px",
    background: "#673C63",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 2px 5px #111",
    zIndex: "2",
  }),
});

const blinkEyes = keyframes`
0%,35% {
  opacity: 1;
  transform: translate(-70%, 0%);
}
36%,39% {
  opacity: 0;
  transform: translate(-70%, 0%);
}
40% {
  opacity: 1;
  transform: translate(-70%, 0%);
}
50%,65% {
  transform: translate(-140%, 0%);
}
66% {
  transform: translate(-70%, 0%);
}`;

const expandBody = keyframes`
0%,40% {
  transform: scale(1, 1) translate(60%, -25%);
}
45%,55% {
  transform: scale(1.1, 1.1) translate(60%, -28%);
}
60% {
  transform: scale(0.89, 0.89) translate(60%, -25%);
}
65% {
  transform: scale(1, 1) translate(60%, -25%);
}
70% {
  transform: scale(0.95, 0.95) translate(60%, -25%);
}
75% {
  transform: scale(1, 1) translate(60%, -25%);
}
`;

const uff = keyframes`
0%,40% {
  width: 0px;
  height: 0px;
}
50%,54% {
  width: 15px;
  height: 15px;
  left: 30%;
}
59% {
  width: 5px;
  height: 5px;
  left: 20%;
}
62% {
  width: 2px;
  height: 2px;
  left: 20%;
}
67% {
  width: 0px;
  height: 0px;
  left: 30%;
}
`;

const changeBackground = keyframes`
0%,59%,98%,100% {
  background: #FFF;
}
61%,97% {
  background: #000;
}
`;

const moveLeft = keyframes`
0%,59%,100% {
  width: 0px;
  left: 40%;
}
60% {
  width: 30px;
  left: 30%;
}
68% {
  width: 0px;
  left: 20%;
}
`;

const moveTop = keyframes`
0%,64%,100% {
  width: 0px;
  height: 0px;
  top: 0%;
}
65% {
  width: 10px;
  height: 10px;
  top: 40%;
  left: 40%;
}
80% {
  width: 0px;
  height: 0px;
  top: 20%;
}
`;

export const shakeLeft = keyframes`
0%,40% {
  left: 20%;
  transform: translate(60%, -15%);
}
50%,54% {
  left: 20%;
  transform: translate(60%, -15%);
}
59% {
  left: 20%;
  transform: translate(60%, -15%);
}
62% {
  left: 18%;
  transform: translate(60%, -15%);
}
65% {
  left: 21%;
  transform: translate(60%, -15%);
}
67% {
  left: 20%;
  transform: translate(60%, -15%);
}
75% {
  left: 20%;
  transform: scale(1.15, 0.85) translate(60%, -15%);
  background: #fff;
  border-color: #673C63;
}
91% {
  left: 20%;
  transform: scale(1.18, 0.82) translate(60%, -10%);
  background: #F44336;
  border-color: #F44336;
  box-shadow: -2px 0px 0px #F44336 inset;
}
92% {
  left: 20%;
  transform: scale(0.85, 1.15) translate(60%, -15%);
}
95% {
  left: 20%;
  transform: scale(1.05, 0.95) translate(60%, -15%);
}
97% {
  left: 20%;
  transform: scale(1, 1) translate(60%, -15%);
}
`;

export const stickAnimation = keyframes`
0%,40% {
  left: 50%;
  top: 0%;
  transform: translate(-50%, -100%);
}
50%,54% {
  left: 50%;
  top: 0%;
  transform: translate(-50%, -100%);
}
59% {
  left: 50%;
  top: 0%;
  transform: translate(-50%, -100%);
}
62% {
  left: 50%;
  top: 0%;
  transform: rotateZ(-15deg) translate(-50%, -100%);
}
65% {
  left: 50%;
  top: 0%;
  transform: rotateZ(15deg) translate(-50%, -100%);
}
70% {
  left: 50%;
  top: 0%;
  transform: rotateZ(-5deg) translate(-50%, -100%);
}
72% {
  left: 50%;
  top: 0%;
  transform: rotateZ(5deg) translate(-50%, -100%);
}
74%,84% {
  left: 50%;
  top: 0%;
  transform: rotateZ(0deg) translate(-50%, -100%);
}
85% {
  transform: rotateZ(180deg) translate(0%, 120%);
}
92% {
  left: 50%;
  top: 0%;
  transform: translate(-50%, -100%);
}
`;

export const expandLight = keyframes`
10%,29%,59%,89% {
  transform: translate(-25%, -50%) scale(0, 0);
  border: 2px solid rgba(255, 255, 255, 0);
}
90%,20%,50% {
  transform: translate(-25%, -50%) scale(1, 1);
}
95%,96%,26%,27%,56%,57% {
  transform: translate(-25%, -50%) scale(2, 2);
  border: 2px solid rgba(255, 255, 255, 0.5);
}
0%,28%,58%,100% {
  transform: translate(-25%, -50%) scale(2.5, 2.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
}
`;

export const danceFire = keyframes`
59%,89% {
  left: 40%;
  width: 0px;
  height: 0px;
}
90%,0%,7%,15%,23%,31%,39%,47%,55% {
  left: 40.8%;
  width: 16px;
  height: 20px;
  background: #FFC107;
}
94%,3%,11%,19%,27%,35%,43%,51%,58% {
  left: 41.2%;
  width: 16px;
  height: 20px;
  background: #FF9800;
}
`;

export const changetoLower = keyframes`
0%,70%,90% {
  padding: 0px;
  display: inline-block;
  border-radius: 100%;
  background: #673C63;
  border-width: 0 0 0 0;
  border: 0px solid #673C63;
  transform: translate(-90%, 0%);
}
71%,89% {
  background: none;
  border: solid #673C63;
  border-radius: 0px;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 1px;
  float: left;
  transform-origin: bottom left;
  transform: rotate(-45deg) translate(-50%, -65%);
  -webkit-transform: rotate(-45deg) translate(-50%, -65%);
}
`;

export const changetoGreater = keyframes`
0%,70%,90% {
  top: 50%;
  padding: 0px;
  display: inline-block;
  border-radius: 100%;
  background: #673C63;
  border-width: 0 0 0 0;
  border: 0px solid #673C63;
  transform: translate(-80%, 0%);
}
71%,89% {
  top: 30%;
  background: none;
  border: solid #673C63;
  border-radius: 0px;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 1px;
  float: left;
  transform-origin: bottom left;
  transform: rotate(135deg) translate(-80%, 20%);
  -webkit-transform: rotate(135deg) translate(-80%, 20%);
}
`;
