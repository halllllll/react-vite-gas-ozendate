---
name: gas-frontend
description: Google Apps ScriptをWebアプリとしてデプロイしたときのフロントエンド
---
# gas-frontend
TypeScript / React 製のSPA。画面は一枚
Google Apps Scriptで作成するWebアプリのため、独特の制限がある。

## スタイリング
TailwindCSS v4, daisyUI を利用する。

## フェッチ
`swr`を使う。`gas-client`を利用している。
ローカルで開発するときは`msw`を使う。

