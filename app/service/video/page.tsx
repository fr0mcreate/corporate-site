import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '映像制作 | FROM CREATE' };

export default function VideoServicePage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">映像制作</h1>
                    <p className="fade-up is-visible">Video Production</p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="about-mission fade-up is-visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>FR0M CREATEは、PR動画・アニメーション(2D/3DCG)・YouTube動画・SNS縦型動画・MV・広告動画など、幅広いジャンルの映像を制作しています。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>対応ジャンル</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>▸ 企業PR映像・会社紹介動画</li>
                            <li>▸ 採用（リクルート）映像</li>
                            <li>▸ MV（ミュージックビデオ）</li>
                            <li>▸ YouTube動画（企画〜編集）</li>
                            <li>▸ SNS縦型動画（TikTok/Instagram Reels/Shorts）</li>
                            <li>▸ 広告動画（Web広告/CM）</li>
                            <li>▸ アニメーション（2D/モーショングラフィックス）</li>
                            <li>▸ 3DCG映像</li>
                            <li>▸ LIVE映像・イベント撮影</li>
                        </ul>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>制作の特徴</h3>
                        <p>目的・ターゲット・活用シーンを踏まえた提案型の制作を行います。100名以上のフリーランスネットワークを活用し、最適なチーム編成で対応します。</p>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>映像制作のご相談はこちら</h2>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
