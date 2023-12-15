import { IconButton, Stack, Typography, useTheme } from "@mui/material";
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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Birthday: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack>
      <Typography className={classes.headline} variant="h2">
        {HAPPY_BIRTHDAY}
      </Typography>
      <Typography variant="h5" className={classes.text}>
        {FINISH_ERA}
      </Typography>
      <Typography variant="h5" className={classes.textTwo}>
        {ASK}
      </Typography>
      <Typography variant="h6" className={classes.textThree}>
        {`${RULES} ${LEVEL_ONE}`}
      </Typography>
      <Typography variant="h6" className={classes.textFour}>
        {CREDIT}
      </Typography>
      <IconButton
        onClick={() =>
          navigator.clipboard.writeText(
            "https://scarycolly.github.io/CTF/#/level1"
          )
        }
        color="primary"
      >
        <ContentCopyIcon />
      </IconButton>
    </Stack>
  );
};
