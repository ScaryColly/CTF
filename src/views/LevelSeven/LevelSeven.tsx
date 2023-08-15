import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import tank from "../../assets/images/tank.jpeg";
import hamsa from "../../assets/images/hamsa.webp";
import { getClasses } from "./style";

export const LevelSeven: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Image className={classes.image} src={hamsa} alt='hamsa' />
      <Image className={classes.image} src={tank} alt='tank' />
    </Box>
  );
};
