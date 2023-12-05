import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: theme.palette.common.white,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.black,
    direction: 'ltr'
  }),
  image: css({
    display: 'none',
    width: "80vw",
  })
});
