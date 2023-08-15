import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { LEVEL_THREE_TEXT } from "./constants";
import { Image } from "../../components/Image";
import fibonacci from "../../assets/images/fibonacci.png";

export const LevelThree: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography variant='h2'>{LEVEL_THREE_TEXT}</Typography>
      <Image className={classes.image} src={fibonacci} alt='' />
    </Box>
  );
};
