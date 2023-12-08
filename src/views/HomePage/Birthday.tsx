import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import {
  HAPPY_BIRTHDAY,
  FINISH_ERA,
  ASK,
  RULES,
  LEVEL_ONE,
  CREDIT,
} from "./constants";
import { getClasses } from "./style";

export const Birthday: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box>
      <Typography className={classes.headline} variant="h2">
        {HAPPY_BIRTHDAY}
      </Typography>
      <Typography variant="h5" className={classes.text}>
        {FINISH_ERA}
      </Typography>
      <Typography variant="h5" className={classes.textTwo}>
        {ASK}
      </Typography>
      <Typography variant="h5" className={classes.textThree}>
        {`${RULES} ${LEVEL_ONE}`}
      </Typography>
      <Typography variant="h5" className={classes.textFour}>
        {CREDIT}
      </Typography>
    </Box>
  );
};
