import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E1B46B",
    height: "100vh",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
    padding: theme.spacing(2),
  }),
  image: css({
    height: "23rem",
    borderRadius: "6px",
  }),
  headline: css({
    textAlign: "center",
  }),
});
