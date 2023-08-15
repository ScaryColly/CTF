import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import solarSystem from "../../assets/images/solarSystem.png";
import { getClasses } from "./style";

export const LevelFive: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography>Hi</Typography>
      <Image className={classes.image} src={solarSystem} alt='solar system' />
    </Box>
  );
};
