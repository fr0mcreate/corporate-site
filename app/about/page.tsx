import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About | FROM CREATE' };

export default function AboutPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">About</h1>
                    <p className="fade-up is-visible">私たちについて</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <header className="section-header fade-up is-visible">
                        <h2>Mission</h2>
                        <p>理想を、現実に。</p>
                    </header>
                    <p className="about-mission fade-up is-visible">
                        FR0M CREATEは、<br />
                        「やりたい」「こうなりたい」という理想を<br />
                        映像と仕組みの力で、現実に変えていくクリエイティブチームです。<br /><br />
                        アイデアや想いがあっても、<br />
                        それを形にし、伝え、広げる手段がなければ<br />
                        理想は理想のままで終わってしまいます。<br /><br />
                        私たちは<br />
                        映像・SNS・コミュニティを通して<br />
                        人と企業の可能性を最大化することを使命としています。
                    </p>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-elevated)' }}>
                <div className="container">
                    <header className="section-header fade-up is-visible">
                        <h2>Strength</h2>
                        <p>私たちの特徴・強み</p>
                    </header>
                    <div className="strength-list">
                        <div className="strength-item fade-up is-visible">
                            <h3>実務に強い映像制作チーム</h3>
                            <p>YouTube、Instagram、TikTok、広告動画、企業PR、MV、アニメーションなど実際に成果を出す映像制作を得意としています。</p>
                        </div>
                        <div className="strength-item fade-up is-visible">
                            <h3>大規模フリーランスネットワーク</h3>
                            <p>100名以上の動画編集者、カメラマン・アニメーターと連携。案件規模やジャンルに応じて最適なチームを柔軟に編成できる体制があります。</p>
                        </div>
                        <div className="strength-item fade-up is-visible">
                            <h3>クリエイターコミュニティ運営</h3>
                            <p>案件獲得・スキルアップ・横のつながりを目的としたコミュニティを運営。教育・仕事・交流を一体化させ、長期的に価値が循環する仕組みを作っています。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="company-info fade-up is-visible">
                        <h2>Company</h2>
                        <dl>
                            <dt>会社名</dt>
                            <dd>株式会社FR0M CREATE（フロムクリエイト）</dd>
                            <dt>拠点</dt>
                            <dd>東京都</dd>
                            <dt>事業内容</dt>
                            <dd>映像制作・SNS運用・クリエイターコミュニティ運営・After Effectsスクール運営</dd>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>FR0M CREATEに興味を持っていただけましたか？</h2>
                    <p>制作のご相談、お見積もりのご依頼など、<br />お気軽にお問い合わせください。</p>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
