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
    title: "University Implements Smart ID System",
    excerpt: "Modernizing campus security and student services.",
    author: "Jane Reyes",
    category: "news",
    date: "August 2025",
    image: "https://media.licdn.com/dms/image/v2/C4E12AQHMYM_U7rhRrQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1522429936576?e=2147483647&v=beta&t=VFSMKkn7QrvOaETM8l_BoZSFYraYQAhVnd9pFQ7IpUg",
    content: `
      <p>The University of Perpetual Help has launched a smart ID system for students and faculty.</p>
      <p>The new ID will serve as an access key, library card, and payment method inside the campus.</p>
      <img src="https://www.hamk.fi/wp-content/uploads/2024/03/AdobeStock_158155353-1.jpg" alt="Smart ID" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Officials claim it will improve security, reduce fraud, and simplify student transactions.</p>
    `
  },
  {
    id: 2,
    title: "Campus Cafeteria Introduces Healthier Menu Options",
    excerpt: "Students embrace nutritious and budget-friendly meals.",
    author: "Luis Fernandez",
    category: "news",
    date: "August 2025",
    image: "https://example.com/news-cafeteria.jpg",
    content: `
      <p>The university cafeteria has started offering healthy meals for students and staff.</p>
      <p>Options include salads, grilled dishes, and low-sugar beverages to promote wellness on campus.</p>
      <img src="https://example.com/news-cafeteria2.jpg" alt="Healthy Cafeteria" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Nutritionists collaborate with chefs to ensure meals are both tasty and wholesome.</p>
    `
  },
  {
    id: 3,
    title: "Campus Security Upgrades with CCTV Expansion",
    excerpt: "Safety measures reinforced around campus grounds.",
    author: "Maricel Santos",
    category: "news",
    date: "August 2025",
    image: "https://example.com/news-cctv.jpg",
    content: `
      <p>The university has expanded its CCTV network to cover all key areas on campus.</p>
      <p>New cameras aim to reduce theft, monitor traffic, and ensure student safety.</p>
      <img src="https://example.com/news-cctv2.jpg" alt="CCTV Upgrade" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Security officers are trained to manage the system efficiently and respond to incidents quickly.</p>
    `
  },
  {
    id: 4,
    title: "Scholarship Programs Announced for Top Achievers",
    excerpt: "Opportunities open for students with excellent performance.",
    author: "Rica Mendoza",
    category: "news",
    date: "August 2025",
    image: "https://example.com/news-scholarship.jpg",
    content: `
      <p>The university announced new scholarship programs targeting high-performing students.</p>
      <p>Benefits include tuition coverage, allowances, and priority enrollment in elective courses.</p>
      <img src="https://example.com/news-scholarship2.jpg" alt="Scholarships" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Officials encourage students to apply before the deadline to maximize opportunities.</p>
    `
  },
  {
    id: 5,
    title: "New Library Wing Opens with Digital Resources",
    excerpt: "A hub for research and innovation.",
    author: "Antonio Reyes",
    category: "news",
    date: "August 2025",
    image: "https://example.com/news-library.jpg",
    content: `
      <p>The university unveiled a new library wing equipped with digital resources and study spaces.</p>
      <p>Students can now access e-books, journals, and interactive learning tools conveniently.</p>
      <img src="https://example.com/news-library2.jpg" alt="Library Wing" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Faculty emphasize the importance of utilizing these tools for research and academic growth.</p>
    `
  },
  {
    id: 6,
    title: "University Hosts Career Fair with 50+ Companies",
    excerpt: "Bridging students with potential employers.",
    author: "Kimberly Dela Cruz",
    category: "news",
    date: "August 2025",
    image: "https://example.com/news-careerfair.jpg",
    content: `
      <p>The campus career fair welcomed over 50 companies looking to hire students and fresh graduates.</p>
      <p>Workshops on resume building and interview techniques were also conducted.</p>
      <img src="https://example.com/news-careerfair2.jpg" alt="Career Fair" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Students are encouraged to network and explore opportunities to jumpstart their careers.</p>
    `
  },

  // --- FEATURES ---
  {
    id: 7,
    title: "Top 5 Study Spots on Campus",
    excerpt: "Finding the best places to focus and excel academically.",
    author: "Mark Santos",
    category: "features",
    date: "August 2025",
    image: "https://example.com/features-studyspots.jpg",
    content: `
      <p>Finding the right study environment can improve productivity and retention.</p>
      <p>From quiet libraries to outdoor benches, discover the best spots for focused study sessions.</p>
      <img src="https://example.com/features-studyspots2.jpg" alt="Study Spots" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Students share tips on lighting, noise levels, and accessibility to help maximize study efficiency.</p>
    `
  },
  {
    id: 8,
    title: "Inside the University Art Studio",
    excerpt: "Exploring creativity behind the scenes.",
    author: "Alvin Mercado",
    category: "features",
    date: "August 2025",
    image: "https://example.com/features-artstudio.jpg",
    content: `
      <p>The university art studio nurtures creative expression through painting, sculpture, and digital media.</p>
      <p>Students share insights about their projects and artistic inspirations.</p>
      <img src="https://example.com/features-artstudio2.jpg" alt="Art Studio" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Faculty mentor students to refine their skills and explore innovative techniques.</p>
    `
  },
  {
    id: 9,
    title: "Student Entrepreneurs Making Waves",
    excerpt: "Campus startups that are changing the game.",
    author: "Bianca Ramos",
    category: "features",
    date: "August 2025",
    image: "https://example.com/features-startups.jpg",
    content: `
      <p>Several student-led startups are gaining recognition for their innovative products and services.</p>
      <p>The university provides resources like mentorship, funding, and workspace for aspiring entrepreneurs.</p>
      <img src="https://example.com/features-startups2.jpg" alt="Student Startups" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>These initiatives empower students to turn ideas into real-world solutions.</p>
    `
  },
  {
    id: 10,
    title: "Eco-Friendly Initiatives on Campus",
    excerpt: "Sustainability in student life and academics.",
    author: "Clara Delos Santos",
    category: "features",
    date: "August 2025",
    image: "https://example.com/features-eco.jpg",
    content: `
      <p>From solar panels to recycling programs, the campus implements eco-friendly initiatives to reduce its carbon footprint.</p>
      <p>Students are actively involved in environmental clubs promoting awareness and action.</p>
      <img src="https://example.com/features-eco2.jpg" alt="Eco Initiatives" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>These efforts inspire the community to embrace sustainable habits.</p>
    `
  },
  {
    id: 11,
    title: "The Rise of Campus Podcasts",
    excerpt: "Students sharing stories, news, and ideas online.",
    author: "Jared Lim",
    category: "features",
    date: "August 2025",
    image: "https://example.com/features-podcast.jpg",
    content: `
      <p>Campus podcasts are becoming a popular platform for students to share experiences and knowledge.</p>
      <p>Topics range from academics and culture to personal development and entertainment.</p>
      <img src="https://example.com/features-podcast2.jpg" alt="Campus Podcast" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Podcasters gain experience in communication, production, and digital media skills.</p>
    `
  },

  // --- OPINION ---
  {
    id: 12,
    title: "Is Online Learning Effective for Everyone?",
    excerpt: "A debate on digital education in higher learning.",
    author: "Lara Cruz",
    category: "opinion",
    date: "August 2025",
    image: "https://example.com/opinion-onlinelearning.jpg",
    content: `
      <p>Online learning has become the new normal, but is it equally effective for all students?</p>
      <p>While flexibility is an advantage, some argue it lacks engagement and social interaction.</p>
      <img src="https://example.com/opinion-onlinelearning2.jpg" alt="Online Learning" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>This opinion piece explores pros and cons from student experiences and expert insights.</p>
    `
  },
  {
    id: 13,
    title: "Should Students Focus More on Internships Than Grades?",
    excerpt: "Rethinking priorities in modern education.",
    author: "Daniel Ortega",
    category: "opinion",
    date: "August 2025",
    image: "https://example.com/opinion-internship.jpg",
    content: `
      <p>Some students argue that internships provide practical experience that can outweigh academic grades.</p>
      <p>This article explores whether real-world exposure better prepares students for careers.</p>
      <img src="https://example.com/opinion-internship2.jpg" alt="Internship vs Grades" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Experts weigh in on balancing coursework with work experience opportunities.</p>
    `
  },
  {
    id: 14,
    title: "The Impact of Social Media on Student Life",
    excerpt: "A look at both positive and negative effects.",
    author: "Melissa Tan",
    category: "opinion",
    date: "August 2025",
    image: "https://example.com/opinion-socialmedia.jpg",
    content: `
      <p>Social media shapes how students communicate, learn, and spend their free time.</p>
      <p>While it allows networking and awareness, it can also lead to distraction and stress.</p>
      <img src="https://example.com/opinion-socialmedia2.jpg" alt="Social Media Impact" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Strategies for healthy social media usage are discussed by students and counselors.</p>
    `
  },

  // --- SPORTS ---
  {
    id: 15,
    title: "Perpetual Teams Shine in Regional Championship",
    excerpt: "A showcase of talent, teamwork, and school pride.",
    author: "Carlos Diaz",
    category: "sports",
    date: "August 2025",
    image: "https://example.com/sports-championship.jpg",
    content: `
      <p>The university's varsity teams dominated the regional sports championship last week.</p>
      <p>Basketball, volleyball, and track athletes brought home medals, showcasing perseverance and skill.</p>
      <img src="https://example.com/sports-championship2.jpg" alt="Sports Championship" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Coaches emphasize the importance of discipline and teamwork in achieving these victories.</p>
    `
  },
  {
    id: 16,
    title: "Intramurals Return with Exciting Competitions",
    excerpt: "Students compete for glory and camaraderie.",
    author: "Erik Morales",
    category: "sports",
    date: "August 2025",
    image: "https://example.com/sports-intramurals.jpg",
    content: `
      <p>The university intramurals returned after a hiatus, featuring football, badminton, and chess tournaments.</p>
      <p>Students displayed sportsmanship, skill, and teamwork throughout the events.</p>
      <img src="https://example.com/sports-intramurals2.jpg" alt="Intramurals" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Winning teams received medals and recognition, boosting school spirit among participants.</p>
    `
  },

  // --- CULTURE ---
  {
    id: 17,
    title: "Celebrating Local Traditions Through Campus Festivals",
    excerpt: "Keeping heritage alive in modern student life.",
    author: "Ana Velasco",
    category: "culture",
    date: "August 2025",
    image: "https://example.com/culture-festival.jpg",
    content: `
      <p>Campus festivals highlight the rich cultural traditions of the Philippines.</p>
      <p>Students organize dances, food fairs, and art exhibits to celebrate local heritage.</p>
      <img src="https://example.com/culture-festival2.jpg" alt="Campus Festival" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>These events foster community, pride, and awareness of cultural identity among the youth.</p>
    `
  },
  {
    id: 18,
    title: "Student-Led Theatre Productions Bring Classics to Life",
    excerpt: "Dramatic performances enrich campus culture.",
    author: "Janelle Reyes",
    category: "culture",
    date: "August 2025",
    image: "https://example.com/culture-theatre.jpg",
    content: `
      <p>Theatre students perform adaptations of classic plays and original scripts for the campus community.</p>
      <p>These productions improve acting, stage management, and storytelling skills.</p>
      <img src="https://example.com/culture-theatre2.jpg" alt="Campus Theatre" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Audiences enjoy a creative experience while appreciating the arts on campus.</p>
    `
  },

  // --- SCIENCE & TECH ---
  {
    id: 19,
    title: "3D Printing Breakthroughs in Engineering Courses",
    excerpt: "Revolutionizing how students design and prototype.",
    author: "Rafael Lim",
    category: "scitech",
    date: "August 2025",
    image: "https://example.com/scitech-3dprint.jpg",
    content: `
      <p>Engineering students at UPHSD are exploring the latest 3D printing technologies.</p>
      <p>From prototype models to custom lab tools, 3D printing enhances hands-on learning.</p>
      <img src="https://example.com/scitech-3dprint2.jpg" alt="3D Printing" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Faculty encourage innovative projects that merge creativity with technical skills.</p>
    `
  },
  {
    id: 20,
    title: "Campus Robotics Club Wins National Competition",
    excerpt: "Innovation and teamwork pay off.",
    author: "Jerome Tan",
    category: "scitech",
    date: "August 2025",
    image: "https://example.com/scitech-robotics.jpg",
    content: `
      <p>The UPHSD Robotics Club won first place in a national robotics contest.</p>
      <p>Students designed autonomous robots capable of performing complex tasks efficiently.</p>
      <img src="https://example.com/scitech-robotics2.jpg" alt="Robotics" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>The win highlights the importance of STEM education and innovation on campus.</p>
    `
  },

  // --- STUDENT LIFE ---
  {
    id: 21,
    title: "Balancing Academics and Hobbies",
    excerpt: "Tips for managing stress and staying productive.",
    author: "Mia Torres",
    category: "studentlife",
    date: "August 2025",
    image: "https://example.com/studentlife-balance.jpg",
    content: `
      <p>Maintaining a balance between studies and personal hobbies is essential for well-being.</p>
      <p>Students share strategies for time management, mental health, and stress relief.</p>
      <img src="https://example.com/studentlife-balance2.jpg" alt="Student Life" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Clubs, sports, and creative outlets are effective ways to stay engaged and motivated.</p>
    `
  },
  {
    id: 22,
    title: "Dorm Life: Stories from Campus Residents",
    excerpt: "A peek into community living and friendships.",
    author: "Katrina Mendoza",
    category: "studentlife",
    date: "August 2025",
    image: "https://example.com/studentlife-dorm.jpg",
    content: `
      <p>Living in dormitories teaches students independence, cooperation, and responsibility.</p>
      <p>Residents share experiences of challenges, fun activities, and lasting friendships.</p>
      <img src="https://example.com/studentlife-dorm2.jpg" alt="Dorm Life" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Dorm life helps students grow socially and academically while building a sense of community.</p>
    `
  },

  // --- MULTIMEDIA ---
  {
    id: 23,
    title: "Capturing Campus Life Through Photography",
    excerpt: "A visual journey of student experiences and events.",
    author: "Leah Gomez",
    category: "multimedia",
    date: "August 2025",
    image: "https://example.com/multimedia-photography.jpg",
    content: `
      <p>Photography students document the vibrant life of UPHSD through lenses and storytelling.</p>
      <p>From classroom moments to major events, each shot tells a unique story.</p>
      <img src="https://example.com/multimedia-photography2.jpg" alt="Campus Photography" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>The project encourages creativity, observation, and an appreciation for campus culture.</p>
    `
  },
  {
    id: 24,
    title: "Video Projects Highlight Student Achievements",
    excerpt: "Multimedia storytelling in academics and events.",
    author: "Ronald Lim",
    category: "multimedia",
    date: "August 2025",
    image: "https://example.com/multimedia-video.jpg",
    content: `
      <p>Students create short films and video documentaries showcasing academic projects and campus events.</p>
      <p>These multimedia projects help improve editing, scripting, and presentation skills.</p>
      <img src="https://example.com/multimedia-video2.jpg" alt="Student Videos" style="max-width:100%;border-radius:8px;margin:12px 0;">
      <p>Faculty highlight these works as examples of creativity and professional quality.</p>
    `
  }
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

