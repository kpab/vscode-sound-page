# VSCode Typing Sound - Landing Page

VSCode Typing Sound拡張機能の紹介ページです。このリポジトリはGitHub Pagesを使用してホスティングすることを想定しています。

## 構成

このプロジェクトは以下のファイル構成になっています：

```
vscode-sound-page/
├── index.html           # メインのHTMLファイル
├── css/
│   └── styles.css       # スタイルシート
├── js/
│   └── script.js        # JavaScriptファイル
├── images/
│   └── favicon.ico      # ファビコン（実際にはicon.pngを変換して使用）
└── README.md            # このファイル
```

## 機能

- レスポンシブデザイン（モバイル端末に対応）
- 日本語/英語の言語切り替え機能
- アニメーションとインタラクティブな要素
- VS Code Marketplaceへのリンク

## 実装しているセクション

1. ヘッダー - タイトルとインストールボタン
2. ヒーローセクション - 拡張機能の概要
3. 機能セクション - 主な機能の紹介
4. 使い方セクション - インストールから設定までの手順
5. 設定セクション - カスタマイズオプションの説明
6. プラットフォームセクション - 対応OS
7. フッター - クレジットとリンク

## 使用方法

1. このリポジトリをGitHubにプッシュします
2. GitHub Pagesを有効にします：
   - リポジトリの「Settings」タブを開く
   - 「Pages」セクションに移動
   - ソースとして「main」ブランチを選択
   - 「Save」をクリック

## 注意点

- `favicon.ico`は実際には`/Users/wa/Documents/Projects/vscode-sound/media/icon.png`から変換して使用する必要があります。
- 拡張機能のリンクは`https://marketplace.visualstudio.com/items?itemName=kpab.vscode-typing-sound`に設定されています。

## カスタマイズ

- カラースキームはCSS内の`:root`セレクタで変更できます
- アニメーションはJavaScriptで調整可能です
- 追加のセクションやコンテンツは必要に応じてHTMLに追加できます

## ファビコンについて

ファビコンの作成手順：

1. `/Users/wa/Documents/Projects/vscode-sound/media/icon.png`を適切なサイズ（推奨：32x32, 128x128, 192x192）にリサイズ
2. [Favicon Generator](https://www.favicon-generator.org/)などのオンラインツールを使用してファビコンに変換
3. 生成されたファイルを`/Users/wa/Documents/Projects/vscode-sound-page/images/`に配置

## 作者

kpab
