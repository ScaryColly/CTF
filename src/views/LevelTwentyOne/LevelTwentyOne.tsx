import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import songBook from "../../assets/images/songs.png";
import { Image } from "../../components/Image";
import { LEVEL_TEXT, SONG_LINES } from "./constants";
import { getClasses } from "./style";

export const LevelTwentyOne: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack rowGap={3} className={classes.container}>
      <Typography className={classes.headline} variant="h4">
        {LEVEL_TEXT}
      </Typography>
      <Image className={classes.image} src={songBook} alt="song book" />
      <Typography variant="h4">{SONG_LINES}</Typography>
    </Stack>
  );
};
