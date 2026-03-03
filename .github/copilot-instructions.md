- Always search web for latest info before ANY implementation/library changes.
- When encountering issues, SEARCH THE WEB FIRST. DO NOT TRUST YOUR MEMORY.

Google Apps Scriptを使ったReact製のWebアプリ。
SpreadsheetをDBとして利用する、container-bind script。
ローカル開発時や本番用ビルド、pushには`clasp`を利用する

ライブラリは以下

- React（UIライブラリ）
- TailwindCSS / daisyUI（スタイリング）
- SWR（フェッチ）

ローカル開発環境では`msw`を使ってGoogle Apps ScriptへのPOSTやGETをモックする。
