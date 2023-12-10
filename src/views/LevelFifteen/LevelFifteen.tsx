import {
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { isEqual, lowerCase } from "lodash/fp";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ANSWER_TEXT, FLAG, NEXT_LEVEL } from "./constants";
import { getClasses } from "./style";
import { FormObject } from "./types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const LevelFifteen: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const { register, watch } = useForm<FormObject>({
    defaultValues: { riddleText: "Next Level" },
  });

  const doesHasTheAnswer = () =>
    isEqual(lowerCase(NEXT_LEVEL), lowerCase(watch("riddleText")));

  return (
    <Box className={classes.container}>
      <TextField
        inputProps={{ className: classes.textField }}
        {...register("riddleText")}
        label="level"
      />
      {doesHasTheAnswer() && (
        <Stack alignItems="center" rowGap={2}>
          <Typography className={classes.text} variant="h6">
            {ANSWER_TEXT}
          </Typography>
          <IconButton
            onClick={() => navigator.clipboard.writeText(FLAG)}
            className={classes.button}
          >
            <ContentCopyIcon />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
};
