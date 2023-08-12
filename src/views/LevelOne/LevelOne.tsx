import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { LEVEL_ONE_TEXT } from "./constants";

export const LevelOne: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography variant='h2'>{LEVEL_ONE_TEXT}</Typography>
    </Box>
  );
};
