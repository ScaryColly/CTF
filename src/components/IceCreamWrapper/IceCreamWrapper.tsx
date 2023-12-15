import { FC } from "react";
import { IceCream } from "react-kawaii";
import styles from "./IceCreamWrapper.module.css";
import { IceCreamWrapperProps } from "./types";

export const IceCreamWrapper: FC<IceCreamWrapperProps> = ({ color, mood }) => {
  return (
    <div className={styles.IceCreamWrapper}>
      <IceCream size={400} color={color} mood={mood} />
    </div>
  );
};
