import { type FC, useState, useEffect } from 'react';
import { GASClient } from 'gas-client';
import { isGASEnvironment } from 'gas-client/src/utils/is-gas-environment';
import type * as server from '../server/main';
import './App.css';
import { SheetNameAPI, SheetUrlAPI } from './stubs/getSheetInfo';

const { serverFunctions } = new GASClient<typeof server>();

const App: FC = () => {
  const [count, setCount] = useState(0);
  // communicate to spreadsheet
  const handleButtonClick = async () => {
    console.log(`affect value ${count} to SpreadSheet A1 cell!`);
    await serverFunctions.affectCountToA1(count);
  };

  const [title, setTitle] = useState<string | null>('');
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
      <div className="App">
        <a href="/src/server/Menu/menu.html">（カスタムメニューのhtmlサンプル）</a>
        <h1>{title !== '' ? title : 'Vite + React on GAS'}</h1>
        <div className="card">
          <button
            type={'button'}
            onClick={() => {
              setCount((count: number) => count + 1);
            }}
          >
            count is {count}
          </button>
          <div className="card">
            <button
              type={'button'}
              onClick={async () => {
                await handleButtonClick();
              }}
            >
              SpreadSheetにカウントを反映する
            </button>
          </div>
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
      <footer className="fotter">
        <p>v2024-07-11</p>
      </footer>
    </>
  );
};

export default App;
