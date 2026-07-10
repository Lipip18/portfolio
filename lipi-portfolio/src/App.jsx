import "./App.css";

const projects = [
  {
    title: "Biller Dashboard",
    type: "Billing Dashboard • React + REST API • Doc RCM Experts",
    summary:
      "A full-stack internal billing dashboard built during my internship at Doc RCM Experts, giving billing teams a real-time view of claims and financial performance.",
    problem:
      "Billing teams had no centralised, real-time view of key metrics like Pending Claims, Denial Rate, and Net Collection %, making it hard to track performance and act on data quickly.",
    impact:
      "Owned the React component architecture and REST API integration end-to-end. Built real-time KPI cards (Total Collected, Pending Claims, Denial Rate, Net Collection %), a dynamic patient billing table with live Paid/Denied status indicators, sortable columns, and paginated data rendering. Implemented a Top Revenue Drivers bar chart and a Revenue Opportunity section with progress bars across the claim pipeline. Engineered a fixed left sidebar with nested dropdowns (Medical Coding, AR Follow-up, Denial Management) and a global search bar. Applied a strict brand system — Navy #0A1A3C + Red #E31E24, flat cards, 8px rounded corners — documented in a Behance case study.",
    tags: [
      "React.js",
      "Node.js",
      "REST API",
      "Figma",
      "UI/UX Design",
      "Behance",
    ],
  },
  {
    title: "Seminar Hall Management System",
    type: "Full Stack Web Application • MERN Stack",
    summary:
      "A full-stack booking platform allowing users to reserve seminar halls, view schedules, and manage events in real time.",
    problem:
      "Managing seminar hall bookings manually led to scheduling conflicts, inefficient approvals, and poor visibility into availability for students, faculty, and administrators.",
    impact:
      "Built RESTful APIs with Node.js and Express.js for booking logic, conflict detection, and event CRUD operations. Designed a responsive React frontend with an intuitive booking flow and calendar-style schedule view, backed by MongoDB for persistent data storage.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Figma",
      "Responsive Design",
    ],
  },
];

const process = [
  {
    title: "Full Stack Ownership",
    text: "I take projects end-to-end — from MongoDB schema design and REST API development to React frontends and Figma UI systems.",
  },
  {
    title: "API-First Development",
    text: "I design clean, RESTful APIs with proper routing, conflict handling, and CRUD logic before building the frontend on top.",
  },
  {
    title: "UI/UX Thinking",
    text: "I design interfaces in Figma with component libraries, spacing grids, and brand systems — then implement them precisely in React.",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "Figma"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful API Design"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "UI/UX",
    items: [
      "Wireframing",
      "High-Fidelity Prototyping",
      "Component Design",
      "Behance",
    ],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "Java", "Python"],
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <div className="container">
        <header className="navbar">
          <div>
            Lipi Patel • Full Stack Developer & UI/UX Designer
          </div>

          <nav className="nav-links">
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-text">
              <p className="hero-badge">
                Full Stack Web Developer (MERN) • UI/UX Designer
              </p>

              <h1>
                I build full-stack web applications and user-focused digital
                experiences that combine clean engineering with intuitive
                design.
              </h1>

              <p className="hero-description">
                Computer Science student at Nirma University (GPA: 8.39)
                with hands-on experience delivering end-to-end products —
                from REST API development and MongoDB schema design to
                responsive React frontends and Figma UI systems. Delivered
                the Biller Dashboard during a summer internship at Doc RCM
                Experts, owning the full stack from database to UI.
                Actively seeking internship or entry-level roles where I
                can contribute immediately and grow fast.
              </p>

              <div className="hero-buttons">
                <a href="#work" className="btn btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="card">
                <h3>
                  Full-stack engineering backed by real product ownership
                </h3>

                <div className="stats-grid">
                  <div className="mini-card">
                    <p>Experience</p>
                    <h4>Doc RCM Experts Intern</h4>
                  </div>

                  <div className="mini-card">
                    <p>Stack</p>
                    <h4>MERN + Figma</h4>
                  </div>

                  <div className="mini-card">
                    <p>GPA</p>
                    <h4>8.39 / 10</h4>
                  </div>

                  <div className="mini-card">
                    <p>Location</p>
                    <h4>Ahmedabad, India</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <SectionTitle
              eyebrow="Projects"
              title="Full-stack products built from idea to deployment"
              description="Each project covers the complete stack — backend APIs, database design, React frontend, and UI/UX in Figma."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <div className="card project-card" key={project.title}>
                  <p className="project-type">{project.type}</p>

                  <h3>{project.title}</h3>

                  <p className="project-summary">{project.summary}</p>

                  <div className="info-box">
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div className="info-box">
                    <h4>What I Built</h4>
                    <p>{project.impact}</p>
                  </div>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <SectionTitle
              eyebrow="Experience"
              title="Hands-on internship experience"
              description="Owned a real internal product end-to-end during my internship at a healthcare tech company."
            />

            <div className="card about-card">
              <h3>UI/UX Designer & Frontend Developer</h3>
              <p>
                <strong>Doc RCM Experts</strong> · Internship
              </p>
              <p>May 2026 — Jun 2026 · Ahmedabad, Gujarat, India</p>
              <br />
              <p>
                Designed and built an internal billing dashboard from
                scratch — owned the React component architecture, REST API
                integration, and end-to-end UI so company teams could add,
                view, and manage billing data.
              </p>
            </div>
          </section>

          <section id="about" className="section about-section">
            <div>
              <SectionTitle
                eyebrow="About Me"
                title="A full-stack developer who designs as well as builds"
                description="I don't just write code — I take ownership of the entire product from database to design."
              />
            </div>

            <div className="card about-card">
              <p>
                I'm a Computer Science student at Nirma University (GPA:
                8.39), passionate about building full-stack web applications
                using the MERN stack. I enjoy owning the entire product —
                designing the UI in Figma, building backend APIs in Node.js
                and Express, and implementing the frontend in React.
              </p>

              <p>
                During my internship at Doc RCM Experts, I designed and
                built an internal billing dashboard from scratch — owning
                React component architecture, REST API integration, and
                end-to-end UI so company teams could add, view, and manage
                billing data.
              </p>

              <p>
                I'm actively looking for internship or entry-level
                opportunities where I can contribute immediately, work on
                real products, and grow as a developer.
              </p>
            </div>
          </section>

          <section id="skills" className="section">
            <SectionTitle
              eyebrow="Skills"
              title="Technologies, tools, and design capabilities"
              description="My skill set combines full-stack development, UI/UX design, and frontend engineering."
            />

            <div className="projects-grid">
              {skillGroups.map((group) => (
                <div className="card project-card" key={group.category}>
                  <p className="project-type">{group.category}</p>

                  <h3>{group.category}</h3>

                  <div className="tags">
                    {group.items.map((item) => (
                      <span className="tag skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="education">
            <SectionTitle
              eyebrow="Education"
              title="Academic background"
              description="Strong fundamentals in computer science supporting both technical and creative problem solving."
            />

            <div className="card about-card">
              <h3>B.Tech in Computer Science and Engineering</h3>
              <p>Nirma University</p>
              <p>GPA: 8.39 / 10</p>
              <p>Jul 2023 — Present</p>
              <p>Ahmedabad, Gujarat, India</p>
              <p>Expected Graduation: June 2027</p>
            </div>
          </section>

          <section className="section">
            <SectionTitle
              eyebrow="Process"
              title="How I approach product building"
              description="My process combines research, engineering, usability, and visual clarity to create scalable and user-focused experiences."
            />

            <div className="process-grid">
              {process.map((item) => (
                <div className="card process-card" key={item.title}>
                  <div className="process-icon">{item.title.charAt(0)}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <div className="card contact-card">
              <div className="contact-text">
                <p className="eyebrow">Contact</p>

                <h2>Let's connect and build impactful digital products</h2>

                <p>
                  I'm currently looking for internships and opportunities in
                  Full Stack Development, Frontend Engineering, and UI/UX Design
                  where I can contribute, learn, and grow.
                </p>

                <p>
                  <strong>Name:</strong> Lipi Patel
                </p>

                <p>
                  <strong>Role:</strong> Full Stack Web Developer (MERN) & UI/UX Designer
                </p>

                <p>
                  <strong>Phone:</strong> 6352139065
                </p>

                <p>
                  <strong>Email:</strong> lipipatel1810@gmail.com
                </p>

                <p>
                  <strong>Location:</strong> Ahmedabad, Gujarat, India
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:lipipatel1810@gmail.com"
                  className="btn btn-secondary"
                >
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/lipi-patel-b81146284/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Lipip18"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;