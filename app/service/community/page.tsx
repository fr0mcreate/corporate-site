import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'コミュニティ運営 | FROM CREATE' };

export default function CommunityServicePage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">コミュニティ運営</h1>
                    <p className="fade-up is-visible">Creator Community</p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="about-mission fade-up is-visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>動画編集者・クリエイター向けのコミュニティを運営し、案件獲得・スキルアップ・横のつながりを提供しています。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>コミュニティの特徴</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>▸ 案件紹介・マッチング</li>
                            <li>▸ スキルアップ勉強会</li>
                            <li>▸ 制作リソースの共有</li>
                            <li>▸ メンバー同士の交流イベント</li>
                            <li>▸ ポートフォリオレビュー</li>
                            <li>▸ 業界情報の発信</li>
                        </ul>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>参加メンバー</h3>
                        <p>現在100名以上のクリエイターが参加。初心者からプロまで幅広い層が在籍し、互いに切磋琢磨しています。</p>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>コミュニティへの参加はこちら</h2>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
