import { Box, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getClasses } from "./style";
import { CandleAnimation } from "../../components/CandleAnimation";
import { Birthday } from "./Birthday";
import { FunnyGame } from "./FunnyGame/FunnyGame";

export const HomePage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const [timeLeft, setTimeLeft] = useState<number | null>(5);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(true);
  const [isFunnyGameOver, setIsFunnyGameOver] = useState(false);

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
      {!isAnimationPlaying &&
        (isFunnyGameOver ? (
          <Birthday />
        ) : (
          <FunnyGame {...{ setIsFunnyGameOver }} />
        ))}
    </Box>
  );
};
