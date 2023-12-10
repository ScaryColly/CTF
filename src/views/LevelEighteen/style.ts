import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#ffcad4",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
  }),
  image: css({
    width: "20rem",
  }),
});
