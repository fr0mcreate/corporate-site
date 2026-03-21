'use client';

export default function MarqueeBorder() {
  const items = '★ FROM CREATE ◆ 映像制作 ◆ SNS運用 ◆ コミュニティ ◆ AEスクール ★ FROM CREATE ◆ 映像制作 ◆ SNS運用 ◆ コミュニティ ◆ AEスクール ';

  return (
    <>
      {/* Top border */}
      <div className="marquee-border marquee-top" aria-hidden="true">
        <div className="marquee-track">
          <span className="marquee-content">{items}</span>
          <span className="marquee-content">{items}</span>
        </div>
      </div>
      {/* Bottom border */}
      <div className="marquee-border marquee-bottom" aria-hidden="true">
        <div className="marquee-track marquee-reverse">
          <span className="marquee-content">{items}</span>
          <span className="marquee-content">{items}</span>
        </div>
      </div>
    </>
  );
}
