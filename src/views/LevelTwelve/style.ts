import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E2C99B",
    height: "100vh",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
    padding: theme.spacing(2),
  }),
  image: css({
    width: "22rem",
  }),
});
