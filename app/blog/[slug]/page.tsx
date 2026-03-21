import { staticBlogPosts } from '@/lib/static-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Required for static export with dynamic routes
export function generateStaticParams() {
    return staticBlogPosts
        .filter(p => p.published)
        .map(post => ({ slug: post.slug }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = staticBlogPosts.find(p => p.slug === slug);
    return { title: post ? `${post.title} | FROM CREATE` : 'Not Found' };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = staticBlogPosts.find(p => p.slug === slug);

    if (!post || !post.published) notFound();

    // Simple markdown to HTML
    const htmlContent = post.content
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 style="color: var(--accent2); margin-top: 2rem;">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^- (.*$)/gm, '<li>$1</li>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br />');

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">{post.title}</h1>
                    <p className="fade-up is-visible">{new Date(post.createdAt).toLocaleDateString('ja-JP')}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <article
                        className="about-mission fade-up is-visible"
                        style={{ maxWidth: '800px', margin: '0 auto' }}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/blog" className="btn btn-secondary">← ブログ一覧に戻る</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
