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

projectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedProject = projects[index];
    const willOpen = button.getAttribute("aria-expanded") === "false";

    projects.forEach((project) => {
      setProjectState(project, project === selectedProject && willOpen);
    });
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
    const [name, category, technology, status, description, url] = project;
    const id = `archive-details-${index + 1}`;
    const item = document.createElement("li");
    item.className = "archive__item";
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const screenshots = archiveScreenshotFiles[name] || [];
    const caseDetails = archiveCaseDetails[name];
    const focus = caseDetails?.focus?.length ? `<h3>Focus Areas</h3><ul class="archive__focus">${caseDetails.focus.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
    const stack = caseDetails?.stack ? `<h3>Stack</h3><p>${caseDetails.stack}</p>` : "";
    const about = caseDetails?.about || description;
    const role = caseDetails?.role?.length ? `<h3>My Role</h3><ul class="archive__focus">${caseDetails.role.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
    const contribution = caseDetails?.contribution || "Details will be added.";
    const gallery = screenshots.length
      ? `<h3>Project Screenshots</h3><div class="archive__gallery">${screenshots.map((file, shotIndex) => `<img src="assets/images/projects/portfolio-screenshots/project-archive/${slug}/${file}" alt="${name} project screenshot ${shotIndex + 1}" loading="lazy">`).join("")}</div>`
      : "";
    item.innerHTML = `<button class="archive__row" type="button" aria-expanded="false" aria-controls="${id}"><span class="archive__name">${name}</span><span class="archive__category">${category}</span><span class="archive__technology">${technology}</span><span class="archive__status${status === "Live" ? " archive__status--live" : ""}">${status}</span><span class="archive__arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4 12h16M14 6l6 6-6 6" /></svg></span></button><div class="archive__details" id="${id}" role="region" aria-hidden="true"><div class="archive__details-inner"><div><h3>About the Project</h3><p>${about}</p>${role}<h3>My Contribution</h3><p>${contribution}</p>${focus}${stack}</div><div>${gallery}${url ? `<a class="archive__visit" href="${url}" target="_blank" rel="noopener noreferrer">Visit Website ↗</a>` : ""}</div></div></div>`;
    archiveList.append(item);
  });

  const rows = [...archiveList.querySelectorAll(".archive__row")];
  rows.forEach((row) => row.addEventListener("click", () => {
    rows.forEach((other) => {
      const open = other === row && other.getAttribute("aria-expanded") === "false";
      const details = document.getElementById(other.getAttribute("aria-controls"));
      other.setAttribute("aria-expanded", String(open));
      details.setAttribute("aria-hidden", String(!open));
      other.closest(".archive__item").classList.toggle("archive__item--open", open);
    });
  }));
}
