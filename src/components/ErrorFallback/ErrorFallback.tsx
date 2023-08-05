import { FC } from 'react';
import { ErrorProps } from './types';
import { ERROR_MESSAGE, TRY_AGAIN } from './constants';

export const ErrorFallback: FC<ErrorProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>{ERROR_MESSAGE}</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>{TRY_AGAIN}</button>
    </div>
  );
};
