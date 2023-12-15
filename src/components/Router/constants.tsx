import { Dictionary } from "lodash";
import { HomePage } from "../../views/HomePage/HomePage";
import { LevelEight } from "../../views/LevelEight";
import { LevelEighteen } from "../../views/LevelEighteen";
import { LevelEleven } from "../../views/LevelEleven";
import { LevelFifteen } from "../../views/LevelFifteen";
import { LevelFive } from "../../views/LevelFive";
import { LevelFour } from "../../views/LevelFour";
import { LevelFourteen } from "../../views/LevelFourteen";
import { LevelNine } from "../../views/LevelNine";
import { LevelNineteen } from "../../views/LevelNineteen";
import { LevelOne } from "../../views/LevelOne";
import { LevelSeven } from "../../views/LevelSeven";
import { LevelSeventeen } from "../../views/LevelSeventeen";
import { LevelSix } from "../../views/LevelSix";
import { LevelSixteen } from "../../views/LevelSixteen";
import { LevelTen } from "../../views/LevelTen";
import { LevelThirteen } from "../../views/LevelThirteen";
import { LevelThree } from "../../views/LevelThree";
import { LevelTwelve } from "../../views/LevelTwelve";
import { LevelTwenty } from "../../views/LevelTwenty";
import { LevelTwentyOne } from "../../views/LevelTwentyOne";
import { LevelTwo } from "../../views/LevelTwo";
import { Page } from "./types";
import { LevelTwentyTwo } from "../../views/LevelTwentyTwo";
import { LevelTwentyThree } from "../../views/LevelTwentyThree";
import { LevelTwentyFour } from "../../views/LevelTwentyFour";
import { LevelTwentyFive } from "../../views/LevelTwentyFive";

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
  levelSix: {
    path: "/davidlaskov",
    element: () => <LevelSix />,
  },
  levelSeven: {
    path: "/1979",
    element: () => <LevelSeven />,
  },
  levelEight: {
    path: "/redunderwear",
    element: () => <LevelEight />,
  },
  levelNine: {
    path: "/itssosimple",
    element: () => <LevelNine />,
  },
  levelTen: {
    path: "/h4DIOJ6NDF89JFKG9",
    element: () => <LevelTen />,
  },
  levelEleven: {
    path: "/secret",
    element: () => <LevelEleven />,
  },
  levelTwelve: {
    path: "/djtioeru58",
    element: () => <LevelTwelve />,
  },
  levelThirteen: {
    path: "/alone",
    element: () => <LevelThirteen />,
  },
  levelFourteen: {
    path: "/Michelangelo",
    element: () => <LevelFourteen />,
  },
  levelFifteen: {
    path: "/fnsekjtrnhe74543fdsdf",
    element: () => <LevelFifteen />,
  },
  levelSixteen: {
    path: "/ahiu6y3bdfiujkne534g",
    element: () => <LevelSixteen />,
  },
  levelSeventeen: {
    path: "/0",
    element: () => <LevelSeventeen />,
  },
  levelEighteen: {
    path: "/stupid",
    element: () => <LevelEighteen />,
  },
  levelNineteen: {
    path: "/K",
    element: () => <LevelNineteen />,
  },
  levelTwenty: {
    path: "/x^2y^3",
    element: () => <LevelTwenty />,
  },
  levelTwentyOne: {
    path: "/raised",
    element: () => <LevelTwentyOne />,
  },
  levelTwentyTwo: {
    path: "/something",
    element: () => <LevelTwentyTwo />,
  },
  levelTwentyThree: {
    path: "/TheLittlePrince",
    element: () => <LevelTwentyThree />,
  },
  levelTwentyFour: {
    path: "/bed",
    element: () => <LevelTwentyFour />,
  },
  levelTwentyFive: {
    path: "/07/11/2019",
    element: () => <LevelTwentyFive />,
  },
};
