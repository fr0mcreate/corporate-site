'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="form-success">
                <h3>送信完了</h3>
                <p>お問い合わせありがとうございます。<br />通常2営業日以内にご返信いたします。</p>
            </div>
        );
    }

    return (
        <form className="contact-form fade-up is-visible" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">お名前<span className="required">*</span></label>
                <input type="text" id="name" name="name" required placeholder="山田 太郎" />
            </div>

            <div className="form-group">
                <label htmlFor="email">メールアドレス<span className="required">*</span></label>
                <input type="email" id="email" name="email" required placeholder="example@company.com" />
            </div>

            <div className="form-group">
                <label htmlFor="company">会社名</label>
                <input type="text" id="company" name="company" placeholder="株式会社〇〇" />
            </div>

            <div className="form-group">
                <label htmlFor="type">ご相談種別<span className="required">*</span></label>
                <select id="type" name="type" required>
                    <option value="">選択してください</option>
                    <option value="corporate">企業映像（Corporate Video）</option>
                    <option value="recruit">採用映像（Recruit Video）</option>
                    <option value="shorts">SNS動画（Shorts）</option>
                    <option value="event">イベント撮影（Event）</option>
                    <option value="mv">ミュージックビデオ（MV）</option>
                    <option value="other">その他</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="deadline">ご希望納期</label>
                <input type="text" id="deadline" name="deadline" placeholder="2024年6月末、なるべく早く、など" />
            </div>

            <div className="form-group">
                <label htmlFor="budget">ご予算感</label>
                <select id="budget" name="budget">
                    <option value="">選択してください</option>
                    <option value="under50">50万円未満</option>
                    <option value="50-100">50〜100万円</option>
                    <option value="100-200">100〜200万円</option>
                    <option value="200-500">200〜500万円</option>
                    <option value="over500">500万円以上</option>
                    <option value="undecided">未定・相談したい</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">ご相談内容<span className="required">*</span></label>
                <textarea id="message" name="message" required placeholder="ご相談内容、映像の活用シーン、課題感などをお聞かせください"></textarea>
            </div>

            <div className="form-consent">
                お問い合わせ送信により、<a href="/privacy">プライバシーポリシー</a>および<a href="/legal-tokushoho">特定商取引法に基づく表記</a>を確認したものとします。
            </div>

            <div className="form-submit">
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                    {status === 'submitting' ? '送信中...' : '送信する'}
                </button>
            </div>

            {status === 'error' && (
                <p style={{ color: 'var(--accent3)', textAlign: 'center', marginTop: '1rem' }}>
                    送信に失敗しました。もう一度お試しください。
                </p>
            )}
        </form>
    );
}
