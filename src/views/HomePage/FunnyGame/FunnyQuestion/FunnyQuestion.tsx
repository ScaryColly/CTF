import { Button, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "../style";
import { FC } from "react";
import { FunnyQuestionProps } from "../types";

export const FunnyQuestion: FC<FunnyQuestionProps> = ({
  selectedColor,
  yesAction,
  noAction,
  question,
  isDisable,
  nextQuestion,
}) => {
  const theme = useTheme();

  const classes = getClasses(theme, selectedColor);

  return (
    <Stack className={classes.questionContainer} rowGap={2}>
      <Typography>{question}</Typography>
      <Stack
        className={classes.questionContainer}
        columnGap={3}
        direction="row"
      >
        <Button
          disabled={isDisable}
          className={classes.button}
          onClick={yesAction}
        >
          כן
        </Button>
        <Button
          disabled={isDisable}
          className={classes.button}
          onClick={noAction}
        >
          לא
        </Button>
      </Stack>
      {isDisable && (
        <Button onClick={nextQuestion} className={classes.button}>
          סיים
        </Button>
      )}
    </Stack>
  );
};
