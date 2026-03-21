import Link from 'next/link';
import { staticBlogPosts } from '@/lib/static-data';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blog | FROM CREATE' };

export default function BlogPage() {
    const posts = staticBlogPosts.filter(p => p.published);

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">Blog</h1>
                    <p className="fade-up is-visible">お知らせ・ブログ</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {posts.length === 0 ? (
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>記事はまだありません。</p>
                    ) : (
                        <div className="cards-grid">
                            {posts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="card fade-up is-visible" style={{ textDecoration: 'none' }}>
                                    <h3>{post.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: 'var(--small)' }}>{post.excerpt}</p>
                                    <p style={{ fontSize: 'var(--small)', color: 'var(--text-dim)', marginTop: '0.75rem' }}>
                                        {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
