import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#93B6D9",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
  }),
  image: css({
    height: "40%",
    marginTop: "5vh",
    width: "80vh",
  }),
});
