import { Box, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getClasses } from "./style";
import {
  ASK,
  CREDIT,
  FINISH_ERA,
  HAPPY_BIRTHDAY,
  LEVEL_ONE,
  RULES,
} from "./constants";
import { CandleAnimation } from "../../components/CandleAnimation";

export const HomePage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const [timeLeft, setTimeLeft] = useState<number | null>(5);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
      setIsAnimationPlaying(false);
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <Box className={classes.container}>
      {isAnimationPlaying && <CandleAnimation />}
      {!isAnimationPlaying && (
        <>
          <Typography className={classes.headline} variant='h2'>
            {HAPPY_BIRTHDAY}
          </Typography>
          <Typography variant='h5' className={classes.text}>
            {FINISH_ERA}
          </Typography>
          <Typography variant='h5' className={classes.textTwo}>
            {ASK}
          </Typography>
          <Typography variant='h5' className={classes.textThree}>
            {`${RULES} ${LEVEL_ONE}`}
          </Typography>
          <Typography variant='h5' className={classes.textFour}>
            {CREDIT}
          </Typography>
        </>
      )}
    </Box>
  );
};
