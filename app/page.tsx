const highlights = [
  { number: "01", title: "콘텐츠가 되는 순간", copy: "래프팅부터 선셋까지, 촬영 포인트와 스토리라인을 함께 설계합니다." },
  { number: "02", title: "현지에서 더 안전하게", copy: "검증된 로컬 파트너와 전 일정 전담 코디네이터가 동행합니다." },
  { number: "03", title: "여행 이후까지", copy: "브랜드 협업과 후속 콘텐츠 활용까지 고려한 팸투어입니다." },
];

const itinerary = [
  { day: "DAY 1", title: "도시의 첫인상", copy: "도착 · 로컬 다이닝 · 웰컴 네트워킹" },
  { day: "DAY 2", title: "강을 가르는 에너지", copy: "카가얀 리버 래프팅 · 리버사이드 런치" },
  { day: "DAY 3", title: "고원 위의 골든아워", copy: "다힐라얀 어드벤처 · 선셋 디너" },
  { day: "DAY 4", title: "기억을 콘텐츠로", copy: "시티 스토리워크 · 브런치 · 출국" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="주요 메뉴">
        <a className="logo" href="#top" aria-label="CDO 팸투어 홈">
          <span className="logo-mark">C</span>
          <span>CDO<br /><small>FAM TOUR 2026</small></span>
        </a>
        <div className="nav-links">
          <a href="#experience">경험</a>
          <a href="#schedule">일정</a>
          <a href="#contact">문의</a>
        </div>
        <a className="nav-cta" href="#contact">초청 문의 <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="sun" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> NORTHERN MINDANAO · PHILIPPINES</p>
          <h1>낯선 도시의<br />가장 <em>빛나는</em> 순간.</h1>
          <p className="hero-description">모험과 미식, 사람과 이야기가 만나는<br />카가얀데오로 브랜드 팸투어.</p>
          <div className="hero-actions">
            <a className="button primary" href="#schedule">여정 살펴보기 <span>→</span></a>
            <a className="text-link" href="#experience">WHY CDO? <span>↓</span></a>
          </div>
        </div>
        <div className="route-card">
          <span className="route-label">THE ROUTE</span>
          <strong>SEOUL</strong>
          <span className="route-line"><i /><i /><i /></span>
          <strong>CAGAYAN<br />DE ORO</strong>
          <small>8°29′N 124°39′E</small>
        </div>
        <p className="vertical-note">CREATE STORIES · MEET THE REAL MINDANAO</p>
      </section>

      <section className="manifesto" id="experience">
        <div className="section-kicker">01 / THE EXPERIENCE</div>
        <div>
          <h2>여행을 넘어,<br /><em>브랜드의 장면</em>을 만듭니다.</h2>
          <p className="lead">CDO는 필리핀의 새로운 얼굴입니다. 거친 강의 에너지, 고원의 바람, 그리고 따뜻한 환대. 우리는 이 모든 순간을 오래 남을 이야기로 연결합니다.</p>
        </div>
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <article className="highlight" key={item.number}>
            <span>{item.number}</span>
            <div className="icon-shape" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="schedule" id="schedule">
        <div className="schedule-intro">
          <p className="section-kicker">02 / THE JOURNEY</p>
          <h2>4 DAYS.<br /><em>ONE STORY.</em></h2>
          <p>도시의 첫인상부터 마지막 브런치까지, 매일 새로운 감각을 깨우는 여정입니다.</p>
        </div>
        <div className="timeline">
          {itinerary.map((item, index) => (
            <article key={item.day}>
              <span>{item.day}</span>
              <div className="day-number">0{index + 1}</div>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="quote">
        <p>“가장 좋은 이야기는<br />직접 <em>경험한 순간</em>에서 시작됩니다.”</p>
        <span>— CDO TOURISM COLLECTIVE</span>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow"><span /> YOUR STORY STARTS HERE</p>
          <h2>다음 장면의<br />주인공이 되어주세요.</h2>
        </div>
        <div className="contact-card">
          <p>PRESS · CREATOR · BRAND PARTNERSHIP</p>
          <a href="mailto:hello@cdofamtour.com">hello@cdofamtour.com <span>↗</span></a>
          <small>초청 및 파트너십 문의는 메일로 연락해 주세요.</small>
        </div>
        <div className="footer-bottom"><span>© 2026 CDO FAM TOUR</span><span>CAGAYAN DE ORO · PHILIPPINES</span></div>
      </footer>
    </main>
  );
}
