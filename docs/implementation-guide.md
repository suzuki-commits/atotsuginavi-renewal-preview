# アトツギナビ リニューアル提案・実装ガイド

公開URL: https://suzuki-commits.github.io/atotsuginavi-renewal-preview/
GitHub: https://github.com/suzuki-commits/atotsuginavi-renewal-preview
ソースZIP: https://github.com/suzuki-commits/atotsuginavi-renewal-preview/archive/refs/heads/main.zip

## ファイル構成
- index.html: ページ構造と文章
- styles.css: 配色、文字、余白、レスポンシブ表示
- app.js: モバイルメニューと相談テーマ選択
- assets/: 公式ロゴと人事評価イラスト

## 編集・表示
ZIPを展開すると上記一式が入ったフォルダになります。HTML、CSS、JavaScriptを直接編集できます。外部フレームワークやビルド工程は不要です。フォルダを静的HTTPサーバーのルートとして表示してください。GitHub Pagesはmainブランチのルートから公開しています。

## 問い合わせ導線
相談ボタンからページ内の相談セクションへ移動し、既存の公式フォーム https://atotsuginavi.briedge.co.jp/#form へ進みます。テーマ選択は画面内の表示更新のみで、入力情報を保存・送信しません。

## 公開位置づけ
リニューアル提案プレビューです。現在の本番サイトは変更していません。検索エンジンにはnoindex, nofollowを指定しています。CVR向上効果は公開後の計測で検証する改善仮説です。
