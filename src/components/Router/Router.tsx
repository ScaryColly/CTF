import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { map } from "lodash/fp";
import { PAGES } from "./constants";
import { createRoute } from "./functions";
import { HomePage } from "../../views/HomePage/HomePage";
import NoMatch from "../NoMatch";

export const Router: FC = () => {
  const routes: JSX.Element[] = map(createRoute, PAGES);

  return (
    <Routes>
      {routes}
      <Route
        path={PAGES.home.path}
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
