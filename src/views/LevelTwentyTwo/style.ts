import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#94d2bd",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
  }),
  image: css({
    height: "80%",
  }),
});
