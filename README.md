# お膳立て for Google Apps Script (React App built by Vite)

SpeadSheetのGoogle Apps ScriptコンテナバインドスクリプトでWebアプリを作るのを想定している。

![](README-image/view01.gif)

from [react-vite-ozendate](https://github.com/halllllll/react-vite-ozendate) base menu

- Devcontainer
- ESLint
  - `.eslintignore`
  - `.eslintrc.json`
- Jest
  - `¯\_(ツ)_/¯`
  - `_(:3」∠)_`
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
フロント側は`vite`（`rollup`）で、GAS側は`es-build`でそれぞれ別個にビルドする。フロントは`vite-plugin-singlefile`、GASは`esbuild-gas-plugin`でシングルファイルにまとめている。

フロントからGAS側で定義した関数を呼ぶために`gas-client`を使って外に出している。


- clasp, @types/google-apps-script
- [enuchi/gas-client](https://github.com/enuchi/gas-client)
- [richardtallent/vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)
- [mahaker/esbuild-gas-plugiin](https://github.com/mahaker/esbuild-gas-plugin)

追加したツールに伴ってコード中の相対リンクや各種設定ファイルを変更している。

## usage

preview with `HMR`
```
yarn vite --port=xxxx
```

prepare and deploy
```
clasp login
clasp create --type sheets
yarn build
yarn push
clasp open
```

*本当は`appsscript.json`はignore listに入れたほうがいい
