import { FC } from "react";
import { colors } from "../../views/HomePage/FunnyGame/data";
import { Color } from "./Color";
import styles from "./Colors.module.css";
import { map } from "lodash/fp";
import { ColorListProps } from "./types";

export const ColorList: FC<ColorListProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div className={styles.Colors}>
      {map(
        (color) => (
          <Color key={color} {...{ color, selectedColor, setSelectedColor }} />
        ),
        colors
      )}
    </div>
  );
};
