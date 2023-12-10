import { Box, Stack, useTheme } from "@mui/material";
import { FC } from "react";
import bug from "../../assets/images/bug.png";
import code from "../../assets/images/code.png";
import hole from "../../assets/images/hole.png";
import { Image } from "../../components/Image";
import { getClasses } from "./style";

export const LevelSixteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Box>
        <Image className={classes.bug} src={bug} alt="bug" />
        <Image className={classes.image} src={code} alt="code" />
        <Image className={classes.hole} src={hole} alt="hole" />
      </Box>
    </Stack>
  );
};
