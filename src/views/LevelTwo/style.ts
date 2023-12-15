import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#3B4A41",
    alignItems: "center",
    padding: theme.spacing(2),
    height: "100dvh",
  }),
  image: css({
    width: "15rem",
  }),
  headline: css({
    textAlign: "center",
    color: theme.palette.common.white,
  }),
});
