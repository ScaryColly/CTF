import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import songBook from "../../assets/images/songs.png";
import { Image } from "../../components/Image";
import { LEVEL_TEXT, SONG_LINES } from "./constants";
import { getClasses } from "./style";

export const LevelTwentyOne: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography variant='h2'>{LEVEL_TEXT}</Typography>
      <Image className={classes.image} src={songBook} alt='song book' />
      <Typography variant='h2'>{SONG_LINES}</Typography>
    </Box>
  );
};
