import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "#E1B46B",
    height: "100vh",
    alignItems: "center",
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    overflowY: "auto",
  }),
  gridContainer: css({
    direction: "ltr",
    padding: theme.spacing(2),
  }),
});
