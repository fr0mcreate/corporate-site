import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollAnimations from '@/components/ScrollAnimations';
import MarqueeBorder from '@/components/MarqueeBorder';
import ScrollProgress from '@/components/ScrollProgress';
import HeroVideo from '@/components/HeroVideo';
import './globals.css';

export const metadata: Metadata = {
  title: 'FR0M CREATE | 理想を、現実に。',
  description: '株式会社FR0M CREATE（フロムクリエイト）は、映像制作・SNS運用・クリエイターコミュニティ運営・After Effectsスクール運営を手がけるクリエイティブチームです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LoadingScreen />
        <SmoothScroll />
        <ScrollAnimations />
        <ScrollProgress />
        <MarqueeBorder />
        {/* オープニング映像（全ページ共通） */}
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
        <a href="#main" className="skip-link">メインコンテンツへスキップ</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
