import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import bottle from '../../assets/images/bottle.png';
import { Image } from "../../components/Image";
import { getClasses } from "./style";

export const LevelEleven: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Image className={classes.image} src={bottle} alt='the next flag is djtioeru58' />
    </Box>
  );
};
