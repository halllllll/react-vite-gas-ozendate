# お膳立て for Google Apps Script (React App built by Vite)

SpeadSheetのGoogle Apps ScriptコンテナバインドスクリプトでWebアプリを作るのを想定している。

![](README-image/view01.gif)

from [react-vite-ozendate](https://github.com/halllllll/react-vite-ozendate) base menu

## more
フロント側は`vite`（`rollup`）で、GAS側は`es-build`でそれぞれ別個にビルドする。フロントは`vite-plugin-singlefile`、GASは`esbuild-gas-plugin`でシングルファイルにまとめている。

フロントからGAS側で定義した関数を呼ぶために`gas-client`を使って外に出している。また、フロント側の型定義ファイルで`Google`を定義し、`gas-client/src/utils/is-gas-environment`でローカルかGAS環境かを判定している


- clasp, @types/google-apps-script
- [enuchi/gas-client](https://github.com/enuchi/gas-client)
- [richardtallent/vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)
- [mahaker/esbuild-gas-plugiin](https://github.com/mahaker/esbuild-gas-plugin)

追加したツールに伴ってコード中の相対リンクや各種設定ファイルを変更している。

Webアプリ側(`vite.config.ts`)およびSpreadsheet側のカスタムメニュー用のhtml（`vite.config.menu.ts`）の両方をビルドする。

## usage

preview with `HMR`
```
bun dev --port=xxxx
```
この場合、メニューの画面は`localhost:xxxx/src/server/Menu/menu.html`で見れる



prepare and deploy
* `The 'punycode' module is deprecated`と出るが、直し方がわからない

`clasp create`で生成された`.clasp.json`の`rootDir`を`"/workspace/dist"`に変更する必要がある。

```.clasp.json
{
  "scriptId": "xxxx",
  "rootDir": "/workspace/dist",
  "parentId": [
    "xxxx"
  ]
}
```

script memo
```
clasp login
clasp create --type sheets
bun run build
bun run push
clasp open
```
