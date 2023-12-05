import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import love from '../../assets/images/allYouNeedIs.png';
import beatles from '../../assets/images/beatles.png';
import { Image } from "../../components/Image";
import { ENCRYPTED_TEXT } from "./constants";
import { getClasses } from "./style";

export const LevelNine: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
        <Grid className={classes.gridContainer} container>
            <Grid className={classes.gridItem} item xs={6}><Image className={classes.image} src={love} alt="all you need is love" /></Grid>
            <Grid className={classes.gridItem} item xs={6}><Image className={classes.image} src={beatles} alt="the beatles" /></Grid>
        </Grid>
        
      <Typography className={classes.text} variant='h2'>{ENCRYPTED_TEXT}</Typography>
    </Box>
  );
};
