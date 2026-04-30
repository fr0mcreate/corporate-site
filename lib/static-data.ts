// Static data for export mode - pre-built from database seed
// This file is used when building for static export (Netlify)

export interface WorkData {
    id: number;
    category: string;
    title: string;
    thumbnail: string | null;
    videoUrl: string | null;
    snsPlatform?: 'instagram' | 'tiktok';
    snsAccount?: string;
}

export const staticWorks: WorkData[] = [
        { id: 2, category: 'corporate-pr', title: '大電株式会社 PV', thumbnail: '/images/works/corporate-pr-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=gdySLDmhW1Q' },
    { id: 3, category: 'corporate-pr', title: '旭食品 第70回高知よさこい祭り', thumbnail: '/images/works/corporate-pr-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=49Uj2h4f4Bs' },
    { id: 4, category: 'mv', title: "BWC 'Red Flag' MV", thumbnail: '/images/works/mv-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=WkDJA7cfbEc' },
    { id: 5, category: 'mv', title: 'dope pain - ssd0812', thumbnail: '/images/works/mv-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=si2G0v-2zwI' },
    { id: 6, category: 'mv', title: '真っ白(feat.真舟とわ) - Naoya Kotari', thumbnail: '/images/works/mv-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=81DxyW3t3-Y' },
    { id: 7, category: 'live', title: "Anly 'Sweet Cruisin'' Tour 2021 BAND", thumbnail: '/images/works/live-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=ZZIGGOJMfn4' },
    { id: 8, category: 'live', title: 'SPRISE ワンマンライブ 神韻唱歌 ＠なんばハッチ', thumbnail: '/images/works/live-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=HjLb5I4ZoJA' },
    { id: 9, category: 'live', title: '花＊花『あ〜よかった』Billboard Live Osaka', thumbnail: '/images/works/live-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=wG-agBxRsI4' },
    { id: 10, category: 'ad', title: 'アルプスジム 15sec CM', thumbnail: '/images/works/ad-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=fqjTt-Q2eR4' },
    { id: 12, category: 'ad', title: '10fields', thumbnail: '/images/works/ad-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=lISRRcCMdBI' },
    { id: 13, category: 'ad', title: 'スマートゼミ サービス紹介動画', thumbnail: '/images/works/ad-4.jpg', videoUrl: 'https://www.youtube.com/watch?v=yQ-QURz2RKc' },
    { id: 14, category: 'ad', title: 'ニイガタ エヌキュア 展示会用サービス紹介動画', thumbnail: '/images/works/ad-5.jpg', videoUrl: 'https://www.youtube.com/watch?v=eqNYS4FdwpE' },
    { id: 15, category: 'ad', title: 'サブスクコーヒー CM', thumbnail: '/images/works/ad-6.jpg', videoUrl: 'https://www.youtube.com/watch?v=_yEifjyd8fc' },
    { id: 16, category: 'animation', title: 'パズドラ公式アニメ「パズミ＆ドラゴンズ」第1話', thumbnail: '/images/works/animation-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=rMKOippMEj8' },
        { id: 18, category: 'animation', title: 'デコリョーシカ 第1話「ユメリョーシカ」', thumbnail: '/images/works/animation-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=fXomxSg9NT0' },
    { id: 19, category: '3dcg', title: '3DCG reel', thumbnail: '/images/works/3dcg-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=88DNoxrTE7U' },
    { id: 20, category: '3dcg', title: '3DCG制作動画 Mini keyboard', thumbnail: '/images/works/3dcg-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=oxEV8J8noT4' },
    { id: 21, category: '3dcg', title: 'さむがりペンギンペタコちゃん 3DCG予告', thumbnail: '/images/works/3dcg-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=oFqVHVNWznE' },
    { id: 22, category: 'youtube', title: "Z世代が中野優作さんの『成長以外、全て死』に反論", thumbnail: '/images/works/youtube-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=0hsZ2SQ0wWQ' },
    { id: 23, category: 'youtube', title: '【2026年X攻略】フォロワーの増やし方完全ロードマップ', thumbnail: '/images/works/youtube-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=u7g-C56-gAc' },
    { id: 24, category: 'youtube', title: 'スポーツ選手インタビュー動画', thumbnail: '/images/works/youtube-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=26lSsLbGPAM' },
    { id: 25, category: 'youtube-mgmt', title: '【バレンタイン】バズってるチョコ料理人狼', thumbnail: '/images/works/youtube-mgmt-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=NFJxo6469jE' },
    { id: 26, category: 'youtube-mgmt', title: '鼠径ヘルニア日帰り手術のダウンタイムを解説', thumbnail: '/images/works/youtube-mgmt-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=lhX0cD_pEHs' },
    { id: 27, category: 'youtube-mgmt', title: '月収200万円のプロが初心者せどらーをガチ指導', thumbnail: '/images/works/youtube-mgmt-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=W7MNQL4Zz_U' },
    { id: 28, category: 'sns-domestic', title: 'Masa | 東京カフェ・グルメ（40.7万フォロワー）', thumbnail: '/works/sns-masa-cafe.png', videoUrl: 'https://www.instagram.com/ma_sa_cafe/', snsPlatform: 'instagram', snsAccount: '@ma_sa_cafe' },
    { id: 32, category: 'sns-domestic', title: 'ajo.next0（TikTok）', thumbnail: '/works/sns-ajo-next0.png', videoUrl: 'https://www.tiktok.com/@ajo.next0', snsPlatform: 'tiktok', snsAccount: '@ajo.next0' },
    { id: 33, category: 'sns-domestic', title: 'japan.sushi.school（TikTok）', thumbnail: '/works/sns-japan-sushi-school.png', videoUrl: 'https://www.tiktok.com/@japan.sushi.school', snsPlatform: 'tiktok', snsAccount: '@japan.sushi.school' },
    { id: 29, category: 'sns-global', title: 'Harry Dhaliwal（41.3万フォロワー）', thumbnail: '/works/sns-harry-dhaliwal.png', videoUrl: 'https://www.instagram.com/theharrydhaliwal/', snsPlatform: 'instagram', snsAccount: '@h2hautogroup' },
    { id: 30, category: 'sns-global', title: 'H2H AUTO GROUP（1.2万フォロワー）', thumbnail: '/works/sns-h2h-auto.png', videoUrl: 'https://www.instagram.com/h2hautogroup/', snsPlatform: 'instagram', snsAccount: '@h2hautogroup' },
    { id: 31, category: 'sns-global', title: 'パゥです🇵🇭（6.4万フォロワー）', thumbnail: '/works/sns-pau-philippines.png', videoUrl: 'https://www.instagram.com/pau_philippines', snsPlatform: 'instagram', snsAccount: '@paudesuyon' },
];

