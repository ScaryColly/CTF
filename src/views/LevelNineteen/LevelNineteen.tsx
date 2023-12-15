import { Stack, useTheme } from "@mui/material";
import { FC } from "react";
import heart from "../../assets/images/heart.png";
import math from "../../assets/images/math.png";
import { Image } from "../../components/Image";
import { getClasses } from "./style";

export const LevelNineteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      className={classes.container}
    >
      <Image className={classes.image} src={heart} alt="heart" />
      <Image className={classes.image} src={math} alt="math" />
    </Stack>
  );
};
