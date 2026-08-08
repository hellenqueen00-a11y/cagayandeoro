import Image from "next/image";

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
          <p className="hero-description">산, 강, 바다 모든 곳이 어우러진<br />힐링과 모험의 숨은 여행지</p>
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
        <div className="intro-content">
          <h2>카가얀데오르를<br /><em>소개합니다</em></h2>
          <div className="intro-text">
            <p>카가얀데오르(Cagayan De Oro)는 필리핀 북부 민다나오(Northern Mindanao)의 경제와 관광을 연결하는 관문 도시입니다. ‘우정의 도시(City of Golden Friendship)’라는 이름처럼 따뜻하고 친절하며, 여러 액티비티를 즐길 수 있는 역동적인 도시입니다.</p>
            <p>인구 약 73만 명, 2024년 도시 GDP 약 7조 원, 경제성장률 6.8%를 기록한 성장 잠재 도시입니다. 자연 그대로의 도시에서 누리는 힐링과 골프, 스쿠버다이빙, 워터래프팅, 집라인 등 다양한 레저가 가능한 낯선 도시로 여러분을 초대합니다.</p>
          </div>
        </div>
        <figure className="route-map-figure">
          <Image
            src="/flight-route-map.png"
            alt="인천에서 마닐라 또는 세부를 경유해 카가얀데오로로 이동하는 항공 노선도"
            width={1536}
            height={1024}
            sizes="(max-width: 800px) 100vw, 84vw"
            priority
          />
          <figcaption><span>ROUTE GUIDE</span> 인천에서 카가얀데오로까지, 마닐라 또는 세부를 경유하는 두 가지 여정</figcaption>
        </figure>
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
