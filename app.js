const posts = [
  {
    id: 1,
    category: "life",
    title: "Когда я вернулась в дом детства спустя десять лет, старая записка на кухне объяснила молчание всей семьи",
    excerpt: "Она приехала за документами и думала, что проведет в доме всего час, но одна деталь изменила разговоры, которых все избегали.",
    lead: "Иногда прошлое не стучит в дверь, а тихо лежит в ящике кухонного стола.",
    text: "В этой истории героиня постепенно собирает семейную правду из мелких бытовых деталей: чашки, сохраненного ключа и письма, которое никто не решался отдать. Финал оставляет не громкий скандал, а спокойное решение наконец поговорить честно.",
    image: "assets/images/family.jpg",
    date: "16 мая 2026",
    comments: 12,
    views: 1840
  },
  {
    id: 2,
    category: "animals",
    title: "Пес каждое утро приносил к двери один и тот же поводок, пока хозяйка не поняла, куда он ее зовет",
    excerpt: "Соседи считали это привычкой, но маршрут через старый парк оказался важнее, чем казалось.",
    lead: "Верность иногда выглядит как упрямство, особенно если никто не понимает ее причину.",
    text: "Пес терпеливо повторял один и тот же путь, возвращая хозяйку к месту, где много лет назад началась их дружба. История держится на маленьком открытии, которое помогает человеку снова выйти из одиночества.",
    image: "assets/images/dog.jpg",
    date: "16 мая 2026",
    comments: 4,
    views: 1260
  },
  {
    id: 3,
    category: "home",
    title: "Супруги купили тесную студию у вокзала, а через месяц друзья не поверили, что это та же квартира",
    excerpt: "Белые стены, скрытое хранение и один смелый цвет превратили сложную планировку в удобное пространство.",
    lead: "Маленькая площадь не обязана чувствоваться временным компромиссом.",
    text: "Материал показывает, как пара переосмыслила каждый метр: заменила шкафы на встроенные ниши, вынесла рабочее место к окну и оставила кухню максимально тихой по цвету. Главная идея проста: уют появляется там, где вещи получают свое место.",
    image: "assets/images/interior.jpg",
    date: "15 мая 2026",
    comments: 8,
    views: 2310
  },
  {
    id: 4,
    category: "inspiration",
    title: "Она боялась начать сначала после сорока, пока случайная встреча в поезде не дала ей первый заказ",
    excerpt: "Небольшой разговор с незнакомкой стал точкой, с которой хобби превратилось в дело.",
    lead: "Иногда самый важный совет звучит не как совет, а как простой вопрос.",
    text: "Героиня годами откладывала свое ремесло на потом, считая его несерьезным. Поездка на выходные стала моментом, когда она впервые произнесла вслух, чего хочет, и получила неожиданную поддержку.",
    image: "assets/images/portrait.jpg",
    date: "15 мая 2026",
    comments: 15,
    views: 3180
  },
  {
    id: 5,
    category: "life",
    title: "На семейном ужине бабушка поставила на стол старый конверт и попросила прочитать его только после десерта",
    excerpt: "Все ожидали обычный тост, но внутри оказалась история, которая примирила двух братьев.",
    lead: "Семейные тайны не всегда рушат отношения. Иногда они возвращают людям общий язык.",
    text: "В центре истории не громкое разоблачение, а письмо о выборе, сделанном много лет назад. Оно помогает родным увидеть друг друга не через старые обиды, а через обстоятельства, о которых никто не знал.",
    image: "assets/images/home.jpg",
    date: "14 мая 2026",
    comments: 22,
    views: 4020
  },
  {
    id: 6,
    category: "life",
    title: "Мама каждый год присылала пустую открытку, и только после ее переезда дочь заметила маленькую отметку на обороте",
    excerpt: "Слова в этой семье давались трудно, поэтому забота пряталась в почти невидимых знаках.",
    lead: "Молчание может ранить, но иногда в нем все же спрятан способ сказать: я рядом.",
    text: "Дочь долго считала открытки холодной формальностью. Когда она нашла коробку с такими же карточками, стало ясно, что мать годами создавала для нее личный календарь важных дней.",
    image: "assets/images/mother.jpg",
    date: "14 мая 2026",
    comments: 7,
    views: 980
  },
  {
    id: 7,
    category: "animals",
    title: "Щенок не отходил от старого чемодана, пока семья не обнаружила внутри вещь прежнего хозяина",
    excerpt: "Новая жизнь началась с переезда, но один предмет помог сохранить связь с прошлым.",
    lead: "Дом для животного строится не только из стен, но и из знакомых запахов.",
    text: "Семья не понимала, почему щенок беспокоится рядом с чемоданом. Внутри оказалась игрушка, которую волонтеры случайно не передали, и именно она помогла питомцу расслабиться в новом доме.",
    image: "assets/images/puppy.jpg",
    date: "13 мая 2026",
    comments: 9,
    views: 1740
  },
  {
    id: 8,
    category: "home",
    title: "Пять решений для маленькой кухни, которые выглядят просто, но каждый день экономят время",
    excerpt: "Вертикальное хранение, спокойный свет и понятные зоны делают кухню удобной даже без большой площади.",
    lead: "Хороший интерьер не обязан кричать о себе, чтобы работать каждый день.",
    text: "Подборка разбирает практичные приемы: рейлинг для частых предметов, узкие выдвижные секции, свет над рабочей зоной, единые контейнеры и свободную столешницу. Все решения можно повторить без капитального ремонта.",
    image: "assets/images/studio.jpg",
    date: "13 мая 2026",
    comments: 3,
    views: 2120
  },
  {
    id: 9,
    category: "inspiration",
    title: "Друзья договорились встречаться каждую пятницу без телефонов, и через месяц изменился весь двор",
    excerpt: "Одна скамейка, термос с чаем и привычка слушать друг друга запустили маленькое соседское сообщество.",
    lead: "Большие перемены иногда начинаются с того, что люди снова узнают имена друг друга.",
    text: "Встречи без повестки неожиданно привели к общим делам: кто-то починил клумбу, кто-то сделал полку для обмена книгами, а кто-то впервые попросил помощи. История о том, как простая регулярность создает доверие.",
    image: "assets/images/friends.jpg",
    date: "12 мая 2026",
    comments: 18,
    views: 2890
  },
  {
    id: 10,
    category: "inspiration",
    title: "Он вышел на прогулку до рассвета и нашел привычку, которая вернула ему спокойные вечера",
    excerpt: "Двадцать минут тишины оказались не подвигом, а способом снова услышать собственные мысли.",
    lead: "Не каждое изменение требует большого обещания. Иногда достаточно выбрать маленький повторяемый шаг.",
    text: "Герой начинает ходить одним и тем же маршрутом, чтобы разгрузить голову после сложного периода. Постепенно прогулка становится не побегом, а точкой сборки дня.",
    image: "assets/images/mountain.jpg",
    date: "12 мая 2026",
    comments: 5,
    views: 1450
  }
];

const categoryLabels = {
  life: "Жизненные истории",
  animals: "Любимые животные",
  inspiration: "Вдохновение",
  home: "Дом и уют"
};

const monthNumbers = {
  января: "01",
  февраля: "02",
  марта: "03",
  апреля: "04",
  мая: "05",
  июня: "06",
  июля: "07",
  августа: "08",
  сентября: "09",
  октября: "10",
  ноября: "11",
  декабря: "12"
};

const state = {
  category: "all",
  query: "",
  sort: "fresh",
  page: 1,
  perPage: 9
};

const postsGrid = document.querySelector("#postsGrid");
const emptyState = document.querySelector("#emptyState");
const pagination = document.querySelector("#pagination");
const featuredStory = document.querySelector("#featuredStory");
const spotlightList = document.querySelector("#spotlightList");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const mainNav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
const scrollTopButton = document.querySelector("#scrollTop");
const readerDialog = document.querySelector("#readerDialog");

function formatViews(value) {
  if (value >= 1000) {
    const short = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1);
    return `${short.replace(".", ",")}k`;
  }
  return String(value);
}

function toIsoDate(displayDate) {
  const [day, month, year] = displayDate.split(" ");
  return `${year}-${monthNumbers[month]}-${day.padStart(2, "0")}`;
}

function renderFeatured() {
  const lead = posts[0];
  const spotlight = [...posts]
    .filter((post) => post.id !== lead.id)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  featuredStory.innerHTML = `
    <img class="featured-image" src="${lead.image}" alt="${lead.title}">
    <div class="featured-scrim"></div>
    <div class="featured-content">
      <span class="featured-category" data-category="${lead.category}">${categoryLabels[lead.category]}</span>
      <h2><button type="button" data-open-post="${lead.id}">${lead.title}</button></h2>
      <p>${lead.excerpt}</p>
      <div class="featured-meta">
        <span><i data-lucide="calendar-days" aria-hidden="true"></i>${lead.date}</span>
        <span><i data-lucide="message-circle" aria-hidden="true"></i>${lead.comments}</span>
        <span><i data-lucide="eye" aria-hidden="true"></i>${formatViews(lead.views)}</span>
      </div>
    </div>
  `;

  spotlightList.innerHTML = spotlight
    .map(
      (post) => `
        <button class="spotlight-item" type="button" data-open-post="${post.id}">
          <span class="spotlight-category" data-category="${post.category}">${categoryLabels[post.category]}</span>
          <strong>${post.title}</strong>
          <small>${post.date} · ${formatViews(post.views)} просмотров</small>
        </button>
      `
    )
    .join("");
}

function getFilteredPosts() {
  const query = state.query.trim().toLowerCase();
  return posts
    .filter((post) => state.category === "all" || post.category === state.category)
    .filter((post) => {
      if (!query) return true;
      return [post.title, post.excerpt, categoryLabels[post.category]]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "popular") return b.views - a.views;
      if (state.sort === "comments") return b.comments - a.comments;
      return a.id - b.id;
    });
}

function createPostCard(post) {
  const article = document.createElement("article");
  article.className = "post-card";
  article.innerHTML = `
    <div class="post-media">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="post-meta-overlay">
        <span class="post-category" data-category="${post.category}">${categoryLabels[post.category]}</span>
        <span class="post-stats">
          <span class="stat"><i data-lucide="message-circle" aria-hidden="true"></i>${post.comments}</span>
          <span class="stat"><i data-lucide="eye" aria-hidden="true"></i>${formatViews(post.views)}</span>
        </span>
      </div>
    </div>
    <div class="post-content">
      <h2 class="post-title">
        <button type="button" data-open-post="${post.id}">${post.title}</button>
      </h2>
      <p class="post-excerpt">${post.excerpt}</p>
      <div class="post-footer">
        <time datetime="${toIsoDate(post.date)}">${post.date}</time>
        <button class="read-more" type="button" data-open-post="${post.id}">Читать</button>
      </div>
    </div>
  `;
  article.querySelector(".post-media").addEventListener("click", () => openReader(post.id));
  return article;
}

function renderPosts() {
  const filtered = getFilteredPosts();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * state.perPage;
  const pagePosts = filtered.slice(start, start + state.perPage);

  postsGrid.innerHTML = "";
  pagePosts.forEach((post) => postsGrid.append(createPostCard(post)));
  emptyState.hidden = filtered.length !== 0;
  postsGrid.hidden = filtered.length === 0;
  renderPagination(totalPages);
  refreshIcons();
}

function renderPagination(totalPages) {
  pagination.innerHTML = "";
  if (totalPages <= 1) return;

  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `page-number${page === state.page ? " is-active" : ""}`;
    button.textContent = page;
    button.setAttribute("aria-label", `Страница ${page}`);
    button.addEventListener("click", () => {
      state.page = page;
      renderPosts();
      document.querySelector("#content").scrollIntoView({ behavior: "smooth" });
    });
    pagination.append(button);
  }
}

function setCategory(category) {
  state.category = category;
  state.page = 1;
  document.querySelectorAll("[data-category]").forEach((button) => {
    if (button.classList.contains("post-category")) return;
    button.classList.toggle("is-active", button.dataset.category === category);
  });
  renderPosts();
}

function renderCounts() {
  document.querySelector("#countAll").textContent = posts.length;
  document.querySelector("#countLife").textContent = posts.filter((post) => post.category === "life").length;
  document.querySelector("#countAnimals").textContent = posts.filter((post) => post.category === "animals").length;
  document.querySelector("#countInspiration").textContent = posts.filter((post) => post.category === "inspiration").length;
  document.querySelector("#countHome").textContent = posts.filter((post) => post.category === "home").length;
}

function openReader(postId) {
  const post = posts.find((item) => item.id === Number(postId));
  if (!post) return;

  document.querySelector("#readerImage").src = post.image;
  document.querySelector("#readerImage").alt = post.title;
  document.querySelector("#readerCategory").textContent = categoryLabels[post.category];
  document.querySelector("#readerTitle").textContent = post.title;
  document.querySelector("#readerDate").textContent = post.date;
  document.querySelector("#readerViews").textContent = `${formatViews(post.views)} просмотров`;
  document.querySelector("#readerComments").textContent = `${post.comments} комментариев`;
  document.querySelector("#readerLead").textContent = post.lead;
  document.querySelector("#readerText").textContent = post.text;

  if (typeof readerDialog.showModal === "function") {
    if (readerDialog.open) readerDialog.close();
    readerDialog.showModal();
  }
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.querySelectorAll(".nav-link, .category-chip").forEach((button) => {
  button.addEventListener("click", () => setCategory(button.dataset.category));
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-post]");
  if (trigger) openReader(trigger.dataset.openPost);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.page = 1;
  renderPosts();
});

document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  state.page = 1;
  renderPosts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.page = 1;
  renderPosts();
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector(".reader-close").addEventListener("click", () => {
  readerDialog.close();
});

readerDialog.addEventListener("click", (event) => {
  if (event.target === readerDialog) readerDialog.close();
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 360);
});

renderFeatured();
renderCounts();
renderPosts();
refreshIcons();
