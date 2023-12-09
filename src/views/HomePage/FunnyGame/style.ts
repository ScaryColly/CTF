import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme, color: string) => ({
  container: css({
    padding: theme.spacing(2),
    height: "100%",
    overflowY: "auto",
  }),
  headline: css({
    fontSize: "18px",
    textAlign: "center",
  }),
  scaryHeadline: css({
    fontSize: "20px",
    textAlign: "center",
    fontWeight: 600,
  }),
  button: css({
    padding: theme.spacing(2),
    color: theme.palette.common.black,
    backgroundColor: color,
    width: "100%",
  }),
});
