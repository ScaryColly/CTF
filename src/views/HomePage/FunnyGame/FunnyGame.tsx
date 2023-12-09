import { Button, Stack, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { IceCreamWrapper } from "../../../components/IceCreamWrapper";
import { ColorList } from "../../../components/ColorList";
import { colors, moods } from "./data";
import { KawaiiMood } from "react-kawaii";
import { getClasses } from "./style";
import { useForm } from "react-hook-form";
import { FunnyForm, FunnyGameProps } from "./types";
import { FunnyQuestion } from "./FunnyQuestion/FunnyQuestion";

export const FunnyGame: FC<FunnyGameProps> = ({ setIsFunnyGameOver }) => {
  const theme = useTheme();

  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedMood, setSelectedMood] = useState<KawaiiMood>(moods[0]);
  const { watch, setValue } = useForm<FunnyForm>({
    defaultValues: {
      isShowingColors: true,
      isShowingLove: false,
      isShowingWar: false,
      isDisable: false,
      isScaryHeadline: false,
    },
  });

  const classes = getClasses(theme, selectedColor);

  return (
    <Stack className={classes.container}>
      <Typography
        className={
          watch("isScaryHeadline") ? classes.scaryHeadline : classes.headline
        }
      >
        {watch("isScaryHeadline") ? "אתה" : "אל תשכחי את הארטיק"}
      </Typography>
      <IceCreamWrapper color={selectedColor} mood={selectedMood} />
      {watch("isShowingColors") && (
        <Stack alignItems="center">
          <ColorList {...{ selectedColor, setSelectedColor }} />
          <Button
            onClick={() => {
              setValue("isShowingColors", false);
              setValue("isShowingWar", true);
            }}
            variant="contained"
            className={classes.button}
          >
            שמור צבע
          </Button>
        </Stack>
      )}
      {watch("isShowingWar") && (
        <FunnyQuestion
          {...{
            selectedColor,
            question: watch("question") || "האם אתה רוצה להיות לוחם?",
            yesAction: () => {
              setSelectedMood("sad");
              setValue("question", "סליחה הייתה בעיה בשליחת הטופס, נסה שוב");
            },
            noAction: () => {
              setSelectedMood("excited");
              setValue("question", "תודה בקשתך התקבלה");
              setValue("isDisable", true);
            },
            isDisable: watch("isDisable"),
            nextQuestion: () => {
              setValue("isShowingWar", false);
              setValue("isShowingLove", true);
              setValue("isDisable", false);
              setValue("question", "האם אתה מתגעגע ?");
            },
          }}
        />
      )}
      {watch("isShowingLove") && (
        <Stack rowGap={2}>
          <FunnyQuestion
            {...{
              selectedColor,
              question: watch("question"),
              yesAction: () => {
                setSelectedMood("lovestruck");
                setValue("question", "אהוב! אני גם מתגעגעת!");
                setValue("isScaryHeadline", false);
              },
              noAction: () => {
                setSelectedMood("ko");
                setValue("question", "תזהר");
                setValue("isScaryHeadline", true);
              },
              isDisable: false,
            }}
          />
          {selectedMood === "lovestruck" && (
            <Button
              onClick={() => setIsFunnyGameOver(true)}
              className={classes.button}
            >
              המשך למשחק
            </Button>
          )}
        </Stack>
      )}
    </Stack>
  );
};
