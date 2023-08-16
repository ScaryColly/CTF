import { useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";

export const CandleAnimation: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <div className={classes.wrapper}>
      <div className={classes.candles}>
        <div className={classes.lightWave}></div>
        <div className={classes.candleOne}>
          <div>
            <div className={classes.candleEyes}>
              <span className={classes.candleEyeOne}></span>
              <span className={classes.candleEyeTwo}></span>
            </div>
            <div className={classes.candleOneMouth}></div>
          </div>
          <div className={classes.candleOneStick}></div>
        </div>

        <div className={classes.candleTwo}>
          <div>
            <div className={classes.candleEyes}>
              <div className={classes.candleTwoEyeOne}></div>
              <div className={classes.candleTwoEyeTwo}></div>
            </div>
          </div>
          <div className={classes.candleTwoStick}></div>
        </div>
        <div className={classes.candleTwoFire}></div>
        <div className='sparkles-one'></div>
        <div className='sparkles-two'></div>
        <div className={classes.candleSmokeOne}></div>
        <div className={classes.candleSmokeTwo}></div>
      </div>
      <div className={classes.floor}></div>
    </div>
  );
};
