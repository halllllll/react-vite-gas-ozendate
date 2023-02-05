# お膳立て for Google Apps Script (React App built by Vite)

SpeadSheetのGoogle Apps ScriptコンテナバインドスクリプトでWebアプリを作るのを想定している。

![](README-image/view01.gif)

from [react-vite-ozendate](https://github.com/halllllll/react-vite-ozendate) base menu

- Devcontainer
- ESLint
  - `.eslintignore`
  - `.eslintrc.json`
- Jest
- Node
  - `package.json`
- Prettier
  - `.prettierrc.json`
- React
- StyleLint
- TypeScript
  - `tsconfig.ts`
- Vite
- yarn.lock
- ほか、VSCodeの拡張機能
  - `.vscode`以下


## 追加
- clasp, @types/google-apps-script
- gas-client
- vite-plugin-singlefile

追加したツールに伴ってコード中の相対リンクや各種設定ファイルを変更している。

## 構成
Google Apps Script側のコードは`server`に、JS側はいつもどおり`src`で自由にどうぞ

## usage

`clasp`のログインと（SpreadSheet）プロジェクトの作成をしたあとは`appscript.json`を`server`以下に設置する。

```
yarn build
yarn push
yarn open
```
