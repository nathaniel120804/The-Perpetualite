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
  {
    id: 1,
    title: "The Rise of AI in Daily Life",
    excerpt:"Transforming the way we live.",
    author: "John Doe",
    category:"news",
    date: "August 2025",
    image: "your-image.jpg",
    content: `
      <p>Artificial Intelligence (AI) is transforming the way we live and work every day.</p>
      <p>From smart assistants to self-driving cars, its impact is undeniable.</p>
      <img src="your-image.jpg" alt="AI Image" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>As technology evolves, students and professionals alike must adapt to this change.</p>
    `
  },
  {
    id: 'news-NEWID',
    title: 'Your Article Title',
    excerpt: 'Short summary of the article...',
    author: 'Author Name',
    date: 'Aug 25',
    category: 'news',
    image: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID',
    tags: ['Campus', 'Library', 'Student Life'],
    content: `<p>Full article content here...</p>`
  },
  {id:'news-1', title:'Student congress passes sustainability bill', excerpt:'A new bill aims to reduce campus waste by introducing reusable containers at all dining halls.', author:'M. Dela Peña', date:'Aug 20', category:'news', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID4', content:`The Student Congress approved a sustainability bill...`},
  {id:'news-2', title:'Registrar announces enrollment schedule', excerpt:'Important dates for enrollment, add/drop, and payment deadlines announced.', author:'K. Villanueva', date:'Aug 18', category:'news', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID5', content:`Registrar's office released the schedule...`},
  {id:'feat-1', title:'Professor spotlight: The pianist coder', excerpt:'An interview with a professor who composes music and teaches algorithms.', author:'L. Ramos', date:'Aug 10', category:'features', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID6', content:'Profile: Dr. A. Lopez blends music and computation...'},
  {id:'feat-2', title:'Campus sustainability initiatives', excerpt:'Students lead eco-friendly projects on campus.', author:'S. Lee', date:'Aug 12', category:'features', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID12', content:'Students planted trees and installed solar panels...'},
  {id:'op-1', title:'Opinion: Why campus needs more green spaces', excerpt:'An editorial arguing for student health and biodiversity on campus.', author:'Editorial Board', date:'Aug 2', category:'opinion', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID7', content:'We believe green spaces are essential...'},
  {id:'sports-1', title:'Altas training camp opens', excerpt:'The team begins its preseason camp with new coaching staff.', author:'Sports Desk', date:'Aug 15', category:'sports', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID8', content:'The Altas opened their training camp...'},
  {id:'culture-1', title:'A week in photos: Campus life', excerpt:'A photo essay capturing moments from the last week.', author:'Photo Desk', date:'Aug 12', category:'culture', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID9', content:'[Photo essay content]'},
  {id:'scitech-1', title:'Robotics team qualifies for nationals', excerpt:'The robotics squad secured a spot with an innovative manipulator arm.', author:'J. Santos', date:'Aug 24', category:'scitech', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID2', content:'Details on the qualifying run...'},
  {id:'scitech-2', title:'New AI lab opens on campus', excerpt:'Students gain access to cutting-edge AI tools.', author:'A. Cruz', date:'Aug 22', category:'scitech', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID13', content:'AI lab features robots and cloud computing...'},
  {id:'life-1', title:'Dorm hacks that actually work', excerpt:'Practical tips to organize small room spaces and maximize study time.', author:'D. Cruz', date:'Jul 30', category:'studentlife', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID10', content:'From storage solutions to schedule hacks...'},
  {id:'mm-1', title:'Campus choir live — full set', excerpt:'Watch highlights from the choir concert.', author:'Multimedia Desk', date:'Aug 5', category:'multimedia', image:'https://drive.google.com/uc?export=view&id=DRIVE_IMAGE_ID11', content:'<iframe src="https://drive.google.com/file/d/DRIVE_VIDEO_ID/preview" width="100%" height="360" allow="autoplay"></iframe>'},
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
