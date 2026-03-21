import Link from 'next/link';

export default function AdminPage() {
    return (
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Admin Dashboard</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    管理機能はサーバー環境で動作します。<br />
                    このサンプルでは利用できません。
                </p>
                <Link href="/" className="btn btn-secondary">トップに戻る</Link>
            </div>
        </section>
    );
}
