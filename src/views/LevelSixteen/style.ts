import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: '#282C34',
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
    direction: 'ltr'
  }),
  image: css({
    width: "70vw",
  }),
  bug: css({
    width: '5vw',
    position: 'relative',
    top: '-14vh',
    transform: 'rotate(45deg)',
  }),
  hole: css({
    width: '5vw',
    position: 'relative',
    left: '0',
    bottom: '-2vh'
  })
});
