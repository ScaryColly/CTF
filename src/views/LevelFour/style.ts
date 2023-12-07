import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#968A6E",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
  }),
  image: css({
    height: "35rem",
  }),
});
