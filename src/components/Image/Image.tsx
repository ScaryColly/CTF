import { FC } from "react";
import { ImageProps } from "./types";
import { useTheme } from "@mui/material";
import { getClasses } from "./style";
import { cx } from "@emotion/css";

export const Image: FC<ImageProps> = ({ src, alt, className }) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return <img className={cx(classes.image, className)} src={src} alt={alt} />;
};
