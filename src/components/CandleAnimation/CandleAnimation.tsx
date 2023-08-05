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

        <div className='candle2'>
          <div className='candle2__body'>
            <div className='candle2__eyes'>
              <div className='candle2__eyes-one'></div>
              <div className='candle2__eyes-two'></div>
            </div>
          </div>
          <div className='candle2__stick'></div>
        </div>
        <div className='candle2__fire'></div>
        <div className='sparkles-one'></div>
        <div className='sparkles-two'></div>
        <div className='candle__smoke-one'></div>
        <div className='candle__smoke-two'></div>
      </div>
      <div className='floor'></div>
    </div>
  );
};
