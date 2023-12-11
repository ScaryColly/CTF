import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#441E7F",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
  }),
  image: css({
    width: "20rem",
  }),
  link: css({
    color: theme.palette.common.white,
  }),
});
