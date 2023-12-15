import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#D4F1F9",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.black,
    direction: "ltr",
  }),
  image: css({
    height: "80%",
  }),
  text: css({
    marginTop: "2vh",
    textAlign: "center",
  }),
  textField: css({
    color: theme.palette.common.black,
    borderColor: theme.palette.common.white,
  }),
  button: css({
    width: "3rem",
    height: "3rem",
  }),
});
