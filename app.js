/* ==========================================================================
   RESUME FORGE AI - V6 CONVERSATIONAL RESUME BUILDER BOT (app.js)
   Crafted by Mohd Amir Ali (https://techwithamir.com)
   - Decreased 3D VANTA.NET Opacity (0.32) + Internal Camera X & Y Tilt
   - Borderless Floating Signature: 2.2s Auto-Write on Load + Scroll Scrubbing
   - Pre-Illuminated Manifesto Lead Phrase + Word-by-Word Scroll Reveal
   - Hard-Locked 84x84px Photo Circle & Header Alignment Across All 3 Modes
   ========================================================================== */

const DEFAULT_AVATAR_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 160 160">
    <rect width="160" height="160" rx="80" fill="#1E3A8A"/>
    <circle cx="80" cy="60" r="28" fill="#F8FAFC"/>
    <path d="M32 142c6-26 26-42 48-42s42 16 48 42" fill="#F8FAFC"/>
  </svg>`);

// --------------------------------------------------------------------------
// 1. SINGLE SAMPLE PRESET (MOHD AMIR ALI · PHONE: 91234567890)
// --------------------------------------------------------------------------
const AMIR_SAMPLE_RESUME = {
  careerStage: "Currently Studying (Student)",
  resumeGoal: "Internship Application",
  templateStyle: "modern",
  accentColor: "#1E3A8A",
  includePhoto: false,
  isCustomPhoto: false,
  pageCount: 1,
  eduFirst: true,
  name: "MOHD AMIR ALI",
  role: "AI & Full-Stack Software Engineering Intern",
  email: "amir@techwithamir.com",
  phone: "91234567890",
  location: "Hyderabad, India",
  links: "techwithamir.com  |  github.com/mohd-amir-ali  |  linkedin.com/in/mohdamirali",
  summary:
    "Final-year Computer Science undergraduate with hands-on experience as an AI and Full-Stack Research Intern at VisionAI Innovation Lab. Proven track record of engineering deep learning computer vision pipelines (7-layer CNN Iris Biometric Engine) and cryptographic IoT telemetry systems (SHA-512 Blockchain WSN), seeking a Software and AI Engineering Internship.",
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Jawaharlal Nehru Technological University (JNTU), Hyderabad",
      date: "2023 - 2027",
      score: "CGPA: 9.14 / 10.0",
      details: "Relevant Coursework: Deep Learning, Computer Vision, Data Structures and Algorithms, Database Management Systems, Operating Systems."
    }
  ],
  experience: [
    {
      title: "AI and Full-Stack Research Intern",
      org: "VisionAI Innovation Lab",
      date: "May 2025 - Aug 2025",
      location: "Hyderabad, India",
      bullets: [
        "Engineered a Daugman rubber-sheet polar iris normalization and 7-layer Convolutional Neural Network verification pipeline across 2,400 biometric test samples.",
        "Built a real-time interactive telemetry workspace using HTML5 Canvas and GSAP that streamlined model inspection workflows for research teams.",
        "Optimized client-side inference routines and polar feature extraction to deliver sub-20ms verification response times."
      ]
    },
    {
      title: "Open-Source Software Developer",
      org: "Independent Engineering Portfolio (techwithamir.com)",
      date: "Jan 2025 - Present",
      location: "Hyderabad, India",
      bullets: [
        "Developed a 20-node Wireless Sensor Network simulator secured with SHA-512 cryptographic hashing and live packet routing visualization.",
        "Created automated Figma plugin generators and human-computer interaction (HCI) design systems with full WCAG contrast compliance."
      ]
    }
  ],
  projects: [
    {
      name: "Iris Recognition CNN Biometric Studio",
      tech: "Python, PyTorch, OpenCV, JavaScript, SVG Telemetry",
      link: "github.com/mohd-amir-ali/IrisRecognition",
      bullets: [
        "Implemented pupil-limbus boundary segmentation, Gabor wavelet encoding, and Hamming distance matching with a 4-stage interactive verification pipeline.",
        "Designed a natural gaze-tracking ocular reflex interface and unwrapped polar strip inspector."
      ]
    },
    {
      name: "Blockchain WSN Secure Cloud Simulator",
      tech: "JavaScript, Web Crypto SHA-512, Interactive Mesh Network",
      link: "github.com/mohd-amir-ali/Blockchain-WSN",
      bullets: [
        "Built a decentralized 20-node IoT cluster network with live temperature packet transmission, MDN Gateway routing, and an interactive SHA-512 avalanche sandbox."
      ]
    },
    {
      name: "HealthyMode AI Nutrition and Macro Engine",
      tech: "JavaScript, ICMR-NIN Macro Pipeline, Figma Plugin API",
      link: "github.com/mohd-amir-ali/HealthyMode",
      bullets: [
        "Designed a 2-stage nutritional scoring engine and automated meal planner grounded in cognitive load and progressive disclosure principles."
      ]
    }
  ],
  skills: {
    languages: "Python, JavaScript (ES6+), TypeScript, C++, SQL, HTML5, CSS3",
    frameworks: "React.js, Next.js, Node.js, PyTorch, OpenCV, Tailwind CSS, GSAP, Three.js",
    tools: "Git, GitHub Desktop, Docker, Figma Plugin API, Linux, Vercel",
    core: "Deep Learning (CNN), Computer Vision, Cryptographic Hashing (SHA-512), Full-Stack Development, HCI Design"
  },
  certifications: [
    "DeepLearning.AI Convolutional Neural Networks and Computer Vision Specialization",
    "AWS Cloud Practitioner Essentials and Security Architecture",
    "Finalist in University AI and Cybersecurity Engineering Hackathon"
  ],
  leadership: [
    "Technical Lead at University AI Club: Conducted hands-on workshops on Python, Git workflows, and neural networks for 100+ students.",
    "Published interactive web engineering projects and technical case studies on techwithamir.com."
  ]
};

// --------------------------------------------------------------------------
// 2. CLEAN SCRATCH-BUILD INITIAL RESUME STATE
// --------------------------------------------------------------------------
function createBlankScratchResume() {
  return {
    careerStage: "",
    resumeGoal: "",
    templateStyle: "modern",
    accentColor: "#1E3A8A",
    includePhoto: false,
    isCustomPhoto: false,
    pageCount: 1,
    eduFirst: false,
    name: "YOUR FULL NAME",
    role: "Target Role Title",
    email: "your.email@domain.com",
    phone: "91234567890",
    location: "Hyderabad, India",
    links: "linkedin.com/in/yourname  |  github.com/yourname",
    summary:
      "Answer the questions in Resume Forge BOT on the right (or click any line here to type directly) and your custom executive summary, experience, education, and skills will build automatically.",
    education: [
      {
        degree: "Degree / Qualification",
        school: "University or Institution Name",
        date: "Graduation Year",
        score: "",
        details: ""
      }
    ],
    experience: [],
    projects: [],
    skills: {
      languages: "",
      frameworks: "",
      tools: "",
      core: ""
    },
    certifications: [],
    leadership: [],
    photoDataUrl: DEFAULT_AVATAR_SVG
  };
}

let resumeState = createBlankScratchResume();
let currentStepIndex = 0;
let zoomFitMode = true;
let chatbotWavePulse = 0;
let vantaNetInstance = null;
let aiEngineConfig = {
  provider: "builtin",
  apiKey: ""
};

function triggerPhotoFilePicker() {
  const photoInput = document.getElementById("photo-upload-input");
  if (photoInput) {
    photoInput.click();
  }
}

// --------------------------------------------------------------------------
// 3. SMART PROFESSIONAL PARAPHRASER, TYPO FIXER & SUMMARY SYNTHESIZER
// --------------------------------------------------------------------------
const TYPO_CORRECTIONS = [
  [/\bsytem\b/gi, "System"],
  [/\bsytems\b/gi, "Systems"],
  [/\brecogintized\b/gi, "recognized"],
  [/\brecogintion\b/gi, "recognition"],
  [/\brecogniztion\b/gi, "recognition"],
  [/\be[\s-]+voting\b/gi, "E-Voting"],
  [/\bblock\s*chain\b/gi, "Blockchain"],
  [/\ba\s+increase\b/gi, "an increase"],
  [/\ba\s+improvement\b/gi, "an improvement"],
  [/\btracker\s+feedbacks\b/gi, "structured performance trackers and coaching feedback"],
  [/\bhyderabad\s+india\b/gi, "Hyderabad, India"],
  [/\bbengaluru\s+india\b/gi, "Bengaluru, India"],
  [/\bmumbai\s+india\b/gi, "Mumbai, India"],
  [/\bdelhi\s+india\b/gi, "Delhi, India"],
  [/\b2\s+player\b/gi, "2-player"],
  [/\breal\s+time\b/gi, "real-time"],
  [/\bfull\s+stack\b/gi, "Full-Stack"]
];

function cleanTyposAndFormatting(rawStr) {
  let s = String(rawStr || "").replace(/\u2014/g, "-").trim();
  TYPO_CORRECTIONS.forEach(([regex, replacement]) => {
    s = s.replace(regex, replacement);
  });
  return s;
}

const WEAK_OPENINGS_MAP = [
  [/^(?:i\s+)?handled\s+a\s+team\s+of\s+(\d+)\s+(?:people|associates|members|engineers)[,\s]*(.*)/i,
    (_, count, rest) => `Spearheaded and mentored a cross-functional team of ${count} associates, ${rest}`],
  [/^(?:i\s+)?handled\s+(.*)/i, (_, rest) => `Directed and managed ${rest}`],
  [/^(?:i\s+)?worked\s+on\s+(.*)/i, (_, rest) => `Engineered and delivered ${rest}`],
  [/^(?:i\s+)?helped\s+(?:with|in|to)\s+(.*)/i, (_, rest) => `Collaborated across teams to execute ${rest}`],
  [/^(?:i\s+)?made\s+(.*)/i, (_, rest) => `Developed and launched ${rest}`],
  [/^(?:i\s+)?did\s+(.*)/i, (_, rest) => `Executed comprehensive ${rest}`],
  [/^(?:i\s+)?was\s+responsible\s+for\s+(.*)/i, (_, rest) => `Led end-to-end execution of ${rest}`],
  [/^built\s+(.*)/i, (_, rest) => `Architected and built ${rest}`]
];

const STRONG_ACTION_VERBS = [
  "Engineered",
  "Spearheaded",
  "Architected",
  "Developed",
  "Directed",
  "Implemented",
  "Optimized",
  "Led",
  "Automated",
  "Designed",
  "Executed",
  "Streamlined"
];

async function paraphraseResumeStatement(rawInput, contextType = "experience") {
  let text = cleanTyposAndFormatting(rawInput).replace(/^[-•*]\s*/, "");
  if (!text) return "";

  if (aiEngineConfig.provider === "gemini" && aiEngineConfig.apiKey) {
    try {
      const resp = await fetch(
        `https://generativelanguage.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(aiEngineConfig.apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Paraphrase the following ${contextType} statement into a polished, high-impact executive resume bullet point using strong professional terminology and action verbs. Preserve the user's exact numbers and facts without inventing fake numbers. Do NOT use em-dashes. Return ONLY the single polished sentence:\n\n${text}`
                  }
                ]
              }
            ]
          })
        }
      );
      const data = await resp.json();
      const out = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (out) return cleanTyposAndFormatting(out).replace(/^[-•*]\s*/, "");
    } catch (e) {}
  }

  if (/team\s+of\s+\d+/i.test(text) && /trained|mentored/i.test(text)) {
    const numMatch = text.match(/team\s+of\s+(\d+)/i);
    const pctMatch = text.match(/(\d+%)/);
    const teamCount = numMatch ? numMatch[1] : "multiple";
    const pctText = pctMatch
      ? `, driving a ${pctMatch[1]} improvement in associate performance and KPI attainment.`
      : ", significantly improving daily goal attainment and operational quality.";
    return `Spearheaded, trained, and mentored a team of ${teamCount} associates through structured performance tracking and actionable coaching feedback${pctText}`;
  }

  if (/ping\s*pong/i.test(text) && /camera|hand/i.test(text)) {
    return "Engineered an interactive 2-player computer vision Ping Pong game powered by real-time camera hand-gesture tracking and responsive collision physics.";
  }

  if (/e-voting/i.test(text) && /blockchain/i.test(text)) {
    return "Architected a real-time decentralized E-Voting platform secured with cryptographic Blockchain ledger verification to ensure tamper-proof ballot integrity.";
  }

  for (const [pattern, replacer] of WEAK_OPENINGS_MAP) {
    if (pattern.test(text)) {
      text = text.replace(pattern, replacer);
      break;
    }
  }

  text = text.replace(
    /\.?\s*showed\s+an?\s+increase\s+(?:in\s+)?performance\s+of\s+([a-z]+)\s+by\s+(\d+%)/i,
    ", driving a $2 increase in $1 performance"
  );

  const startsWithStrongVerb = STRONG_ACTION_VERBS.some((v) =>
    text.toLowerCase().startsWith(v.toLowerCase())
  );

  if (!startsWithStrongVerb) {
    if (contextType === "project") {
      text = `Developed and deployed ${text.charAt(0).toLowerCase() + text.slice(1)} with modular architecture and responsive user workflows`;
    } else {
      text = text.charAt(0).toUpperCase() + text.slice(1);
    }
  }

  if (!/[.!?]$/.test(text)) {
    text += ".";
  }
  return text;
}

function buildDynamicExecutiveSummary() {
  const validStages = [
    "Currently Studying (Student)",
    "Fresh Graduate",
    "Working Professional",
    "Career Switcher"
  ];
  const stage = validStages.includes(resumeState.careerStage)
    ? resumeState.careerStage
    : "Results-driven professional";

  const role =
    resumeState.role && resumeState.role !== "Target Role Title"
      ? resumeState.role
      : "Technology and Product Specialist";

  const edu0 = resumeState.education?.[0];
  const hasRealEdu =
    edu0 && edu0.degree && !edu0.degree.includes("Degree / Qualification");
  const eduPhrase = hasRealEdu
    ? `holding a ${edu0.degree}${edu0.school && !edu0.school.includes("University or Institution") ? ` from ${edu0.school}` : ""}`
    : "with strong analytical and technical foundations";

  const exp0 = resumeState.experience?.[0];
  const hasRealExp = exp0 && exp0.title && exp0.org;
  let expPhrase = "";
  if (hasRealExp) {
    const firstBullet = exp0.bullets?.[0] || "";
    const metricHit = firstBullet.match(/(\d+%|\d+\s+associates|\d+\s+people)/i);
    expPhrase = ` Proven experience as ${exp0.title} at ${exp0.org}${
      metricHit ? ` (delivering ${metricHit[1]} operational impact)` : ""
    }, combining structured execution with cross-functional leadership.`;
  } else {
    expPhrase =
      " Demonstrated ability to architect end-to-end projects, solve complex operational problems, and deliver measurable outcomes.";
  }

  const goalPhrase = resumeState.resumeGoal
    ? ` Focused on contributing immediate value in ${role} (${resumeState.resumeGoal}) roles.`
    : "";

  const stageLead = stage.includes("Student")
    ? `Ambitious ${role} candidate`
    : stage.includes("Fresh")
    ? `Detail-oriented ${role} graduate`
    : `Results-driven ${role}`;

  return `${stageLead} ${eduPhrase}.${expPhrase}${goalPhrase}`;
}

// --------------------------------------------------------------------------
// 4. ROLE-AWARE KEYWORDS & SKILL PACKS
// --------------------------------------------------------------------------
function getRoleMatchedSkills(roleText = "") {
  const r = roleText.toLowerCase();
  if (r.includes("data") || r.includes("ai") || r.includes("machine learning") || r.includes("ml")) {
    return {
      languages: "Python, SQL, R, C++, JavaScript",
      frameworks: "PyTorch, TensorFlow, Scikit-Learn, Pandas, NumPy, FastAPI",
      tools: "Jupyter, Git, Docker, PostgreSQL, Tableau, Power BI, AWS",
      core: "Machine Learning, Deep Learning, Statistical Modeling, Data Visualization, Model Deployment",
      gapChips: ["PyTorch", "SQL Analytics", "Feature Engineering", "FastAPI", "Docker", "Tableau"]
    };
  }
  if (r.includes("business") || r.includes("product") || r.includes("management") || r.includes("marketing") || r.includes("mba") || r.includes("bba") || r.includes("team lead")) {
    return {
      languages: "SQL, Python (Data Analytics), Advanced Excel Modeling",
      frameworks: "Product Roadmapping, Agile Scrum, A/B Testing, RICE Prioritization, KPI Tracking",
      tools: "Jira, Figma, Tableau, Power BI, Google Analytics, Notion, Confluence",
      core: "Stakeholder Management, Cross-Functional Team Leadership, Unit Economics, Go-To-Market Strategy, Process Optimization",
      gapChips: ["Product Strategy", "A/B Testing", "SQL Analytics", "Agile Scrum", "KPI Modeling", "Figma"]
    };
  }
  return {
    languages: "Python, JavaScript (ES6+), TypeScript, Java, C++, SQL, HTML5, CSS3",
    frameworks: "React.js, Next.js, Node.js, Express.js, Flask, Tailwind CSS, REST APIs",
    tools: "Git, GitHub, Docker, MongoDB, PostgreSQL, Postman, Linux, AWS",
    core: "Full-Stack Development, Data Structures and Algorithms, System Design, Object-Oriented Programming, API Security",
    gapChips: ["TypeScript", "React.js", "Node.js", "REST APIs", "Docker", "PostgreSQL"]
  };
}

// --------------------------------------------------------------------------
// 5. 16-STEP GRANULAR CONVERSATIONAL INTERVIEW ARCHITECTURE
// --------------------------------------------------------------------------
const WIZARD_STEPS = [
  {
    id: "careerStage",
    kicker: "STEP 01 OF 16 · CURRENT STATUS",
    thinkingText: "Understanding your current career stage...",
    question:
      "Welcome to **Resume Forge BOT**. I will guide you step by step from top to bottom and build your custom A4 resume on the left.\n\nFirst, **are you currently studying, a fresh graduate, or working in a job?**",
    relatableChips: ["Currently Studying (Student)", "Fresh Graduate", "Working Professional", "Career Switcher"],
    options: [
      { label: "Currently Studying (Student)", value: "Currently Studying (Student)" },
      { label: "Fresh Graduate / Job Seeker", value: "Fresh Graduate" },
      { label: "Working Professional", value: "Working Professional" },
      { label: "Career Switcher / Freelancer", value: "Career Switcher" }
    ]
  },
  {
    id: "resumeGoal",
    kicker: "STEP 02 OF 16 · TARGET PURPOSE",
    thinkingText: "Setting up your resume structure...",
    question:
      "Got it. **What are we building this resume for?**\n\nChoosing whether it is for an **Internship**, a **New Full-Time Job**, getting a **Promotion**, or a **General Resume** helps me organize your sections properly.",
    relatableChips: ["Internship Application", "New Full-Time Job", "Getting a Promotion", "General Master Resume"],
    options: [
      { label: "Internship Application", value: "Internship Application" },
      { label: "New Full-Time Job", value: "New Full-Time Job" },
      { label: "Getting a Promotion / Senior Role", value: "Getting a Promotion" },
      { label: "General Master Resume", value: "General Master Resume" }
    ]
  },
  {
    id: "templateStyle",
    kicker: "STEP 03 OF 16 · VISUAL DESIGN STYLE",
    thinkingText: "Preparing A4 layout templates...",
    question:
      "Which **visual style** would you like for your resume?\n\n• **Classic ATS:** Clean single-column serif header.\n• **Modern Multi-Color:** Bold accent header banner with color options.\n• **Split Sidebar:** Two-column layout with a dark left sidebar.",
    relatableChips: ["Modern Multi-Color", "Classic ATS", "Split Sidebar"],
    options: [
      { label: "Modern Multi-Color", value: "modern" },
      { label: "Classic ATS Monochrome", value: "classic" },
      { label: "Split Sidebar Layout", value: "split" }
    ]
  },
  {
    id: "photoPreference",
    kicker: "STEP 04 OF 16 · PROFILE PHOTO OPTION",
    thinkingText: "Updating template style on the preview...",
    question:
      "Do you want to **include a profile photo** on your resume?\n\n• Selecting **Include Profile Photo** enables the `84x84px` photo circle on your resume and lets you upload an image directly from your computer.",
    relatableChips: ["No Photo", "Include Profile Photo", "Upload Photo from Computer"],
    options: [
      { label: "No Photo (Standard ATS)", value: "no_photo" },
      { label: "Include Profile Photo (Enable Circle)", value: "with_photo" },
      { label: "Include & Upload Image from Computer Now", value: "__upload_photo_now__" }
    ]
  },
  {
    id: "pageLength",
    kicker: "STEP 05 OF 16 · PAGE COUNT (1 VS 2 PAGES)",
    thinkingText: "Setting photo preference...",
    question:
      "How many pages do you need for your resume?\n\n• **Single-Page (1 Page):** Fits everything cleanly onto one A4 sheet.\n• **Two-Page (2 Pages):** Adds a second A4 page for extra projects, certifications, and leadership.",
    relatableChips: ["1 Page Resume", "2 Page Resume"],
    options: [
      { label: "Single-Page Resume (1 Page)", value: "1" },
      { label: "Two-Page Resume (2 Pages)", value: "2" }
    ]
  },
  {
    id: "fullName",
    kicker: "STEP 06 OF 16 · YOUR FULL NAME",
    thinkingText: "Preparing header section...",
    question:
      "Now let's fill in your details from **top to bottom**.\n\n**What is your Full Name?** *(Type your name below)*",
    relatableChips: [],
    options: []
  },
  {
    id: "targetRole",
    kicker: "STEP 07 OF 16 · TARGET ROLE TITLE",
    thinkingText: "Adding your name to the resume header...",
    question:
      "**What Target Role or Job Title** are you applying for? *(Pick a common role below or type your own)*",
    relatableChips: [
      "Software Engineering Intern",
      "Full-Stack Developer",
      "AI and ML Engineer",
      "Data Analyst",
      "Product Manager",
      "Business Analyst"
    ],
    options: [
      { label: "Software Engineering Intern", value: "Software Engineering Intern" },
      { label: "Full-Stack Software Developer", value: "Full-Stack Software Developer" },
      { label: "AI and Machine Learning Engineer", value: "AI and Machine Learning Engineer" },
      { label: "Data Analyst / Business Analyst", value: "Data Analyst" },
      { label: "Product Manager", value: "Product Manager" }
    ]
  },
  {
    id: "contactDetails",
    kicker: "STEP 08 OF 16 · EMAIL, PHONE & CITY",
    thinkingText: "Matching ATS keywords for your target role...",
    question:
      "Enter your **Email Address, Phone Number, and City** separated by commas:\n\nExample: `name@gmail.com, 91234567890, Hyderabad, India`",
    relatableChips: ["name@gmail.com, 91234567890, Hyderabad, India"],
    options: []
  },
  {
    id: "portfolioLinks",
    kicker: "STEP 09 OF 16 · LINKEDIN, GITHUB OR PORTFOLIO",
    thinkingText: "Updating contact bar on your resume...",
    question:
      "Share your **LinkedIn, GitHub, or Portfolio links** for the header:\n\nExample: `linkedin.com/in/yourname | github.com/yourname`",
    relatableChips: ["linkedin.com/in/yourname | github.com/yourname"],
    options: []
  },
  {
    id: "degreeType",
    kicker: "STEP 10 OF 16 · DEGREE OR QUALIFICATION",
    thinkingText: "Saving profile links and opening Education...",
    question:
      "Let's build your **Education Section**.\n\n**Which degree are you pursuing or holding?** *(Pick a degree below or type your qualification)*",
    relatableChips: ["B.Tech", "B.E.", "BCA", "MCA", "B.Sc", "BBA", "MBA"],
    options: [
      { label: "B.Tech", value: "B.Tech" },
      { label: "B.E.", value: "B.E." },
      { label: "BCA", value: "BCA" },
      { label: "MCA", value: "MCA" },
      { label: "B.Sc", value: "B.Sc" },
      { label: "BBA", value: "BBA" },
      { label: "MBA", value: "MBA" }
    ]
  },
  {
    id: "collegeAndYear",
    kicker: "STEP 11 OF 16 · SPECIALIZATION, COLLEGE, YEAR & SCORE",
    thinkingText: "Recording degree program...",
    question:
      "Enter your **Specialization/Branch, College or University Name, Graduation Years, and Score/CGPA** separated by commas:\n\nExample: `Computer Science, Osmania University, 2022 - 2026, CGPA 8.5/10`",
    relatableChips: [
      "Computer Science, University Name, 2022 - 2026, CGPA 8.5/10",
      "Business Administration, Institute Name, 2023 - 2025, 82%"
    ],
    options: []
  },
  {
    id: "experienceHeader",
    kicker: "STEP 12 OF 16 · WORK OR INTERNSHIP ROLE",
    thinkingText: "Adding your education details to the resume...",
    question:
      "Now for **Work Experience or Internships**.\n\nEnter your **Job/Internship Title, Company Name, and Dates** separated by commas (e.g., `Team Lead, Zomato, Jan 2025 - Present`), or click **Fresher / Skip to Projects** if you want to focus on projects:",
    relatableChips: [
      "Software Intern, Company Name, May 2025 - Aug 2025",
      "Team Lead, Organization Name, Jan 2025 - Present",
      "Fresher / Skip to Projects"
    ],
    options: [
      { label: "Fresher / Skip to Projects", value: "__fresher_mode__" }
    ]
  },
  {
    id: "experienceBullets",
    kicker: "STEP 13 OF 16 · WHAT YOU DID IN THAT ROLE",
    thinkingText: "Creating your experience entry...",
    question:
      "Describe **what you did or achieved** in that role (you can write in simple words or separate multiple points with `;`).\n\nI will automatically **paraphrase your points with strong professional wording** and include your experience in your **Executive Summary**:",
    relatableChips: [
      "Handled a team of 30 people, trained and mentored them to boost performance by 35%",
      "Built frontend modules in React and integrated REST APIs to speed up page loads"
    ],
    options: []
  },
  {
    id: "projectOne",
    kicker: "STEP 14 OF 16 · FIRST KEY PROJECT",
    thinkingText: "Paraphrasing your experience and updating your Executive Summary...",
    question:
      "Let's add your **Key Projects**!\n\nFor **Project #1**, enter **Project Title | Tech Stack | Short Description** separated by `|` (I will professionally paraphrase the description for you):\n\nExample: `E-Voting System | Python, Flask | Built a real-time E-Voting system secured through Blockchain`",
    relatableChips: [
      "E-Voting System | Python, Flask | Built a real-time E-Voting system secured through Blockchain",
      "AI Portfolio Chatbot | JavaScript, Python | Built an interactive resume builder with live PDF export"
    ],
    options: []
  },
  {
    id: "projectTwo",
    kicker: "STEP 15 OF 16 · SECOND KEY PROJECT",
    thinkingText: "Paraphrasing Project #1 and adding it to your resume...",
    question:
      "Share **Project #2** in the same format (`Project Title | Tech Stack | Short Description`), or click **Skip Second Project**:",
    relatableChips: [
      "Ping Pong Game using Hand Recognition | Python, JS, HTML | 2 player camera recognized Ping Pong game",
      "Skip Second Project"
    ],
    options: [
      { label: "Skip Second Project", value: "__skip_proj_2__" }
    ]
  },
  {
    id: "skillsAndCerts",
    kicker: "STEP 16 OF 16 · SKILLS, CERTIFICATIONS & ACHIEVEMENTS",
    thinkingText: "Paraphrasing Project #2 and preparing skill categories...",
    question:
      "Final step! Share your **Technical Skills** (comma-separated) or any **Certifications & Achievements**.\n\nYou can also click **Apply Role-Matched Skills** below, and then add certifications anytime (e.g., `Certifications: Hackathon Winner ; IBM Cybersecurity Certification`):",
    relatableChips: [
      "Apply Role-Matched Skills Automatically",
      "Certifications: Hackathon 2025 Winner ; AWS Cloud Practitioner"
    ],
    options: [
      { label: "Apply Role-Matched Skills Automatically", value: "__auto_role_skills__" }
    ]
  }
];

// --------------------------------------------------------------------------
// 6. 3D VANTA.NET MESH (0.32 OPACITY) + FULL X & Y CURSOR TILT
// --------------------------------------------------------------------------
function initVantaNetWithFullXYTransition() {
  const overlayCanvas = document.getElementById("y-axis-interactive-overlay");

  try {
    if (window.VANTA && window.VANTA.NET && window.THREE) {
      vantaNetInstance = window.VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xd2ff00,
        backgroundColor: 0x08090c,
        points: 10.0,
        maxDistance: 21.0,
        spacing: 18.0
      });
    }
  } catch (e) {}

  let targetNX = 0;
  let targetNY = 0;
  let currentNX = 0;
  let currentNY = 0;
  let mousePxX = window.innerWidth * 0.5;
  let mousePxY = window.innerHeight * 0.5;
  let cursorActive = false;

  window.addEventListener("mousemove", (e) => {
    cursorActive = true;
    mousePxX = e.clientX;
    mousePxY = e.clientY;
    targetNX = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
    targetNY = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
  });

  let ctx = null;
  let cw = window.innerWidth;
  let ch = window.innerHeight;
  const cursorSatellites = Array.from({ length: 22 }, (_, i) => ({
    x: Math.random() * cw,
    y: Math.random() * ch,
    vx: (Math.random() - 0.5) * 0.55,
    vy: (Math.random() - 0.5) * 0.55,
    r: 1.5 + (i % 2) * 0.7
  }));

  if (overlayCanvas) {
    ctx = overlayCanvas.getContext("2d");
    overlayCanvas.width = cw;
    overlayCanvas.height = ch;
    window.addEventListener("resize", () => {
      cw = overlayCanvas.width = window.innerWidth;
      ch = overlayCanvas.height = window.innerHeight;
    });
  }

  function animateXYMeshTransition() {
    currentNX += (targetNX - currentNX) * 0.08;
    currentNY += (targetNY - currentNY) * 0.08;

    // Directly drive Vanta's internal 3D camera on both X and Y axes without touching CSS transform
    if (vantaNetInstance && vantaNetInstance.camera) {
      try {
        vantaNetInstance.camera.position.y += (currentNY * -52 - vantaNetInstance.camera.position.y) * 0.07;
        vantaNetInstance.camera.rotation.x += (currentNY * 0.14 - vantaNetInstance.camera.rotation.x) * 0.07;
      } catch (e) {}
    }

    if (ctx) {
      ctx.clearRect(0, 0, cw, ch);
      for (let i = 0; i < cursorSatellites.length; i++) {
        const p = cursorSatellites[i];
        if (cursorActive) {
          const dx = mousePxX - p.x;
          const dy = mousePxY - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < 240) {
            p.vx += (dx / dist) * 0.032;
            p.vy += (dy / dist) * 0.032;
          }
        }
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 1.4) {
          p.vx = (p.vx / sp) * 1.4;
          p.vy = (p.vy / sp) * 1.4;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > cw) p.vx *= -1;
        if (p.y < 0 || p.y > ch) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(210, 255, 0, 0.5)";
        ctx.fill();

        if (cursorActive) {
          const dMouse = Math.hypot(p.x - mousePxX, p.y - mousePxY);
          if (dMouse < 195) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mousePxX, mousePxY);
            ctx.strokeStyle = `rgba(210, 255, 0, ${(1 - dMouse / 195) * 0.34})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    requestAnimationFrame(animateXYMeshTransition);
  }
  requestAnimationFrame(animateXYMeshTransition);
}

// --------------------------------------------------------------------------
// 7. BORDERLESS FLOATING SIGNATURE: 2.2S AUTO-WRITE ON LOAD + SCROLL SCRUB
//    & PRE-LIT MANIFESTO LEAD PHRASE ("Resume Forge AI by techwithamir.com")
// --------------------------------------------------------------------------
const MANIFESTO_TEXT =
  "Resume Forge AI by techwithamir.com helps you structure your achievements, highlight your real skills, and build the best resume for your career.";

const LIME_HIGHLIGHT_WORDS = new Set([
  "resume",
  "forge",
  "ai",
  "techwithamir.com",
  "structure",
  "achievements,",
  "best",
  "career."
]);

function initHeroScrollExperience() {
  const wordContainer = document.getElementById("manifesto-word-container");
  if (wordContainer) {
    const words = MANIFESTO_TEXT.split(" ");
    wordContainer.innerHTML = words
      .map((w, idx) => `<span class="reveal-word" data-widx="${idx}">${w}</span>`)
      .join(" ");
  }

  const revealSpans = Array.from(document.querySelectorAll(".reveal-word"));
  const heroTrack = document.getElementById("hero-stage");
  const sigWrap = document.getElementById("sig-word-wrap");
  const sigLive = document.getElementById("sig-word-live");
  const penDot = document.getElementById("sig-pen-dot");
  const swooshPath = document.getElementById("scroll-signature-path");

  let swooshLen = 520;
  if (swooshPath && typeof swooshPath.getTotalLength === "function") {
    try {
      swooshLen = swooshPath.getTotalLength();
      swooshPath.style.strokeDasharray = `${swooshLen}`;
      swooshPath.style.strokeDashoffset = `${swooshLen}`;
    } catch (e) {}
  }

  // Helper that renders the signature strictly from 0.0 (start of "t") to 1.0 (end of swoosh)
  function applySignatureProgress(ratio) {
    const clamped = Math.min(1, Math.max(0, ratio));
    // Phase A (0.0 -> 0.74): write "techwithamir.com" smoothly from 0% (first letter "t") to 100% (last letter "m")
    const wordRatio = Math.min(1, Math.max(0, clamped / 0.74));
    // Phase B (0.70 -> 1.0): draw the underline swoosh after the word completes
    const swooshRatio = Math.min(1, Math.max(0, (clamped - 0.70) / 0.30));

    if (sigLive) {
      const rightClip = (100 - wordRatio * 100).toFixed(2);
      sigLive.style.clipPath = `inset(-15% ${rightClip}% -25% 0)`;
      sigLive.style.webkitClipPath = `inset(-15% ${rightClip}% -25% 0)`;
    }
    if (swooshPath) {
      swooshPath.style.strokeDashoffset = `${(swooshLen * (1 - swooshRatio)).toFixed(1)}`;
    }
    if (penDot && sigWrap) {
      const ghostEl = sigWrap.querySelector(".sig-word-ghost");
      const textW = ghostEl ? ghostEl.offsetWidth : Math.max(240, sigWrap.clientWidth - 32);
      const startX = 16;
      if (clamped >= 0.99) {
        penDot.style.opacity = "0";
      } else if (clamped < 0.74) {
        penDot.style.opacity = "1";
        const px = startX + wordRatio * textW;
        const py = 42 + (wordRatio > 0.01 ? Math.sin(wordRatio * Math.PI * 14) * 6 : 0);
        penDot.style.left = `${px.toFixed(1)}px`;
        penDot.style.top = `${py.toFixed(1)}px`;
      } else {
        penDot.style.opacity = "1";
        const px = startX + (1 - swooshRatio * 0.45) * textW;
        const py = 74 + Math.sin(swooshRatio * Math.PI) * 5;
        penDot.style.left = `${px.toFixed(1)}px`;
        penDot.style.top = `${py.toFixed(1)}px`;
      }
    }
  }

  // Smoothly interpolate scroll progress so the writing flows from the very start (0%)
  let targetScrollProgress = 0;
  let smoothScrollProgress = 0;

  function computeScrollTarget() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const trackScrollable = heroTrack
      ? Math.max(380, heroTrack.offsetHeight - window.innerHeight)
      : Math.max(380, window.innerHeight * 0.9);
    targetScrollProgress = Math.min(1, Math.max(0, scrollY / trackScrollable));
  }

  function tickSignatureAndWords() {
    computeScrollTarget();
    smoothScrollProgress += (targetScrollProgress - smoothScrollProgress) * 0.14;
    if (Math.abs(targetScrollProgress - smoothScrollProgress) < 0.0005) {
      smoothScrollProgress = targetScrollProgress;
    }

    // Starts strictly at 0.0 (the very beginning of "t" in techwithamir.com) when at top of page!
    applySignatureProgress(smoothScrollProgress);

    // Keep the lead phrase ("Resume Forge AI by techwithamir.com" = first 5 words) pre-lit by default,
    // and illuminate the remaining words smoothly as you scroll!
    if (revealSpans.length > 0) {
      const litCount = Math.max(5, Math.floor(5 + smoothScrollProgress * (revealSpans.length - 4) * 1.15));
      revealSpans.forEach((sp, idx) => {
        const wClean = sp.textContent.toLowerCase();
        const isLit = idx < litCount;
        sp.classList.toggle("lit", isLit && !LIME_HIGHLIGHT_WORDS.has(wClean));
        sp.classList.toggle("lit-lime", isLit && LIME_HIGHLIGHT_WORDS.has(wClean));
      });
    }

    requestAnimationFrame(tickSignatureAndWords);
  }

  window.addEventListener("scroll", computeScrollTarget, { passive: true });
  computeScrollTarget();
  requestAnimationFrame(tickSignatureAndWords);

  const enterBtn = document.getElementById("btn-scroll-to-studio");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      const target = document.getElementById("studio-workspace");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// --------------------------------------------------------------------------
// 8. DEDICATED INTERACTIVE WAVE CANVAS INSIDE RIGHT CHATBOT
// --------------------------------------------------------------------------
function initChatbotWaveCanvas() {
  const canvas = document.getElementById("chatbot-bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = canvas.parentElement.clientWidth || 490);
  let h = (canvas.height = canvas.parentElement.clientHeight || 820);

  let mx = w * 0.5;
  let my = h * 0.4;

  canvas.parentElement.addEventListener("mousemove", (e) => {
    const r = canvas.parentElement.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    w = canvas.width = canvas.parentElement.clientWidth;
    h = canvas.height = canvas.parentElement.clientHeight;
  });

  let phase = 0;
  function drawChatbotBg() {
    phase += 0.025 + chatbotWavePulse * 0.05;
    chatbotWavePulse *= 0.94;

    ctx.clearRect(0, 0, w, h);

    const g = ctx.createRadialGradient(mx, my, 10, mx, my, 240);
    g.addColorStop(0, "rgba(210, 255, 0, 0.12)");
    g.addColorStop(0.55, "rgba(0, 240, 255, 0.05)");
    g.addColorStop(1, "rgba(17, 21, 30, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    for (let wave = 0; wave < 3; wave++) {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 14) {
        const distY = Math.abs(my - h * (0.25 + wave * 0.25));
        const amp = 14 + Math.max(0, (180 - distY) * 0.08) + chatbotWavePulse * 14;
        const y =
          h * (0.25 + wave * 0.25) +
          Math.sin(x * 0.013 + phase + wave * 1.4) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle =
        wave === 0
          ? "rgba(210, 255, 0, 0.13)"
          : wave === 1
          ? "rgba(0, 240, 255, 0.1)"
          : "rgba(16, 185, 129, 0.09)";
      ctx.lineWidth = 1.25;
      ctx.stroke();
    }
    requestAnimationFrame(drawChatbotBg);
  }
  drawChatbotBg();
}

// --------------------------------------------------------------------------
// 9. SMART SECTION INTENT ROUTER
// --------------------------------------------------------------------------
async function tryRouteSmartCommand(rawInput) {
  const text = cleanTyposAndFormatting(rawInput);

  if (/^(?:hi|hello|hey|hola|good\s+(?:morning|afternoon|evening)|yo|sup)[!.?\s]*$/i.test(text)) {
    return {
      handled: true,
      section: "Greeting",
      reply:
        "Hello! I am **Resume Forge BOT**. Let's continue building your resume - just pick an option above or type your answer for the current step."
    };
  }

  if (/^(?:upload\s+photo|add\s+photo|change\s+photo|choose\s+image)$/i.test(text)) {
    resumeState.includePhoto = true;
    triggerPhotoFilePicker();
    return {
      handled: true,
      section: "Profile Photo",
      reply:
        "Enabled the **84x84px Profile Photo Circle** on your resume and opened the image selector. You can also click directly on the photo circle on your resume preview anytime to change the image."
    };
  }

  if (
    /(?:certification|certifications|certified|achievement|achievements|award|awards|honor|honors|hackathon|winner)/i.test(
      text
    ) &&
    (text.includes(":") ||
      /^(?:add|update|include|my|set)\b/i.test(text) ||
      currentStepIndex >= WIZARD_STEPS.length)
  ) {
    const stripped = text
      .replace(
        /^(?:please\s+)?(?:add|update|include|set)?\s*(?:my\s+)?(?:certification(?:s)?|achievement(?:s)?|award(?:s)?|honor(?:s)?)(?:\s+and\s+(?:certification(?:s)?|achievement(?:s)?|award(?:s)?|honor(?:s)?))?\s*[:=-]?\s*/i,
        ""
      )
      .trim();

    const items = (stripped || text)
      .split(/[;,]/)
      .map((s) => cleanTyposAndFormatting(s))
      .filter(Boolean);

    if (items.length > 0) {
      resumeState.certifications = [
        ...(resumeState.certifications || []).filter(
          (c) => !c.includes("entered in Step 16")
        ),
        ...items
      ];
      return {
        handled: true,
        section: "Certifications & Achievements",
        reply: `Added to **Certifications & Achievements** on your resume:\n${items.map((i) => `• **${i}**`).join("\n")}`
      };
    }
  }

  const nameMatch = text.match(
    /^(?:my\s+name\s+is|change\s+(?:my\s+)?name\s+to|set\s+name\s+to|update\s+name\s+to|name\s*[:=])\s+([A-Za-z][A-Za-z\s.]{1,45})$/i
  );
  if (nameMatch) {
    resumeState.name = nameMatch[1].trim().toUpperCase();
    return {
      handled: true,
      section: "Full Name",
      advanceIfStep: "fullName",
      reply: `Updated your **Full Name** to **${resumeState.name}** on the header.`
    };
  }

  const phoneMatch = text.match(
    /^(?:my\s+phone(?:\s+number)?\s+is|change\s+phone\s+to|set\s+phone\s+to|phone\s*[:=])\s*([+\d\s-]{7,20})$/i
  );
  if (phoneMatch) {
    resumeState.phone = phoneMatch[1].trim();
    return {
      handled: true,
      section: "Phone Number",
      reply: `Updated your **Phone Number** to **${resumeState.phone}**.`
    };
  }

  const emailMatch = text.match(
    /^(?:my\s+email\s+is|change\s+email\s+to|set\s+email\s+to|email\s*[:=])\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/i
  );
  if (emailMatch) {
    resumeState.email = emailMatch[1].trim();
    return {
      handled: true,
      section: "Email Address",
      reply: `Updated your **Email Address** to **${resumeState.email}**.`
    };
  }

  const roleMatch = text.match(
    /^(?:my\s+role\s+is|change\s+role\s+to|target\s+role\s+is|set\s+role\s+to|role\s*[:=])\s+(.{2,60})$/i
  );
  if (roleMatch) {
    resumeState.role = roleMatch[1].trim();
    resumeState.summary = buildDynamicExecutiveSummary();
    return {
      handled: true,
      section: "Target Role & Summary",
      advanceIfStep: "targetRole",
      reply: `Updated your **Target Role** to **${resumeState.role}** and refreshed your **Executive Summary**.`
    };
  }

  const locMatch = text.match(
    /^(?:my\s+(?:city|location)\s+is|change\s+(?:city|location)\s+to|location\s*[:=])\s+(.{2,50})$/i
  );
  if (locMatch) {
    resumeState.location = cleanTyposAndFormatting(locMatch[1]);
    return {
      handled: true,
      section: "Location",
      reply: `Updated your **Location** to **${resumeState.location}**.`
    };
  }

  const skillMatch = text.match(
    /^(?:add\s+skills?|update\s+skills?|my\s+skills?\s+are|skills?\s*[:=-])\s*(.+)$/i
  );
  if (skillMatch) {
    const newSkills = skillMatch[1].trim();
    resumeState.skills.languages = resumeState.skills.languages
      ? `${resumeState.skills.languages}, ${newSkills}`
      : newSkills;
    return {
      handled: true,
      section: "Technical & Core Skills",
      reply: `Added **${newSkills}** to your **Technical & Core Skills** section.`
    };
  }

  const projMatch = text.match(
    /^(?:add\s+project|new\s+project|update\s+project|project\s*[:=-])\s*(.+)$/i
  );
  if (projMatch) {
    const parts = projMatch[1].split("|").map((s) => cleanTyposAndFormatting(s)).filter(Boolean);
    const title = parts[0] || "Featured Project";
    const tech = parts[1] || "Core Stack";
    const desc = await paraphraseResumeStatement(parts.slice(2).join(". ") || parts[0], "project");
    resumeState.projects.push({ name: title, tech, link: "", bullets: [desc] });
    return {
      handled: true,
      section: "Key Projects",
      reply: `Added **${title}** to your **Key Projects** section:\n• *"${desc}"*`
    };
  }

  const sumMatch = text.match(
    /^(?:change\s+summary\s+to|update\s+summary\s+to|set\s+summary\s+to|summary\s*[:=-])\s*(.+)$/i
  );
  if (sumMatch) {
    resumeState.summary = cleanTyposAndFormatting(sumMatch[1]);
    return {
      handled: true,
      section: "Executive Summary",
      reply: `Updated your **Executive Summary**.`
    };
  }

  const eduMatch = text.match(
    /^(?:update\s+education|change\s+education|my\s+education\s+is|education\s*[:=-])\s*(.+)$/i
  );
  if (eduMatch) {
    const parts = eduMatch[1].split(",").map((s) => cleanTyposAndFormatting(s)).filter(Boolean);
    resumeState.education[0] = {
      degree: parts[0] || resumeState.education[0]?.degree || "Degree",
      school: parts[1] || resumeState.education[0]?.school || "",
      date: parts[2] || resumeState.education[0]?.date || "",
      score: parts[3] || resumeState.education[0]?.score || "",
      details: ""
    };
    resumeState.summary = buildDynamicExecutiveSummary();
    return {
      handled: true,
      section: "Education",
      reply: `Updated your **Education** section to **${resumeState.education[0].degree}**.`
    };
  }

  return { handled: false };
}

// --------------------------------------------------------------------------
// 10. LIVE ATS SCORE ENGINE & KEYWORD GAP ADDER
// --------------------------------------------------------------------------
function calculateAndRenderAtsScore() {
  const bullets = [
    ...(resumeState.experience || []).flatMap((e) => e.bullets || []),
    ...(resumeState.projects || []).flatMap((p) => p.bullets || [])
  ];

  const verbHits = bullets.filter((b) =>
    STRONG_ACTION_VERBS.some((v) => b.trim().toLowerCase().startsWith(v.toLowerCase()))
  ).length;
  const verbScore =
    bullets.length > 0
      ? Math.min(99, Math.max(82, Math.round((verbHits / bullets.length) * 98)))
      : 78;

  const impactScore =
    bullets.length > 0 ? Math.min(98, 82 + bullets.length * 4) : 76;

  const rolePack = getRoleMatchedSkills(resumeState.role);
  const presentSkills = `${resumeState.skills?.languages || ""} ${resumeState.skills?.frameworks || ""} ${resumeState.skills?.tools || ""}`.toLowerCase();
  const missingKeywords = rolePack.gapChips.filter(
    (kw) => !presentSkills.includes(kw.toLowerCase())
  );
  const kwScore = Math.min(99, Math.max(78, 99 - missingKeywords.length * 4));

  let compScore = 62;
  if (resumeState.name && resumeState.name !== "YOUR FULL NAME") compScore += 9;
  if (resumeState.email && !resumeState.email.includes("your.email")) compScore += 7;
  if (resumeState.education?.[0]?.degree && !resumeState.education[0].degree.includes("Degree")) compScore += 8;
  if ((resumeState.experience || []).length > 0 || (resumeState.projects || []).length > 0) compScore += 8;
  if (resumeState.skills?.languages) compScore += 5;
  compScore = Math.min(99, compScore);

  const totalScore = Math.round(
    verbScore * 0.25 + impactScore * 0.25 + kwScore * 0.25 + compScore * 0.25
  );

  const scoreNumEl = document.getElementById("ats-score-value");
  const ringEl = document.getElementById("ats-ring-circle");
  if (scoreNumEl) scoreNumEl.textContent = `${totalScore}%`;

  if (ringEl) {
    const circumference = 226.2;
    const offset = circumference - (totalScore / 100) * circumference;
    ringEl.style.strokeDashoffset = String(offset);
    ringEl.style.stroke =
      totalScore >= 90 ? "#D2FF00" : totalScore >= 80 ? "#00F0FF" : "#F59E0B";
  }

  const setBar = (tId, bId, val) => {
    const t = document.getElementById(tId);
    const b = document.getElementById(bId);
    if (t) t.textContent = `${val}%`;
    if (b) b.style.width = `${val}%`;
  };
  setBar("m-verbs", "bar-verbs", verbScore);
  setBar("m-metrics", "bar-metrics", impactScore);
  setBar("m-keywords", "bar-keywords", kwScore);
  setBar("m-complete", "bar-complete", compScore);

  const vTitle = document.getElementById("ats-verdict-title");
  const vSub = document.getElementById("ats-verdict-sub");
  if (vTitle && vSub) {
    vTitle.textContent =
      totalScore >= 90
        ? `Strong ATS Profile (${totalScore}/100)`
        : `Building Resume (${totalScore}/100)`;
    vSub.textContent = `${resumeState.name} · Click any text or photo circle below to edit directly.`;
  }

  const gapBox = document.getElementById("keyword-gap-container");
  if (gapBox) {
    if (missingKeywords.length === 0) {
      gapBox.innerHTML = `<span class="toolbar-lbl" style="color:#6EE7B7;">All recommended role keywords included</span>`;
    } else {
      gapBox.innerHTML =
        `<span class="toolbar-lbl">1-Click Add Keywords:</span>` +
        missingKeywords
          .map(
            (kw) =>
              `<button type="button" class="kw-add-chip" data-addkw="${kw}">+ ${kw}</button>`
          )
          .join("");
      gapBox.querySelectorAll("[data-addkw]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const kw = btn.getAttribute("data-addkw");
          resumeState.skills.languages = resumeState.skills.languages
            ? `${resumeState.skills.languages}, ${kw}`
            : kw;
          renderResumePreview();
        });
      });
    }
  }
}

// --------------------------------------------------------------------------
// 11. LIVE A4 RESUME RENDERER (HARD-LOCKED 84x84 PHOTO CIRCLE & HEADER)
// --------------------------------------------------------------------------
function escapeHtml(str) {
  return String(str || "")
    .replace(/\u2014/g, "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderResumePreview() {
  document.documentElement.style.setProperty(
    "--resume-accent",
    resumeState.accentColor || "#1E3A8A"
  );

  const page1 = document.getElementById("resume-page-1");
  const page2 = document.getElementById("resume-page-2");
  if (!page1 || !page2) return;

  const tpl = resumeState.templateStyle || "modern";
  page1.className = `a4-sheet tpl-${tpl}`;
  page2.className = `a4-sheet tpl-${tpl} ${resumeState.pageCount === 2 ? "" : "hidden-sheet"}`;

  // Hard-Locked 84x84px Photo Circle with inline styles + width/height attributes
  const photoHtml = resumeState.includePhoto
    ? `<div class="res-photo-box ${resumeState.isCustomPhoto ? "" : "is-default-avatar"}" data-trigger-photo="true" title="Click to upload your photo" style="width:84px;height:84px;min-width:84px;max-width:84px;min-height:84px;max-height:84px;border-radius:50%;overflow:hidden;flex-shrink:0;position:relative;cursor:pointer;">
         <img src="${resumeState.photoDataUrl || DEFAULT_AVATAR_SVG}" class="res-photo-avatar" width="84" height="84" style="width:84px;height:84px;max-width:84px;max-height:84px;border-radius:50%;object-fit:cover;display:block;" alt="Profile" />
         <div class="photo-upload-hover-badge">
           <span>Upload</span>
           <span>Photo</span>
         </div>
       </div>`
    : "";

  const eduItems = (resumeState.education || []).filter((e) => e.degree);
  const eduBlockHtml =
    eduItems.length > 0
      ? `
    <div class="res-sec-heading">Education</div>
    ${eduItems
      .map(
        (ed) => `
      <div class="res-block">
        <div class="res-block-top">
          <div>
            <span class="res-block-title" contenteditable="true">${escapeHtml(ed.degree)}</span>
            ${ed.school ? `<span class="res-block-sub" contenteditable="true"> &middot; ${escapeHtml(ed.school)}</span>` : ""}
          </div>
          <span class="res-block-meta" contenteditable="true">${escapeHtml(ed.date)}${ed.score ? ` | ${escapeHtml(ed.score)}` : ""}</span>
        </div>
        ${ed.details ? `<div style="font-size:0.77rem;color:#475569;margin-top:2px;" contenteditable="true">${escapeHtml(ed.details)}</div>` : ""}
      </div>`
      )
      .join("")}
  `
      : "";

  const expList = (resumeState.experience || []).filter((ex) => ex.title);
  const expBlockHtml =
    expList.length > 0
      ? `
    <div class="res-sec-heading">Experience &amp; Internships</div>
    ${expList
      .map(
        (ex) => `
      <div class="res-block">
        <div class="res-block-top">
          <div>
            <span class="res-block-title" contenteditable="true">${escapeHtml(ex.title)}</span>
            <span class="res-block-sub" contenteditable="true"> &middot; ${escapeHtml(ex.org)}</span>
          </div>
          <span class="res-block-meta" contenteditable="true">${escapeHtml(ex.date)}${ex.location ? ` &middot; ${escapeHtml(ex.location)}` : ""}</span>
        </div>
        <ul class="res-list">
          ${(ex.bullets || []).map((b) => `<li contenteditable="true">${escapeHtml(b)}</li>`).join("")}
        </ul>
      </div>`
      )
      .join("")}
  `
      : "";

  const allProjects = (resumeState.projects || []).filter((p) => p.name);
  const p1Projects = resumeState.pageCount === 2 ? allProjects.slice(0, 2) : allProjects;
  const p2Projects = resumeState.pageCount === 2 ? allProjects.slice(2) : [];

  const renderProjects = (arr) =>
    arr
      .map(
        (pr) => `
      <div class="res-block">
        <div class="res-block-top">
          <div>
            <span class="res-block-title" contenteditable="true">${escapeHtml(pr.name)}</span>
            ${pr.tech ? `<span class="res-block-sub" contenteditable="true"> | ${escapeHtml(pr.tech)}</span>` : ""}
          </div>
          <span class="res-block-meta" contenteditable="true">${escapeHtml(pr.link || "")}</span>
        </div>
        <ul class="res-list">
          ${(pr.bullets || []).map((b) => `<li contenteditable="true">${escapeHtml(b)}</li>`).join("")}
        </ul>
      </div>`
      )
      .join("");

  const projBlockPage1 =
    p1Projects.length > 0
      ? `
    <div class="res-sec-heading">Key Projects</div>
    ${renderProjects(p1Projects)}
  `
      : "";

  const sk = resumeState.skills || {};
  const hasSkills = sk.languages || sk.frameworks || sk.tools || sk.core;
  const skillsBlockHtml = hasSkills
    ? `
    <div class="res-sec-heading">Technical &amp; Core Skills</div>
    <div class="res-skill-rows">
      ${sk.languages ? `<div contenteditable="true"><strong>Languages &amp; Core Stack:</strong> ${escapeHtml(sk.languages)}</div>` : ""}
      ${sk.frameworks ? `<div contenteditable="true"><strong>Frameworks &amp; Methodologies:</strong> ${escapeHtml(sk.frameworks)}</div>` : ""}
      ${sk.tools ? `<div contenteditable="true"><strong>Tools &amp; Platforms:</strong> ${escapeHtml(sk.tools)}</div>` : ""}
      ${sk.core ? `<div contenteditable="true"><strong>Core Competencies:</strong> ${escapeHtml(sk.core)}</div>` : ""}
    </div>
  `
    : "";

  const validCerts = (resumeState.certifications || []).filter(
    (c) => c && !c.includes("entered in Step 16")
  );
  const certsBlockHtml =
    validCerts.length > 0
      ? `
    <div class="res-sec-heading">Certifications &amp; Achievements</div>
    <ul class="res-list">
      ${validCerts.map((c) => `<li contenteditable="true">${escapeHtml(c)}</li>`).join("")}
    </ul>
  `
      : "";

  const validLead = (resumeState.leadership || []).filter(Boolean);
  const leadBlockHtml =
    validLead.length > 0
      ? `
    <div class="res-sec-heading">Leadership &amp; Extracurricular Impact</div>
    <ul class="res-list">
      ${validLead.map((l) => `<li contenteditable="true">${escapeHtml(l)}</li>`).join("")}
    </ul>
  `
      : "";

  const orderedMiddle = resumeState.eduFirst
    ? eduBlockHtml + expBlockHtml + projBlockPage1
    : expBlockHtml + projBlockPage1 + eduBlockHtml;

  if (tpl === "split") {
    const skillTags = `${sk.languages || ""}, ${sk.frameworks || ""}`
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 16)
      .map(
        (s) =>
          `<span style="font-size:0.69rem;padding:3px 7px;border-radius:4px;background:rgba(255,255,255,0.1);color:#F1F5F9;">${escapeHtml(s)}</span>`
      )
      .join("");

    page1.innerHTML = `
      <aside class="split-left">
        <div class="split-identity-top" style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;">
          ${photoHtml}
          <div style="width:100%;">
            <div class="res-name" contenteditable="true">${escapeHtml(resumeState.name)}</div>
            <div class="res-role" contenteditable="true">${escapeHtml(resumeState.role)}</div>
          </div>
        </div>
        <div>
          <div class="side-heading">Contact Details</div>
          <div style="font-size:0.74rem;color:#CBD5E1;display:flex;flex-direction:column;gap:5px;word-break:break-word;">
            <div contenteditable="true">${escapeHtml(resumeState.email)}</div>
            <div contenteditable="true">${escapeHtml(resumeState.phone)}</div>
            <div contenteditable="true">${escapeHtml(resumeState.location)}</div>
            <div contenteditable="true">${escapeHtml(resumeState.links)}</div>
          </div>
        </div>
        ${
          skillTags
            ? `<div>
                 <div class="side-heading">Skills &amp; Stack</div>
                 <div style="display:flex;flex-wrap:wrap;gap:5px;">${skillTags}</div>
               </div>`
            : ""
        }
        ${
          validCerts.length > 0
            ? `<div>
                 <div class="side-heading">Certifications</div>
                 <ul style="padding-left:14px;font-size:0.72rem;color:#CBD5E1;line-height:1.45;">
                   ${validCerts.map((c) => `<li contenteditable="true">${escapeHtml(c)}</li>`).join("")}
                 </ul>
               </div>`
            : ""
        }
      </aside>
      <div class="split-right">
        <div class="res-sec-heading" style="margin-top:0;">Executive Summary</div>
        <p class="res-summary-p" contenteditable="true">${escapeHtml(resumeState.summary)}</p>
        ${orderedMiddle}
      </div>
    `;
  } else {
    const headerRowStyle =
      tpl === "modern"
        ? "display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:24px;"
        : resumeState.includePhoto
        ? "display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:24px;text-align:left;"
        : "display:flex;flex-direction:column;align-items:center;text-align:center;";

    const infoColStyle =
      tpl === "modern" || resumeState.includePhoto
        ? "flex:1 1 auto;min-width:0;display:flex;flex-direction:column;align-items:flex-start;text-align:left;"
        : "display:flex;flex-direction:column;align-items:center;text-align:center;width:100%;";

    const headerHtml = `
      <div class="res-header ${resumeState.includePhoto ? "with-photo" : ""}" style="${headerRowStyle}">
        <div class="res-header-info" style="${infoColStyle}">
          <div class="res-name" contenteditable="true">${escapeHtml(resumeState.name)}</div>
          <div class="res-role" contenteditable="true">${escapeHtml(resumeState.role)}</div>
          <div class="res-contacts" style="${tpl === "modern" || resumeState.includePhoto ? "justify-content:flex-start;" : "justify-content:center;"}">
            <span contenteditable="true">${escapeHtml(resumeState.email)}</span>
            <span>&middot;</span>
            <span contenteditable="true">${escapeHtml(resumeState.phone)}</span>
            <span>&middot;</span>
            <span contenteditable="true">${escapeHtml(resumeState.location)}</span>
            <span>&middot;</span>
            <span contenteditable="true">${escapeHtml(resumeState.links)}</span>
          </div>
        </div>
        ${photoHtml}
      </div>
    `;

    const bodyHtml = `
      <div class="${tpl === "modern" ? "res-body" : ""}">
        <div class="res-sec-heading" style="margin-top:2px;">Executive Summary</div>
        <p class="res-summary-p" contenteditable="true">${escapeHtml(resumeState.summary)}</p>
        ${orderedMiddle}
        ${skillsBlockHtml}
        ${resumeState.pageCount === 1 ? certsBlockHtml : ""}
      </div>
    `;

    page1.innerHTML = headerHtml + bodyHtml;
  }

  if (resumeState.pageCount === 2) {
    page2.innerHTML = `
      <div class="${tpl === "modern" ? "res-body" : ""}" style="${tpl === "split" ? "grid-column:1/-1;padding:40px 48px;" : "padding-top:32px;"}">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--resume-accent);padding-bottom:8px;margin-bottom:14px;">
          <span style="font-weight:800;font-size:1rem;color:#0F172A;" contenteditable="true">${escapeHtml(resumeState.name)} &middot; Continued Portfolio</span>
          <span style="font-size:0.76rem;color:#64748B;font-weight:600;" contenteditable="true">${escapeHtml(resumeState.email)} | ${escapeHtml(resumeState.phone)}</span>
        </div>
        ${
          p2Projects.length > 0
            ? `<div class="res-sec-heading">Additional Projects</div>
               ${renderProjects(p2Projects)}`
            : ""
        }
        ${certsBlockHtml}
        ${leadBlockHtml}
      </div>
    `;
  }

  page1.querySelectorAll("[data-trigger-photo]").forEach((el) => {
    el.addEventListener("click", () => {
      triggerPhotoFilePicker();
    });
  });

  calculateAndRenderAtsScore();
}

// --------------------------------------------------------------------------
// 12. PIXEL-LOCKED A4 PDF EXPORT
// --------------------------------------------------------------------------
async function exportLockedA4Pdf() {
  const stagingRoot = document.getElementById("pdf-staging-root");
  const page1 = document.getElementById("resume-page-1");
  const page2 = document.getElementById("resume-page-2");
  if (!stagingRoot || !page1) return;

  stagingRoot.innerHTML = "";

  const prepareClone = (node) => {
    const clone = node.cloneNode(true);
    clone.classList.remove("hidden-sheet");
    clone.style.width = "794px";
    clone.style.minHeight = "1123px";
    clone.style.maxHeight = "1123px";
    clone.style.margin = "0";
    clone.style.boxShadow = "none";
    clone.style.transform = "none";
    clone.querySelectorAll(".photo-upload-hover-badge").forEach((b) => b.remove());
    clone.querySelectorAll("[contenteditable]").forEach((el) => el.removeAttribute("contenteditable"));
    return clone;
  };

  stagingRoot.appendChild(prepareClone(page1));

  if (resumeState.pageCount === 2 && page2) {
    const clone2 = prepareClone(page2);
    clone2.style.pageBreakBefore = "always";
    stagingRoot.appendChild(clone2);
  }

  const safeName = (resumeState.name || "Resume")
    .replace(/[^A-Za-z0-9_]+/g, "_")
    .replace(/^_+|_+$/g, "");
  const filename = `${safeName || "Custom"}_ATS_Resume.pdf`;

  if (window.html2pdf) {
    const opt = {
      margin: 0,
      filename,
      image: { type: "jpeg", quality: 0.99 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        width: 794,
        windowWidth: 794,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] }
    };
    await window.html2pdf().set(opt).from(stagingRoot).save();
    stagingRoot.innerHTML = "";
  } else {
    window.print();
  }
}

// --------------------------------------------------------------------------
// 13. CHATBOT UI & SINGLE PULSATING ORB
// --------------------------------------------------------------------------
function formatCleanMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /`(.*?)`/g,
      "<code style='background:rgba(210,255,0,0.12);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.78em;color:#D2FF00;'>$1</code>"
    )
    .replace(/\n/g, "<br/>");
}

function appendMessageBubble(sender, text, options = [], kicker = "") {
  const stream = document.getElementById("chat-stream");
  if (!stream) return;

  const row = document.createElement("div");
  row.className = `chat-row ${sender}`;

  const badge = document.createElement("div");
  badge.className = "chat-badge";
  badge.textContent = sender === "bot" ? "AI" : "YOU";

  const card = document.createElement("div");
  card.className = "chat-card";

  let html = "";
  if (sender === "bot" && kicker) {
    html += `<div class="step-kicker-tag">${escapeHtml(kicker)}</div>`;
  }
  html += `<div>${formatCleanMarkdown(text)}</div>`;
  card.innerHTML = html;

  if (sender === "bot" && options && options.length > 0) {
    const wrap = document.createElement("div");
    wrap.className = "choice-chips-wrap";
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-chip-btn";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => {
        processUserInput(opt.value, opt.label);
      });
      wrap.appendChild(btn);
    });
    card.appendChild(wrap);
  }

  row.appendChild(badge);
  row.appendChild(card);
  stream.appendChild(row);

  if (window.gsap) {
    window.gsap.fromTo(
      row,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }
    );
  }
  stream.scrollTop = stream.scrollHeight;
}

function showSinglePulsatingOrb(statusMessage = "Analyzing and structuring your resume...") {
  const stream = document.getElementById("chat-stream");
  if (!stream) return null;

  chatbotWavePulse = 1.0;

  const holder = document.createElement("div");
  holder.className = "chat-row bot";
  holder.innerHTML = `
    <div class="chat-badge">AI</div>
    <div class="thinking-orb-card">
      <div class="single-pulsating-orb"></div>
      <span class="thinking-status-text">${escapeHtml(statusMessage)}</span>
    </div>
  `;
  stream.appendChild(holder);
  stream.scrollTop = stream.scrollHeight;
  return holder;
}

function renderRelatableSuggestionsBar() {
  const bar = document.getElementById("relatable-suggestions-bar");
  const chatInput = document.getElementById("chat-input");
  if (!bar) return;

  const step = WIZARD_STEPS[currentStepIndex];
  let chips = step ? step.relatableChips || [] : [];

  if (step && step.id === "skillsAndCerts") {
    const rp = getRoleMatchedSkills(resumeState.role);
    chips = [
      `${rp.languages}, ${rp.frameworks}`,
      "Certifications: Hackathon Winner ; IBM CyberSecurity Certification"
    ];
  }

  if (!step) {
    chips = [
      "Add Certifications: ...",
      "Add Project: ...",
      "Add Skills: ...",
      "Upload Photo"
    ];
  }

  bar.innerHTML = chips
    .map(
      (c) =>
        `<button type="button" class="relatable-chip" data-fill="${escapeHtml(c)}">${escapeHtml(c)}</button>`
    )
    .join("");

  bar.querySelectorAll("[data-fill]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-fill");
      if (val === "Apply Role-Matched Skills Automatically") {
        processUserInput("__auto_role_skills__", val);
        return;
      }
      if (val === "Upload Photo from Computer" || val === "Upload Photo") {
        processUserInput("__upload_photo_now__", val);
        return;
      }
      if (val.endsWith("...")) {
        chatInput.value = val.replace("...", "");
      } else {
        chatInput.value = val;
      }
      chatInput.focus();
    });
  });
}

function updateStepHeaderUI() {
  const total = WIZARD_STEPS.length;
  const shown = Math.min(total, currentStepIndex + 1);
  const badge = document.getElementById("step-counter-badge");
  const fill = document.getElementById("wizard-progress-bar");
  if (badge) {
    badge.textContent =
      currentStepIndex >= total ? "All 16 Steps Complete" : `Step ${shown} of ${total}`;
  }
  if (fill) {
    fill.style.width = `${Math.round((shown / total) * 100)}%`;
  }
  renderRelatableSuggestionsBar();
}

function promptCurrentWizardStep() {
  updateStepHeaderUI();

  if (currentStepIndex >= WIZARD_STEPS.length) {
    appendMessageBubble(
      "bot",
      `Your **${resumeState.pageCount}-Page A4 Resume** for **${resumeState.name}** is complete and paraphrased with your experience in the **Executive Summary**.\n\n• Click **Download A4 PDF** or **Vector Print** at the top.\n• Want to add or change anything? Just tell me naturally (e.g. *"Add Certifications: Hackathon 2023 Winner ; IBM CyberSecurity"*, *"Add Skills: SQL, Tableau"*, or *"Upload photo"*) and I will place it in the right section!`,
      [
        { label: "Download A4 PDF Now", value: "__download_pdf__" },
        { label: "Upload Profile Photo", value: "__upload_photo_now__" },
        { label: "Open Vector Print-to-PDF", value: "__print_pdf__" }
      ],
      "COMPLETE · READY FOR DOWNLOAD"
    );
    return;
  }

  const step = WIZARD_STEPS[currentStepIndex];
  appendMessageBubble("bot", step.question, step.options, step.kicker);
}

async function processUserInput(rawValue, displayLabel) {
  const val = String(rawValue || "").trim();
  if (!val) return;

  if (val === "__download_pdf__") {
    exportLockedA4Pdf();
    return;
  }
  if (val === "__print_pdf__") {
    window.print();
    return;
  }
  if (val === "__upload_photo_now__") {
    resumeState.includePhoto = true;
    syncToolbarUI();
    renderResumePreview();
    triggerPhotoFilePicker();
    appendMessageBubble("user", displayLabel || "Upload Profile Photo");
    appendMessageBubble(
      "bot",
      "Enabled the **84x84px Profile Photo Circle** on your resume and opened your file browser so you can select your photo. *(You can also click directly on the photo circle on the resume preview or click **Choose Image** in the toolbar anytime.)*",
      [],
      "PHOTO MODE ENABLED"
    );
    if (WIZARD_STEPS[currentStepIndex]?.id === "photoPreference") {
      currentStepIndex++;
      promptCurrentWizardStep();
    }
    return;
  }

  appendMessageBubble("user", displayLabel || val);

  const activeStep = WIZARD_STEPS[currentStepIndex];

  const routed = await tryRouteSmartCommand(val);
  if (routed.handled && (!activeStep || activeStep.id !== routed.advanceIfStep)) {
    const orbNode = showSinglePulsatingOrb(`Routing update to ${routed.section}...`);
    await new Promise((r) => setTimeout(r, 820));
    if (orbNode) orbNode.remove();

    syncToolbarUI();
    renderResumePreview();
    appendMessageBubble("bot", routed.reply, [], `${routed.section.toUpperCase()} UPDATED`);
    return;
  }

  const thinkingMsg = activeStep
    ? activeStep.thinkingText
    : "Paraphrasing and routing into your resume...";
  const orbNode = showSinglePulsatingOrb(thinkingMsg);
  await new Promise((r) => setTimeout(r, 880));
  if (orbNode) orbNode.remove();

  if (!activeStep) {
    const paraphrased = await paraphraseResumeStatement(val, "experience");
    if (resumeState.experience && resumeState.experience.length > 0) {
      resumeState.experience[0].bullets.push(paraphrased);
    } else if (resumeState.projects && resumeState.projects.length > 0) {
      resumeState.projects[0].bullets.push(paraphrased);
    } else {
      resumeState.certifications.push(paraphrased);
    }
    resumeState.summary = buildDynamicExecutiveSummary();
    renderResumePreview();
    appendMessageBubble(
      "bot",
      `Paraphrased and added to your resume:\n• *"${paraphrased}"*`,
      [{ label: "Download A4 PDF", value: "__download_pdf__" }],
      "RESUME UPDATED"
    );
    return;
  }

  switch (activeStep.id) {
    case "careerStage":
      resumeState.careerStage = cleanTyposAndFormatting(val);
      resumeState.eduFirst = !val.toLowerCase().includes("working");
      break;

    case "resumeGoal":
      resumeState.resumeGoal = cleanTyposAndFormatting(val);
      break;

    case "templateStyle":
      if (val.toLowerCase().includes("classic")) resumeState.templateStyle = "classic";
      else if (val.toLowerCase().includes("split")) resumeState.templateStyle = "split";
      else resumeState.templateStyle = "modern";
      break;

    case "photoPreference":
      resumeState.includePhoto = val === "with_photo" || val.toLowerCase().includes("include");
      if (resumeState.includePhoto) {
        appendMessageBubble(
          "bot",
          "Profile photo circle enabled! Click the button below (or click the circle on the resume preview) to choose your photo:",
          [{ label: "Choose Image from Computer", value: "__upload_photo_now__" }],
          "UPLOAD PHOTO"
        );
      }
      break;

    case "pageLength":
      resumeState.pageCount = val.includes("2") || val.toLowerCase().includes("two") ? 2 : 1;
      break;

    case "fullName": {
      const cleanedName = val
        .replace(/^(?:my\s+name\s+is|i\s+am|i'm|name\s*[:=])\s+/i, "")
        .trim()
        .toUpperCase();
      resumeState.name = cleanedName || resumeState.name;
      break;
    }

    case "targetRole": {
      const cleanedRole = cleanTyposAndFormatting(
        val.replace(/^(?:my\s+role\s+is|target\s+role\s+is|role\s*[:=])\s+/i, "")
      );
      resumeState.role = cleanedRole;
      const rolePack = getRoleMatchedSkills(cleanedRole);
      resumeState.skills = {
        languages: rolePack.languages,
        frameworks: rolePack.frameworks,
        tools: rolePack.tools,
        core: rolePack.core
      };
      resumeState.summary = buildDynamicExecutiveSummary();
      break;
    }

    case "contactDetails": {
      const parts = val.split(",").map((s) => s.trim()).filter(Boolean);
      parts.forEach((p) => {
        if (p.includes("@")) resumeState.email = p;
        else if (/\d{7,15}/.test(p.replace(/[\s+-]/g, ""))) resumeState.phone = p;
        else resumeState.location = cleanTyposAndFormatting(p);
      });
      if (parts.length >= 3) {
        resumeState.location = cleanTyposAndFormatting(parts.slice(2).join(", "));
      }
      break;
    }

    case "portfolioLinks":
      resumeState.links = val.replace(/\u2014/g, "-").trim();
      break;

    case "degreeType":
      resumeState.education[0].degree = cleanTyposAndFormatting(val);
      break;

    case "collegeAndYear": {
      const parts = val.split(",").map((s) => cleanTyposAndFormatting(s)).filter(Boolean);
      const baseDeg = resumeState.education[0].degree || "Degree";
      if (parts.length >= 1 && !baseDeg.toLowerCase().includes(parts[0].toLowerCase())) {
        resumeState.education[0].degree = `${baseDeg} in ${parts[0]}`;
      }
      if (parts[1]) resumeState.education[0].school = parts[1];
      if (parts[2]) resumeState.education[0].date = parts[2];
      if (parts[3]) resumeState.education[0].score = parts[3];
      resumeState.education[0].details = `Focused on ${parts[0] || "core curriculum"} and practical project execution.`;
      resumeState.summary = buildDynamicExecutiveSummary();
      break;
    }

    case "experienceHeader": {
      if (val === "__fresher_mode__" || val.toLowerCase().includes("fresher") || val.toLowerCase().includes("skip")) {
        resumeState.experience = [];
        resumeState.eduFirst = true;
        resumeState.summary = buildDynamicExecutiveSummary();
        syncToolbarUI();
        renderResumePreview();
        currentStepIndex += 2;
        promptCurrentWizardStep();
        return;
      }
      const parts = val.split(",").map((s) => cleanTyposAndFormatting(s)).filter(Boolean);
      resumeState.experience = [
        {
          title: parts[0] || val,
          org: parts[1] || "Organization",
          date: parts[2] || "2025 - Present",
          location: resumeState.location || "",
          bullets: []
        }
      ];
      resumeState.summary = buildDynamicExecutiveSummary();
      break;
    }

    case "experienceBullets": {
      const rawPoints = val.split(";").map((s) => s.trim()).filter(Boolean);
      const paraphrasedList = [];
      for (const pt of rawPoints) {
        paraphrasedList.push(await paraphraseResumeStatement(pt, "experience"));
      }
      if (resumeState.experience.length === 0) {
        resumeState.experience.push({
          title: resumeState.role,
          org: "Professional Experience",
          date: "Recent",
          location: resumeState.location,
          bullets: paraphrasedList
        });
      } else {
        resumeState.experience[0].bullets = paraphrasedList;
      }
      resumeState.summary = buildDynamicExecutiveSummary();
      break;
    }

    case "projectOne": {
      const parts = val.split("|").map((s) => cleanTyposAndFormatting(s)).filter(Boolean);
      if (parts.length >= 3) {
        const desc = await paraphraseResumeStatement(parts.slice(2).join(". "), "project");
        resumeState.projects[0] = {
          name: parts[0],
          tech: parts[1],
          link: "",
          bullets: [desc]
        };
      } else if (parts.length === 2) {
        const desc = await paraphraseResumeStatement(parts[1], "project");
        resumeState.projects[0] = {
          name: parts[0],
          tech: "Core Stack",
          link: "",
          bullets: [desc]
        };
      } else {
        const desc = await paraphraseResumeStatement(val, "project");
        resumeState.projects[0] = {
          name: "Featured Project",
          tech: "Core Stack",
          link: "",
          bullets: [desc]
        };
      }
      break;
    }

    case "projectTwo": {
      if (val === "__skip_proj_2__" || val.toLowerCase().includes("skip")) {
        resumeState.projects = resumeState.projects.slice(0, 1);
      } else {
        const parts = val.split("|").map((s) => cleanTyposAndFormatting(s)).filter(Boolean);
        if (parts.length >= 3) {
          const desc = await paraphraseResumeStatement(parts.slice(2).join(". "), "project");
          resumeState.projects[1] = {
            name: parts[0],
            tech: parts[1],
            link: "",
            bullets: [desc]
          };
        } else {
          const desc = await paraphraseResumeStatement(val, "project");
          resumeState.projects[1] = {
            name: parts[0] || "Secondary Project",
            tech: parts[1] || "Core Stack",
            link: "",
            bullets: [desc]
          };
        }
      }
      break;
    }

    case "skillsAndCerts": {
      const roleDefaults = getRoleMatchedSkills(resumeState.role);
      if (val === "__auto_role_skills__") {
        resumeState.skills = {
          languages: roleDefaults.languages,
          frameworks: roleDefaults.frameworks,
          tools: roleDefaults.tools,
          core: roleDefaults.core
        };
      } else if (/certification|achievement|award|winner|hackathon/i.test(val)) {
        const cleanedCerts = val
          .replace(/^(?:certifications?|achievements?|awards?)\s*[:=-]?\s*/i, "")
          .split(/[;,]/)
          .map((s) => cleanTyposAndFormatting(s))
          .filter(Boolean);
        resumeState.certifications = cleanedCerts;
      } else {
        resumeState.skills.languages = cleanTyposAndFormatting(val);
      }
      resumeState.summary = buildDynamicExecutiveSummary();
      break;
    }
  }

  syncToolbarUI();
  renderResumePreview();
  currentStepIndex++;
  promptCurrentWizardStep();
}

// --------------------------------------------------------------------------
// 14. TOOLBAR CONTROLS & EVENT LISTENERS
// --------------------------------------------------------------------------
function syncToolbarUI() {
  document.querySelectorAll("[data-tpl]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tpl") === resumeState.templateStyle);
  });
  document.querySelectorAll("[data-pages]").forEach((btn) => {
    btn.classList.toggle("active", Number(btn.getAttribute("data-pages")) === Number(resumeState.pageCount));
  });
  const photoBtn = document.getElementById("toggle-photo-btn");
  if (photoBtn) {
    photoBtn.textContent = resumeState.includePhoto ? "On" : "Off";
    photoBtn.classList.toggle("active", Boolean(resumeState.includePhoto));
  }
  const orderBtn = document.getElementById("toggle-order-btn");
  if (orderBtn) {
    orderBtn.textContent = resumeState.eduFirst ? "Edu First" : "Exp First";
    orderBtn.classList.toggle("active", Boolean(resumeState.eduFirst));
  }
}

function bindStudioEvents() {
  try {
    if (window.Lenis) {
      const lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, allowNestedScroll: true });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } catch (e) {}

  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const txt = chatInput.value.trim();
    if (!txt) return;
    chatInput.value = "";
    processUserInput(txt);
  });

  document.getElementById("btn-prev-step").addEventListener("click", () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      promptCurrentWizardStep();
    }
  });

  document.getElementById("btn-skip-step").addEventListener("click", () => {
    if (currentStepIndex < WIZARD_STEPS.length) {
      currentStepIndex++;
      promptCurrentWizardStep();
    }
  });

  document.getElementById("btn-restart-interview").addEventListener("click", () => {
    document.getElementById("chat-stream").innerHTML = "";
    currentStepIndex = 0;
    promptCurrentWizardStep();
  });

  document.getElementById("btn-load-amir-sample").addEventListener("click", () => {
    const savedPhoto = resumeState.photoDataUrl;
    const savedCustom = resumeState.isCustomPhoto;
    resumeState = JSON.parse(JSON.stringify(AMIR_SAMPLE_RESUME));
    resumeState.photoDataUrl = savedCustom ? savedPhoto : DEFAULT_AVATAR_SVG;
    resumeState.isCustomPhoto = savedCustom;
    syncToolbarUI();
    renderResumePreview();
    appendMessageBubble(
      "bot",
      "Loaded **Mohd Amir Ali's** sample resume (`91234567890` · `techwithamir.com`). You can download the A4 PDF right away or modify any section.",
      [{ label: "Download A4 PDF", value: "__download_pdf__" }],
      "SAMPLE PROFILE LOADED"
    );
  });

  document.getElementById("btn-reset-scratch").addEventListener("click", () => {
    resumeState = createBlankScratchResume();
    document.getElementById("chat-stream").innerHTML = "";
    currentStepIndex = 0;
    syncToolbarUI();
    renderResumePreview();
    promptCurrentWizardStep();
  });

  document.querySelectorAll("[data-tpl]").forEach((btn) => {
    btn.addEventListener("click", () => {
      resumeState.templateStyle = btn.getAttribute("data-tpl");
      syncToolbarUI();
      renderResumePreview();
    });
  });

  document.querySelectorAll(".swatch-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      document.querySelectorAll(".swatch-dot").forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
      resumeState.accentColor = dot.getAttribute("data-color");
      renderResumePreview();
    });
  });

  document.getElementById("toggle-photo-btn").addEventListener("click", () => {
    resumeState.includePhoto = !resumeState.includePhoto;
    syncToolbarUI();
    renderResumePreview();
    if (resumeState.includePhoto && !resumeState.isCustomPhoto) {
      triggerPhotoFilePicker();
    }
  });

  const inlineUploadBtn = document.getElementById("inline-upload-photo-btn");
  if (inlineUploadBtn) {
    inlineUploadBtn.addEventListener("click", () => {
      resumeState.includePhoto = true;
      syncToolbarUI();
      renderResumePreview();
      triggerPhotoFilePicker();
    });
  }

  const photoInput = document.getElementById("photo-upload-input");
  document.getElementById("btn-upload-photo").addEventListener("click", () => {
    resumeState.includePhoto = true;
    syncToolbarUI();
    renderResumePreview();
    triggerPhotoFilePicker();
  });

  photoInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      resumeState.photoDataUrl = ev.target.result;
      resumeState.includePhoto = true;
      resumeState.isCustomPhoto = true;
      syncToolbarUI();
      renderResumePreview();
      appendMessageBubble(
        "bot",
        "Your profile image has been uploaded and placed cleanly inside the `84x84px` photo circle on your resume.",
        [],
        "PHOTO UPLOADED"
      );
    };
    reader.readAsDataURL(file);
  });

  document.querySelectorAll("[data-pages]").forEach((btn) => {
    btn.addEventListener("click", () => {
      resumeState.pageCount = Number(btn.getAttribute("data-pages"));
      syncToolbarUI();
      renderResumePreview();
    });
  });

  document.getElementById("toggle-order-btn").addEventListener("click", () => {
    resumeState.eduFirst = !resumeState.eduFirst;
    syncToolbarUI();
    renderResumePreview();
  });

  const zoomBtn = document.getElementById("toggle-zoom-btn");
  const zoomWrap = document.getElementById("a4-zoom-wrapper");
  zoomBtn.addEventListener("click", () => {
    zoomFitMode = !zoomFitMode;
    zoomWrap.classList.toggle("zoom-fit", zoomFitMode);
    zoomBtn.textContent = zoomFitMode ? "Fit" : "100%";
    zoomBtn.classList.toggle("active", zoomFitMode);
  });

  document.getElementById("btn-download-pdf").addEventListener("click", exportLockedA4Pdf);
  document.getElementById("btn-print-pdf").addEventListener("click", () => window.print());

  const edModal = document.getElementById("editor-modal");
  document.getElementById("btn-open-editor").addEventListener("click", () => {
    document.getElementById("ed-name").value = resumeState.name || "";
    document.getElementById("ed-role").value = resumeState.role || "";
    document.getElementById("ed-email").value = resumeState.email || "";
    document.getElementById("ed-phone").value = resumeState.phone || "";
    document.getElementById("ed-location").value = resumeState.location || "";
    document.getElementById("ed-links").value = resumeState.links || "";
    document.getElementById("ed-summary").value = resumeState.summary || "";
    const ed0 = resumeState.education?.[0] || {};
    document.getElementById("ed-degree").value = ed0.degree || "";
    document.getElementById("ed-school").value = `${ed0.school || ""} | ${ed0.date || ""} | ${ed0.score || ""}`;
    document.getElementById("ed-skills").value = resumeState.skills?.languages || "";
    document.getElementById("ed-certs").value = (resumeState.certifications || []).join(" ; ");
    edModal.classList.add("open");
  });
  document.getElementById("btn-close-editor").addEventListener("click", () => edModal.classList.remove("open"));
  document.getElementById("btn-save-editor").addEventListener("click", () => {
    resumeState.name = document.getElementById("ed-name").value.trim().toUpperCase() || resumeState.name;
    resumeState.role = document.getElementById("ed-role").value.trim() || resumeState.role;
    resumeState.email = document.getElementById("ed-email").value.trim() || resumeState.email;
    resumeState.phone = document.getElementById("ed-phone").value.trim() || resumeState.phone;
    resumeState.location = document.getElementById("ed-location").value.trim() || resumeState.location;
    resumeState.links = document.getElementById("ed-links").value.trim() || resumeState.links;
    resumeState.summary = document.getElementById("ed-summary").value.trim() || resumeState.summary;

    const degVal = document.getElementById("ed-degree").value.trim();
    const schParts = document.getElementById("ed-school").value.split("|").map((s) => s.trim());
    if (degVal) resumeState.education[0].degree = degVal;
    if (schParts[0]) resumeState.education[0].school = schParts[0];
    if (schParts[1]) resumeState.education[0].date = schParts[1];
    if (schParts[2]) resumeState.education[0].score = schParts[2];

    resumeState.skills.languages =
      document.getElementById("ed-skills").value.trim() || resumeState.skills.languages;
    const certRaw = document.getElementById("ed-certs").value.trim();
    if (certRaw) {
      resumeState.certifications = certRaw.split(";").map((s) => s.trim()).filter(Boolean);
    }
    edModal.classList.remove("open");
    renderResumePreview();
  });

  const apiModal = document.getElementById("api-modal");
  document.getElementById("btn-open-api").addEventListener("click", () => apiModal.classList.add("open"));
  document.getElementById("btn-close-api").addEventListener("click", () => apiModal.classList.remove("open"));
  document.getElementById("btn-save-api").addEventListener("click", () => {
    aiEngineConfig.provider = document.getElementById("api-provider").value;
    aiEngineConfig.apiKey = document.getElementById("api-key-input").value.trim();
    document.getElementById("api-mode-label").textContent =
      aiEngineConfig.provider === "gemini"
        ? "Gemini Live"
        : aiEngineConfig.provider === "groq"
        ? "Groq Live"
        : "AI Settings";
    apiModal.classList.remove("open");
  });
}

// --------------------------------------------------------------------------
// 15. INITIALIZE STUDIO
// --------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  initVantaNetWithFullXYTransition();
  initHeroScrollExperience();
  initChatbotWaveCanvas();
  bindStudioEvents();
  syncToolbarUI();
  renderResumePreview();
  promptCurrentWizardStep();
});
