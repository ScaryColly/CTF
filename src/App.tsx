import { StyledEngineProvider } from "@mui/material";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import ErrorFallback from "./components/ErrorFallback";
import Router from "./components/Router";
import { PreventExitContext } from "./context/PreventExitContext";
import "./App.css";

const App: FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <HashRouter>
      <PreventExitContext>
        <StyledEngineProvider injectFirst>
          <NavBar />
          <Router />
        </StyledEngineProvider>
      </PreventExitContext>
    </HashRouter>
  </ErrorBoundary>
);

export default App;
