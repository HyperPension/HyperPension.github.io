const SITE_COPY = {
  ko: {
    tabs: {
      info: "Info",
      archive: "Archive",
      typography: "Typography",
      instagram: "Instagram",
      fontsInUse: "Fonts in use",
      mailMe: "Mail me!",
    },
    info: {
      eyebrow: "Studio profile",
      title: "하이퍼펜션은 시각 언어의 마찰을 수집하는 디자인 스튜디오입니다.",
      lead:
        "그래픽 디자인, 출판, 타이포그래피, 리서치를 가로지르며 이질적인 표면과 시대감각을 병치합니다. 1990년대 웹의 인더스트리얼한 긴장감을 오늘의 속도와 해상도로 재해석합니다.",
      sideTitle: "Approach",
      sideText:
        "이 웹사이트는 작업 아카이브와 실험적 타이포그래피를 동시에 보여주는 인터페이스입니다. 각 이미지는 개별 프로젝트의 입구이며, 스크롤과 탭이 함께 작동하도록 설계했습니다.",
    },
    typography: {
      eyebrow: "Type in motion",
      title: "문자 자체가 장면이 되는 순간을 다룹니다.",
      lead:
        "서체는 정보 전달 도구이면서 동시에 질감과 태도의 저장소입니다. 하이퍼펜션은 문자 조형, 레이아웃 실험, 아카이브 리듬을 하나의 시퀀스로 연결합니다.",
      sideTitle: "Notes",
      sideText:
        "Fonts In Use와 Instagram은 외부 링크로 연결되며, 향후 실제 채널 주소만 입력하면 바로 작동하도록 구성해두었습니다.",
    },
    archiveEyebrow: "Selected works",
    archiveCaption:
      "비정형 그리드 위로 아카이브를 펼칩니다. 이미지를 hover하면 프로젝트 메모가 나타나고, 클릭하면 개별 페이지로 이동합니다.",
    footerNote:
      "하이퍼펜션은 그래픽, 타이포그래피, 출판, 이미지 리서치가 서로 충돌하는 지점을 기록합니다. 아래 스티커는 자유롭게 드래그해서 배치할 수 있습니다.",
    back: "← 뒤로 가기",
    detailMetaPrefix: "형식",
  },
  en: {
    tabs: {
      info: "Info",
      archive: "Archive",
      typography: "Typography",
      instagram: "Instagram",
      fontsInUse: "Fonts in use",
      mailMe: "Mail me!",
    },
    info: {
      eyebrow: "Studio profile",
      title: "Hyperpension is a design studio that archives friction between visual languages.",
      lead:
        "Working across graphic design, publishing, typography, and research, the studio stages unusual surfaces and clashing temporalities. The industrial charge of 1990s web culture is re-read with contemporary clarity.",
      sideTitle: "Approach",
      sideText:
        "This website is built as an archive interface and a typographic surface at once. Each image acts as an entrance into a project, with scroll and tab structures operating together.",
    },
    typography: {
      eyebrow: "Type in motion",
      title: "Typography is treated as image, texture, and timing.",
      lead:
        "Type is a device for communication, but also a storage medium for attitude and atmosphere. Hyperpension connects letterform, layout experiment, and archival rhythm into one sequence.",
      sideTitle: "Notes",
      sideText:
        "Fonts In Use and Instagram are wired as external links. Once your real destinations are inserted, the buttons will open them directly.",
    },
    archiveEyebrow: "Selected works",
    archiveCaption:
      "A non-linear grid opens the archive. Hover to read the project note, then enter the depth-2 page for a closer view.",
    footerNote:
      "Hyperpension documents the collision point between graphic design, typography, publishing, and image research. The stickers below can be dragged and rearranged freely.",
    back: "← Back",
    detailMetaPrefix: "Format",
  },
};

const PROJECTS = [
  {
    id: "anthem-to-the-sun",
    shape: "large",
    crop: "50% 50%",
    image: "./작품/[HyperPension] Anthem to the sun.jpg",
    category: { ko: "Poster / Artwork", en: "Poster / Artwork" },
    meta: { ko: "아트워크, 2026", en: "Artwork, 2026" },
    title: { ko: "Anthem to the Sun", en: "Anthem to the Sun" },
    blurb: {
      ko: "빛과 찬가라는 추상적 어휘를 강한 시각 밀도로 묶어낸 작업.",
      en: "A work binding the abstract language of light and anthem into a dense visual field.",
    },
    description: {
      ko: "강한 에너지와 정적인 구조를 동시에 붙들어 두려는 구성입니다. 화면의 중심 압력과 주변의 여백이 서로를 밀어내며 장면 전체의 온도를 만듭니다.",
      en: "The composition holds intensity and stillness at once. Central pressure and surrounding space push against each other to set the temperature of the whole scene.",
    },
  },
  {
    id: "third-anniversary",
    shape: "large",
    crop: "50% 50%",
    image: "./작품/[HyperPension] 3rd anniversary of HyperPension square.jpg",
    category: { ko: "Studio identity", en: "Studio identity" },
    meta: { ko: "기념 포스터, 2026", en: "Anniversary poster, 2026" },
    title: { ko: "3rd Anniversary of HyperPension", en: "3rd Anniversary of HyperPension" },
    blurb: {
      ko: "스튜디오의 시간을 응축해 기념 그래픽으로 번역한 자축용 시각물.",
      en: "A celebratory visual condensing the studio's own timeline into a commemorative graphic.",
    },
    description: {
      ko: "하이퍼펜션의 내부 축적을 바깥으로 드러내는 기념 이미지입니다. 아카이브적인 자의식과 축제성 사이를 오가며 브랜드의 결을 다시 강조합니다.",
      en: "This commemorative image projects the studio's internal accumulation outward, moving between archival self-awareness and celebration to restate the grain of the brand.",
    },
  },
  {
    id: "writers",
    shape: "small",
    crop: "50% 26%",
    image: "./작품/[HyperPension] Writers.jpg",
    category: { ko: "Editorial image", en: "Editorial image" },
    meta: { ko: "에디토리얼, 2025", en: "Editorial, 2025" },
    title: { ko: "Writers", en: "Writers" },
    blurb: {
      ko: "글쓰기의 태도와 이미지 밀도를 함께 다루는 에디토리얼 비주얼.",
      en: "An editorial visual pairing the stance of writing with image density.",
    },
    description: {
      ko: "문장 이전의 분위기, 즉 쓰는 사람의 속도와 무게를 이미지로 번역하려는 시도입니다. 프레임 안에서 시선과 표면이 서로 밀고 당기는 관계를 만듭니다.",
      en: "This work translates the mood before language itself, the speed and weight of a writing subject, into image. Gaze and surface pull against each other inside the frame.",
    },
  },
  {
    id: "fire-extinguisher",
    shape: "medium",
    crop: "50% 50%",
    image: "./작품/[HyperPension] Fire Extinguisher - This city is on your side square.png",
    category: { ko: "Campaign poster", en: "Campaign poster" },
    meta: { ko: "포스터, 2026", en: "Poster, 2026" },
    title: { ko: "Fire Extinguisher", en: "Fire Extinguisher" },
    blurb: {
      ko: "도시와 생존 감각을 단단한 경고성 그래픽으로 전환한 포스터 작업.",
      en: "A poster translating urban survival into a compact, alert graphic surface.",
    },
    description: {
      ko: "강한 상징성과 직설적인 배치로 메시지의 압력을 높인 작업입니다. 경고 표식 같은 리듬을 유지하면서도 표면의 밀도와 색의 긴장감을 세밀하게 조율했습니다.",
      en: "This piece heightens pressure through direct placement and strong symbolic charge, balancing warning-sign clarity with a carefully tuned surface density and color tension.",
    },
  },
  {
    id: "deep-sea-gigantism",
    shape: "wide",
    crop: "50% 50%",
    image: "./작품/DeepSeaGigantism.jpg",
    category: { ko: "Research image", en: "Research image" },
    meta: { ko: "리서치 포스터, 2025", en: "Research poster, 2025" },
    title: { ko: "Deep Sea Gigantism", en: "Deep Sea Gigantism" },
    blurb: {
      ko: "심해의 비정상적 스케일 감각을 시각 리서치 이미지로 풀어낸 작업.",
      en: "A visual research piece unfolding the uncanny scale logic of deep-sea gigantism.",
    },
    description: {
      ko: "관찰과 상상이 겹치는 지점을 포스터 스케일의 이미지로 번역했습니다. 생물학적 사실성과 기이한 확대 감각이 동시에 머무는 장면을 만드는 데 집중했습니다.",
      en: "This piece translates the overlap of observation and speculation into a poster-scale image, focusing on a scene where biological realism and uncanny enlargement coexist.",
    },
  },
];

const STICKERS = [
  { ko: "WEB\nINDUSTRIAL", en: "WEB\nINDUSTRIAL", x: 4, y: 24 },
  { ko: "TYPE\nSURFACE", en: "TYPE\nSURFACE", x: 28, y: 140 },
  { ko: "PRINT\nMEMORY", en: "PRINT\nMEMORY", x: 52, y: 52 },
  { ko: "ARCHIVE\nMOTION", en: "ARCHIVE\nMOTION", x: 72, y: 152 },
  { ko: "SEOUL\nSTUDIO", en: "SEOUL\nSTUDIO", x: 18, y: 176 },
];

const EXTERNAL_LINKS = {
  instagram: "https://instagram.com/",
  fontsInUse: "https://fontsinuse.com/",
  mailMe: "https://mail.google.com/mail/?view=cm&fs=1&to=Check.in@Hyperpension.kr",
};

const state = {
  lang: "ko",
  currentRoute: "archive",
  currentProjectId: PROJECTS[0].id,
};

const pageEls = [...document.querySelectorAll("[data-page]")];
const tabEls = [...document.querySelectorAll(".tab-button")];
const archiveGrid = document.querySelector(".archive-grid");
const stickersEl = document.querySelector(".stickers");
const backButton = document.querySelector(".back-button");

function createImage(project, className = "") {
  const image = document.createElement("img");
  image.src = encodeURI(project.image);
  image.alt = project.title[state.lang];
  image.dataset.project = project.id;
  image.style.objectPosition = project.crop;
  if (className) image.className = className;
  return image;
}

function renderInfoPage() {
  const copy = SITE_COPY[state.lang].info;
  const container = document.querySelector(".page-info");
  container.innerHTML = `
    <div class="info-layout">
      <section class="info-panel main">
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.title}</h1>
        <p class="lead">${copy.lead}</p>
      </section>
      <aside class="info-panel side">
        <p class="eyebrow">${copy.sideTitle}</p>
        <p class="lead">${copy.sideText}</p>
      </aside>
    </div>
  `;
}

function renderTypographyPage() {
  const copy = SITE_COPY[state.lang].typography;
  const container = document.querySelector(".page-typography");
  container.innerHTML = `
    <div class="type-layout">
      <section class="type-panel large">
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.title}</h1>
        <p class="lead">${copy.lead}</p>
      </section>
      <aside class="type-panel small">
        <p class="eyebrow">${copy.sideTitle}</p>
        <p class="lead">${copy.sideText}</p>
      </aside>
    </div>
  `;
}

function renderArchive() {
  archiveGrid.innerHTML = "";

  PROJECTS.forEach((project) => {
    const button = document.createElement("button");
    button.className = "archive-item";
    button.type = "button";
    button.dataset.shape = project.shape;
    button.dataset.project = project.id;
    button.setAttribute("aria-label", project.title[state.lang]);

    const image = createImage(project);
    const hoverCard = document.createElement("div");
    hoverCard.className = "hover-card";
    hoverCard.innerHTML = `
      <h2>${project.title[state.lang]}</h2>
      <p>${project.blurb[state.lang]}</p>
    `;

    button.append(image, hoverCard);
    image.addEventListener("mouseenter", () => {
      document.body.classList.add("archive-hover");
    });
    image.addEventListener("mouseleave", () => {
      document.body.classList.remove("archive-hover");
    });
    image.addEventListener("focus", () => {
      document.body.classList.add("archive-hover");
    });
    image.addEventListener("blur", () => {
      document.body.classList.remove("archive-hover");
    });
    image.addEventListener("click", () => {
      location.hash = `project/${project.id}`;
    });

    archiveGrid.appendChild(button);
  });
}

function renderDetail() {
  const project = PROJECTS.find((item) => item.id === state.currentProjectId) || PROJECTS[0];
  const media = document.querySelector(".detail-media");
  const detailPage = document.querySelector(".page-detail");
  media.innerHTML = "";
  media.appendChild(createImage(project, "detail-image"));
  detailPage.dataset.project = project.id;

  document.querySelector('[data-detail="category"]').textContent = project.category[state.lang];
  document.querySelector('[data-detail="title"]').textContent = project.title[state.lang];
  document.querySelector('[data-detail="meta"]').textContent =
    `${SITE_COPY[state.lang].detailMetaPrefix} · ${project.meta[state.lang]}`;
  document.querySelector('[data-detail="description"]').textContent = project.description[state.lang];
  backButton.textContent = SITE_COPY[state.lang].back;
}

function renderTabs() {
  const labels = SITE_COPY[state.lang].tabs;
  tabEls.forEach((tab) => {
    const route = tab.dataset.route || tab.dataset.external;
    tab.textContent = labels[route];
    tab.classList.toggle("active", state.currentRoute === route);
  });
}

function renderStaticCopy() {
  document.querySelector('[data-i18n="archiveEyebrow"]').textContent =
    SITE_COPY[state.lang].archiveEyebrow;
  document.querySelector('[data-i18n="archiveCaption"]').textContent =
    SITE_COPY[state.lang].archiveCaption;
  document.querySelector('[data-i18n="footerNote"]').textContent =
    SITE_COPY[state.lang].footerNote;
}

function renderStickers() {
  stickersEl.innerHTML = "";

  STICKERS.forEach((sticker, index) => {
    const el = document.createElement("div");
    el.className = "sticker";
    el.dataset.index = String(index);
    el.textContent = sticker[state.lang];
    el.style.left = `${sticker.x}%`;
    el.style.top = `${sticker.y}px`;
    enableStickerDrag(el);
    stickersEl.appendChild(el);
  });
}

function setActivePage(route) {
  pageEls.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === route);
  });
}

function syncRouteFromHash() {
  const hash = location.hash.replace(/^#/, "");

  if (!hash || hash === "archive") {
    state.currentRoute = "archive";
    setActivePage("archive");
    renderTabs();
    return;
  }

  if (hash === "info" || hash === "typography") {
    state.currentRoute = hash;
    setActivePage(hash);
    renderTabs();
    return;
  }

  if (hash.startsWith("project/")) {
    const projectId = hash.split("/")[1];
    state.currentProjectId = projectId;
    state.currentRoute = "detail";
    setActivePage("detail");
    renderTabs();
    renderDetail();
    return;
  }

  location.hash = "archive";
}

function updateLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "ko" ? "ko" : "en";
  localStorage.setItem("hyperpension-lang", lang);
  renderInfoPage();
  renderTypographyPage();
  renderArchive();
  renderDetail();
  renderTabs();
  renderStaticCopy();
  renderStickers();
}

async function detectLanguage() {
  const saved = localStorage.getItem("hyperpension-lang");
  if (saved === "ko" || saved === "en") {
    updateLanguage(saved);
    return;
  }

  try {
    const response = await fetch("https://ipwho.is/");
    const data = await response.json();
    const lang = data && data.country_code === "KR" ? "ko" : "en";
    updateLanguage(lang);
  } catch (error) {
    const lang = navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
    updateLanguage(lang);
  }
}

function enableStickerDrag(el) {
  let offsetX = 0;
  let offsetY = 0;

  const move = (clientX, clientY) => {
    const rect = stickersEl.getBoundingClientRect();
    const nextX = clientX - rect.left - offsetX;
    const nextY = clientY - rect.top - offsetY;
    const maxX = rect.width - el.offsetWidth;
    const maxY = rect.height - el.offsetHeight;

    el.style.left = `${Math.max(0, Math.min(nextX, maxX))}px`;
    el.style.top = `${Math.max(0, Math.min(nextY, maxY))}px`;
  };

  const onPointerMove = (event) => move(event.clientX, event.clientY);
  const onPointerUp = () => {
    el.classList.remove("dragging");
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  el.addEventListener("pointerdown", (event) => {
    const rect = el.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    el.classList.add("dragging");
    el.setPointerCapture(event.pointerId);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  });
}

function bindEvents() {
  tabEls.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.external) {
        if (tab.dataset.external === "mailMe") {
          return;
        }
        window.open(EXTERNAL_LINKS[tab.dataset.external], "_blank", "noopener,noreferrer");
        return;
      }

      location.hash = tab.dataset.route;
    });
  });

  backButton.addEventListener("click", () => {
    location.hash = "archive";
  });

  window.addEventListener("hashchange", syncRouteFromHash);
}

function init() {
  renderInfoPage();
  renderTypographyPage();
  renderArchive();
  renderStaticCopy();
  renderStickers();
  bindEvents();
  detectLanguage();
  syncRouteFromHash();
}

init();
