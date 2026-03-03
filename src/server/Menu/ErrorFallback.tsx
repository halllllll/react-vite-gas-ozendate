import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const err = error as Error;

  return (
    <div>
      <p>エラー発生: {err.message}</p>
      <button
        type="button"
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        エラーをクリア
      </button>
    </div>
  );
};
type Props = PropsWithChildren;

const ErrorRecovery: FC<Props> = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorRecovery;
