import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";

export const LevelTwentyThree: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Typography variant="h4" className={classes.headline}>
        Where can I get strawberry with cream?
      </Typography>
    </Stack>
  );
};
