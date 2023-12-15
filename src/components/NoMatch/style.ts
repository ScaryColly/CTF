import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    padding: theme.spacing(2),
    height: "100%",
    overflowY: "auto",
  }),
  image: css({
    width: "20rem",
  }),
});
