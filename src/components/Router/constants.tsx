import { Dictionary } from "lodash";
import { HomePage } from "../../views/HomePage/HomePage";
import { LevelEight } from "../../views/LevelEight";
import { LevelEleven } from "../../views/LevelEleven";
import { LevelFifteen } from "../../views/LevelFifteen";
import { LevelFive } from "../../views/LevelFive";
import { LevelFour } from "../../views/LevelFour";
import { LevelFourteen } from "../../views/LevelFourteen";
import { LevelNine } from "../../views/LevelNine";
import { LevelOne } from "../../views/LevelOne";
import { LevelSeven } from "../../views/LevelSeven";
import { LevelSix } from "../../views/LevelSix";
import { LevelSixteen } from "../../views/LevelSixteen";
import { LevelTen } from "../../views/LevelTen";
import { LevelThirteen } from "../../views/LevelThirteen";
import { LevelThree } from "../../views/LevelThree";
import { LevelTwelve } from "../../views/LevelTwelve";
import { LevelTwo } from "../../views/LevelTwo";
import { Page } from "./types";

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
};


