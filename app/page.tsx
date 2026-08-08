import Image from "next/image";

const highlights = [
  { number: "01", title: "바다의 하루", copy: "푸른 청정 바다의 신비한 자연을 즐기는 하루", image: "/underwater.jpg", alt: "열대어와 산호가 가득한 카가얀데오로의 푸른 바다" },
  { number: "02", title: "힐링의 하루", copy: "도시 속 힐링 골프장, 자연과 여유를 즐기는 하루", image: "/golf-course.jpg", alt: "산과 숲으로 둘러싸인 카가얀데오로 골프장" },
  { number: "03", title: "모험의 하루", copy: "시원한 워터래프팅부터 짜릿한 집라인까지 가슴 뛰는 새로운 경험을 만나는 하루", image: "/water-rafting.jpg", secondaryImage: "/zipline.webp", alt: "카가얀데오로 강의 워터래프팅", secondaryAlt: "다힐라얀의 짜릿한 집라인" },
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
        <figure className="route-map-figure">
          <Image
            src="/flight-route-map.png"
            alt="인천에서 마닐라 또는 세부를 경유해 카가얀데오로로 이동하는 항공 노선도"
            width={1536}
            height={1024}
            sizes="(max-width: 800px) 100vw, 42vw"
          />
          <figcaption><span>ROUTE GUIDE</span> 마닐라 또는 세부를 경유하는 두 가지 여정</figcaption>
        </figure>
        <div className="intro-content">
          <h2>카가얀데오르를<br /><em>소개합니다</em></h2>
          <div className="intro-text">
            <p>카가얀데오르(Cagayan De Oro)는 필리핀 북부 민다나오(Northern Mindanao)의 경제와 관광을 연결하는 관문 도시입니다. ‘우정의 도시(City of Golden Friendship)’라는 이름처럼 따뜻하고 친절하며, 여러 액티비티를 즐길 수 있는 역동적인 도시입니다.</p>
            <p>인구 약 73만 명, 2024년 도시 GDP 약 7조 원, 경제성장률 6.8%를 기록한 성장 잠재 도시입니다. 자연 그대로의 도시에서 누리는 힐링과 골프, 스쿠버다이빙, 워터래프팅, 집라인 등 다양한 레저가 가능한 낯선 도시로 여러분을 초대합니다.</p>
          </div>
        </div>
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <article className="highlight" key={item.number}>
            <span>{item.number}</span>
            <div className={`highlight-media ${item.secondaryImage ? "dual" : ""}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
              {item.secondaryImage && <Image src={item.secondaryImage} alt={item.secondaryAlt ?? ""} fill sizes="(max-width: 800px) 50vw, 16vw" />}
            </div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="destinations" id="schedule">
        <header className="destinations-header">
          <p className="section-kicker">02 / DESTINATION PORTFOLIO</p>
          <h2>한 도시,<br /><em>여행의 모든 가능성</em></h2>
          <p>산과 강, 바다와 고원이 가까이 연결된 카가얀데오로. 다양한 여행상품으로 확장할 수 있는 새로운 목적지를 소개합니다.</p>
        </header>

        <div className="category-heading">
          <span>01</span>
          <div><p>SEA &amp; ADVENTURE</p><h3>바다와 모험</h3></div>
          <p>청정 바다의 생명력부터 맹그로브 숲의 고요한 선셋까지, 하루 안에 만나는 서로 다른 바다의 표정.</p>
        </div>

        <article className="destination-feature">
          <div className="destination-copy">
            <span>01 — OCEAN ACTIVITY</span>
            <h3>로하스 아쿠아<br />해양스포츠</h3>
            <p>헬멧다이빙과 스쿠버다이빙으로 산호초와 열대어, 바다거북이 살아가는 신비로운 수중 세계를 가까이에서 만납니다.</p>
            <div className="product-tags"><span>스쿠버다이빙</span><span>헬멧다이빙</span><span>해양 체험</span></div>
          </div>
          <div className="photo-mosaic ocean-mosaic">
            <div className="photo-main"><Image src="/helmet-diving.jpg" alt="로하스 아쿠아의 헬멧다이빙 체험" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
            <div><Image src="/sea-turtle.jpg" alt="청정 바다에서 만나는 바다거북" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
            <div><Image src="/scuba-diving.jpg" alt="열대어와 함께하는 스쿠버다이빙" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
          </div>
        </article>

        <article className="destination-feature reverse">
          <div className="destination-copy">
            <span>02 — NATURE &amp; SUNSET</span>
            <h3>맹그로브 숲과<br />선셋</h3>
            <p>바다 위 대나무 보드워크를 따라 맹그로브 숲을 거닐고, 수평선을 물들이는 잔잔한 노을과 함께 하루를 마무리합니다.</p>
            <div className="product-tags"><span>맹그로브 산책</span><span>선셋 감상</span><span>포토 스폿</span></div>
          </div>
          <div className="photo-mosaic sunset-mosaic">
            <div className="photo-main"><Image src="/rohas-sea.jpeg" alt="로하스 아쿠아의 바다 위 보드워크" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
            <div><Image src="/mangrove-forest.jpg" alt="맹그로브 숲 사이의 대나무 길" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
            <div><Image src="/rohas-sunset.jpg" alt="잔잔한 바다 위로 지는 선셋" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
          </div>
        </article>
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
