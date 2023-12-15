import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E1B46B",
    height: "100vh",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
  }),
  image: css({
    width: "10rem",
  }),
  gridContainer: css({
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  gridItem: css({
    display: "flex",
    justifyContent: "center",
  }),
  text: css({
    textAlign: "center",
    fontSize: "15px",
  }),
});
