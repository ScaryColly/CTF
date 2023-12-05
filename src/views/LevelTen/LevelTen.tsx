import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import flag from '../../assets/images/flag.png';
import { Image } from '../../components/Image';
import { getClasses } from "./style";

export const LevelTen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
        <Image src={flag} alt='flag' className={classes.image} />
    </Box>
  );
};
