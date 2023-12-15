import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#cdb4db",
    height: "100vh",
    alignItems: "center",
    color: theme.palette.common.white,
    direction: "ltr",
    overflowY: "scroll",
  }),
  image: css({
    height: "80%",
  }),
  text: css({
    width: "90vw",
  }),
});
