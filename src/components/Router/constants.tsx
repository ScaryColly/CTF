import { Dictionary } from "lodash";
import { Page } from "./types";
import { HomePage } from "../../views/HomePage/HomePage";

export const PAGES: Dictionary<Page> = {
  home: {
    path: "/",
    element: () => <HomePage />,
  },
};
