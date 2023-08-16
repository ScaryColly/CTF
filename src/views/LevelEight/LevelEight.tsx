import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import army from "../../assets/images/army.png";
import { getClasses } from "./style";

export const LevelEight: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <Typography variant='h2'>HI</Typography>
      <Image className={classes.image} src={army} alt='army' />
    </Box>
  );
};
