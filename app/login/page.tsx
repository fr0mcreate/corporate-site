import Link from 'next/link';

export default function LoginPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Login</h1>
                    <p>管理者ログイン</p>
                </div>
            </div>
            <section className="section">
                <div className="container" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
                    <div className="card" style={{ padding: '2.5rem' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            管理機能はサーバー環境で動作します。<br />
                            このサンプルでは利用できません。
                        </p>
                        <Link href="/" className="btn btn-secondary">トップに戻る</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
