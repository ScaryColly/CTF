import { equals, reject } from 'lodash/fp';
import { ReducerAction } from './types';

export const preventersReducer = (existingPreventers: string[], { type, preventer }: ReducerAction): string[] =>
  type === 'add' ? [...existingPreventers, preventer] : reject(equals(preventer), existingPreventers);
