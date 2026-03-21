import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'AEスクール | FROM CREATE' };

export default function SchoolServicePage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">AEスクール</h1>
                    <p className="fade-up is-visible">After Effects School</p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="about-mission fade-up is-visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>After Effectsのスキルを体系的に学べるスクールを運営しています。実務で即使える実践的なカリキュラムが特徴です。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>カリキュラム</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>▸ AE基礎（インターフェース・キーフレーム）</li>
                            <li>▸ モーショングラフィックス制作</li>
                            <li>▸ テキストアニメーション</li>
                            <li>▸ エクスプレション入門</li>
                            <li>▸ 実案件を想定した課題制作</li>
                            <li>▸ ポートフォリオ作成サポート</li>
                        </ul>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>受講後のサポート</h3>
                        <p>卒業後はコミュニティに参加でき、案件紹介やスキルアップの機会を継続的に提供します。</p>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>スクールの詳細・お申し込み</h2>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
