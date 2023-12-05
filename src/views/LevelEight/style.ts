import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E1B46B",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
  }),
  image: css({
    height: "80%",
  }),
  gridContainer: css({
    width: '80vw',
    direction: 'ltr'
  })
});
