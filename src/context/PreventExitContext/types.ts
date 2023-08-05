export interface PreventExitContextProps<T> {
  preventers: T[];
  addPreventer: (preventer: T) => void;
  removePreventer: (preventer: T) => void;
}

export interface ReducerAction {
  type: 'remove' | 'add';
  preventer: string;
}
