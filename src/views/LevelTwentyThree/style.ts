import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#ef233c",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
  }),
  headline: css({
    color: theme.palette.common.white,
    textAlign: "center",
    fontWeight: 600,
  }),
});
