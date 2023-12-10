import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import love from "../../assets/images/allYouNeedIs.png";
import beatles from "../../assets/images/beatles.png";
import { Image } from "../../components/Image";
import { ENCRYPTED_TEXT } from "./constants";
import { getClasses } from "./style";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const LevelNine: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Typography variant="h6">AES</Typography>
      <Stack rowGap={2}>
        <Image
          className={classes.image}
          src={love}
          alt="all you need is love"
        />
        <Image className={classes.image} src={beatles} alt="the beatles" />
      </Stack>
      <Typography className={classes.text}>{ENCRYPTED_TEXT}</Typography>
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(ENCRYPTED_TEXT);
        }}
      >
        <ContentCopyIcon />
      </IconButton>
    </Stack>
  );
};
