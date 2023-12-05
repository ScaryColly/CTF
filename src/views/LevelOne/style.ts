import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: "pink",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
});
