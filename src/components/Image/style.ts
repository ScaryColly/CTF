import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  image: css({
    borderRadius: "6px",
  }),
});
