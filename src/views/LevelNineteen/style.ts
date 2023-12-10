import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: theme.palette.common.white,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
    padding: theme.spacing(2),
  }),
  image: css({
    height: "18rem",
  }),
});
