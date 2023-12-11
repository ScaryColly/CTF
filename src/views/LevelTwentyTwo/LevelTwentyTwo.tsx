import { Link, Stack, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";

export const LevelTwentyTwo: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Link href="https://www.youtube.com/watch?v=2WN0T-Ee3q4">
        Never Ending Story
      </Link>
    </Stack>
  );
};
