import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#93B6D9",
    height: "100vh",
    alignItems: "center",
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  }),
  image: css({
    width: "20rem",
  }),
});
