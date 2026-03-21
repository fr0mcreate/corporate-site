import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy | FROM CREATE' };

export default function PrivacyPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">Privacy Policy</h1>
                    <p className="fade-up is-visible">プライバシーポリシー</p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="about-mission fade-up is-visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h3 style={{ color: 'var(--accent2)' }}>個人情報の取り扱いについて</h3>
                        <p>株式会社FR0M CREATE（以下「当社」）は、お客様からお預かりした個人情報の保護に努めます。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>1. 個人情報の利用目的</h3>
                        <p>お問い合わせ対応、サービス提供、料金請求、その他業務遂行に必要な範囲で利用します。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>2. 第三者提供</h3>
                        <p>法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>3. 安全管理</h3>
                        <p>個人情報の漏洩、滅失、毀損の防止のため、適切な安全管理措置を講じます。</p>
                        <br />
                        <h3 style={{ color: 'var(--accent2)' }}>4. お問い合わせ</h3>
                        <p>個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。</p>
                    </div>
                </div>
            </section>
        </>
    );
}
