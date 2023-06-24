import { type FC, useState, useEffect } from 'react';
import { GASClient } from 'gas-client';
import { isGASEnvironment } from "gas-client/src/utils/is-gas-environment";
import type * as server from '../server/main';
import './App.css';

const { serverFunctions } = new GASClient<typeof server>();

const App: FC = () => {
  const [count, setCount] = useState(0);
  // communicate to spreadsheet
  const handleButtonClick = async () => {
    console.log(`affect value ${count} to SpreadSheet A1 cell!`);
    await serverFunctions.affectCountToA1(count);
  };

  const [title, setTitle] = useState<string | null>('');
  useEffect(() => {
    const getTitle = async () => {
      const spreadsheettitle = await serverFunctions.getSpreadSheetName();
      console.log(`get spread sheet title: ${spreadsheettitle ?? '(null)'}`);
      setTitle(spreadsheettitle);
    };
    void getTitle();
  }, []);

  return (
    <div className="App">
      <h1>{title !== '' ? title : 'Vite + React on GAS'}</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count: number) => count + 1);
          }}
        >
          count is {count}
        </button>
        <div className="card">
          <button
            onClick={async () => {
              await handleButtonClick();
            }}
          >
            SpreadSheetにカウントを反映する
          </button>
        </div>
      </div>
      {isGASEnvironment() ? (
        <div>here is PROD env</div>
      ) : (
        <div>here is DEV env</div>
      )}
    </div>
  );
};

export default App;
