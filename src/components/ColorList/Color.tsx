import { FC } from "react";
import styles from "./Colors.module.css";
import { ColorProps } from "./types";

export const Color: FC<ColorProps> = ({
  color,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <span className={styles.ColorSquareWrapper}>
      <span
        key={color}
        className={`${styles.ColorSquare} ${
          color === selectedColor ? styles.ColorSquareSelected : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      />
    </span>
  );
};
