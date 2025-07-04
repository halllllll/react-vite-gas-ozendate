# お膳立て for Google Apps Script　Web App

SpeadSheetのGoogle Apps Script（GAS）コンテナバインドスクリプトでReact製のWebアプリを作るのを想定しているboilerplate

![](README-image/view01.gif)


## more
フロント側は`vite`で、GAS側は`es-build`でそれぞれ別個にビルドする。フロントは`vite-plugin-singlefile`、GASは`esbuild-gas-plugin`でシングルファイルにまとめている。

フロントからGAS側で定義した関数を呼ぶために`gas-client`を使って外に出している。

- clasp, @types/google-apps-script
- [enuchi/gas-client](https://github.com/enuchi/gas-client)
- [richardtallent/vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)
- [mahaker/esbuild-gas-plugiin](https://github.com/mahaker/esbuild-gas-plugin)

追加したツールに伴ってコード中の相対リンクや各種設定ファイルを変更している。


## usage


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
