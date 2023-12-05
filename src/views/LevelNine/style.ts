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
    direction: 'ltr'
  }),
  image: css({
    width: "60%",

  }),
  gridContainer: css({
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  gridItem: css({
    display: 'flex',
    justifyContent: 'center'
  }),
  text: css({
    width: '90vw'
  })
});
