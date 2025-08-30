// ==============================
// The Perpetualite - script.js
// ==============================

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Google Sheets JSON feed
const sheetURL = "https://script.google.com/macros/s/AKfycbx6_ROHGXnTko2lXNSG1-heeiY1E-Gl_Uvv2uu6z49jqPEpUNnqvf75y-djPem3y1y1/exec";

// This will hold all posts loaded from Sheets
let samplePosts = [];

// Categories map
const categories = {
  news: 'newsGrid',
  features: 'featuresGrid',
  opinion: 'opinionGrid',
  sports: 'sportsGrid',
  culture: 'cultureGrid',
  scitech: 'scitechGrid',
  studentlife: 'studentlifeGrid',
  multimedia: 'multimediaGrid'
};

// ---------------- RENDERING ----------------
function renderAll() {
  // Clear grids
  Object.values(categories).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });

  // Render articles
  samplePosts.forEach(p => {
    const grid = document.getElementById(categories[p.category]);
    if (!grid) return;

    const el = document.createElement('article');
    el.className = 'article-card';
    el.innerHTML = `
      <div class="thumb" style="background-image:url('${p.image || ''}')"></div>
      <div class="content">
        <h4 data-id="${p.id}">${p.title || 'Untitled'}</h4>
        <div class="meta">${p.author || 'Unknown'} · ${p.date || ''}</div>
        <p style="color:var(--muted);margin-top:8px">${p.excerpt || ''}</p>
      </div>`;
    el.addEventListener('click', () => openArticle(p.id));
    grid.appendChild(el);
  });

  // Trending
  const trendingList = document.getElementById('trendingList');
  if (trendingList) {
    trendingList.innerHTML = '';
    samplePosts.slice(0, 5).forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" data-id="${p.id}">${p.title}</a>`;
      li.querySelector('a').addEventListener('click', e => {
        e.preventDefault();
        openArticle(p.id);
      });
      trendingList.appendChild(li);
    });
  }

  // Tags
  const tags = new Set();
  samplePosts.forEach(p => {
    if (p.tags) {
      p.tags.split(',').map(t => t.trim()).forEach(t => tags.add(t));
    }
  });
  const tagsList = document.getElementById('tagsList');
  if (tagsList) {
    tagsList.innerHTML = '';
    Array.from(tags).slice(0, 12).forEach(t => {
      const b = document.createElement('div');
      b.className = 'tag';
      b.textContent = t;
      tagsList.appendChild(b);
    });
  }

  populateMarquee();
}

// ---------------- OPEN ARTICLE ----------------
function openArticle(id) {
  const post = samplePosts.find(s => s.id == id);
  if (!post) return;

  const container = document.getElementById('articleContent');
  container.innerHTML = `
    <h2>${post.title}</h2>
    <div class="meta">${post.author} · ${post.date}</div>
    <div style="margin:12px 0;height:360px;background-image:url('${post.image}');
         background-size:cover;background-position:center;border-radius:10px"></div>
    <div class="article-body">${post.content}</div>
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
  if (q.length === 0) { renderAll(); return; }

  Object.values(categories).forEach(id => document.getElementById(id).innerHTML = '');
  samplePosts
    .filter(p => (p.title + p.excerpt + p.author + p.category).toLowerCase().includes(q))
    .forEach(p => {
      const grid = document.getElementById(categories[p.category]) || document.getElementById('newsGrid');
      const el = document.createElement('article');
      el.className = 'article-card';
      el.innerHTML = `
        <div class="thumb" style="background-image:url('${p.image}')"></div>
        <div class="content">
          <h4 data-id="${p.id}">${p.title}</h4>
          <div class="meta">${p.author} · ${p.date}</div>
          <p style="color:var(--muted);margin-top:8px">${p.excerpt}</p>
        </div>`;
      el.addEventListener('click', () => openArticle(p.id));
      grid.appendChild(el);
    });
});

// ---------------- MENU SCROLL ----------------
document.querySelectorAll('nav.primary a').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const tab = a.dataset.tab;
  if (tab === 'home') {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  } else if (tab === 'about') {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  } else {
    const map = {
      news: 'newsSection', features: 'featuresSection', opinion: 'opinionSection',
      sports: 'sportsSection', culture: 'cultureSection', scitech: 'scitechSection',
      studentlife: 'studentlifeSection', multimedia: 'multimediaSection'
    };
    const el = document.getElementById(map[tab]); if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  document.querySelectorAll('nav.primary a').forEach(n => n.classList.remove('active'));
  a.classList.add('active');
}));

// ---------------- MARQUEE ----------------
function populateMarquee() {
  const marquee = document.getElementById('categoryMarquee');
  if (!marquee) return;
  marquee.innerHTML = '';

  const categoriesList = Object.keys(categories);
  categoriesList.forEach(cat => {
    const posts = samplePosts.filter(p => p.category === cat).slice(0, 3);
    posts.forEach(p => {
      const a = document.createElement('a');
      a.href = "#";
      a.textContent = `[${cat.toUpperCase()}] ${p.title}`;
      a.dataset.id = p.id;
      a.style.marginRight = '20px';
      a.addEventListener('click', e => {
        e.preventDefault();
        openArticle(p.id);
      });
      marquee.appendChild(a);
    });
  });
}

// ---------------- LOAD FROM SHEETS ----------------
async function loadFromSheet() {
  try {
    const res = await fetch(sheetURL);
    const rows = await res.json();

    console.log("Raw data from Google Sheets:", rows); // DEBUG

    if (!Array.isArray(rows) || rows.length === 0) {
      console.warn("No rows found in sheet.");
      return;
    }

    // Transform
    samplePosts = rows.map((row, i) => ({
      id: i + 1,
      title: row.Title || "",
      excerpt: row.Excerpt || "",
      author: row.Author || "",
      category: row.Category ? row.Category.toLowerCase() : "news",
      date: row.Date || "",
      image: row.ImageURL || "",
      tags: row.Tags || "",
      content: row.Content || ""
    }));

    // Sort newest first
    samplePosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    renderAll();
  } catch (err) {
    console.error("Error loading from Sheets:", err);
  }
}

// Init
loadFromSheet();
