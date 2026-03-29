// ── DATA ──────────────────────────────────────────────────────────────────────

const skillsData = {
  languages: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  frameworks: [
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  mlai: [
    { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "NLTK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  concepts: [
    { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "DBMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "OOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ],
};

const projects = [
  {
    title: "Spam Shield",
    desc: "End-to-end NLP-based email/SMS classifier deployed on Heroku. Achieves 97% accuracy across 10+ classification algorithms using TF-IDF vectorization and NLTK preprocessing.",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    tags: ["Python", "Scikit-Learn", "NLTK", "Streamlit", "NLP"],
    github: "https://github.com/ameerbasha2/email-spam-classifier",
    demo: null,
  },
  {
    title: "Agri Predict",
    desc: "Data-driven fertilizer recommendation system that analyzes soil NPK values and environmental factors to suggest optimal fertilizers for crops using ML classification.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    tags: ["Python", "Flask", "Scikit-Learn", "Pandas", "HTML/CSS/JS"],
    github: "https://github.com/ameerbasha2/-Optimal-Fertiliser-Prediction",
    demo: null,
  },
  {
    title: "Database Architecture",
    desc: "Scalable schema design and data modeling project featuring ERDs, rigorous normalization (1NF–3NF), and optimized query structures reducing logic errors by ~30%.",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
    tags: ["SQL", "PostgreSQL", "DBML", "ERD", "Normalization"],
    github: "https://github.com/ameerbasha2/Database-Schema-Design",
    demo: null,
  },
];

const certificates = [
  { name: "A Guide to Machine Learning with Data Science", issuer: "Cipher Schools · Jul 2025", icon: "fa-brain", url: "https://www.linkedin.com/in/shaik-ameer-basha/overlay/Certifications/1503182963/treasury/?profileId=ACoAAF8rCsUB9JMR9A9QvKHpNw-cbBp3p35hPSw" },
  { name: "A Roadmap to Data Science", issuer: "Cipher Schools · Jul 2025", icon: "fa-chart-line" },
  { name: "The Bits and Bytes of Computer Networking", issuer: "Coursera / Google · Jan 2024", icon: "fa-network-wired" },
];

const achievements = [
  { icon: "🏆", title: "DSA Excellence", desc: "Solved 200+ problems across LeetCode and GeeksForGeeks." },
  { icon: "⚡", title: "Competitive Programming", desc: "Achieved 1304 rating on CodeChef through consistent contest participation." },
  { icon: "🤖", title: "ML Projects", desc: "Built and deployed 3+ ML applications for real-time predictions." },
  { icon: "🎓", title: "Intermediate Excellence", desc: "Scored 85.2% in Intermediate (PCM) at Sri Chaithanya Junior College." },
];

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech – Computer Science & Engineering (Hons)",
    location: "Phagwara, Punjab",
    score: "CGPA: 6.82",
    period: "Since Aug 2023",
  },
  {
    school: "Sri Chaithanya Junior College",
    degree: "Intermediate",
    location: "Vijayawada, Andhra Pradesh",
    score: "85.2%",
    period: "Jun 2021 – Apr 2023",
  },
  {
    school: "Dr. KKR's Gowtham EM High School",
    degree: "Matriculation",
    location: "Guntur, Andhra Pradesh",
    score: "",
    period: "Jun 2020 – May 2021",
  },
];

const codingPlatforms = [
  { name: "LeetCode", detail: "200+ Problems", icon: "fa-code", url: "https://leetcode.com" },
  { name: "GeeksForGeeks", detail: "DSA Practice", icon: "fa-laptop-code", url: "https://geeksforgeeks.org" },
  { name: "CodeChef", detail: "Rating: 1304", icon: "fa-trophy", url: "https://codechef.com" },
  { name: "GitHub", detail: "@ameerbasha2", icon: "fa-brands fa-github", url: "https://github.com/ameerbasha2" },
];

// ── RENDER ─────────────────────────────────────────────────────────────────────

function renderSkills(tab) {
  const grid = document.getElementById("skillGrid");
  grid.innerHTML = skillsData[tab]
    .map(s => `<div class="skill-chip reveal">
      <img src="${s.icon}" alt="${s.name}" onerror="this.style.display='none'" />
      ${s.name}
    </div>`).join("");
  observeReveal();
}

function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <img class="project-img" src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-links">
          <a href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ""}
        </div>
      </div>
    </div>`).join("");
}

function renderCerts() {
  document.getElementById("certGrid").innerHTML = certificates.map(c => `
    <div class="cert-card reveal">
      <div class="cert-icon"><i class="fas ${c.icon}"></i></div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        ${c.url ? `<a href="${c.url}" target="_blank" class="cert-link"><i class="fas fa-external-link-alt"></i> View Certificate</a>` : ""}
      </div>
    </div>`).join("");
}

function renderAchievements() {
  document.getElementById("achieveGrid").innerHTML = achievements.map(a => `
    <div class="achieve-card reveal">
      <div class="achieve-icon">${a.icon}</div>
      <div class="achieve-title">${a.title}</div>
      <div class="achieve-desc">${a.desc}</div>
    </div>`).join("");
}

function renderEducation() {
  document.getElementById("eduList").innerHTML = education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-left">
        <div class="edu-school">${e.school}</div>
        <div class="edu-degree">${e.degree}</div>
      </div>
      <div class="edu-right">
        <div class="edu-location">${e.location}</div>
        ${e.score ? `<div class="edu-score">${e.score}</div>` : ""}
        <div class="edu-period">${e.period}</div>
      </div>
    </div>`).join("");
}

function renderCoding() {
  document.getElementById("codingGrid").innerHTML = codingPlatforms.map(p => `
    <a class="coding-card reveal" href="${p.url}" target="_blank">
      <div class="coding-icon"><i class="fas ${p.icon}"></i></div>
      <div>
        <div class="coding-name">${p.name}</div>
        <div class="coding-detail">${p.detail}</div>
      </div>
    </a>`).join("");
}

// ── TYPEWRITER ─────────────────────────────────────────────────────────────────

const roles = ["Python Developer", "ML Engineer", "Data Science Enthusiast", "Problem Solver"];
let ri = 0, ci = 0, deleting = false;
function typewrite() {
  const el = document.getElementById("typewriter");
  const word = roles[ri];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(typewrite, 1800); return; }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(typewrite, deleting ? 60 : 100);
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────────

function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

// ── TABS ───────────────────────────────────────────────────────────────────────

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.dataset.tab);
  });
});

// ── NAV TOGGLE ─────────────────────────────────────────────────────────────────

document.getElementById("navToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// ── CONTACT FORM ───────────────────────────────────────────────────────────────

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.textContent = "Message Sent ✓";
  btn.style.background = "#22c55e";
  setTimeout(() => { btn.textContent = "Send Message"; btn.style.background = ""; e.target.reset(); }, 3000);
});

// ── INIT ───────────────────────────────────────────────────────────────────────

renderSkills("languages");
renderProjects();
renderCerts();
renderAchievements();
renderEducation();
renderCoding();
typewrite();
observeReveal();
