import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { ASK, FINISH_ERA, HAPPY_BIRTHDAY } from "./constants";

export const HomePage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography className={classes.headline} variant='h2'>
        {HAPPY_BIRTHDAY}
      </Typography>
      <Typography variant='h5' className={classes.text}>
        {FINISH_ERA}
      </Typography>
      <Typography variant='h5' className={classes.text}>
        {ASK}
      </Typography>
    </Box>
  );
};
