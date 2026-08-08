import Image from "next/image";

const highlights = [
  { number: "01", title: "바다의 하루", copy: "푸른 청정 바다의 신비한 자연을 즐기는 하루", image: "/underwater.jpg", alt: "열대어와 산호가 가득한 카가얀데오로의 푸른 바다" },
  { number: "02", title: "힐링의 하루", copy: "도시 속 힐링 골프장, 자연과 여유를 즐기는 하루", image: "/golf-course.jpg", alt: "산과 숲으로 둘러싸인 카가얀데오로 골프장" },
  { number: "03", title: "모험의 하루", copy: "시원한 워터래프팅부터 짜릿한 집라인까지 가슴 뛰는 새로운 경험을 만나는 하루", image: "/water-rafting.jpg", secondaryImage: "/zipline.webp", alt: "카가얀데오로 강의 워터래프팅", secondaryAlt: "다힐라얀의 짜릿한 집라인" },
];

type Destination = {
  title: string;
  image: string;
  alt: string;
  copy: string;
  tags: string[];
  gallery?: Array<{ src: string; alt: string }>;
};

const destinationGroups: Array<{
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  destinations: Destination[];
}> = [
  {
    number: "02",
    eyebrow: "RIVER & THRILL",
    title: "강과 액티비티",
    intro: "거친 강의 물살부터 시원한 고원을 가르는 짜릿한 도전까지, 카가얀데오로를 대표하는 모험의 여정입니다.",
    destinations: [
      { title: "화이트 워터 래프팅", image: "/whitewater-rafting-pdf.jpg", alt: "카가얀강의 화이트 워터 래프팅", copy: "필리핀 래프팅의 성지로 불리는 카가얀강에서 열대 자연과 급류를 동시에 경험하는 대표 액티비티입니다.", tags: ["래프팅", "팀 액티비티", "반일"] },
      { title: "다힐라얀 어드벤처 파크", image: "/dahilayan-park.jpg", alt: "다힐라얀 어드벤처 파크 집라인", copy: "해발 1,430m의 시원한 고원에서 집라인과 산악 액티비티를 즐기는 필리핀 대표 어드벤처 명소입니다.", tags: ["집라인", "고원", "가족 여행"] },
    ],
  },
  {
    number: "03",
    eyebrow: "HIGHLAND & HEALING",
    title: "고원과 힐링",
    intro: "초록 능선과 서늘한 고원 기후, 여유로운 목장 풍경을 따라 자연의 속도로 쉬어가는 여행입니다.",
    destinations: [
      { title: "커뮤니얼 랜치", image: "/communal-ranch.jpg", alt: "초록 능선이 펼쳐진 커뮤니얼 랜치", copy: "뉴질랜드를 닮은 초록 언덕과 작은 호수가 펼쳐지는 목장. 승마와 드론 촬영, 자연 속 휴식에 어울립니다.", tags: ["승마", "포토 스폿", "자연 체험"] },
      { title: "클라베리아", image: "/claveria-highlands.png", alt: "겹겹이 이어진 산과 계곡을 바라보는 클라베리아 고원 전망대", copy: "해발 600~950m의 청정 고원. 서늘한 기후와 꽃밭, 발라투칸 산맥의 풍경이 특별한 힐링 목적지입니다.", tags: ["고원", "트레킹", "생태 여행"] },
    ],
  },
  {
    number: "04",
    eyebrow: "CULTURE & LANDMARK",
    title: "문화와 랜드마크",
    intro: "지역의 신앙과 이야기, 도시 전경과 야경을 함께 만나는 여정으로 여행상품에 깊이와 특별한 장면을 더합니다.",
    destinations: [
      { title: "디바인 메르시 성지 (Divine Mercy)", image: "/divine-mercy.jpg", alt: "언덕 위의 디바인 메르시 성지", copy: "언덕 정상의 15m 예수상과 바다 전망이 인상적인 대표 순례지. 평화로운 분위기와 독특한 건축미를 만납니다.", tags: ["순례", "랜드마크", "전망"] },
      { title: "아마야 전망대 (Amaya View)", image: "/amaya-view.png", alt: "초록 숲과 도시 전경을 내려다보는 아마야 전망대", copy: "카가얀데오로의 도심과 주변 자연을 한눈에 조망하는 전망 명소. 탁 트인 풍경과 다양한 포토 스폿을 만납니다.", tags: ["파노라마", "전망대", "포토 스폿"] },
      { title: "하이릿지 (High Ridge)", image: "/high-ridge.png", alt: "카가얀데오로 도심을 바라보는 하이릿지 레스토랑", copy: "도시의 전경과 야경을 감상하며 식사를 즐기는 도심 속 선셋 레스토랑. 여행의 저녁을 완성하는 특별한 장소입니다.", tags: ["선셋", "야경", "레스토랑"] },
      { title: "쇼핑몰 & 다양한 로컬 맛집", image: "/local-food-crab.png", alt: "크랩과 다양한 필리핀 로컬 음식", copy: "도심 쇼핑몰과 맛집에서 신선한 크랩, 필리핀식 레촌, 숯불 향 가득한 이나살 치킨까지 다채로운 현지 미식을 경험합니다.", tags: ["쇼핑", "로컬 미식", "푸드 투어"], gallery: [
        { src: "/local-food-crab.png", alt: "크랩과 레촌을 포함한 풍성한 로컬 음식 한 상" },
        { src: "/inasal-chicken.png", alt: "숯불에 구운 필리핀 이나살 치킨" },
        { src: "/local-food-selection.png", alt: "다양하게 차려진 필리핀 로컬 메뉴" },
      ] },
    ],
  },
  {
    number: "05",
    eyebrow: "PREMIUM GOLF",
    title: "프리미엄 골프",
    intro: "고원 자연과 오랜 전통이 어우러진 두 개의 골프 코스로 휴양형 프리미엄 상품을 완성합니다.",
    destinations: [
      { title: "푸에블로 골프 코스", image: "/pueblo-golf.jpg", alt: "산악 고원에 자리한 푸에블로 골프 코스", copy: "로버트 트렌트 존스 주니어가 설계한 18홀 파72 코스. 넓은 페어웨이와 자연 협곡이 역동적인 플레이를 선사합니다.", tags: ["18홀", "파72", "챔피언십 코스"] },
      { title: "델몬테 골프 코스", image: "/del-monte-golf.jpg", alt: "산과 숲에 둘러싸인 약 100년 역사의 델몬테 골프 코스", copy: "약 100년의 역사를 품은 필리핀 대표 헤리티지 골프장. 1928년 문을 연 18홀 파72 코스에서 신선한 고원 공기와 클래식한 라운딩을 즐깁니다.", tags: ["100년 골프장", "18홀 · 파72", "헤리티지"] },
    ],
  },
];

const itinerary = [
  { day: "DAY 1", title: "도착과 첫 만남", theme: "ARRIVAL & DISCOVERY", items: ["공항 도착 (08:30)", "일리간 시장과의 만남", "티나고 폭포 투어", "웰컴 디너"] },
  { day: "DAY 2", title: "바다와 선셋", theme: "OCEAN & SUNSET", items: ["헬멧다이빙 · 스쿠버다이빙 · 호핑투어", "해양스포츠", "점심: 씨푸드 부들파이트", "디바인 메르시 성지", "선셋 디너 · 도시 야경 뷰 맛집"] },
  { day: "DAY 3", title: "강을 가르는 모험", theme: "RIVER & THRILL", items: ["실제 총쏘기 체험", "화이트 워터 래프팅", "저녁: 한국식당"] },
  { day: "DAY 4", title: "골프와 고원", theme: "GOLF & HIGHLAND", items: ["델몬테 골프 · 100년 골프장", "다힐라얀 어드벤처 파크 · 840m 집라인", "커뮤니얼 랜치 말타기", "세계 최대 규모 파인애플 농장 체험", "송별 만찬 · 주지사와의 만남"] },
  { day: "DAY 5", title: "라운딩과 귀국길", theme: "GOLF & DEPARTURE", items: ["푸에블로 골프", "클라베리아 마운틴 뷰", "쇼핑 후 공항 이동", "18:50 귀국행"] },
  { day: "DAY 6", title: "여정의 마무리", theme: "HOMECOMING", items: ["07:20 인천공항 도착"] },
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
          <a href="#schedule">관광지</a>
          <a href="#itinerary">일정</a>
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

        {destinationGroups.map((group) => (
          <section className="destination-group" key={group.number}>
            <div className="category-heading">
              <span>{group.number}</span>
              <div><p>{group.eyebrow}</p><h3>{group.title}</h3></div>
              <p>{group.intro}</p>
            </div>
            <div className="destination-grid">
              {group.destinations.map((destination) => (
                <article className="destination-card" key={destination.title}>
                  {destination.gallery ? (
                    <div className="destination-card-image food-gallery">
                      {destination.gallery.map((photo) => <div key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 800px) 50vw, 20vw" /></div>)}
                    </div>
                  ) : (
                    <div className="destination-card-image">
                      <Image src={destination.image} alt={destination.alt} fill sizes="(max-width: 800px) 100vw, 40vw" />
                    </div>
                  )}
                  <div className="destination-card-copy">
                    <h3>{destination.title}</h3>
                    <p>{destination.copy}</p>
                    <div className="product-tags">{destination.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="itinerary-section" id="itinerary">
        <header className="itinerary-header">
          <p className="section-kicker">03 / ITINERARY</p>
          <h2>4박 6일,<br /><em>도시를 깊이 만나는 여정</em></h2>
          <p>바다와 강, 골프와 고원을 균형 있게 연결한 카가얀데오로 대표 팸투어 일정입니다.</p>
        </header>
        <div className="itinerary-summary" aria-label="여행 일정 요약">
          <div><strong>4</strong><span>NIGHTS</span></div>
          <div><strong>6</strong><span>DAYS</span></div>
          <div><strong>2</strong><span>GOLF ROUNDS</span></div>
          <div><strong>1</strong><span>NEW DESTINATION</span></div>
        </div>
        <div className="itinerary-grid">
          {itinerary.map((item, index) => (
            <article className="itinerary-card" key={item.day}>
              <div className="itinerary-card-top">
                <span>0{index + 1}</span>
                <div><small>{item.theme}</small><h3>{item.title}</h3></div>
              </div>
              <ul>{item.items.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <div className="itinerary-day">{item.day}</div>
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
