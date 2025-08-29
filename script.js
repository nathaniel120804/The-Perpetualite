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
    id: 1,
    title: "Vice President Sara Duterte described the flood control",
    excerpt: "probe of President Ferdinand Marcos Jr. as a 'circus' while at The Hague, Netherlands.",
    author: "| via Wilson Carlo M. Dela Torre, The Perpetualite Photo courtesy of VP Sara Duterte, Sources: GMA News, Manila Bulletin, Rappler, Philippine Star",
    category: "news",
    date: "August 29 2025",
    image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/538243934_1168697955279650_5324017231556433365_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJgCJl79EKsEI3O1W_dWA3L88ItKkSTCIvzwi0qRJMIuCaJYUnjA78yQsrGpavgLD-pMPtnoDT6tSaSkomOrGB&_nc_ohc=Orj_4OgEcWYQ7kNvwHeaelL&_nc_oc=AdlzT2ShnC79jtnG-NN_1qojYtQoERwVzqds68atqCNSzvSPFeFQ2QFLnfH6W12XINY&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=Uu56aRg4c9gbE640F5veOA&oh=00_AfUfgRFF3yXGsleWnD2XxxwZ9y8dVOA5VW8h6uy-NruaFg&oe=68B79696",
    content: `
      <p>Vice President Sara Duterte described the flood control probe of President Ferdinand Marcos Jr. as a "circus" while at The Hague, Netherlands.</p>
      <p>"Ayoko magbigay ng libreng advice sa administrasyon. Panoorin na lang natin sila sa circus nila. Panoorin na lang natin sila sa kanilang zarzuela," Duterte stated in an interview on August 27, 2025. 
</p>
      <p>Davao acting mayor Baste Duterte also criticized the administration, claiming that Marcos is only using the flood control probe for his "PR."</p>
      <p>"The President himself ay ginagamit niya 'yung flood control projects na PR niya, responsibilidad niya naman talaga 'yun. Dapat in the first place, he did not allow it to happen," Mayor Duterte said.</p>
      <p>The Palace, on the other hand, responded to Baste's claim and told the mayor to "just watch."</p>
      <p>President Marcos revealed on August 11 that 15 contractors have garnered around PHP 100 billion worth of flood control projects nationwide, prompting the Congress to conduct an inquiry into possible anomalies. </p>
    `
  },
 {
    id: 2,
    title: "Several members of the House of Representatives have reintroduced the Adolescent Pregnancy Prevention bill ",
    excerpt: "to address the rising teenage pregnancy in the Philippines.",
    author: "| via Angela Poquiz Samson, The Perpetualite, Source: GMA News",
    category: "news",
    date: "August 29, 2025",
    image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/540093905_1168713505278095_5359584735462409582_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJ4dkdolQTf8gzkWn2eHJk8cxEaW6fkdfxzERpbp-R1z5oSomPRtxyIYS-WSwK4a6RonPlNppgetKQUTlY4pL9&_nc_ohc=sY1OPN1u43UQ7kNvwGoKLie&_nc_oc=Adm2Vhj_DAASXzMps0w4IKqhvwqRF3rKW16j7hQbEm5msHYAWUSPS4BrpkZjUMyikQw&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=MPptspol33gJt7pa4EqlCg&oh=00_AfX_QIilMzBAEvwa3u-wLK7TqAKVRd-L9HAQEmw7W0aO9w&oe=68B7AE9B",
    content: `
      <p>Several members of the House of Representatives have reintroduced the Adolescent Pregnancy Prevention bill to address the rising teenage pregnancy in the Philippines.</p>
      <p>The bill mandates government provision of reproductive health services and family planning information to adolescents, allowing those aged 15 to 18 to access services without parental consent. It also covers younger teens under specific circumstances, such as pregnancy or abuse.</p>
      <p>Negros Occidental Representative Javi Benitez cited alarming statistics from Victorias City, where teenage pregnancies once reached 189, including cases involving girls as young as eight to 14 years old. He stressed that empathy rather than religion should guide responses and called for well-funded legislation.</p>
      <p>Meanwhile, Party-list Representative Renee Co described teenage pregnancy as a societal problem linked to widespread abuse and urged immediate government action to protect young girls from early childbearing.</p>
      <p>"Pabata nang pabata ang mga nanay. Hindi na ito problema ng mga pamilya lang. Sakit na ito ng lipunan bunga ng laganap na abuso sa kababaihan at dapat may agarang aksyon ang gobyerno," Co said.
</p>
    `
  },
 {
    id: 3,
    title: "The Department of Public Works and Highways (DPWH) issued a memorandum on August 29, 2025",
    excerpt: "temporarily suspending overseas travel of officials and employees in light of the recent multi-billion-peso flood control controversies.",
    author: "| via Ayeka Abrielle Chavez, The Perpetualite, Photo courtesy of the DPWH, Source: GMA News, Inquirer.net",
    category: "news",
    date: "August 29, 2025",
    image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/539629443_1168719558610823_8054759592505001044_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLpxj-541t2es8Lp3U_OBNVOIgJgZoLcZU4iAmBmgtxmYEQNBKsDBeEVasYepQnZUQ7okYyO-h6PiwjtB-RmHl&_nc_ohc=DDl2FhmEjx8Q7kNvwGURRkw&_nc_oc=Adk5oe7S4Xlv2FPYdJI_eqbqodiOdGxyQDBfQe9Np_Mh-EmU3eKzqB5g9cqXMksZnDw&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=8-E3ENrkp_FXZhQne95n7A&oh=00_AfVZFpA0NUJAzzLON3FzSrfY5D5WLGa_rXtytuemuoxcZA&oe=68B7A6DF",
    content: `
      <p>The Department of Public Works and Highways (DPWH) issued a memorandum on August 29, 2025, temporarily suspending overseas travel of officials and employees in light of the recent multi-billion-peso flood control controversies.</p>
      <p>Under the directive, personal trips of employees and personnel are prohibited, except for urgent medical reasons. The order takes effect immediately and will remain effective until the end of November 2025, unless lifted or extended.</p>
      <p>“This action is consistent with our commitment to transparency, accountability, and public service integrity,” the memorandum signed by DPWH Secretary Manuel Bonoan stated.</p>
      <p>The memorandum also cited provisions of the Civil Service Commission’s Omnibus Rules on Leave, allowing agencies to restrict travel when required by public interest or administrative concerns.</p>
    `
  },
 {
    id: 4,
    title: "Google has warned that nearly 2.5 billion Gmail users may be at risk",
    excerpt: "may be at risk following the hacking of Salesforce’s cloud platform, advising users to immediately change their passwords and remain vigilant for suspicious activity.",
    author: "| via Ayeka Abrielle Chavez, The Perpetualite, Sources: News5, The Independent",
    category: "news",
    date: "August 2025",
    image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/540496206_1168728111943301_3816277196577029365_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFsgdKqTFg185PD97y3O3-j2Mcd7qS_XPLYxx3upL9c8r9891PAjWLs4YMLArCBw_ou6OTEVF2-QtpKy1FxG4ou&_nc_ohc=gpXP_WS5QNoQ7kNvwGFmkpH&_nc_oc=AdmTXeBdDUlLISxAum6TsbvtqHKIXFxn5UbZ6zFghkHnN_iCsaF7mhHKPUvR2kiU7co&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=9EAB7m1BCfC8GnGKxvI7zw&oh=00_AfVsk3r8Cxb6pyUawoeFSdwUBynXzZ17sICpTS7KxLDMLg&oe=68B79942",
    content: `
      <p>Due to a series of “successful intrusions,” Google has warned that nearly 2.5 billion Gmail users may be at risk following the hacking of Salesforce’s cloud platform, advising users to immediately change their passwords and remain vigilant for suspicious activity.</p>
      <p>The hacker group ShinyHunters was responsible for the breach, revealing what Google described as "basic and largely publicly available business information." However, this data has since been weaponized to launch more serious social engineering attacks.</p>
      <p>Google’s Threat Intelligence Group first identified the operation in June, noting that attackers impersonated IT support staff to trick victims. By August, the company confirmed that some of these attempts had led to account compromises.</p>
      <p>“We believe threat actors using the ‘ShinyHunters’ brand may be preparing to escalate their extortion tactics by launching a data leak site (DLS),” Google Threat Intelligence Group noted in a blog post last June.</p>
      <p>Recently, Google notified affected users worldwide and reiterated the importance of regularly updating passwords.</p>
    `
  },
 

  // --- FEATURES ---
  {
    id: 7,
    title: "Top 5 Study Spots on Campus",
    excerpt: "Finding the best places to focus and excel academically.",
    author: "Mark Santos",
    category: "",
    date: "August 2025",
    image: "https://example.com/features-studyspots.jpg",
    content: `
      <p>Finding the right study environment can improve productivity and retention.</p>
      <p>From quiet libraries to outdoor benches, discover the best spots for focused study sessions.</p>
      <img src="https://example.com/features-studyspots2.jpg" alt="Study Spots" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Students share tips on lighting, noise levels, and accessibility to help maximize study efficiency.</p>
    `
  },

  // --- OPINION ---
  {
    id: 12,
    title: "Is Online Learning Effective for Everyone?",
    excerpt: "A debate on digital education in higher learning.",
    author: "Lara Cruz",
    category: "",
    date: "August 2025",
    image: "https://example.com/opinion-onlinelearning.jpg",
    content: `
      <p>Online learning has become the new normal, but is it equally effective for all students?</p>
      <p>While flexibility is an advantage, some argue it lacks engagement and social interaction.</p>
      <img src="https://example.com/opinion-onlinelearning2.jpg" alt="Online Learning" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>This opinion piece explores pros and cons from student experiences and expert insights.</p>
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

  // --- CULTURE ---
  {
    id: 17,
    title: "Celebrating Local Traditions Through Campus Festivals",
    excerpt: "Keeping heritage alive in modern student life.",
    author: "Ana Velasco",
    category: "",
    date: "August 2025",
    image: "https://example.com/culture-festival.jpg",
    content: `
      <p>Campus festivals highlight the rich cultural traditions of the Philippines.</p>
      <p>Students organize dances, food fairs, and art exhibits to celebrate local heritage.</p>
      <img src="https://example.com/culture-festival2.jpg" alt="Campus Festival" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>These events foster community, pride, and awareness of cultural identity among the youth.</p>
    `
  },

  // --- SCIENCE & TECH ---
  {
    id: 19,
    title: "3D Printing Breakthroughs in Engineering Courses",
    excerpt: "Revolutionizing how students design and prototype.",
    author: "Rafael Lim",
    category: "",
    date: "August 2025",
    image: "https://example.com/scitech-3dprint.jpg",
    content: `
      <p>Engineering students at UPHSD are exploring the latest 3D printing technologies.</p>
      <p>From prototype models to custom lab tools, 3D printing enhances hands-on learning.</p>
      <img src="https://example.com/scitech-3dprint2.jpg" alt="3D Printing" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Faculty encourage innovative projects that merge creativity with technical skills.</p>
    `
  },

  // --- STUDENT LIFE ---
  {
    id: 21,
    title: "Balancing Academics and Hobbies",
    excerpt: "Tips for managing stress and staying productive.",
    author: "Mia Torres",
    category: "",
    date: "August 2025",
    image: "https://example.com/studentlife-balance.jpg",
    content: `
      <p>Maintaining a balance between studies and personal hobbies is essential for well-being.</p>
      <p>Students share strategies for time management, mental health, and stress relief.</p>
      <img src="https://example.com/studentlife-balance2.jpg" alt="Student Life" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Clubs, sports, and creative outlets are effective ways to stay engaged and motivated.</p>
    `
  },

  // --- MULTIMEDIA ---
  {
    id: 23,
    title: "Capturing Campus Life Through Photography",
    excerpt: "A visual journey of student experiences and events.",
    author: "Leah Gomez",
    category: "",
    date: "August 2025",
    image: "https://example.com/multimedia-photography.jpg",
    content: `
      <p>Photography students document the vibrant life of UPHSD through lenses and storytelling.</p>
      <p>From classroom moments to major events, each shot tells a unique story.</p>
      <img src="https://example.com/multimedia-photography2.jpg" alt="Campus Photography" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>The project encourages creativity, observation, and an appreciation for campus culture.</p>
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




