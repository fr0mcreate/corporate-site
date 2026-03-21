import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contact | FROM CREATE' };

export default function ContactPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">Contact</h1>
                    <p className="fade-up is-visible">お問い合わせ</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <p className="fade-up is-visible" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        映像制作のご相談、お見積もりのご依頼など、お気軽にお問い合わせください。<br />
                        通常2営業日以内にご返信いたします。
                    </p>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
