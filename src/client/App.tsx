import { isGASEnvironment } from 'gas-client/src/utils/is-gas-environment';
import { type FC, useState } from 'react';
import { useGetSheetName, useGetSheetUrl, usePostCount } from './api/sheet/hook';

const App: FC = () => {
  const [count, setCount] = useState(0);
  const { trigger: post, isMutating } = usePostCount();

  // communicate to spreadsheet
  const handleButtonClick = async () => {
    console.log(`affect value ${count} to SpreadSheet A1 cell!`);
    const ret = await post(count);
    if (ret.success) {
      console.log('Successfully updated the count in the spreadsheet.');
    } else {
      console.error(`Failed to update the count: ${ret.name} - ${ret.message}`);
    }
    // await serverFunctions.affectCountToA1(count);
  };

  const { data: title, error: nameError, isLoading: isNameLoading } = useGetSheetName();

  const { data: sheetUrl, error: sheetUrlError, isLoading: isSheetUrlLoading } = useGetSheetUrl();

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-neutral-800 text-white gap-10">
        <a href="/src/server/Menu/menu.html" className="text-blue-500 hover:underline">
          （カスタムメニューのhtmlサンプル）
        </a>
        <h1 className={'text-5xl text-center font-bold'}>
          {!isNameLoading && title?.success && title?.data
            ? title.data
            : nameError
              ? `${nameError.name} ${nameError.message}`
              : 'Loading...'}
        </h1>
        <div className="flex flex-col items-center justify-center space-y-6 mt-8">
          <button
            className={
              'bg-gray-700 border border-transparent hover:border-indigo-500 active:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-150'
            }
            type={'button'}
            onClick={() => {
              setCount((count: number) => count + 1);
            }}
          >
            count is {count}
          </button>
          <button
            className={`bg-gray-700 border border-transparent hover:border-indigo-500 active:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-150 ${isMutating ? 'opacity-50 cursor-not-allowed animation-spin' : ''}`}
            type={'button'}
            onClick={() => {
              handleButtonClick();
            }}
          >
            {isMutating ? 'sending...' : 'SpreadSheetにカウントを反映する'}
          </button>
        </div>
        {isGASEnvironment() ? (
          <>
            <div>here is PROD env</div>
            <div>
              Go to Sheet:{' '}
              {!isSheetUrlLoading && sheetUrl?.success && sheetUrl.data ? (
                <a href={sheetUrl.data} target="_blank" rel="noreferrer">
                  LINK
                </a>
              ) : sheetUrlError ? (
                `${sheetUrlError.name} ${sheetUrlError.message}`
              ) : (
                'Loading...'
              )}{' '}
            </div>
          </>
        ) : (
          <div>here is DEV env</div>
        )}
      </div>
      <footer className="absolute bottom-0 left-0 w-full text-center text-white py-2">
        <p>v2025-07-03</p>
      </footer>
    </>
  );
};

export default App;
