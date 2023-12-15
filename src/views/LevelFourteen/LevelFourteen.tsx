import { Stack, useTheme } from "@mui/material";
import { FC } from "react";
import qr from "../../assets/images/qrcode.png";
import { Image } from "../../components/Image";
import { getClasses } from "./style";

export const LevelFourteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Image className={classes.image} src={qr} alt="qr" />
    </Stack>
  );
};
