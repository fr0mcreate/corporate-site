import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記(審査用)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegalTokushohoForReviewPage() {
  const thStyle: React.CSSProperties = {
    textAlign: "left",
    verticalAlign: "top",
    width: "30%",
    background: "#f5f5f5",
  };

  const linkStyle: React.CSSProperties = {
    color: "#0066cc",
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
          特定商取引法に基づく表記
        </h1>
        <table
          border={1}
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
            width: "100%",
            fontSize: "0.95rem",
          }}
        >
          <tbody>
            <tr>
              <th style={thStyle}>販売事業者名</th>
              <td>株式会社FROM CREATE</td>
            </tr>
            <tr>
              <th style={thStyle}>運営統括責任者</th>
              <td>吉村 竣</td>
            </tr>
            <tr>
              <th style={thStyle}>所在地</th>
              <td>
                〒160-0023<br />
                東京都新宿区西新宿三丁目2番9号<br />
                新宿ワシントンホテルビル本館2F
              </td>
            </tr>
            <tr>
              <th style={thStyle}>電話番号</th>
              <td>080-8535-0728</td>
            </tr>
            <tr>
              <th style={thStyle}>連絡先/ホームページ</th>
              <td>
                <a
                  href="https://univapaycast.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  https://univapaycast.com/
                </a>
              </td>
            </tr>
            <tr>
              <th style={thStyle}>連絡先/電子メール</th>
              <td>and.fr0m2026@gmail.com</td>
            </tr>
            <tr>
              <th style={thStyle}>販売価格</th>
              <td>
                各商品ページをご確認ください（
                <Link href="/flow-price-for-review" style={linkStyle}>
                  商品概要はこちら
                </Link>
                ）
              </td>
            </tr>
            <tr>
              <th style={thStyle}>商品代金以外に必要な費用</th>
              <td>消費税</td>
            </tr>
            <tr>
              <th style={thStyle}>お支払方法</th>
              <td>クレジットカード、銀行振込</td>
            </tr>
            <tr>
              <th style={thStyle}>商品引渡し時期</th>
              <td>商品お申し込み後、3営業日以内にお渡しします。</td>
            </tr>
            <tr>
              <th style={thStyle}>返品・キャンセルについて</th>
              <td>
                ご解約の場合は電話または問い合わせフォームより解約希望の旨を連絡お願いします。
              </td>
            </tr>
            <tr>
              <th style={thStyle}>中途解約について</th>
              <td>
                ご解約の場合は電話または問い合わせフォームより解約希望の旨を連絡お願いします。
              </td>
            </tr>
            <tr>
              <th style={thStyle}>不良品について</th>
              <td>不良品の対象外サービスです。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
