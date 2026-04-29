import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金表(審査用)",
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
  };

  const theadThStyle: React.CSSProperties = {
    ...thStyle,
    textAlign: "center",
  };

  const tableStyle: React.CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    fontSize: "0.95rem",
  };

  const centerCell: React.CSSProperties = {
    textAlign: "center",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff",
        color: "#000000",
        overflow: "auto",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
          料金表(審査用)
        </h1>

        <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          料金表：SNS運用代行
        </h2>
        <table border={1} cellPadding={8} style={tableStyle}>
          <thead>
            <tr>
              <th style={theadThStyle}></th>
              <th style={theadThStyle}>YouTube(横)</th>
              <th style={theadThStyle}>YouTube(縦)</th>
              <th style={theadThStyle}>Instagram</th>
              <th style={theadThStyle}>TikTok</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={thStyle}>企画</th>
              <td style={centerCell}>1万円/本</td>
              <td style={centerCell}>1万円/本</td>
              <td style={centerCell}>1万円/本</td>
              <td style={centerCell}>1万円/本</td>
            </tr>
            <tr>
              <th style={thStyle}>台本制作</th>
              <td style={centerCell}>1万円/本</td>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
            </tr>
            <tr>
              <th style={thStyle}>撮影</th>
              <td style={centerCell}>4万円/回</td>
              <td style={centerCell}>4万円/回</td>
              <td style={centerCell}>4万円/回</td>
              <td style={centerCell}>4万円/回</td>
            </tr>
            <tr>
              <th style={thStyle}>編集</th>
              <td style={centerCell}>10分2.5万円<br />（10分以降＋2,000円/分）</td>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
            </tr>
            <tr>
              <th style={thStyle}>分析</th>
              <td style={centerCell}>3万円/回</td>
              <td style={centerCell}>3万円/回</td>
              <td style={centerCell}>3万円/回</td>
              <td style={centerCell}>3万円/回</td>
            </tr>
            <tr>
              <th style={thStyle}>投稿代行</th>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
              <td style={centerCell}>5,000円/本</td>
            </tr>
            <tr>
              <th style={thStyle}>初期構築</th>
              <td style={centerCell}>5万円〜</td>
              <td style={centerCell}>5万円〜</td>
              <td style={centerCell}>5万円〜</td>
              <td style={centerCell}>5万円〜</td>
            </tr>
            <tr>
              <th style={thStyle}>サムネイル</th>
              <td colSpan={4} style={centerCell}>5,000円/枚</td>
            </tr>
            <tr>
              <th style={thStyle}>切り抜き(横)</th>
              <td colSpan={4} style={centerCell}>1万円/本</td>
            </tr>
            <tr>
              <th style={thStyle}>切り抜き(縦)</th>
              <td colSpan={4} style={centerCell}>5,000円/本</td>
            </tr>
            <tr>
              <th style={thStyle}>備考</th>
              <td colSpan={4} style={centerCell}>After Effects・3DCGなどは要相談</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ fontSize: "1.2rem", marginTop: "2.5rem", marginBottom: "1rem" }}>
          料金表：映像制作
        </h2>
        <table border={1} cellPadding={8} style={tableStyle}>
          <thead>
            <tr>
              <th style={theadThStyle}></th>
              <th style={theadThStyle}>編集</th>
              <th style={theadThStyle}>構成</th>
              <th style={theadThStyle}>撮影</th>
              <th style={theadThStyle}>備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={thStyle}>SNS動画(実写・横)</th>
              <td style={centerCell}>10分2.5万円</td>
              <td></td>
              <td></td>
              <td style={centerCell}>10分以降＋2,000円/分</td>
            </tr>
            <tr>
              <th style={thStyle}>SNS動画(非属人・密着・横)</th>
              <td style={centerCell}>10分3万円</td>
              <td></td>
              <td></td>
              <td style={centerCell}>10分以降＋2,500円/分</td>
            </tr>
            <tr>
              <th style={thStyle}>SNS動画(ショート動画)</th>
              <td style={centerCell}>5,000円/本</td>
              <td></td>
              <td></td>
              <td style={centerCell}>AfterEffects 要相談</td>
            </tr>
            <tr>
              <th style={thStyle}>PR動画</th>
              <td style={centerCell}>15万円〜</td>
              <td style={centerCell}>10万円〜 絵コンテ含む</td>
              <td style={centerCell}>10万円〜</td>
              <td style={centerCell}>動画尺と工数で変動あり</td>
            </tr>
            <tr>
              <th style={thStyle}>広告動画</th>
              <td style={centerCell}>15万円〜</td>
              <td style={centerCell}>10万円〜 絵コンテ含む</td>
              <td></td>
              <td style={centerCell}>動画尺と工数で変動あり</td>
            </tr>
            <tr>
              <th style={thStyle}>3DCG関連</th>
              <td style={centerCell}>20万円〜</td>
              <td style={centerCell}>10万円〜 絵コンテ含む</td>
              <td></td>
              <td style={centerCell}>動画尺と工数で変動あり</td>
            </tr>
            <tr>
              <th style={thStyle}>サムネイル</th>
              <td colSpan={4} style={centerCell}>5,000円/枚</td>
            </tr>
            <tr>
              <th style={thStyle}>公式ライン構築</th>
              <td colSpan={4} style={centerCell}>30万円〜</td>
            </tr>
            <tr>
              <th style={thStyle}>デザイン</th>
              <td colSpan={4} style={centerCell}>動画デザイン 30,000円　バナー制作 5,000円/枚・ロゴ制作 50,000円〜・LP制作 25万円〜</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
