import { Stack, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import { MICHELANGELO } from "./constants";
import { getClasses } from "./style";

export const LevelThirteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Image className={classes.image} src={MICHELANGELO} alt="Michelangelo " />
    </Stack>
  );
};
