document.getElementById('year').textContent = new Date().getFullYear();

/*
 EDIT HERE!!! Here is the sample layout:
 id: 'news-NEWID',
  title: 'Your Article Title',
  excerpt: 'Short summary of the article...',
  author: 'Author Name',
  date: 'Aug 25',
  category: 'news',
  image: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID',
  tags: ['Campus', 'Library', 'Student Life'], // ← Add tags here
  content: `<p>Full article content here...</p>`
*/
const samplePosts = [
  // --- NEWS ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- FEATURES ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- OPINION ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- SPORTS ---
  {
    id: 15,
    title: "ALTAS' John Abis joins PBA Rookie Draft",
    excerpt: "Perpetual ALTAS Men’s Basketball Team’s John Cedric Abis has applied for the PBA Draft Combine",
    author: "| via Reigne Issel Calderon, The Perpetualite File photo, The Perpetualite Sources: PBA, Inquirer Sports",
    category: "sports",
    date: "August 29, 2025",
    image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/539191261_1168673565282089_5145713261921272450_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEIPg-m1JIzbLg8eRpS4xYA4jMcx_xLGA_iMxzH_EsYD6AyLnYNLCt9dZa463-q4UWbidyLfNIr8eMT3KSgiyR_&_nc_ohc=Tzt6ZcD4-YUQ7kNvwFYJL85&_nc_oc=AdkY25wCicDZUJrZaj2hC7mme6q1RGlVSCkZYI0XPds43aX2DQBkHxZkUoM_RMxj9e4&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=yi3uhHf_TZ5qiImngqruQw&oh=00_AfU0dhf_TxArJftt3D6yP381Qn3Uc4xqlOVXZfZmMM65KA&oe=68B782E3",
    content: `
      <p>Perpetual ALTAS Men’s Basketball Team’s John Cedric Abis has applied for the PBA Draft Combine, which will happen on September 4 and 5, 2025, at the Ynares Sports Arena in Pasig.</p>
      <p>Abis plays the position of Power Forward for the ALTAS. Following the Rookie Draft, he was included in the list of 128 applicants from various universities, including De La Salle-College of Saint Benilde, Colegio de San Juan de Letran, and Arellano University. </p>
      <p>The Season 50 Rookie Draft will be held on September 7, at 5:00 p.m., at the SM Mall of Asia Music Hall. </p>
    `
  },
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- CULTURE ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- SCIENCE & TECH ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- STUDENT LIFE ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },

  // --- MULTIMEDIA ---
  {
    id: enter id,
    title: "Enter text",
    excerpt: "enter text",
    author: "enter text",
    category: "enter category",
    date: "August 2025",
    image: "enter image url",
    content: `
      <p>enter text</p>
      <p>enter text</p>
      <img src="enter image url" alt="enter image name="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>enter text</p>
    `
  },
];

// Categories
const categories = {
  news: 'newsGrid', features:'featuresGrid', opinion:'opinionGrid', sports:'sportsGrid',
  culture:'cultureGrid', scitech:'scitechGrid', studentlife:'studentlifeGrid', multimedia:'multimediaGrid'
};

// do not touch code after categories
function renderAll(){
  Object.values(categories).forEach(id=>document.getElementById(id).innerHTML='');
  samplePosts.forEach(p=>{
    const grid = document.getElementById(categories[p.category]); if(!grid) return;
    const el = document.createElement('article'); el.className='article-card';
    el.innerHTML = `<div class="thumb" style="background-image:url('${p.image}')"></div>
    <div class="content"><h4 data-id="${p.id}">${p.title}</h4>
    <div class="meta">${p.author} · ${p.date}</div>
    <p style="color:var(--muted);margin-top:8px">${p.excerpt}</p></div>`;
    el.addEventListener('click',()=>openArticle(p.id));
    grid.appendChild(el);
  });

  // trending
  const trendingList = document.getElementById('trendingList'); trendingList.innerHTML='';
  samplePosts.slice(0,5).forEach(p=>{
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-id="${p.id}">${p.title}</a>`;
    li.querySelector('a').addEventListener('click',e=>{e.preventDefault();openArticle(p.id)});
    trendingList.appendChild(li);
  });

  // tags
  const tags = Array.from(new Set(samplePosts.flatMap(p=>p.title.split(' ')).slice(0,12)));
  const tagsList = document.getElementById('tagsList'); tagsList.innerHTML='';
  tags.forEach(t=>{const b=document.createElement('div');b.className='tag';b.textContent=t;tagsList.appendChild(b)});
}

function openArticle(id) {
  const post = samplePosts.find(s => s.id === id);
  if (!post) return;

  const container = document.getElementById('articleContent');
  container.innerHTML = `
    <h2>${post.title}</h2>
    <div class="meta">${post.author} · ${post.date}</div>
    <div style="margin:12px 0;height:360px;background-image:url('${post.image}');
         background-size:cover;background-position:center;border-radius:10px"></div>
    <div class="article-body">${post.content}</div>
    <div style="margin-top:12px;color:var(--muted)">
      <strong>Tags:</strong> 
      <span class="tag">campus</span> 
      <span class="tag">student life</span>
    </div>
  `;

  document.getElementById('articleView').hidden = false;
  document.getElementById('articleView').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('closeArticle').addEventListener('click', () => {
  document.getElementById('articleView').hidden = true;
});

// search
document.getElementById('search').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  if(q.length===0){renderAll(); return;}
  Object.values(categories).forEach(id=>document.getElementById(id).innerHTML='');
  samplePosts.filter(p=>(p.title+p.excerpt+p.author+p.category).toLowerCase().includes(q))
  .forEach(p=>{
    const grid = document.getElementById(categories[p.category]) || document.getElementById('newsGrid');
    const el = document.createElement('article'); el.className='article-card';
    el.innerHTML = `<div class="thumb" style="background-image:url('${p.image}')"></div><div class="content"><h4 data-id="${p.id}">${p.title}</h4><div class="meta">${p.author} · ${p.date}</div><p style="color:var(--muted);margin-top:8px">${p.excerpt}</p></div>`;
    el.addEventListener('click',()=>openArticle(p.id));
    grid.appendChild(el);
  });
});

// menu scroll
document.querySelectorAll('nav.primary a').forEach(a=>a.addEventListener('click', e=>{
  e.preventDefault();
  const tab=a.dataset.tab;
  if(tab==='home'){document.getElementById('home').scrollIntoView({behavior:'smooth'});} 
  else if(tab==='about'){document.getElementById('about').scrollIntoView({behavior:'smooth'});}
  else {const map={news:'newsSection',features:'featuresSection',opinion:'opinionSection',sports:'sportsSection',culture:'cultureSection',scitech:'scitechSection',studentlife:'studentlifeSection',multimedia:'multimediaSection'};
        const el=document.getElementById(map[tab]); if(el) el.scrollIntoView({behavior:'smooth'});}
  document.querySelectorAll('nav.primary a').forEach(n=>n.classList.remove('active')); a.classList.add('active');
}));

renderAll();
console.log('Campus Chronicle demo loaded — replace DRIVE_IMAGE_ID placeholders with your Google Drive file IDs.');
// ---------------- MARQUEE ----------------
function populateMarquee() {
  const marquee = document.getElementById('categoryMarquee');
  if (!marquee) return;

  marquee.innerHTML = '';

  // List of categories you want to show in marquee
  const categoriesList = ['news', 'features', 'opinion', 'sports', 'culture', 'scitech', 'studentlife', 'multimedia'];

  categoriesList.forEach(cat => {
    // Get latest 3 posts per category
    const posts = samplePosts.filter(p => p.category === cat).slice(0,3);
    posts.forEach(p => {
      const a = document.createElement('a');
      a.href = "#";
      a.textContent = `[${cat.toUpperCase()}] ${p.title}`;
      a.dataset.id = p.id;
      a.style.marginRight = '20px'; // spacing between links
      a.addEventListener('click', e => {
        e.preventDefault();
        openArticle(p.id);
      });
      marquee.appendChild(a);
    });
  });
}

// Call it
populateMarquee();

