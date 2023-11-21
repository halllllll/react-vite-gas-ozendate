import { type FC } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const App: FC = () => {
  return (
    <>
      <h1>カスタムメニューによって読み込まれるメニュー</h1>
      <div>せっかくなのでデザインコンポーネントを使います</div>
      <ClimbingBoxLoader color="#36d7b7" />
    </>
  );
};

export default App;
