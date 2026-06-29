// NAVIGATION
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    document.getElementById('nav-' + id).classList.add('active');
    window.scrollTo(0, 0);
    document.getElementById('navLinks').classList.remove('open');
  }
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  
  // SCHOOLS DATA
  const schools = [
    // SECONDARY
    {
      id: 1, name: 'Carmen National High School — Day Class',
      type: 'secondary', emoji: '🏫', bg: '#d1fae5',
      address: 'McKinley Street, Cogon West, Carmen, Cebu',
      schoolId: '302973', tel: '(032) 423-9060',
      description: 'Carmen National High School is the premier public secondary institution in Carmen, Cebu — standing at the center of the town\'s civic and educational life near the San Narciso Parish Church and the Municipal Health Center. Known as a mother school in the district, CNHS-Day offers Junior and Senior High School under the K-12 program and won the Champion Award at the 11th National Science Quest at Teachers Camp, Baguio City. The school emphasizes values education, character development, and leadership alongside its academic programs.',
      level: 'JHS + SHS (K-12)', since: '1988'
    },
    {
      id: 2, name: 'Carmen National High School — Night Class',
      type: 'secondary', emoji: '🌙', bg: '#1B2E4B',
      address: 'McKinley Street, Cogon West, Carmen, Cebu',
      schoolId: '312410', tel: '(032) 423-9060',
      description: 'The Night Class of Carmen NHS was established to address the growing demand for secondary education among working students and those who cannot attend during daytime hours. Operating from the same McKinley Street campus with its own administration and School ID, it serves a unique population of learners — older students, out-of-school youth, or those balancing family and work responsibilities — making it a critical access point for secondary education in the community.',
      level: 'Secondary (Night)', since: '—'
    },
    {
      id: 3, name: 'Caurasan National High School',
      type: 'secondary', emoji: '📘', bg: '#dbeafe',
      address: 'Barangay Caurasan, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Caurasan National High School serves the students of Barangay Caurasan, one of Carmen\'s inland barangays. Established through the Philippine government\'s effort to decentralize and expand access to secondary education, it brings high school learning closer to residents who would otherwise need to travel into the town center. Under the direct supervision of the Carmen District office of DepEd Cebu Province.',
      level: 'Secondary', since: '—'
    },
    {
      id: 4, name: 'Cantumog National High School',
      type: 'secondary', emoji: '🌾', bg: '#fef3c7',
      address: 'Barangay Cantumog, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Cantumog National High School serves the youth of Barangay Cantumog — a barangay in the western portion of Carmen known for its agricultural character and proximity to St. Benedict\'s Monastery. It works alongside Cantumog Elementary School to provide a full continuum of basic education for the barangay\'s children, removing the need for students to travel far distances for secondary schooling.',
      level: 'Secondary', since: '—'
    },
  
    // ELEMENTARY
    {
      id: 5, name: 'Carmen Central Elementary School',
      type: 'elementary', emoji: '🌟', bg: '#fef3c7',
      address: 'Barangay Baring (Poblacion), Carmen, Cebu',
      schoolId: '—', tel: '(032) 429-9028',
      description: 'Carmen Central Elementary School is one of the oldest and most significant schools in the municipality — the flagship elementary school located near the Municipal Hall, health center, and other civic institutions. With roots tracing back to the early American colonial era, it has served generations of Carmen\'s residents and continues as a community cornerstone. School Head on record: Glicerio L. Camongay, Principal II.',
      level: 'Elementary (Gr. 1–6)', since: 'American colonial era'
    },
    {
      id: 6, name: 'Francisco S. Villamor Sr. Elementary School',
      type: 'elementary', emoji: '🏛️', bg: '#ede9fe',
      address: 'Barangay Cantipay, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Named in honor of Francisco S. Villamor Sr., a notable civic figure whose family has deep roots in Carmen — with Pastor Villamor admitted to the Philippine Bar in 1928 and appointed Justice of the Peace by President Manuel Roxas in 1947. Located in Barangay Cantipay on Carmen\'s northern side, the school reflects Carmen\'s tradition of honoring local heroes and public servants through lasting educational institutions.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 7, name: 'Dawis Norte Elementary School',
      type: 'elementary', emoji: '🥭', bg: '#fef9c3',
      address: 'Barangay Dawis Norte, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Dawis Norte Elementary School serves the northern section of the Dawis area — a barangay home to notable businesses including FPD Foods International Inc., manufacturer of the famous 7D Dried Mango brand. The school provides foundational education to children in this commercially active part of Carmen, serving as a vital community anchor for the growing barangay.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 8, name: 'Dawis Sur Elementary School',
      type: 'elementary', emoji: '🌊', bg: '#dbeafe',
      address: 'Barangay Dawis Sur, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Located in the southern portion of the Dawis area, Dawis Sur Elementary School is the educational counterpart to Dawis Norte ES. Together, the two Dawis schools ensure complete elementary coverage for this coastal community. The school serves families in the barangay south of the Dawis river area, ensuring children in this part of Carmen have access to quality basic education close to home.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 9, name: 'Cantumog Elementary School',
      type: 'elementary', emoji: '🌾', bg: '#fef3c7',
      address: 'Barangay Cantumog, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Cantumog Elementary School is the feeder school for Cantumog National High School, providing elementary-level education to children in the barangay. Together, the two schools make up the educational backbone of Barangay Cantumog. The covered court nearby serves as a community gathering space that the school also uses for sports and events, reinforcing the school\'s role as a community hub.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 10, name: 'Siotes Elementary School',
      type: 'elementary', emoji: '🌿', bg: '#d1fae5',
      address: 'Barangay Siotes (sitio area), Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Siotes Elementary School serves one of Carmen\'s smaller communities, established to bring basic education to children in more remote areas of the municipality. Like many sitio-level schools in rural Cebu, it reduces travel time and increases enrollment retention for young learners who would otherwise face significant distances to reach the town proper for schooling.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 11, name: 'Santikan Elementary School',
      type: 'elementary', emoji: '🏡', bg: '#ffedd5',
      address: 'Barangay Liboron (Santikan area), Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Santikan Elementary School serves the Santikan community within Carmen, situated near the boundary of Barangay Liboron. Listed as an active precinct in COMELEC\'s 2025 election records, it is both an educational and civic landmark. Like all community elementary schools in Carmen, it follows the DepEd K-12 curriculum under the guidance of the Carmen District supervisor.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 12, name: 'Sac-on Elementary School',
      type: 'elementary', emoji: '🌄', bg: '#fce7f3',
      address: 'Barangay Sac-on, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Sac-on Elementary School serves Barangay Sac-on, one of Carmen\'s inland barangays, offering "a nurturing environment for academic excellence and holistic development." It is listed in DepEd district records and serves as the primary feeder school for students from this barangay continuing on to high school in the town proper.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 13, name: 'Puente Elementary School',
      type: 'elementary', emoji: '🌉', bg: '#e0e7ff',
      address: 'Cebu North Road, Barangay Puente, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Puente Elementary School is situated along the Cebu North Road — the main highway connecting Carmen to Danao City in the south and Bogo City in the north. "Puente" means bridge in Spanish, a nod to Carmen\'s colonial heritage. The school sits strategically in this highway-accessible barangay, making it a well-known landmark for travelers on the northern Cebu route.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 14, name: 'Pedro Erong Elementary School',
      type: 'elementary', emoji: '📜', bg: '#fef3c7',
      address: 'Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Pedro Erong Elementary School is named after a local historical figure, continuing Carmen\'s tradition of honoring community members through its schools. The school serves children in its locality and is listed as an active institution in the Carmen District School Improvement Plan (SIP) programs of DepEd, contributing to the district\'s ongoing efforts to improve educational outcomes.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 15, name: 'Natimao-an Elementary School',
      type: 'elementary', emoji: '⛰️', bg: '#d1fae5',
      address: 'Barangay Lower Natimao-an, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Natimao-an Elementary School serves the Lower Natimao-an community, one of the barangays in Carmen\'s inland area. Listed as an active voting center in COMELEC records, it is both an educational and civic anchor in the community. The school provides Grades 1 through 6 to children in this inland barangay, connecting them to a lifelong journey of learning.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 16, name: 'Luyang Elementary School',
      type: 'elementary', emoji: '⛵', bg: '#bfdbfe',
      address: 'National Road, Barangay Luyang, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Luyang Elementary School serves Barangay Luyang — described as the biggest barangay in Carmen, with five sitios: Malbago, Bliss, Tabok-sapa, Barrio Pekas, and Bantigue. Situated along the National Road for maximum accessibility, the school serves this coastal barangay known for fishing, aquaculture, and the beloved annual fiesta honoring the Señor Santo Niño. It functions as a multi-precinct voting center, reflecting the barangay\'s significant size.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 17, name: 'Lanipga Elementary School',
      type: 'elementary', emoji: '🌱', bg: '#d1fae5',
      address: 'Barangay Lanipga, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Lanipga Elementary School champions "high-quality education in a nurturing environment, fostering academic excellence and community involvement." The school is an active participant in the Carmen District\'s SIP roll-out and teacher development programs, with Lanipga ES teachers consistently present in district-level training events and educational planning meetings.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 18, name: 'Isabelo Nies Elementary School',
      type: 'elementary', emoji: '🖊️', bg: '#fef3c7',
      address: 'Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Named after Isabelo Nies (also spelled Niez), who served as Municipal Secretary of Carmen in 1964 under Mayor Elpidio de Dios. His contribution to municipal governance and community life was recognized by naming this school in his honor — a testament to how Carmen preserves its local history through its educational institutions, ensuring future generations remember the public servants who shaped the municipality.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 19, name: 'Hagnaya Elementary School',
      type: 'elementary', emoji: '⛴️', bg: '#dbeafe',
      address: 'Barangay Hagnaya, Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Hagnaya Elementary School serves Barangay Hagnaya on the northwestern coast of Carmen. The barangay is famous for Hagnaya Port — the primary jump-off point for ferries to Bantayan Island, making it one of Carmen\'s most well-known barangays to travelers throughout Cebu. The school serves the children of this maritime and transport-oriented community, providing foundational education to one of Carmen\'s most strategically located barangays.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 20, name: 'Florentino Rallos Elementary School',
      type: 'elementary', emoji: '🏅', bg: '#ede9fe',
      address: 'Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'Named after a member of the Rallos family — one of Carmen\'s early town leaders in the post-American election era — this school preserves the legacy of local civic service for future generations. The Rallos family\'s contribution to Carmen\'s governance is immortalized through this school, reflecting the municipality\'s deep respect for those who served the community in its formative years.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
    {
      id: 21, name: 'Elpidio De Dios Elementary School',
      type: 'elementary', emoji: '👑', bg: '#fef9c3',
      address: 'Barangay Juanluna, Poblacion, Carmen, Cebu',
      schoolId: '119191', tel: '—',
      description: 'Named after Elpidio de Dios — Carmen\'s longest-serving mayor, holding office from 1941 to the late 1960s, nearly three decades of continuous leadership. Under his watch, Carmen grew and modernized, and this school in the Poblacion area is a fitting tribute to his legacy. Located near Carmen Central Elementary School and the Municipal Hall, it is an enduring civic and educational landmark in the heart of Carmen.',
      level: 'Elementary (Gr. 1–6)', since: '—'
    },
  
    // INTEGRATED
    {
      id: 22, name: 'S. Duterte Integrated School',
      type: 'integrated', emoji: '🔗', bg: '#ede9fe',
      address: 'Carmen, Cebu',
      schoolId: '—', tel: '—',
      description: 'S. Duterte Integrated School offers both elementary and secondary education levels under one administration — providing a more complete educational pathway for its students, particularly those in more remote or underserved areas of Carmen. As an integrated school, it removes the need for students to transfer institutions between grade levels, strengthening continuity in education and community belonging.',
      level: 'Elementary + Secondary', since: '—'
    }
  ];
  
  // RENDER
  function renderSchools(filter) {
    if (!filter) filter = 'all';
    const list = document.getElementById('schoolsList');
    const filtered = filter === 'all' ? schools : schools.filter(function(s) { return s.type === filter; });
    list.innerHTML = filtered.map(function(s) {
      const imgBg = s.type === 'secondary' ? (s.id === 2 ? '#0f1e33' : s.bg) : s.bg;
      const textColor = (s.id === 2) ? 'rgba(255,255,255,.8)' : '#4a5568';
      const subtextColor = (s.id === 2) ? 'rgba(255,255,255,.45)' : '#9ca3af';
      const typeLabel = s.type === 'secondary' ? 'Secondary' : s.type === 'elementary' ? 'Elementary' : 'Integrated';
      const schoolIdMeta = s.schoolId !== '—' ? '<div class="meta-item"><strong>' + s.schoolId + '</strong>School ID</div>' : '';
      const telMeta = s.tel !== '—' ? '<div class="meta-item"><strong>' + s.tel + '</strong>Contact</div>' : '';
      const sinceMeta = s.since !== '—' ? '<div class="meta-item"><strong>' + s.since + '</strong>Since</div>' : '';
      const idBadge = s.schoolId !== '—' ? '<div class="school-id-badge">ID: ' + s.schoolId + '</div>' : '';
      return '<div class="school-card" data-type="' + s.type + '">' +
        '<div class="school-info">' +
          '<span class="school-type type-' + s.type + '">' + typeLabel + '</span>' +
          '<h2>' + s.name + '</h2>' +
          '<div class="school-addr">📍 ' + s.address + '</div>' +
          '<p>' + s.description + '</p>' +
          '<div class="school-meta">' +
            '<div class="meta-item"><strong>' + s.level + '</strong>Level</div>' +
            schoolIdMeta + telMeta + sinceMeta +
          '</div>' +
          '<button class="btn-blog" onclick="openBlog(' + s.id + ')">Read School Blog</button>' +
        '</div>' +
        '<div class="school-image">' +
          '<div class="img-placeholder" style="background:' + imgBg + ';">' +
            '<span style="font-size:60px">' + s.emoji + '</span>' +
            '<span style="color:' + textColor + '; font-size:13px; font-weight:700; text-align:center; padding:0 16px; margin-top:10px;">' + s.name + '</span>' +
            '<span style="color:' + subtextColor + '; font-size:11px; margin-top:6px;">Replace with actual school photo</span>' +
          '</div>' +
          idBadge +
        '</div>' +
      '</div>';
    }).join('');
  }
  
  function filterSchools(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSchools(type);
  }
  
  // Sample blog posts per school category
  const blogPosts = {
    secondary: [
      { icon:"🏆", date:"June 20, 2026", title:"Champion at the National Science Quest", body:"Students from our school brought home the top award at this year's National Science Quest, showcasing months of dedicated research and teamwork." },
      { icon:"🎓", date:"June 10, 2026", title:"Graduation Day 2026 — A Day to Remember", body:"The Class of 2026 officially received their diplomas in a moving ceremony attended by proud families and the whole school community." },
      { icon:"📚", date:"May 25, 2026", title:"K-12 Academic Excellence Awards Night", body:"Top performing students in all strands were recognized during the district's annual Academic Excellence Night held at the school gymnasium." }
    ],
    elementary: [
      { icon:"🌿", date:"June 18, 2026", title:"School Garden Project in Full Bloom", body:"Our young learners have been tending the school garden as part of the Makakalikasan program, growing vegetables and learning about environmental stewardship." },
      { icon:"🎨", date:"June 5, 2026", title:"Arts & Culture Fair Highlights Community Heritage", body:"Students showcased traditional Filipino crafts, dances, and artwork during the annual Arts & Culture Fair, celebrating Carmen's rich heritage." },
      { icon:"📖", date:"May 15, 2026", title:"Reading Month Celebration — Every Child a Reader", body:"In observance of National Reading Month, teachers organized storytelling sessions, book fairs, and reading competitions across all grade levels." }
    ],
    integrated: [
      { icon:"🔗", date:"June 22, 2026", title:"Bridging Elementary and Secondary — Our Unique Advantage", body:"As an integrated school, our students enjoy a seamless transition from elementary to secondary, with teachers who know every learner's journey." },
      { icon:"🌱", date:"June 8, 2026", title:"Community Outreach: Giving Back to Barangay", body:"Students and teachers joined hands for a community clean-up and tree planting drive in partnership with the local barangay council." },
      { icon:"🎒", date:"May 20, 2026", title:"Back-to-School Preparation & Orientation Day", body:"New and returning students attended the school orientation, getting acquainted with teachers, classrooms, and the school's vision and values." }
    ]
  };
  
  function openBlog(id) {
    const s = schools.find(x => x.id === id);
    document.getElementById('modalTitle').textContent = s.name;
    document.getElementById('modalSubtitle').textContent = s.level + ' · Carmen District, DepEd Region VII';
    const posts = blogPosts[s.type] || blogPosts.elementary;
    const imgBg = s.type === 'secondary' ? 'linear-gradient(135deg,#1B2E4B,#1a4a6e)' : s.type === 'integrated' ? 'linear-gradient(135deg,#ede9fe,#c4b5fd)' : 'linear-gradient(135deg,' + s.bg + ',#e0e7ff)';
    const schoolIdBadge = s.schoolId !== '—' ? '<span>🪪 ID: ' + s.schoolId + '</span>' : '';
    const typeLabel = s.type.charAt(0).toUpperCase() + s.type.slice(1);
    const postsHtml = posts.map(function(p) {
      return '<div class="blog-post-card"><div class="blog-post-icon">' + p.icon + '</div><div><div class="post-date">' + p.date + '</div><h4>' + p.title + '</h4><p>' + p.body + '</p></div></div>';
    }).join('');
    document.getElementById('modalBlog').innerHTML =
      '<div class="blog-banner">' +
        '<h2>📰 ' + s.name + ' — School Blog</h2>' +
        '<div class="blog-meta">' +
          '<span>📍 ' + s.address + '</span>' +
          '<span>🏫 ' + s.level + '</span>' +
          schoolIdBadge +
        '</div>' +
      '</div>' +
      '<div class="blog-content">' +
        '<div class="blog-featured-img" style="background:' + imgBg + ';">' + s.emoji + '</div>' +
        '<div class="blog-body">' +
          '<p>' + s.description + '</p>' +
          '<h3>📝 Latest Blog Posts</h3>' +
          '<p style="font-size:13px;color:#6b7280;">A digital journal of school life, achievements, and community stories from ' + s.name + '.</p>' +
          '<div class="blog-posts-list">' + postsHtml + '</div>' +
          '<div class="blog-tags">' +
            '<span class="blog-tag">DepEd Region VII</span>' +
            '<span class="blog-tag">Carmen District</span>' +
            '<span class="blog-tag">' + typeLabel + '</span>' +
            '<span class="blog-tag">Cebu Province</span>' +
            '<span class="blog-tag">K-12</span>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.getElementById('blogModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeBlog() {
    document.getElementById('blogModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeModal(e) {
    if (e.target === document.getElementById('blogModal')) closeBlog();
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBlog(); });
  
  function submitForm() {
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 5000);
  }
  
  renderSchools();
