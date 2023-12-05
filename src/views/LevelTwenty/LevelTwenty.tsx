import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { THE_FLAG } from "./constants";
import { getClasses } from "./style";

export const LevelTwenty: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography variant='h2'>{THE_FLAG}</Typography>
    </Box>
  );
};
