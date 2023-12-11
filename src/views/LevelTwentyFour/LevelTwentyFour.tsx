import { Link, Stack, useTheme } from "@mui/material";
import { FC } from "react";
import { getClasses } from "./style";
import { Image } from "../../components/Image";
import takeMeBack from "../../assets/images/take.png";

export const LevelTwentyFour: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Image
        className={classes.image}
        src={takeMeBack}
        alt="Take me back to the night we met"
      />
      <Link
        className={classes.link}
        target="_blank"
        href="https://www.youtube.com/watch?v=KtlgYxa6BMU"
      >
        Take me back to the night we met
      </Link>
    </Stack>
  );
};
