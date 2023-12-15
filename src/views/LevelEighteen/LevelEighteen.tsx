import { Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import table from "../../assets/images/table.png";
import { Image } from "../../components/Image";
import { CREDIT, ELEMENT } from "./constants";
import { getClasses } from "./style";

export const LevelEighteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.container}>
      <Typography variant="h2">{ELEMENT}</Typography>
      <Image className={classes.image} src={table} alt="table" />
      <Typography variant="h6">{CREDIT}</Typography>
    </Stack>
  );
};
