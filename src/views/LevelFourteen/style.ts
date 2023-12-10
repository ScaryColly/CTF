import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E1B46B",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
    direction: "ltr",
  }),
  image: css({
    width: "10rem",
  }),
});
