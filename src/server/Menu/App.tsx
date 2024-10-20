import { Suspense, type FC } from 'react';
import { QueryErrorResetBoundary, useSuspenseQuery } from '@tanstack/react-query';
import { ClimbingBoxLoader } from 'react-spinners';
import ErrorRecovery from './ErrorFallback';

const sleep = async (ms: number) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};
const myFetch = async () => {
  await sleep(1000);
  if (Math.random() < 0.7) {
    console.error('エラーだよ');

    throw new Error('omg');
  }
  console.log('gogo');
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const obj = await res.json();

  return JSON.stringify(obj);
};

const SuspendComponent: FC = () => {
  const {
    isError,
    error,
    data: result,
  } = useSuspenseQuery({
    queryKey: ['myfetch'],
    queryFn: myFetch,
    retry: 0,
  });
  if (isError) {
    console.error('エラーあるじゃん！');
    console.error(error);

    throw error ?? new Error('omgomg');
  }

  return <div>{result}</div>;
};

const App: FC = () => {
  return (
    <>
      <h1>カスタムメニューによって読み込まれるメニュー</h1>
      <div>せっかくなのでデザインコンポーネントを使います</div>
      <QueryErrorResetBoundary>
        <ErrorRecovery>
          <Suspense fallback={<ClimbingBoxLoader color="#36b7d7" />}>
            <SuspendComponent />
          </Suspense>
        </ErrorRecovery>
      </QueryErrorResetBoundary>
    </>
  );
};

export default App;
