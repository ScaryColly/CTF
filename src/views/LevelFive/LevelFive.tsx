import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Image } from "../../components/Image";
import army from "../../assets/images/army.png";
import { getClasses } from "./style";
import { LEVEL_FIVE_TEXT } from "./constants";

export const LevelFive: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack rowGap={2} className={classes.container}>
      <Typography className={classes.headline} variant="h4">
        {LEVEL_FIVE_TEXT}
      </Typography>
      <Image className={classes.image} src={army} alt="army" />
    </Stack>
  );
};
