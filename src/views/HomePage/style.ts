import { Theme } from "@mui/material";
import { css, keyframes } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: `${gradient} 15s ease infinite`,
    height: `100vh`,
    margin: 0,
  }),
  headline: css({
    textAlign: "center",
    paddingTop: "2vh",
  }),
  text: css({
    textAlign: "center",
  }),
});

const gradient = keyframes`
0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}
`;
