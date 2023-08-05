import { createContext, FC, useCallback, useContext, useEffect, useReducer } from 'react';
import { preventersReducer } from './functions';
import { PreventExitContextProps } from './types';

const preventExitContext = createContext<PreventExitContextProps<string>>({
  preventers: [],
  removePreventer: () => {},
  addPreventer: () => {},
});

const PreventExitContext: FC<{ children: JSX.Element[] | JSX.Element }> = ({ children }) => {
  const [preventers, dispatchPreventers] = useReducer(preventersReducer, []);

  const addPreventer = useCallback((preventer: string) => dispatchPreventers({ type: 'add', preventer }), []);
  const removePreventer = useCallback((preventer: string) => dispatchPreventers({ type: 'remove', preventer }), []);

  useEffect(() => {
    alertBeforeUnloadOrClose(!!preventers.length);
  }, [preventers]);

  return (
    <preventExitContext.Provider value={{ preventers, addPreventer, removePreventer }}>
      {children}
    </preventExitContext.Provider>
  );
};

const alertBeforeUnloadOrClose = (showExitPrompt: boolean) => {
  window.onbeforeunload = (event: BeforeUnloadEvent) => {
    if (showExitPrompt) {
      const reloadEvent = event || window.event;
      reloadEvent.preventDefault();
      if (reloadEvent) {
        reloadEvent.returnValue = ''; // Legacy method for cross browser support
      }
      return ''; // Legacy method for cross browser support
    }
  };
};

const useExitPrompt = () => useContext(preventExitContext);

export { PreventExitContext, useExitPrompt };
