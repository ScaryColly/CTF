import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { LEVEL_TWO_TEXT } from "./constants";
import { Image } from "../../components/Image";
import harryPotter from "../../assets/images/harryPotter.png";

export const LevelTwo: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography variant='h2'>{LEVEL_TWO_TEXT}</Typography>
      <Image className={classes.image} src={harryPotter} alt='Harry Potter' />
    </Box>
  );
};
