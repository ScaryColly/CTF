import { Grid, Stack, useTheme } from "@mui/material";
import { FC } from "react";
import { STORY_ONE, STORY_TWO } from "./constants";
import { getClasses } from "./style";

export const LevelEight: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Grid
        container
        className={classes.gridContainer}
        rowGap={3}
        columnGap={3}
      >
        <Grid
          display="flex"
          justifyContent="center"
          item
          xs={12}
          md={12}
          lg={6}
        >
          {STORY_ONE}
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          item
          xs={12}
          md={12}
          lg={6}
        >
          {STORY_TWO}
        </Grid>
      </Grid>
    </Stack>
  );
};
