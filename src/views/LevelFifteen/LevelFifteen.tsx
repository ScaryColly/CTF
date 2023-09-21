import { Box, TextField, Typography, useTheme } from "@mui/material";
import { isEqual, lowerCase } from "lodash/fp";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ANSWER_TEXT, NEXT_LEVEL } from "./constants";
import { getClasses } from "./style";
import { FormObject } from "./types";

export const LevelFifteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const { register, watch } = useForm<FormObject>({defaultValues: {riddleText: 'Next Level'}});

  const doesHasTheAnswer = () => isEqual(lowerCase(NEXT_LEVEL), lowerCase(watch('riddleText')))

  return (
    <Box className={classes.container}>
      <TextField inputProps={{className: classes.textField}} {...register('riddleText')} label="level" />
      {doesHasTheAnswer() &&<Typography className={classes.text} variant="h3">{ANSWER_TEXT}</Typography>}
    </Box>
  );
};
