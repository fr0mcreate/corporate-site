import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Service | FROM CREATE',
    description: '株式会社FR0M CREATEのサービス紹介。映像制作、SNS運用代行、After Effectsスクール、クリエイターコミュニティ。',
};

export default function ServicePage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">Service</h1>
                    <p className="fade-up is-visible">映像・SNS・コミュニティを通じた4つのサービス</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="service-categories">
                        <Link href="/service/video" className="category-card fade-up is-visible">
                            <div className="category-icon">🎬</div>
                            <h2>映像制作</h2>
                            <p>PR動画、アニメーション(2D,3DCG)、YouTube動画、SNS縦型動画、MV、広告動画など。企画〜編集までワンストップ対応。</p>
                            <span className="category-link">詳しく見る →</span>
                        </Link>
                        <Link href="/service/sns" className="category-card fade-up is-visible">
                            <div className="category-icon">📱</div>
                            <h2>SNS運用代行</h2>
                            <p>企画・台本制作・撮影・編集・投稿代行・分析まで一貫して対応可能。成果につながる運用を実現します。</p>
                            <span className="category-link">詳しく見る →</span>
                        </Link>
                        <Link href="/service/school" className="category-card fade-up is-visible">
                            <div className="category-icon">🎓</div>
                            <h2>AEスクール</h2>
                            <p>After Effectsを習得できるスクールを運営。実践的なカリキュラムで即戦力スキルを身につけられます。</p>
                            <span className="category-link">詳しく見る →</span>
                        </Link>
                        <Link href="/service/community" className="category-card fade-up is-visible">
                            <div className="category-icon">👥</div>
                            <h2>コミュニティ運営</h2>
                            <p>案件獲得・スキルアップ・横のつながりを目的とした動画編集者向けコミュニティ。教育・仕事・交流を一体化。</p>
                            <span className="category-link">詳しく見る →</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>どのサービスが最適かお悩みですか？</h2>
                    <p>課題や目的をお聞かせいただければ、最適なプランをご提案します。<br />まずはお気軽にご相談ください。</p>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
