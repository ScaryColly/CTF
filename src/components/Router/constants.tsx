import { Dictionary } from "lodash";
import { Page } from "./types";
import { HomePage } from "../../views/HomePage/HomePage";
import { LevelOne } from "../../views/LevelOne";
import { LevelTwo } from "../../views/LevelTwo";
import { LevelThree } from "../../views/LevelThree";
import { LevelFour } from "../../views/LevelFour";
import { LevelFive } from "../../views/LevelFive";

export const PAGES: Dictionary<Page> = {
  home: {
    path: "/",
    element: () => <HomePage />,
  },
  levelOne: {
    path: "/level1",
    element: () => <LevelOne />,
  },
  levelTwo: {
    path: "/8",
    element: () => <LevelTwo />,
  },
  levelThree: {
    path: "/july31",
    element: () => <LevelThree />,
  },
  levelFour: {
    path: "/2",
    element: () => <LevelFour />,
  },
  levelFive: {
    path: "/jupiter",
    element: () => <LevelFive />,
  },
};
