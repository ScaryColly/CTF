import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import { MICHELANGELO } from "./constants";
import { getClasses } from "./style";

export const LevelThirteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Image className={classes.image} src={MICHELANGELO} alt='Michelangelo ' />
    </Box>
  );
};
