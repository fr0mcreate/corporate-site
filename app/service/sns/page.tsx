import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'SNS運用代行 | FROM CREATE' };

export default function SNSServicePage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">SNS運用代行</h1>
                    <p className="fade-up is-visible">SNS Management</p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="about-mission fade-up is-visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>Instagram・TikTok・YouTube・Xなど、各プラットフォームに最適化したSNS運用を企画から分析まで一貫対応します。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>サービス内容</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>▸ SNS戦略策定・コンテンツ企画</li>
                            <li>▸ 台本制作・素材準備</li>
                            <li>▸ 撮影・動画編集</li>
                            <li>▸ 投稿代行・スケジュール管理</li>
                            <li>▸ コメント対応・DM管理</li>
                            <li>▸ 月次レポート・分析改善提案</li>
                        </ul>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>実績</h3>
                        <p>国内外の個人・企業アカウントの運用実績多数。フォロワー数万〜数十万規模のアカウント運用経験があります。</p>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>SNS運用のご相談はこちら</h2>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
