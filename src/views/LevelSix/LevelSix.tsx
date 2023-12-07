import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import tank from "../../assets/images/tank.jpeg";
import { getClasses } from "./style";
import { LEVEL_SIX_TEXT } from "./constants";

export const LevelSix: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack rowGap={2} className={classes.container}>
      <Typography className={classes.headline} variant="h3">
        {LEVEL_SIX_TEXT}
      </Typography>
      <Image className={classes.image} src={tank} alt="tank" />
    </Stack>
  );
};
