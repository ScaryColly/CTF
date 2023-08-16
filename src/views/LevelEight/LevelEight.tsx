import { Box, Grid, useTheme } from "@mui/material";
import { FC } from "react";
import { STORY_ONE, STORY_TWO } from "./constants";
import { getClasses } from "./style";

export const LevelEight: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={6}>{STORY_ONE}</Grid>
        <Grid item xs={6}>{STORY_TWO}</Grid>
      </Grid>
    </Box>
  );
};
