# FROM CREATE HP プロジェクト 作業ルール

## リポジトリ構成
- origin = kazuki0819/hp_fromcreate_retro_style（個人、原本）
- fromcreate = fr0mcreate/corporate-site（クライアントOrg、本番移植先）

## ブランチ運用
- 個人側: design-a ブランチで開発
- クライアント側: main ブランチが本番

## コミット後の push ルール（必須）
コミット後は必ず以下の両方に push すること。片方だけで終わらせない。

1. git push origin design-a
2. git push fromcreate design-a:main

または、設定済みのエイリアスを使って:
- git pushall

push 後は git log --oneline -3 origin/design-a と
git log --oneline -3 fromcreate/main を比較して、
両方に最新コミットが反映されているか必ず確認すること。

## 禁止事項
- main ブランチへの直接コミット
- design-b/c/d/playground ブランチへの作業
- ユーザー確認なしでの強制 push（--force）
- ContactForm.tsx、HeroVideo、BreakoutGame、HeroCanvas、PixelPenguins、
  SectionVideo の意図しない変更
