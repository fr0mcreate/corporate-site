import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'FAQ | FROM CREATE' };

const faqs = [
    { q: '映像制作の依頼からどのくらいで納品されますか？', a: '案件の規模にもよりますが、通常4〜8週間程度です。SNS動画などの小規模案件は2〜3週間で対応可能な場合もあります。' },
    { q: '予算が少ないのですが対応できますか？', a: 'ご予算に応じた最適なプランをご提案します。まずはお気軽にご相談ください。' },
    { q: '地方からの依頼も対応可能ですか？', a: 'はい、オンラインでのヒアリング・進行管理が可能です。撮影が必要な場合は全国対応いたします（交通費別途）。' },
    { q: '映像の修正は何回までできますか？', a: '標準プランでは2回の修正が含まれています。追加修正が必要な場合は別途お見積もりいたします。' },
    { q: 'SNS運用代行はどのプラットフォームに対応していますか？', a: 'Instagram、TikTok、YouTube、X（旧Twitter）に対応しています。複数プラットフォームの同時運用も可能です。' },
    { q: 'AEスクールは初心者でも参加できますか？', a: 'はい、初心者向けのカリキュラムを用意しています。After Effectsの基礎から実践レベルまで段階的に学べます。' },
];

export default function FAQPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">FAQ</h1>
                    <p className="fade-up is-visible">よくあるご質問</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item fade-up is-visible">
                                <h3>{faq.q}</h3>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>他にもご質問がありますか？</h2>
                    <p>お気軽にお問い合わせください。</p>
                    <Link href="/contact" className="btn btn-primary">お問い合わせ</Link>
                </div>
            </section>
        </>
    );
}
