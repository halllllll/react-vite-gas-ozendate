---
name: gas-backend
description: Google Apps ScriptをWebアプリとしてデプロイしたときのバックエンド。SpreadSheetをDB代わりに利用。適切な値を受け取り、加工したり返却したりするAPI。
---

フロントから利用できる関数（ここでは広義のAPIと呼ぶ）は、`gas-client`モジュールを使ってexportしている。

- `src/client/serverFunctions.ts`

コードは`src/server`で書く。

Repository,Serviceなど、責務を分離したアーキテクチャ。Interfaceを定義し、Dependency Injectionを利用して、プログラムを利用する側から使いやすく安心なプログラムを書けるようにする

Google Apps ScriptnoAPI呼び出しは遅く、利用制限もあるため、CacheやPropertyを使ってUXを損なわないようにする。Excel VBAやGASでのアンチパターンを踏まないようにする。
Google Apps Script の Cache や Lock, Property, Utility なども必要に応じて応用する
