import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { LEVEL_TWO_TEXT } from "./constants";
import { Image } from "../../components/Image";
import harryPotter from "../../assets/images/harryPotter.png";

export const LevelTwo: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Typography className={classes.headline} variant="h2">
        {LEVEL_TWO_TEXT}
      </Typography>
      <Image className={classes.image} src={harryPotter} alt="Harry Potter" />
    </Stack>
  );
};
