import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { STORY } from "./constants";
import { getClasses } from "./style";

export const LevelSeventeen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Typography className={classes.text} variant="h6">
        {STORY}
      </Typography>
    </Stack>
  );
};
