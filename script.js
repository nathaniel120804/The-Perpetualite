// ==============================
// The Perpetualite - script.js
// ==============================

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- SHEET URLS ----------------
const sheetURLPosts = "https://script.google.com/macros/s/AKfycbx6_ROHGXnTko2lXNSG1-heeiY1E-Gl_Uvv2uu6z49jqPEpUNnqvf75y-djPem3y1y1/exec";
const sheetURLHero  = "https://script.google.com/macros/s/AKfycbz7Lj3VQ2mOWeswjqYOaeSIQQaqiBvqz74UoBTCiDaBGUeFRGuWH5FW5E_8Aup_HokhMA/exec";

// ---------------- GLOBAL STATE ----------------
let samplePosts = [];

// Categories map
const categories = {
  news: 'newsGrid',
  features: 'featuresGrid',
  literary: 'literaryGrid',
  editorial: 'editorialGrid',
  opinion: 'opinionGrid',
  multimedia: 'multimediaGrid'
};

// ---------------- HELPERS ----------------
function normalizeRow(row) {
  const normalized = {};
  Object.keys(row).forEach(k => {
    normalized[k.trim().toLowerCase()] = row[k];
  });
  return normalized;
}

function formatDate(dateString) {
  if (!dateString) return 'No date';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateString;
  }
}

// Format content with line breaks
function formatContentWithLineBreaks(content) {
  if (!content) return '';
  // Replace newlines with <br> tags
  return content.replace(/\n/g, '<br>');
}

// ---------------- POSTS ----------------
function renderAll() {
  Object.values(categories).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });

  samplePosts.forEach(p => {
    const grid = document.getElementById(categories[p.category]);
    if (!grid) return;

    const el = document.createElement('article');
    el.className = 'article-card';
    const imageUrl = p.image ? p.image.trim() : '';
    const hasImage = imageUrl !== '';

    el.innerHTML = `
      ${hasImage
        ? `<div class="thumb" style="background-image:url('${imageUrl}')"></div>`
        : `<div class="thumb" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center"><span>No Image</span></div>`}
      <div class="content">
        <h4 data-id="${p.id}">${p.title}</h4>
        <div class="meta">${p.author} · ${formatDate(p.date)}</div>
        <p style="color:var(--muted);margin-top:8px">${p.excerpt}</p>
        <a href="#" class="btn" onclick="openArticle(${p.id}); return false;">Read More</a>
      </div>
    `;
    grid.appendChild(el);
  });

  renderTrending();
  renderTags();
  populateMarquee();
}

// ---------------- TRENDING ----------------
function renderTrending() {
  const trendingList = document.getElementById('trendingList');
  if (!trendingList) return;
  trendingList.innerHTML = '';

  const trendingPosts = samplePosts
    .filter(p => p.trending === "yes")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (!trendingPosts.length) {
    trendingList.innerHTML = '<li>No trending articles found</li>';
  } else {
    trendingPosts.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" onclick="openArticle(${p.id}); return false;">${p.title}</a>`;
      trendingList.appendChild(li);
    });
  }
}

// ---------------- TAGS ----------------
function renderTags() {
  const tags = new Set();
  samplePosts.forEach(p => {
    if (p.tags) p.tags.split(',').map(t => t.trim()).forEach(t => tags.add(t));
  });
  const tagsList = document.getElementById('tagsList');
  if (!tagsList) return;
  tagsList.innerHTML = '';
  Array.from(tags).slice(0, 12).forEach(t => {
    const b = document.createElement('div');
    b.className = 'tag';
    b.textContent = t;
    tagsList.appendChild(b);
  });
}

// ---------------- OPEN ARTICLE ----------------
function openArticle(id) {
  const post = samplePosts.find(s => s.id == id);
  if (!post) return;

  const container = document.getElementById('articleContent');
  const imageUrl = post.image ? post.image.trim() : '';
  const hasImage = imageUrl !== '';

  container.innerHTML = `
    <h2 class="article-title">${post.title}</h2>
    <div class="article-meta">${post.author} · ${formatDate(post.date)}</div>
    ${hasImage
      ? `<div class="article-hero-image" style="background-image:url('${imageUrl}')"></div>`
      : `<div class="article-hero-image" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center"><span>No Image Available</span></div>`}
    <div class="article-body">${formatContentWithLineBreaks(post.content)}</div>
    <div style="margin-top:12px;color:var(--muted)">
      <strong>Tags:</strong> ${post.tags ? post.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join(' ') : ''}
    </div>
  `;

  document.getElementById('articleView').hidden = false;
  document.getElementById('articleView').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('closeArticle').addEventListener('click', () => {
  document.getElementById('articleView').hidden = true;
});

// ---------------- SEARCH ----------------
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { renderAll(); return; }

  Object.values(categories).forEach(id => document.getElementById(id).innerHTML = '');
  samplePosts.filter(p => (p.title+p.excerpt+p.author+p.category).toLowerCase().includes(q)).forEach(p => {
    const grid = document.getElementById(categories[p.category]) || document.getElementById('newsGrid');
    const el = document.createElement('article');
    el.className = 'article-card';
    const imageUrl = p.image ? p.image.trim() : '';
    const hasImage = imageUrl !== '';
    el.innerHTML = `
      ${hasImage
        ? `<div class="thumb" style="background-image:url('${imageUrl}')"></div>`
        : `<div class="thumb" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center"><span>No Image</span></div>`}
      <div class="content">
        <h4 data-id="${p.id}">${p.title}</h4>
        <div class="meta">${p.author} · ${formatDate(p.date)}</div>
        <p style="color:var(--muted);margin-top:8px">${p.excerpt}</p>
        <a href="#" class="btn" onclick="openArticle(${p.id}); return false;">Read More</a>
      </div>
    `;
    grid.appendChild(el);
  });
});

// ---------------- MENU SCROLL ----------------
document.querySelectorAll('nav.primary a').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const tab = a.dataset.tab;
  if(tab==='home') document.getElementById('home').scrollIntoView({behavior:'smooth'});
  else if(tab==='about') document.getElementById('about').scrollIntoView({behavior:'smooth'});
  else {
    const map={news:'newsSection',features:'featuresSection',literary:'literarySection',editorial:'editorialSection',opinion:'opinionSection',multimedia:'multimediaSection'};
    const el=document.getElementById(map[tab]);
    if(el) el.scrollIntoView({behavior:'smooth'});
  }
  document.querySelectorAll('nav.primary a').forEach(n=>n.classList.remove('active'));
  a.classList.add('active');
}));

// ---------------- MARQUEE ----------------
function populateMarquee() {
  const marquee = document.getElementById('categoryMarquee');
  if(!marquee) return;
  marquee.innerHTML = '';
  Object.keys(categories).forEach(cat=>{
    samplePosts.filter(p=>p.category===cat).slice(0,3).forEach(p=>{
      const a=document.createElement('a');
      a.href="#";
      a.textContent=`[${cat.toUpperCase()}] ${p.title}`;
      a.dataset.id=p.id;
      a.addEventListener('click', e=>{ e.preventDefault(); openArticle(p.id); });
      marquee.appendChild(a);
    });
  });
}

// ---------------- LOAD POSTS ----------------
async function loadFromSheet() {
  try {
    const res = await fetch(sheetURLPosts);
    const rows = await res.json();
    if(!Array.isArray(rows) || rows.length===0) return;

    samplePosts = rows.map((r,i)=>{
      const row = normalizeRow(r);
      return {
        id: i+1,
        title: row.title || row.headline || "Untitled",
        excerpt: row.excerpt || row.lead || "",
        author: row.author || "Unknown",
        category: (row.category || "news").toLowerCase(),
        date: row.date || "",
        image: row.image || row.imageurl || "",
        tags: row.tags || "",
        content: row.content || "",
        trending: (row.trending || "no").toLowerCase()
      };
    }).sort((a,b)=>new Date(b.date)-new Date(a.date));

    renderAll();
  } catch(err) { console.error("Error loading posts:", err); }
}

// ---------------- LOAD HERO & HIGHLIGHTS ----------------
async function loadHeroAndHighlights() {
  try {
    const res = await fetch(sheetURLHero);
    const rows = await res.json();
    if(!Array.isArray(rows) || rows.length===0) return;

    const hero = normalizeRow(rows[0]);
    const heroContent = document.getElementById("heroContent");
    heroContent.innerHTML = `
      <span class="kicker">Top Story</span>
      <h1 class="headline">${hero.title||"Untitled"}</h1>
      <p class="lead">${hero.lead||hero.excerpt||""}</p>
      ${hero.image||hero.imageurl
        ? `<div class="media" style="background-image:url('${hero.image||hero.imageurl}')"></div>`
        : `<div class="media" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center"><span>No Image</span></div>`}
      <a href="${hero.link||""}" class="btn">Read More</a>
    `;

    const highlightsGrid = document.getElementById("highlights");
    highlightsGrid.innerHTML = "";
    rows.slice(1,4).forEach(h=>{
      const row = normalizeRow(h);
      const card = document.createElement("div");
      card.className = "article-card";
      card.innerHTML = `
        ${row.image||row.imageurl
          ? `<div class="thumb" style="background-image:url('${row.image||row.imageurl}')"></div>`
          : `<div class="thumb" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center"><span>No Image</span></div>`}
        <div class="content">
          <h4>${row.title||"Untitled"}</h4>
          <p>${row.lead||row.excerpt||""}</p>
          <a href="${row.link||""}" class="btn">Read More</a>
        </div>
      `;
      highlightsGrid.appendChild(card);
    });

    // ---------------- HERO & HIGHLIGHT BUTTON + IMAGE CSS INJECTION ----------------
    const heroStyle = document.createElement("style");
    heroStyle.textContent = `
      #heroContent .media { border-radius: var(--radius); overflow: hidden; }
      #heroContent .btn { margin-top: 1rem; border-radius: 6px; padding: 8px 16px; font-weight: 600; font-size: 14px; }
      #highlights .btn { margin-top: 0.75rem; border-radius: 6px; padding: 8px 16px; font-weight: 600; font-size: 14px; }
      #highlights .article-card { margin-bottom: 1rem; }
    `;
    document.head.appendChild(heroStyle);

  } catch(err){ console.error("Error loading hero/highlights:", err); }
}

// ---------------- INIT ----------------
loadFromSheet();
loadHeroAndHighlights();



