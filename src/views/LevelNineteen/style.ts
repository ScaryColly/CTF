import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: theme.palette.common.white,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    color: theme.palette.common.white,
    direction: 'ltr'
  }),
  image: css({
    height: "80%",
    marginRight: '2vw'
  }),
});
