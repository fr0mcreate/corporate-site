import Link from 'next/link';
import { staticWorks, staticBlogPosts } from '@/lib/static-data';
import WorkCard from '@/components/WorkCard';
import HeroCanvas from '@/components/HeroCanvas';
import HeroVideo from '@/components/HeroVideo';
import BreakoutGame from '@/components/BreakoutGame';
import PixelPenguins from '@/components/PixelPenguins';
import SectionVideo from '@/components/SectionVideo';

export default function HomePage() {
  const works = staticWorks.slice(0, 6);
  const latestPosts = staticBlogPosts.filter(p => p.published);

  return (
    <>
      {/* ===== OPENING ===== */}
      <section className="opening">
        <HeroVideo />
        <div className="opening-scanlines" aria-hidden="true" />
        <div className="opening-content">
          <div className="opening-logo">
            <span className="opening-bracket">[</span>
            FR0M CREATE
            <span className="opening-bracket">]</span>
          </div>
          <p className="opening-tagline">理想を、現実に。</p>
        </div>
        <div className="opening-scroll-hint" aria-hidden="true">
          <span>SCROLL</span>
          <div className="opening-scroll-line" />
        </div>
      </section>
      <div className="opening-spacer" />

      {/* ===== HERO ===== */}
      <section className="hero">
        <HeroCanvas />
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-scanlines" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>SYSTEM ONLINE — EST. 2020</span>
          </div>
          <h1 className="hero-title" data-text="理想を、現実に。">
            理想を、現実に。
          </h1>
          <p className="hero-kicker">
            <span className="kicker-arrow">▶</span>
            映像 × SNS × コミュニティで可能性を最大化
          </p>
          <p className="hero-sub">
            「やりたい」「こうなりたい」という理想を<br />
            映像と仕組みの力で、現実に変えていく。
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary btn-glow">
              <span className="btn-icon">◆</span>お問い合わせ
            </Link>
            <Link href="/works" className="btn btn-secondary btn-glow">
              <span className="btn-icon">◆</span>実績を見る
            </Link>
            <Link href="/service" className="btn btn-ghost">サービス詳細 →</Link>
          </div>
          <div className="hero-stats" aria-hidden="true">
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">制作実績</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">100+</span>
              <span className="stat-label">クリエイター</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">50+</span>
              <span className="stat-label">企業クライアント</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section className="section section-service section-sticky" style={{ position: 'relative' }}>
        <PixelPenguins />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <header className="section-header">
            <p className="section-kicker">STAGE 2 / SERVICE</p>
            <h2 className="glitch-text" data-text="Service">Service</h2>
            <p>映像・SNS・コミュニティを通して、人と企業の可能性を最大化します</p>
          </header>
          <div className="cards-grid">
            <article className="card service-card" data-index="01">
              <div className="card-corner card-corner-tl" /><div className="card-corner card-corner-tr" /><div className="card-corner card-corner-bl" /><div className="card-corner card-corner-br" />
              <div className="service-icon-wrap"><span className="service-icon">🎬</span></div>
              <h3>映像制作</h3>
              <p>PR動画・アニメーション・YouTube・SNS縦型動画・MV・広告動画など、目的・ターゲット・活用シーンを踏まえた提案型の映像制作。</p>
              <Link href="/service/video" className="card-link">詳しく見る →</Link>
            </article>
            <article className="card service-card" data-index="02">
              <div className="card-corner card-corner-tl" /><div className="card-corner card-corner-tr" /><div className="card-corner card-corner-bl" /><div className="card-corner card-corner-br" />
              <div className="service-icon-wrap"><span className="service-icon">📱</span></div>
              <h3>SNS運用代行</h3>
              <p>企画・台本制作・撮影・編集・投稿代行・分析まで一貫して対応。成果につながるSNS運用を実現します。</p>
              <Link href="/service/sns" className="card-link">詳しく見る →</Link>
            </article>
            <article className="card service-card" data-index="03">
              <div className="card-corner card-corner-tl" /><div className="card-corner card-corner-tr" /><div className="card-corner card-corner-bl" /><div className="card-corner card-corner-br" />
              <div className="service-icon-wrap"><span className="service-icon">👥</span></div>
              <h3>コミュニティ &amp; スクール</h3>
              <p>動画編集者向けコミュニティ運営とAfter Effectsスクール。案件獲得・スキルアップ・横のつながりを提供します。</p>
              <Link href="/service/community" className="card-link">詳しく見る →</Link>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/service" className="btn btn-secondary">すべてのサービスを見る →</Link>
          </div>
        </div>
      </section>

      {/* ===== WORKS ===== */}
      <section id="works" className="section section-works section-sticky" style={{ position: 'relative', overflow: 'clip' }}>
        <SectionVideo src="/works-bg-video.mp4" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <header className="section-header">
            <p className="section-kicker">STAGE 3 / WORKS</p>
            <h2 className="glitch-text" data-text="Works">Works</h2>
            <p>これまで手がけた映像制作の一部をご紹介します</p>
          </header>
          <div className="works-grid">
            {works.map((work) => (
              <WorkCard key={work.id} {...work} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/works" className="btn btn-secondary">すべての実績を見る →</Link>
          </div>
        </div>
      </section>

      {/* ===== STRENGTH ===== */}
      <section className="section section-strength section-sticky">
        <div className="container">
          <header className="section-header">
            <p className="section-kicker">STAGE 4 / STRENGTH</p>
            <h2 className="glitch-text" data-text="Strength">Strength</h2>
            <p>FR0M CREATEの3つの強み</p>
          </header>
          <div className="strength-list">
            <div className="strength-item" data-num="01">
              <div className="strength-num">01</div>
              <div className="strength-body">
                <h3>実務に強い映像制作チーム</h3>
                <p>単なる「綺麗な動画」ではなく、目的・ターゲット・活用シーンを踏まえた提案型の制作。YouTube、Instagram、TikTok、広告動画、企業PR、MV、アニメーションなど実績多数。</p>
              </div>
            </div>
            <div className="strength-item" data-num="02">
              <div className="strength-num">02</div>
              <div className="strength-body">
                <h3>大規模フリーランスネットワーク</h3>
                <p>100名以上の動画編集者、カメラマン・アニメーターと連携。案件規模やジャンルに応じて最適なチームを柔軟に編成できる体制があります。</p>
              </div>
            </div>
            <div className="strength-item" data-num="03">
              <div className="strength-num">03</div>
              <div className="strength-body">
                <h3>クリエイターコミュニティ運営</h3>
                <p>案件獲得・スキルアップ・横のつながりを目的としたコミュニティを運営。教育・仕事・交流を一体化させ、長期的に価値が循環する仕組みを作っています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      {latestPosts.length > 0 && (
        <section className="section section-blog section-sticky">
          <div className="container">
            <header className="section-header">
              <p className="section-kicker">STAGE 5 / BLOG</p>
              <h2 className="glitch-text" data-text="Blog">Blog</h2>
              <p>最新のお知らせ・ブログ記事</p>
            </header>
            <div className="cards-grid">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="card blog-card" style={{ textDecoration: 'none' }}>
                  <div className="card-corner card-corner-tl" /><div className="card-corner card-corner-tr" /><div className="card-corner card-corner-bl" /><div className="card-corner card-corner-br" />
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <p style={{ fontSize: 'var(--small)', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                    {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog" className="btn btn-secondary">すべての記事を見る →</Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="cta-section section-sticky">
        <div className="cta-bg-effect" aria-hidden="true" />
        <div className="container">
          <p className="section-kicker">FINAL STAGE / CONTACT</p>
          <h2 className="glitch-text" data-text="まずはお気軽にご相談ください">まずはお気軽にご相談ください</h2>
          <p>映像で解決したい課題や、制作のイメージをお聞かせください。<br />ヒアリングを通じて最適なプランをご提案します。</p>
          <Link href="/contact" className="btn btn-primary btn-glow btn-lg">
            <span className="btn-icon">★</span>制作相談をする
          </Link>
        </div>
      </section>

      {/* ===== SECRET STAGE ===== */}
      <BreakoutGame />
    </>
  );
}
