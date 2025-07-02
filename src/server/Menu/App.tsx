import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { type Dispatch, type FC, type SetStateAction, Suspense, useState } from 'react';
import ErrorRecovery from './ErrorFallback';
import { MyFetch } from './func';

const SuspendComponent: FC<{ val: number; setVal: Dispatch<SetStateAction<number>> }> = (props) => {
  const { isError, error, data: result } = MyFetch(props.val);
  if (isError) {
    console.error('エラーあるじゃん！');
    console.error(error);

    throw error ?? new Error('omgomg');
  }

  return (
    <div>
      <div>result: {result}</div>
      <button
        type="button"
        onClick={() => {
          props.setVal(Math.floor(Math.random() * 200) + 1);
        }}
      >
        reget
      </button>
    </div>
  );
};

const App: FC = () => {
  const [val, setVal] = useState<number>(Math.floor(Math.random() * 200) + 1);

  return (
    <>
      <h1>カスタムメニューによって読み込まれるメニュー</h1>
      <QueryErrorResetBoundary>
        <ErrorRecovery>
          <Suspense
            fallback={
              <div>
                <div className="loader">loading...</div>
              </div>
            }
          >
            <SuspendComponent val={val} setVal={setVal} />
          </Suspense>
        </ErrorRecovery>
      </QueryErrorResetBoundary>
      <p>
        ※{' '}
        <a href="https://jsonplaceholder.typicode.com/todos">
          https://jsonplaceholder.typicode.com/todos/
        </a>
        からランダムに1~200取得を取得しています
      </p>
    </>
  );
};

export default App;
