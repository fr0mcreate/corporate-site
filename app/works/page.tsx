'use client';

import { useState, useMemo } from 'react';
import { staticWorks } from '@/lib/static-data';
import WorkCard from '@/components/WorkCard';

const categories = [
    { value: 'all', label: 'すべて' },
    { value: 'corporate-pr', label: '企業PR動画' },
    { value: 'mv', label: 'MV' },
    { value: 'live', label: 'LIVE映像' },
    { value: 'ad', label: '広告動画' },
    { value: 'animation', label: 'アニメーション動画' },
    { value: '3dcg', label: '3DCG動画' },
    { value: 'youtube', label: 'YouTube動画' },
    { value: 'youtube-mgmt', label: 'YouTube運用' },
    { value: 'sns-domestic', label: 'SNS運用（国内）' },
    { value: 'sns-global', label: 'SNS運用（海外）' },
];

export default function WorksPage() {
    const [filter, setFilter] = useState('all');

    const works = useMemo(() => {
        if (filter === 'all') return staticWorks;
        return staticWorks.filter(w => w.category === filter);
    }, [filter]);

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="fade-up is-visible">Works</h1>
                    <p className="fade-up is-visible">これまで手がけた映像制作の事例をご紹介します</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="filters fade-up is-visible">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                className={`chip ${filter === cat.value ? 'active' : ''}`}
                                onClick={() => setFilter(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="works-grid">
                        {works.map((work) => (
                            <WorkCard key={work.id} {...work} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container fade-up is-visible">
                    <h2>同じような映像を作りたいですか？</h2>
                    <p>事例を参考にしながら、貴社に最適な企画をご提案します。<br />まずはお気軽にご相談ください。</p>
                    <a href="/contact" className="btn btn-primary">制作相談をする</a>
                </div>
            </section>
        </>
    );
}
