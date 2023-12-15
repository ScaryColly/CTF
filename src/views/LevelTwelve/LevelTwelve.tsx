import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import { NUMBER_IN_BOOK, VENUS_URL } from "./constants";
import { getClasses } from "./style";

export const LevelTwelve: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack rowGap={3} className={classes.container}>
      <Typography variant="h2">{NUMBER_IN_BOOK}</Typography>
      <Image
        className={classes.image}
        src={VENUS_URL}
        alt="The birth of Venus"
      />
    </Stack>
  );
};
