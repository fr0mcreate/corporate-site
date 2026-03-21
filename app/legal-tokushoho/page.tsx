import type { Metadata } from 'next';

export const metadata: Metadata = { title: '特定商取引法に基づく表記 | FROM CREATE' };

export default function LegalPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">特定商取引法に基づく表記</h1>
                    <p className="fade-up is-visible">Legal</p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="company-info fade-up is-visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <dl>
                            <dt>販売事業者</dt><dd>株式会社FR0M CREATE</dd>
                            <dt>代表者</dt><dd>吉村竣</dd>
                            <dt>所在地</dt><dd>東京都（詳細はお問い合わせください）</dd>
                            <dt>連絡先</dt><dd>お問い合わせフォームよりご連絡ください</dd>
                            <dt>販売価格</dt><dd>各サービスページに記載（税別）</dd>
                            <dt>支払方法</dt><dd>銀行振込</dd>
                            <dt>支払時期</dt><dd>契約時にお支払い条件を確定します</dd>
                            <dt>引渡時期</dt><dd>案件により異なります（通常4〜8週間）</dd>
                            <dt>返品・キャンセル</dt><dd>制作開始後のキャンセルについては契約書記載の条件に従います</dd>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}
