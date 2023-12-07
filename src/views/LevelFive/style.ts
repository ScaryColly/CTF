import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E1B46B",
    height: "100dvh",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
    padding: theme.spacing(2),
  }),
  image: css({
    width: "15rem",
  }),
  headline: css({
    textAlign: "center",
  }),
});
