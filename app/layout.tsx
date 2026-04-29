import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollAnimations from '@/components/ScrollAnimations';
import MarqueeBorder from '@/components/MarqueeBorder';
import ScrollProgress from '@/components/ScrollProgress';
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
        <a href="#main" className="skip-link">メインコンテンツへスキップ</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
