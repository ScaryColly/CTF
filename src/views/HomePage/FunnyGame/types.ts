import { Dispatch, SetStateAction } from "react";

export interface FunnyForm {
  isShowingColors: boolean;
  isShowingWar: boolean;
  isShowingLove: boolean;
  question: string;
  isDisable: boolean;
  isScaryHeadline: boolean;
}

export interface FunnyQuestionProps {
  selectedColor: string;
  question: string;
  yesAction: () => void;
  noAction: () => void;
  isDisable: boolean;
  nextQuestion?: () => void;
}

export interface FunnyGameProps {
  setIsFunnyGameOver: Dispatch<SetStateAction<boolean>>;
}
