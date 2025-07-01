import { GASClient } from 'gas-client';
import { isGASEnvironment } from 'gas-client/src/utils/is-gas-environment';
import { type FC, useEffect, useState } from 'react';
import type * as server from '../server/main';

import { SheetNameAPI, SheetUrlAPI } from './stubs/getSheetInfo';

const { serverFunctions } = new GASClient<typeof server>();

const App: FC = () => {
  const [count, setCount] = useState(0);

  // communicate to spreadsheet
  const handleButtonClick = async () => {
    console.log(`affect value ${count} to SpreadSheet A1 cell!`);
    await serverFunctions.affectCountToA1(count);
  };

  const [title, setTitle] = useState<string>('loading...');
  const [sheetUrl, setSheetUrl] = useState<string>('');
  useEffect(() => {
    const getTitle = async () => {
      const [spreadsheettitle, spreadsheeturl] = await Promise.all([SheetNameAPI(), SheetUrlAPI()]);
      console.log(`get spread sheet title: ${spreadsheettitle ?? '(null)'}`);
      setTitle(spreadsheettitle);
      setSheetUrl(spreadsheeturl);
    };
    void getTitle();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-neutral-800 text-white gap-10">
        <a href="/src/server/Menu/menu.html" className="text-blue-500 hover:underline">
          （カスタムメニューのhtmlサンプル）
        </a>
        <h1 className={'text-5xl text-center font-bold'}>{title ?? 'THIS IS PSEUDO TITLE'}</h1>
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
            className={
              'bg-gray-700 border border-transparent hover:border-indigo-500 active:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-150'
            }
            type={'button'}
            onClick={async () => {
              await handleButtonClick();
            }}
          >
            SpreadSheetにカウントを反映する
          </button>
        </div>
        {isGASEnvironment() ? (
          <>
            <div>here is PROD env</div>
            <div>
              Go to Sheet:{' '}
              <a href={sheetUrl} target="_blank" rel="noreferrer">
                LINK
              </a>
            </div>
          </>
        ) : (
          <div>here is DEV env</div>
        )}
      </div>
      <footer className="absolute bottom-0 left-0 w-full text-center text-white py-2">
        <p>v2024-07-11</p>
      </footer>
    </>
  );
};

export default App;
