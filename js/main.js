const projects = [...document.querySelectorAll(".project")];
const projectButtons = projects.map((project) =>
  project.querySelector(".project__summary")
);

function setProjectState(project, expanded) {
  const button = project.querySelector(".project__summary");
  const details = project.querySelector(".project__details");

  project.classList.toggle("project--open", expanded);
  button.setAttribute("aria-expanded", String(expanded));
  details.setAttribute("aria-hidden", String(!expanded));
}

function scrollToAccordion(element) {
  const top = element.getBoundingClientRect().top + window.scrollY - 16;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

let accordionScrollTimer;

projectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedProject = projects[index];
    const willOpen = button.getAttribute("aria-expanded") === "false";

    projects.forEach((project) => {
      setProjectState(project, project === selectedProject && willOpen);
    });
    if (willOpen) {
      window.clearTimeout(accordionScrollTimer);
      accordionScrollTimer = window.setTimeout(() => scrollToAccordion(selectedProject), 520);
    }
  });

  button.addEventListener("keydown", (event) => {
    const keyTargets = {
      ArrowDown: projectButtons[index + 1] ?? projectButtons[0],
      ArrowUp: projectButtons[index - 1] ?? projectButtons.at(-1),
      Home: projectButtons[0],
      End: projectButtons.at(-1)
    };
    const target = keyTargets[event.key];

    if (target) {
      event.preventDefault();
      target.focus();
    }
  });
});

const archiveList = document.querySelector(".archive__list");
const isUkrainian = document.documentElement.lang === "uk";
const recentWorkContentUk = {
  voicli: {
    category: "AI-перекладач зустрічей",
    about: "Voicli — платформа перекладу на основі AI для багатомовних онлайн-зустрічей. Вона дає змогу учасникам, які говорять різними мовами, спілкуватися за допомогою голосового перекладу та субтитрів у браузері.",
    role: ["Front-End розробниця", "UI-дизайнерка", "QA"],
    context: "Продукт створювала команда з двох розробників з нуля. Я відповідала за front-end і працювала безпосередньо з back-end розробником.",
    contribution: "Створила інтерфейс продукту з нуля: UI-дизайн, front-end реалізація, значна частина логіки продукту та end-to-end тестування.",
    focus: ["UI-дизайн", "Front-End розробка", "Логіка продукту та користувацькі сценарії", "Адаптивні інтерфейси", "Сценарії зустрічі та pre-join", "Контакти й керування користувачами", "Онбординг", "Багатомовний інтерфейс", "20 локалей", "Підтримка RTL", "Функціональне тестування", "Тестування UI", "Перевірка edge cases", "SEO та локалізований контент"],
    stack: ["React", "Front-End", "UI", "QA", "i18n"]
  },
  "pas-fou": {
    category: "Платформа оцінки вуглецевого сліду",
    about: "Pas Fou — платформа оцінки вуглецевого сліду на основі динамічної анкети, яка адаптується до кожного користувача та підтримує індивідуальні й сімейні сценарії.",
    role: ["Проєктний менеджмент", "Логіка продукту", "QA"],
    aboutFull: ["Pas Fou — платформа оцінки вуглецевого сліду, що допомагає користувачам розрахувати й зрозуміти свій вплив на довкілля та визначити дії для скорочення викидів.", "В основі продукту — складна динамічна анкета, що охоплює різні сфери повсякденного життя.", "На відміну від лінійного опитування, анкета адаптує структуру до кожного користувача. Відповіді можуть динамічно створювати окремі сутності — наприклад, транспортні засоби або членів домогосподарства — які стають частиною наступних сценаріїв запитань.", "Запитання можуть повторюватися, адаптуватися або відображатися умовно для кожної конкретної сутності.", "Користувачі можуть розрахувати не лише власний слід, а й працювати з членами домогосподарства та відповідати від їхнього імені.", "Після оцінювання користувачі обирають дії для скорочення викидів і відстежують отриманий ефект."],
    contribution: ["Працювала з логікою продукту, вимогами, координацією розробки та тестуванням складної системи на основі анкети.", "Ключовою частиною продукту була динамічна логіка сутностей.", "Наприклад, користувач може вказати, що має три транспортні засоби. Система створює три окремі сутності, користувач може назвати кожну з них, а подальші запитання про транспорт генеруються та опрацьовуються окремо для кожного.", "Такий самий принцип застосовується до членів домогосподарства та інших залежних сценаріїв."],
    focus: ["Логіка продукту та вимоги", "Архітектура складної анкети", "Умовні та залежні сценарії запитань", "Різні типи запитань", "Текстові відповіді", "Числові відповіді", "Динамічні сутності, створені користувачем", "Відповіді для конкретних сутностей", "Сценарії членів домогосподарства", "Функціональне тестування", "Тестування UI", "Перевірка edge cases", "Опис і перевірка помилок", "Координація розробки", "Розрахунок вуглецевого сліду", "Дії та рекомендації зі скорочення викидів"],
    flow: ["Відповідь", "Створення сутностей", "Іменування сутностей", "Генерація залежних запитань", "Збереження відповідей для сутностей"]
  },
  greenverify: { category: "Екологічний B2B-сайт", about: "GreenVerify — B2B-сайт польської компанії, що надає послуги з верифікації та консалтингу у сфері викидів GHG, EU ETS, CBAM та ESG.", role: ["Вебдизайнерка", "WordPress-розробниця"], contribution: "Створила сайт з нуля за мінімальних початкових вимог клієнта. Розробила візуальний напрям, структуру сторінок та UI, а також реалізувала повний багатомовний сайт на WordPress.", focus: ["Вебдизайн", "Структура сторінок", "UI", "Розробка на WordPress", "Адаптивна розробка", "Багатомовний сайт", "Структура контенту"], stack: ["WordPress", "UI", "Адаптивна розробка", "Багатомовність"] },
  yourlifexpert: { category: "E-commerce та wellness-платформа", about: "YourLifeExpert — wellness e-commerce платформа, що поєднує онлайн-магазин, освітній контент і персоналізований користувацький досвід.", role: ["Розробка WordPress / WooCommerce", "UI"], context: "Це був наявний проєкт на WordPress/WooCommerce, а не сайт, створений з нуля.", contribution: "Працювала з наявним сайтом і вдосконалювала ключові частини продукту. Переробила та відновила основні сторінки, покращила онлайн-магазин і налаштувала реєстраційну анкету для збору додаткових даних під час онбордингу.", focus: ["Редизайн ключових сторінок", "Розробка на WordPress", "WooCommerce", "Покращення онлайн-магазину", "Покращення UI", "Реєстраційна анкета", "Сценарій онбордингу", "Підтримка та розвиток наявного проєкту"], stack: ["WordPress", "WooCommerce", "UI"] },
  eccm: { category: "Сайт інвестиційної компанії", about: "ECCM — корпоративний сайт австралійської компанії з кількісного управління інвестиціями.", role: ["Вебдизайнерка", "WordPress-розробниця"], contribution: "Спроєктувала та розробила сайт з нуля відповідно до вимог клієнта. Створила структуру сторінок і візуальний інтерфейс, реалізувала адаптивний сайт на WordPress та інтегрувала HubSpot для керування лідами й контактами.", focus: ["Вебдизайн", "Структура сторінок", "Розробка на WordPress", "Адаптивна розробка", "Реалізація UI", "Інтеграція HubSpot"], stack: ["WordPress", "Front-End", "UI", "HubSpot"] }
};
const archiveLabels = isUkrainian
  ? { about: "ПРО ПРОЄКТ", contribution: "МІЙ ВНЕСОК", focus: "ОСНОВНІ НАПРЯМИ", stack: "СТЕК", visit: "ВІДВІДАТИ САЙТ" }
  : { about: "About the Project", contribution: "My Contribution", focus: "Focus Areas", stack: "Stack", visit: "Visit Website" };
const archiveUk = {
  SalonBeauty: ["Beauty / Освіта", "SalonBeauty — великий сайт про б’юті-освіту з навчальними програмами, курсами, послугами та розгорнутим редакційним контентом.", "Самостійно створила сайт на WordPress із комерційною темою: структуру сторінок, адаптацію візуального стилю, організацію контенту, адаптивну верстку та фінальну реалізацію.", ["Налаштування WordPress", "Кастомізація теми", "Структура сторінок", "Адаптація UI", "Організація контенту", "Адаптивна верстка", "Збірка сайту", "Фінальне тестування"]],
  QP: ["SaaS / Продукт", "QP — внутрішня AI-платформа дослідницького середовища QUAM Institute у Канаді, що об’єднує основні AI-моделі, спільну базу промптів, API-ключі, налаштування моделей, RAG-бази знань, чати та транскрипцію.", "Моя роль поєднує проєктний менеджмент і комплексне ручне тестування AI-платформи: координацію задач, вимоги, логіку продукту, перевірку інтеграцій моделей, ключів, прав доступу, промптів, RAG, документів, чатів і транскрипції, а також регресійне тестування та перевірку виправлень.", ["Проєктний менеджмент", "Координація розробки", "Вимоги та логіка продукту", "Manual QA", "Функціональне тестування", "Регресійне тестування", "Інтеграції AI-моделей", "Перевірка конфігурацій моделей", "Сценарії API-ключів", "Доступи та права команд", "Керування промптами", "RAG-бази знань", "Документи та чати", "Транскрипція", "Edge-case тестування", "Опис помилок", "Перевірка виправлень"]],
  Vikont: ["Комерційний", "Vikont — комерційний сайт української компанії, що спеціалізується на вікнах, дверях і супутніх рішеннях.", "Самостійно створила сайт на WordPress із комерційною темою: структуру сторінок, візуальну адаптацію, подачу товарів і послуг, налаштування розділів та адаптивну реалізацію.", ["Налаштування WordPress", "Кастомізація теми", "Комерційна структура", "Подача товарів і послуг", "Адаптація UI", "Адаптивна розробка", "Налаштування контенту", "Фінальне тестування"]],
  KTF: ["Енергетика / Дослідження", "KTF — корпоративний сайт українського дослідницько-консалтингового центру у сфері енергоефективності, викидів парникових газів, верифікації, ISO та екологічних послуг.", "Самостійно створила сайт на WordPress із комерційною темою: структурувала технічний контент, адаптувала інтерфейс, побудувала необхідні сторінки та реалізувала адаптивність.", ["Налаштування WordPress", "Кастомізація теми", "Складна структура контенту", "Корпоративна архітектура", "Подача послуг", "Адаптація UI", "Адаптивна розробка", "Організація контенту", "Фінальне тестування"]],
  "Metodo Punzo": ["Охорона здоров’я", "Metodo Punzo — італійський медичний сайт про фізіотерапію, спеціалізовані послуги, методи лікування та освітню інформацію для пацієнтів.", "Самостійно створила сайт на WordPress із комерційною темою: структуру сторінок, адаптацію теми до айдентики клініки, організацію медичного контенту та адаптивну реалізацію.", ["Налаштування WordPress", "Кастомізація теми", "Структура медичного контенту", "Сторінки послуг і спеціалістів", "Адаптація UI", "Адаптивна розробка", "Організація контенту", "Фінальне тестування"]],
  "English in Cebu": ["Освітня платформа", "English in Cebu — платформа для пошуку й порівняння шкіл та курсів англійської мови на Себу. Структура пов’язує школи, курси й освітній контент та дає змогу фільтрувати програми за критеріями.", "Самостійно спроєктувала й розробила повністю кастомну тему WordPress із custom post types, таксономіями, custom fields, зв’язками контенту та багатопараметричною системою фільтрації.", ["Кастомна тема WordPress", "Custom post types", "Custom taxonomies", "Custom fields", "Архітектура пов’язаного контенту", "Структура шкіл і курсів", "Багатопараметрична фільтрація", "Логіка вибору курсів", "Кастомні шаблони", "Front-End розробка", "Адаптивні інтерфейси", "Реалізація UI", "Функціональне тестування"]],
  "Alliance Group": ["Корпоративний / B2B", "Alliance Group — корпоративний B2B-сайт, що презентує послуги, експертизу та напрями діяльності компанії.", "Самостійно створила сайт на WordPress із комерційною темою: розробила структуру сторінок, адаптувала дизайн, організувала корпоративний контент і реалізувала адаптивний сайт.", ["Налаштування WordPress", "Кастомізація теми", "Корпоративна структура", "Адаптація UI", "Подача послуг", "Адаптивна розробка", "Організація контенту", "Фінальне тестування"]],
  "Vergleiche.ch": ["Платформа порівняння", "Vergleiche.ch — швейцарська платформа порівняння з великим каталогом товарів і пропозицій багатьох онлайн-магазинів. Для швидкого пошуку об’ємних даних інтегровано Elasticsearch.", "Моя основна роль — проєктний менеджмент і QA. Координувала задачі, вимоги та логіку продукту, тестувала імпорти каталогу, пошук і фільтри, дані з різних джерел, edge cases, документувала помилки та перевіряла виправлення.", ["Проєктний менеджмент", "Координація розробки", "Вимоги та логіка продукту", "Функціональне тестування", "Регресійне тестування", "Тестування імпорту даних", "Великий каталог товарів", "Пошук Elasticsearch", "Пошук і фільтрація", "Узгодженість даних", "Edge-case тестування", "Документування помилок", "Перевірка виправлень"]],
  Belimo: ["Інженерія / E-commerce", "Belimo — застарілий сайт WordPress/WooCommerce з інженерними та автоматизаційними товарами. На початку роботи PHP, ядро WordPress, база даних, тема й плагіни були суттєво застарілими.", "Відновлювала й модернізувала сайт без перебудови з нуля. Планувала безпечну послідовність оновлень PHP, WordPress, WooCommerce, теми та плагінів, тестувала після кожного етапу, замінювала несумісні плагіни, виправляла функціональні й візуальні проблеми та підтримувала сайт.", ["Відновлення legacy WordPress", "Планування оновлень", "Оновлення WordPress / WooCommerce", "Оновлення PHP", "Оновлення теми й плагінів", "Заміна плагінів", "Вирішення сумісності", "Функціональне тестування", "Регресійне тестування", "Виправлення помилок", "Виправлення UI / layout", "Підтримка сайту"]],
  Top20Banks: ["Fintech / Порівняння", "Top20Banks — фінансовий сайт порівняння банківських продуктів та інформації, що надходить із зовнішніх сервісів.", "Створила front-end за готовими дизайнами та інтегрувала зовнішні API для динамічного отримання й відображення фінансових даних.", ["Front-End розробка", "Адаптивна верстка", "Інтеграція API", "Динамічне відображення даних", "Подача фінансових даних", "Реалізація UI", "Кросбраузерне тестування"]],
  UART: ["Мистецтво / Галерея", "UART — артплатформа зі структурованим контентом галереї, художниками, роботами та вибором за категоріями.", "Самостійно створила сайт на WordPress із додатковою кастомною розробкою: custom post types, категорії та структури контенту для організації галереї.", ["Налаштування WordPress", "Кастомізація теми", "Custom post types", "Custom taxonomies / категорії", "Архітектура контенту", "Структура галереї", "Адаптація UI", "Адаптивна розробка", "Організація контенту", "Фінальне тестування"]],
  Enercom: ["Енергетика / Корпоративний", "Enercom — корпоративний сайт компанії, що працює в енергетичному секторі.", "Самостійно спроєктувала й розробила кастомну тему WordPress: структуру сайту, сторінкові шаблони, інтеграцію WordPress, адаптивний front-end і налаштування контенту.", ["Кастомна тема WordPress", "Структура сайту", "Кастомні шаблони", "Front-End розробка", "Інтеграція WordPress", "Адаптивна розробка", "Налаштування контенту", "Реалізація UI", "Фінальне тестування"]],
  ForexListing: ["Фінанси / Порівняння", "ForexListing — фінансовий інформаційний сайт із forex-лістингами та динамічно завантажуваними ринковими даними.", "Створила front-end за готовими дизайнами та інтегрувала зовнішні API для отримання й динамічного відображення фінансових даних і позицій.", ["Front-End розробка", "Адаптивна верстка", "Інтеграція API", "Динамічне відображення даних", "Подача фінансових даних", "Реалізація UI", "Кросбраузерне тестування"]],
  "Loft Dance": ["Освіта", "Loft Dance — сайт танцювальної школи з програмами, заняттями та пов’язаним контентом у візуально орієнтованому інтерфейсі.", "Самостійно спроєктувала й розробила кастомну тему WordPress, створила структуру сторінок, front-end, шаблони, адаптивність і контент.", ["Кастомна тема WordPress", "Вебдизайн", "Структура сторінок", "Кастомні шаблони", "Front-End розробка", "Інтеграція WordPress", "Адаптивна розробка", "Налаштування контенту", "Фінальне тестування"]],
  "Mobiblade China": ["Маркетинг", "Mobiblade China — корпоративний маркетинговий сайт для присутності компанії на китайському ринку.", "Самостійно спроєктувала й розробила кастомну тему WordPress: структуру, інтерфейс, шаблони, інтеграцію WordPress, адаптивність і контент.", ["Кастомна тема WordPress", "Структура сайту", "Вебдизайн", "Кастомні шаблони", "Front-End розробка", "Інтеграція WordPress", "Адаптивна розробка", "Налаштування контенту", "Фінальне тестування"]],
  "Blackridge Capital Management": ["Фінанси", "Blackridge Capital Management — корпоративний сайт інвестиційної компанії. Оригінальна версія сайту більше не працює онлайн.", "Самостійно спроєктувала й розробила оригінальний сайт як кастомну тему WordPress: структуру, візуальну реалізацію, шаблони, інтеграцію, адаптивний front-end і контент.", ["Кастомна тема WordPress", "Корпоративна структура", "Кастомні шаблони", "Front-End розробка", "Інтеграція WordPress", "Адаптивна розробка", "Налаштування контенту", "Реалізація UI", "Фінальне тестування"]],
  "AIGNER Munich": ["Електронна комерція", "AIGNER Munich — міжнародний e-commerce сайт бренду люксової моди на Shopify.", "Самостійно працювала з storefront на Shopify та наявною темою: налаштувала й адаптувала тему, зібрала сторінки, додала товари й контент та виконала необхідні візуальні й функціональні кастомізації.", ["Налаштування Shopify", "Конфігурація теми", "Кастомізація теми", "Збірка сторінок", "Налаштування товарів і контенту", "Організація e-commerce контенту", "UI-налаштування", "Адаптивні перевірки", "Фінальне тестування"]],
  "Beam Bold": ["Електронна комерція", "Beam Bold — e-commerce сайт модного бренду на Shopify.", "Самостійно створила й налаштувала storefront на Shopify з використанням теми: адаптувала тему, зібрала основні сторінки, налаштувала товари й контент та виконала необхідні кастомізації.", ["Налаштування Shopify", "Конфігурація теми", "Кастомізація теми", "Збірка сторінок", "Налаштування товарів", "Наповнення контентом", "E-commerce структура", "UI-налаштування", "Адаптивні перевірки", "Фінальне тестування"]]
};
const archiveProjects = [
  ["SalonBeauty", "Beauty / Education", "WordPress", "Live", "Beauty education platform with courses, services and extensive content.", "https://www.salonbeauty.com.ua/"],
  ["QP", "SaaS / Product", "React / TypeScript / UI", "Internal Use", "Product workspace redesigned as a modern web application with a new UI system and improved user flows."],
  ["Vikont", "Commercial", "WordPress", "Live", "Commercial website for a Ukrainian windows and doors company.", "https://vikontkyiv.com.ua/"],
  ["KTF", "Energy / Research", "WordPress", "Live", "Website for a Ukrainian research center working with energy efficiency, emissions verification, ISO and environmental services.", "https://www.ktf-src.com/"],
  ["Metodo Punzo", "Healthcare", "WordPress", "Live", "Website for an Italian physiotherapy and specialist medicine center with services, specialists and educational content.", "https://metodopunzo.it/"],
  ["English in Cebu", "Education Platform", "Custom WordPress", "Archive", "Education marketplace with schools, courses and accommodation, built with structured content and advanced course selection."],
  ["Alliance Group", "Corporate / B2B", "WordPress", "Live", "Corporate B2B website presenting company services and expertise.", "https://www.alliance-group.com.ua/"],
  ["Vergleiche.ch", "Comparison Platform", "WordPress", "Evolved", "Swiss product and price comparison platform connecting a large catalogue with multiple online stores.", "https://www.vergleiche.ch/"],
  ["Belimo", "Engineering / E-commerce", "WordPress / WooCommerce", "Maintenance", "Legacy WordPress/WooCommerce website restored and maintained after years without updates.", "https://belimo.com.ua/"],
  ["Top20Banks", "Fintech / Comparison", "Web / UI", "Archive", "Financial comparison website designed to organize and compare banking products and information.", "https://top20banks.com/"],
  ["UART", "Art / Gallery", "WordPress / Custom Content", "Archive", "Art platform with structured gallery content, custom post types and category-based selections."],
  ["Enercom", "Energy / Corporate", "WordPress", "Evolved", "Corporate website for an energy-sector company; the original project has since evolved."],
  ["ForexListing", "Finance / Comparison", "Web / UI", "Archive", "Forex information and comparison platform with listings and financial tools including an economic calendar."],
  ["Loft Dance", "Education", "WordPress / UI", "Archive", "Dance education website combining school information, programs and visual promotional content."],
  ["Mobiblade China", "Marketing", "Web / UI", "Archive", "Marketing-focused website created for the Chinese market."],
  ["AIGNER Munich", "E-commerce", "Shopify", "Evolved", "E-commerce work for an international luxury fashion brand.", "https://www.aignermunich.com/"],
  ["Beam Bold", "E-commerce", "Shopify", "Live", "Fashion e-commerce project built on Shopify.", "https://beambold.com/"]
];

const archiveScreenshotFiles = {
  "SalonBeauty": ["salonbeauty-01.webp", "salonbeauty-02.webp", "salonbeauty-03.webp"],
  QP: ["qp-01.webp", "qp-02.webp", "qp-03.webp", "qp-04.webp", "qp-05.webp", "qp-06.webp"],
  Vikont: ["vikont-01.webp", "vikont-02.webp", "vikont-03.webp"],
  KTF: ["ktf-01.webp", "ktf-02.webp", "ktf-03.webp"],
  "Metodo Punzo": ["metodo-punzo-01.webp", "metodo-punzo-02.webp", "metodo-punzo-03.webp"],
  "English in Cebu": ["english-in-cebu-01.webp", "english-in-cebu-02.webp", "english-in-cebu-03.webp", "english-in-cebu-04.webp", "english-in-cebu-05.webp", "english-in-cebu-06.webp"],
  "Alliance Group": ["alliance-group-01.webp", "alliance-group-02.webp", "alliance-group-03.webp"],
  "Vergleiche.ch": ["vergleiche-ch-01.webp", "vergleiche-ch-02.webp", "vergleiche-ch-03.webp"],
  Belimo: ["belimo-01.webp"],
  Top20Banks: ["top20banks-01.webp", "top20banks-02.webp", "top20banks-03.webp"],
  UART: ["uart-01.webp", "uart-02.webp", "uart-03.webp"],
  Enercom: ["enercom-08.webp", "enercom-03.webp", "enercom-04.webp", "enercom-05.webp", "enercom-07.webp", "enercom-02.webp"],
  ForexListing: ["forexlisting-04.webp", "forexlisting-02.webp", "forexlisting-03.webp", "forexlisting-01.webp"],
  "Loft Dance": ["loft-dance-01.webp", "loft-dance-02.webp", "loft-dance-03.webp", "loft-dance-04.webp", "loft-dance-05.webp", "loft-dance-06.webp"],
  "Mobiblade China": ["mobiblade-china-01.webp", "mobiblade-china-02.webp", "mobiblade-china-03.webp", "mobiblade-china-04.webp", "mobiblade-china-05.webp", "mobiblade-china-06.webp"],
  "AIGNER Munich": ["aigner-munich-01.webp", "aigner-munich-02.webp", "aigner-munich-03.webp", "aigner-munich-04.webp"],
  "Beam Bold": ["beam-bold-01.webp", "beam-bold-02.webp", "beam-bold-03.webp"]
};

const archiveCaseDetails = {
  SalonBeauty: {
    about: "SalonBeauty is a large beauty education website combining training programs, course information, services and extensive editorial content.",
    contribution: "Created the website independently using WordPress and a commercial theme. I was responsible for the overall page structure, visual adaptation of the theme, content organization, responsive layout and final implementation.",
    focus: ["WordPress setup", "Theme customization", "Page structure", "UI adaptation", "Content organization", "Responsive layout", "Website assembly", "Final testing"],
    stack: "WordPress / Theme Customization / UI / Content"
  },
  Vikont: {
    about: "Vikont is a commercial website for a Ukrainian company specializing in windows, doors and related solutions.",
    contribution: "Created the website independently in WordPress using a commercial theme. I built the page structure, adapted the visual style to the company, organized product and service content, configured the required sections and completed the responsive implementation.",
    focus: ["WordPress setup", "Theme customization", "Commercial page structure", "Product and service presentation", "UI adaptation", "Responsive development", "Content setup", "Final testing"],
    stack: "WordPress / Theme Customization / UI / Responsive"
  },
  KTF: {
    about: "KTF is a corporate website for a Ukrainian research and consulting center working in energy efficiency, greenhouse gas emissions, verification, ISO standards and environmental services.",
    contribution: "Created the website independently in WordPress using a commercial theme. I structured a large amount of technical and service-related content, adapted the interface and visual hierarchy, built the required pages and completed the responsive implementation.",
    focus: ["WordPress setup", "Theme customization", "Complex content structure", "Corporate website architecture", "Service presentation", "UI adaptation", "Responsive development", "Content organization", "Final testing"],
    stack: "WordPress / Theme Customization / UI / Content Architecture"
  },
  "Metodo Punzo": {
    about: "Metodo Punzo is an Italian healthcare website presenting physiotherapy, specialist medical services, treatment methods and educational information for patients.",
    contribution: "Created the website independently in WordPress using a commercial theme. I built the page structure, adapted the theme to the clinic's visual identity, organized medical and service content and completed the responsive website implementation.",
    focus: ["WordPress setup", "Theme customization", "Healthcare content structure", "Service and specialist pages", "UI adaptation", "Responsive development", "Content organization", "Final testing"],
    stack: "WordPress / Theme Customization / UI / Responsive"
  },
  "Alliance Group": {
    about: "Alliance Group is a corporate B2B website presenting the company's services, expertise and business directions.",
    contribution: "Created the website independently in WordPress using a commercial theme. I developed the page structure, adapted the design to the company's visual style, organized corporate content and implemented the complete responsive website.",
    focus: ["WordPress setup", "Theme customization", "Corporate page structure", "UI adaptation", "Service presentation", "Responsive development", "Content organization", "Final testing"],
    stack: "WordPress / Theme Customization / UI / Responsive"
  },
  UART: {
    about: "UART is an art platform built around structured gallery content, artists, works and category-based selections.",
    contribution: "Created the website independently in WordPress with additional custom development. Alongside theme customization and page building, I created custom post types, custom categories and content structures required for organizing and displaying gallery content.",
    focus: ["WordPress setup", "Theme customization", "Custom post types", "Custom taxonomies / categories", "Content architecture", "Gallery structure", "UI adaptation", "Responsive development", "Content organization", "Final testing"],
    stack: "WordPress / Custom Post Types / Taxonomies / Theme Customization / UI"
  },
  "AIGNER Munich": {
    about: "AIGNER Munich is an international luxury fashion e-commerce website built on Shopify.",
    contribution: "Worked independently on the Shopify storefront using an existing theme. I configured and adapted the theme, assembled and adjusted page layouts, added and organized store content and products, and made minor visual and functional customizations where required.",
    focus: ["Shopify setup", "Theme configuration", "Theme customization", "Page assembly", "Product and content setup", "E-commerce content organization", "UI adjustments", "Responsive checks", "Final testing"],
    stack: "Shopify / Theme Customization / E-commerce / Content"
  },
  "Beam Bold": {
    about: "Beam Bold is a fashion e-commerce website built on Shopify.",
    contribution: "Created and configured the storefront independently using a Shopify theme. I adapted the theme, assembled the main pages, configured and populated the store content and products, and made minor customizations to support the required visual presentation and user experience.",
    focus: ["Shopify setup", "Theme configuration", "Theme customization", "Page assembly", "Product setup", "Content population", "E-commerce structure", "UI adjustments", "Responsive checks", "Final testing"],
    stack: "Shopify / Theme Customization / E-commerce / Content"
  },
  "English in Cebu": {
    about: "English in Cebu is an education platform for finding and comparing English language schools and courses in Cebu. The website was built around a structured system connecting schools, courses and related educational content, allowing users to explore available options and find programs based on specific criteria.",
    contribution: "Designed and developed the website independently as a fully custom WordPress theme. I created the content architecture using custom post types, taxonomies and custom fields, building relationships between schools, courses and their characteristics. The project included a custom filtering and selection system that allowed users to search and compare educational options based on multiple parameters. The entire front-end, WordPress structure, templates and responsive interface were implemented specifically for the project rather than assembled from a commercial theme.",
    focus: ["Custom WordPress theme development", "Custom post types", "Custom taxonomies", "Custom fields", "Related content architecture", "Schools and courses data structure", "Multi-parameter filtering", "Course selection logic", "Custom templates", "Front-end development", "Responsive interfaces", "UI implementation", "Content architecture", "Functional testing"],
    stack: "WordPress / PHP / HTML / CSS / JavaScript / Custom Post Types / Taxonomies / Custom Fields"
  },
  Enercom: {
    about: "Enercom is a corporate website created for a company operating in the energy sector.",
    contribution: "Designed and developed the website independently as a custom WordPress theme. I was responsible for the website structure, visual implementation, custom page templates, WordPress integration, responsive front-end and content setup.",
    focus: ["Custom WordPress theme", "Website structure", "Custom page templates", "Front-end development", "WordPress integration", "Responsive development", "Content setup", "UI implementation", "Final testing"],
    stack: "WordPress / Custom Theme / HTML / CSS / JavaScript"
  },
  "Loft Dance": {
    about: "Loft Dance is a website created for a dance school, presenting its programs, classes and related content through a visually focused interface.",
    contribution: "Designed and developed the website independently as a custom WordPress theme. I created the page structure and visual interface, implemented the front-end and WordPress templates, and prepared the responsive website and its content.",
    focus: ["Custom WordPress theme", "Web design", "Page structure", "Custom templates", "Front-end development", "WordPress integration", "Responsive development", "Content setup", "Final testing"],
    stack: "WordPress / Custom Theme / HTML / CSS / JavaScript / UI"
  },
  "Mobiblade China": {
    about: "Mobiblade China is a marketing-focused corporate website created for the company's presence in the Chinese market.",
    contribution: "Designed and developed the website independently as a custom WordPress theme. I handled the website structure, interface implementation, custom templates, WordPress integration, responsive development and content setup.",
    focus: ["Custom WordPress theme", "Website structure", "Web design", "Custom templates", "Front-end development", "WordPress integration", "Responsive development", "Content setup", "Final testing"],
    stack: "WordPress / Custom Theme / HTML / CSS / JavaScript / UI"
  },
  QP: {
    about: "QP is an internal AI platform developed for the research environment of the QUAM Institute in Canada. The platform brings together access to most major AI models within a single workspace and provides a shared prompt database for research and team use. Users can work with shared API keys, their own keys or keys assigned to a specific team. Each AI model includes extensive configuration options, allowing users to create highly customized setups and control model-specific parameters such as Top K and many other generation settings. QP also supports custom RAG knowledge bases built from users' own documents and chat conversations, allowing AI models to work with project-specific information and research materials. The platform also includes transcription functionality and tools for organizing AI-assisted workflows.",
    role: ["Project Manager", "QA"],
    contribution: "My role combines project management and comprehensive manual testing of a complex AI platform. I coordinate development tasks, work with requirements and product logic, review implementations and test new and existing functionality across the system. A significant part of the work involves testing interactions between different AI models, model configurations, API key scenarios, team permissions, prompt management, RAG knowledge bases, document processing, chat workflows and transcription. Because many features are interconnected and can behave differently depending on the selected model, configuration, user or team context, testing also includes regression testing, edge cases and verification of related functionality after changes.",
    focus: ["Project management", "Development coordination", "Requirements and product logic", "Manual QA", "Functional testing", "Regression testing", "AI model integrations", "Model configuration testing", "API key scenarios", "Team access and permissions", "Prompt management", "RAG knowledge bases", "Document-based knowledge", "Chat workflows", "Transcription", "Edge-case testing", "Bug reporting", "Fix verification"],
    stack: "Project Management / QA / AI Models / RAG / API Integrations"
  },
  Top20Banks: {
    about: "Top20Banks is a financial comparison website presenting banking products and related information using data received from external services.",
    contribution: "Built the website front-end from provided designs and integrated external APIs used to retrieve and display financial data and selected positions dynamically.",
    focus: ["Front-end development", "Responsive layout", "API integration", "Dynamic data rendering", "Financial data presentation", "UI implementation", "Cross-browser testing"],
    stack: "HTML / CSS / JavaScript / REST API"
  },
  ForexListing: {
    about: "ForexListing is a financial information and comparison website presenting forex-related listings and dynamically loaded market information.",
    contribution: "Built the website front-end from provided designs and integrated external APIs used to retrieve and display the required financial data and positions. The project included data-driven sections such as listings and financial information displayed dynamically through API integrations.",
    focus: ["Front-end development", "Responsive layout", "API integration", "Dynamic data rendering", "Financial data presentation", "UI implementation", "Cross-browser testing"],
    stack: "HTML / CSS / JavaScript / REST API"
  },
  Belimo: {
    about: "Belimo is a legacy WordPress/WooCommerce website for engineering and automation products. When I started working with the project, the website had not been technically maintained for years: the PHP version, WordPress core, database environment, theme and numerous plugins were all significantly outdated.",
    contribution: "My work focused on recovering and modernizing the existing website without rebuilding it from scratch. The main challenge was planning a safe update sequence across an old and highly dependent WordPress environment. PHP, WordPress, WooCommerce, the theme and plugins could not simply be updated all at once without risking compatibility issues or breaking the website. I worked through the updates step by step, testing the website after each stage and resolving issues as they appeared. Some legacy plugins were no longer compatible or maintained, so suitable replacements had to be identified, configured and tested. After restoring the technical environment, I also fixed resulting functional and visual issues and continued maintaining the website.",
    focus: ["Legacy WordPress recovery", "Update planning and sequencing", "WordPress / WooCommerce updates", "PHP environment updates", "Theme and plugin updates", "Plugin replacement", "Compatibility troubleshooting", "Functional testing", "Regression testing", "Bug fixing", "UI / layout fixes", "Website maintenance"],
    stack: "WordPress / WooCommerce / Avada / PHP / MySQL / QA / Maintenance"
  },
  "Vergleiche.ch": {
    about: "Vergleiche.ch is a Swiss comparison platform built around a large product catalogue containing data and offers from multiple online stores. One of the key technical challenges was handling and searching a large volume of product data. Elasticsearch was integrated into the project to provide efficient catalogue search.",
    contribution: "My primary role in the project was project management and QA. I did not participate in the website's front-end implementation. I coordinated development tasks and changes, worked with requirements and product logic, reviewed implementations and tested functionality across the platform. A significant part of the work involved testing catalogue imports, large volumes of product data, search and filtering behavior, Elasticsearch-based search, product and offer presentation, and various edge cases caused by data coming from different sources. I identified and documented issues, coordinated fixes with developers and verified implementations after changes.",
    focus: ["Project management", "Development coordination", "Requirements and product logic", "Functional testing", "Regression testing", "Data import testing", "Large product catalogue", "Elasticsearch search", "Search and filtering", "Data consistency", "Edge-case testing", "Bug reporting", "Fix verification"],
    stack: "Project Management / QA / WordPress / Elasticsearch"
  }
};

if (archiveList) {
  archiveList.replaceChildren();
  archiveProjects.forEach((project, index) => {
    const [name, categoryValue, technology, status, descriptionValue, url] = project;
    const ukData = isUkrainian ? archiveUk[name] : null;
    const category = ukData?.[0] || categoryValue;
    const description = ukData?.[1] || descriptionValue;
    const id = `archive-details-${index + 1}`;
    const item = document.createElement("li");
    item.className = "archive__item";
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const screenshots = archiveScreenshotFiles[name] || [];
    const baseCaseDetails = archiveCaseDetails[name];
    const caseDetails = ukData ? { ...(baseCaseDetails || {}), about: ukData[1], contribution: ukData[2], focus: ukData[3] } : baseCaseDetails;
    const focus = caseDetails?.focus?.length ? `<h3>${archiveLabels.focus}</h3><ul class="archive__focus">${caseDetails.focus.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
    const stack = caseDetails?.stack ? `<h3>${archiveLabels.stack}</h3><p>${caseDetails.stack}</p>` : "";
    const about = caseDetails?.about || description;
    const role = caseDetails?.role?.length ? `<h3>${isUkrainian ? "МОЯ РОЛЬ" : "My Role"}</h3><ul class="archive__focus">${caseDetails.role.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
    const contribution = caseDetails?.contribution || (isUkrainian ? "Деталі буде додано." : "Details will be added.");
    const gallery = screenshots.length
      ? `<h3>${isUkrainian ? "СКРИНШОТИ ПРОЄКТУ" : "Project Screenshots"}</h3><div class="archive__gallery">${screenshots.map((file, shotIndex) => `<img src="assets/images/projects/portfolio-screenshots/project-archive/${slug}/${file}" alt="${isUkrainian ? `${name} — скриншот проєкту ${shotIndex + 1}` : `${name} project screenshot ${shotIndex + 1}`}" loading="lazy">`).join("")}</div>`
      : "";
    const localizedStatus = isUkrainian ? { Live: "ОНЛАЙН", Archive: "АРХІВ", Evolved: "ПРОЄКТ ЗМІНИВСЯ", Maintenance: "ПІДТРИМКА", "Internal Use": "ВНУТРІШНЄ ВИКОРИСТАННЯ" }[status] || status : status;
    item.innerHTML = `<button class="archive__row" type="button" aria-expanded="false" aria-controls="${id}"><span class="archive__name">${name}</span><span class="archive__category">${category}</span><span class="archive__technology">${technology}</span><span class="archive__status${status === "Live" ? " archive__status--live" : ""}">${localizedStatus}</span><span class="archive__arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4 12h16M14 6l6 6-6 6" /></svg></span></button><div class="archive__details" id="${id}" role="region" aria-hidden="true"><div class="archive__details-inner"><div><h3>${archiveLabels.about}</h3><p>${about}</p>${role}<h3>${archiveLabels.contribution}</h3><p>${contribution}</p>${focus}${stack}</div><div>${gallery}${url ? `<a class="archive__visit" href="${url}" target="_blank" rel="noopener noreferrer">${archiveLabels.visit} ↗</a>` : ""}</div></div></div>`;
    archiveList.append(item);
  });

  const rows = [...archiveList.querySelectorAll(".archive__row")];
  rows.forEach((row) => row.addEventListener("click", () => {
    const willOpen = row.getAttribute("aria-expanded") === "false";
    rows.forEach((other) => {
      const open = other === row && willOpen;
      const details = document.getElementById(other.getAttribute("aria-controls"));
      other.setAttribute("aria-expanded", String(open));
      details.setAttribute("aria-hidden", String(!open));
      other.closest(".archive__item").classList.toggle("archive__item--open", open);
    });
    if (willOpen) {
      const item = row.closest(".archive__item");
      window.clearTimeout(accordionScrollTimer);
      accordionScrollTimer = window.setTimeout(() => scrollToAccordion(item), 470);
    }
  }));
}

if (isUkrainian) {
  const recentProjects = [...document.querySelectorAll(".works > .project")];
  const recentKeys = ["voicli", "pas-fou", "greenverify", "yourlifexpert", "eccm"];
  const labels = { about: "ПРО ПРОЄКТ", role: "МОЯ РОЛЬ", context: "КОНТЕКСТ ПРОЄКТУ", contribution: "МІЙ ВНЕСОК", focus: "ОСНОВНІ НАПРЯМИ", stack: "СТЕК", live: "ВІДВІДАТИ САЙТ", screenshots: "СКРИНШОТИ ПРОЄКТУ", logic: "ДИНАМІЧНА ЛОГІКА ЗАПИТАНЬ" };
  recentProjects.forEach((project, index) => {
    const data = recentWorkContentUk[recentKeys[index]];
    if (!data) return;
    project.querySelector(".project__category").textContent = data.category;
    const summaryLabel = project.querySelector(".project__summary-about-label");
    if (summaryLabel) summaryLabel.textContent = labels.about;
    const summaryText = project.querySelector(".project__summary-about > span:last-child");
    if (summaryText) summaryText.textContent = data.about;
    const details = project.querySelector(".project__details");
    details.querySelectorAll("h3").forEach((heading) => {
      const key = heading.textContent.trim().toLowerCase();
      const translated = key.includes("my role") ? labels.role : key.includes("project context") ? labels.context : key.includes("my contribution") ? labels.contribution : key.includes("focus areas") ? labels.focus : key === "stack" ? labels.stack : key.includes("dynamic question") ? labels.logic : key.includes("about the project") ? labels.about : null;
      if (translated) heading.textContent = translated;
    });
    const blocks = [...details.querySelectorAll(".project__block")];
    const roleBlock = blocks.find((block) => block.querySelector("h3")?.textContent === labels.role);
    if (roleBlock && data.role) roleBlock.querySelectorAll("li").forEach((li, i) => { li.textContent = data.role[i] || li.textContent; });
    const contextBlock = blocks.find((block) => block.querySelector("h3")?.textContent === labels.context);
    if (contextBlock && data.context) contextBlock.querySelector("p").textContent = data.context;
    const contributionBlock = blocks.find((block) => block.querySelector("h3")?.textContent === labels.contribution);
    if (contributionBlock && data.contribution) {
      const contribution = Array.isArray(data.contribution) ? data.contribution : [data.contribution];
      const paragraphs = [...contributionBlock.querySelectorAll("p")];
      paragraphs.forEach((p, i) => {
        if (contribution[i]) p.textContent = contribution[i];
        else p.remove();
      });
    }
    const aboutBlock = blocks.find((block) => block.querySelector("h3")?.textContent === labels.about);
    if (aboutBlock && data.aboutFull) {
      const heading = aboutBlock.querySelector("h3");
      aboutBlock.replaceChildren(heading, ...data.aboutFull.map((text) => { const p = document.createElement("p"); p.textContent = text; return p; }));
    }
    const focusBlock = blocks.find((block) => block.querySelector("h3")?.textContent === labels.focus);
    if (focusBlock && data.focus) focusBlock.querySelectorAll("li").forEach((li, i) => { li.textContent = data.focus[i] || li.textContent; });
    const stackBlock = blocks.find((block) => block.querySelector("h3")?.textContent === labels.stack);
    if (stackBlock && data.stack) stackBlock.querySelectorAll("li").forEach((li, i) => { li.textContent = data.stack[i] || li.textContent; });
    if (data.flow) {
      const flow = details.querySelector(".project__flow");
      if (flow) flow.querySelectorAll("li").forEach((li, i) => { li.textContent = data.flow[i] || li.textContent; });
    }
    const gallery = details.querySelector(".project__gallery");
    if (gallery) gallery.setAttribute("aria-label", `${project.querySelector(".project__title").textContent.trim()} — скриншоти проєкту`);
    const live = details.querySelector(".project__live");
    if (live) live.childNodes[0].textContent = `${labels.live} `;
  });
}
