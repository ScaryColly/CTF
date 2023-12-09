import { Dispatch, SetStateAction } from "react";

export interface ColorListProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export interface ColorProps {
  color: string;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}
