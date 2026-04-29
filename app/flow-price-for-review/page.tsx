import type { Metadata } from "next";
import { ReviewHamburger, ReviewFooter } from "@/components/ReviewPageNav";

export const metadata: Metadata = {
  title: "商品概要(審査用)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FlowPriceForReviewPage() {
  const thStyle: React.CSSProperties = {
    textAlign: "left",
    verticalAlign: "top",
    background: "#f5f5f5",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  };

  const tdStyle: React.CSSProperties = {
    verticalAlign: "top",
    minWidth: 140,
  };

  const tableStyle: React.CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    fontSize: "0.95rem",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff",
        color: "#000000",
        overflowY: "auto",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <ReviewHamburger />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
          商品概要(審査用)
        </h1>

        <div style={{ overflowX: "auto" }}>
          <table border={1} cellPadding={8} style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thStyle, textAlign: "center" }}>販売商材名</th>
                <th style={{ ...thStyle, textAlign: "center" }}>商品概要</th>
                <th style={{ ...thStyle, textAlign: "center", minWidth: 220 }}>
                  商品の詳細説明（カリキュラム・スケジュールなど）
                </th>
                <th style={{ ...thStyle, textAlign: "center" }}>商材金額(全て)</th>
                <th style={{ ...thStyle, textAlign: "center" }}>
                  役務期間（サービス提供期間）
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>動画編集スクール</td>
                <td style={tdStyle}>
                  After Effects
                  初心者向けオンラインスクール。基礎から実践レベルまで学べます。
                </td>
                <td style={tdStyle}>
                  After Effects
                  を学べるオンラインスクール。動画講義・実践ワークショップ・講師サポートで、初心者から案件獲得レベルまで段階的にスキルアップ、いつでも、自分のペースで学習可能できる環境を提供します。
                </td>
                <td style={tdStyle}>400,000円(税込)</td>
                <td style={tdStyle}>3か月</td>
              </tr>
              <tr>
                <td style={tdStyle}>動画編集コミュニティ</td>
                <td style={tdStyle}>
                  クリエイター向けオンラインコミュニティ。案件情報・スクール割引・交流会、・有料級素材を提供します。
                </td>
                <td style={tdStyle}>
                  クリエイター向けオンラインコミュニティ。専用チャットを活用した案件紹介・スクール割引・月1回以上のオフラインイベントやオンライン勉強会、有料級素材ライブラリの閲覧をで提供し、案件獲得・スキル向上・人脈構築を実現します。
                </td>
                <td style={tdStyle}>5,000円(税込)</td>
                <td style={tdStyle}>月額課金</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ReviewFooter />
      </div>
    </div>
  );
}
