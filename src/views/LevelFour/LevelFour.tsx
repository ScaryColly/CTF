import { Stack, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { Image } from "../../components/Image";
import solarSystem from "../../assets/images/solarSystem.png";

export const LevelFour: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Image className={classes.image} src={solarSystem} alt="solar system" />
    </Stack>
  );
};
