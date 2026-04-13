import "./App.css";

const projects = [
  {
    title: "EPFO Portal Redesign",
    type: "UI/UX Case Study",
    summary:
      "Redesigned the Employee Provident Fund Organisation portal to improve usability, accessibility, and visual consistency.",
    problem:
      "Users struggled with poor navigation, cluttered layouts, and unclear service flows, making important services hard to access.",
    impact:
      "Conducted user research, built personas and journey maps, and created wireframes and high-fidelity prototypes focused on simplified navigation, stronger information hierarchy, and better accessibility across devices.",
    tags: [
      "User Research",
      "Personas",
      "Journey Maps",
      "Wireframing",
      "Prototyping",
      "Accessibility",
    ],
  },
  {
    title: "Nearby Autocare",
    type: "Behance Case Study • UI + Frontend Layout",
    summary:
      "Designed a complete UI/UX case study for a Nearby Autocare service platform to help users find reliable auto services quickly and efficiently.",
    problem:
      "Users needed a faster and more trustworthy way to discover nearby auto services, compare options, and book services without confusion.",
    impact:
      "Designed wireframes and high-fidelity UI for key screens like home, service listing, booking, and dashboard, then translated the design into a responsive frontend layout using HTML and CSS.",
    tags: [
      "Behance",
      "High-Fidelity UI",
      "Responsive Design",
      "HTML",
      "CSS",
      "Usability",
    ],
  },
  {
    title: "Seminar Hall Management System",
    type: "UI Design • Figma",
    summary:
      "Designed a Seminar Hall Management System to streamline booking and scheduling for students, faculty, and administrators.",
    problem:
      "Booking, approval, and scheduling workflows can become confusing and inefficient without clear role-based flows and structured navigation.",
    impact:
      "Created user flows, wireframes, and high-fidelity screens including dashboard, booking forms, and scheduling calendar to improve task completion and overall usability.",
    tags: [
      "Figma",
      "User Flows",
      "Dashboard UI",
      "Booking System",
      "Scheduling",
      "Task Efficiency",
    ],
  },
];

const process = [
  {
    title: "Research-driven Thinking",
    text: "I begin by understanding users, their pain points, and their goals so design decisions are grounded in real needs.",
  },
  {
    title: "Structured Flows",
    text: "I organize information and user flows carefully to make digital experiences more intuitive and efficient.",
  },
  {
    title: "Visual Clarity",
    text: "I design clean and engaging interfaces with attention to layout, typography, consistency, and usability.",
  },
  {
    title: "Responsive Experience",
    text: "I focus on accessibility and responsiveness so designs work smoothly across different devices and screen sizes.",
  },
];

const skillGroups = [
  {
    category: "Design",
    items: [
      "UI Design",
      "UX Design",
      "Interaction Design",
      "Visual Design & Layout",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    category: "Tools",
    items: ["Figma", "Canva"],
  },
  {
    category: "UX Methods",
    items: [
      "User Research",
      "User Persona",
      "Usability Testing",
      "Information Architecture",
    ],
  },
  {
    category: "Frontend Skills",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Languages",
    items: ["English", "Hindi", "Gujarati"],
  },
];

const certifications = [
  {
    title: "Digital Marketing Course",
    org: "Unlox",
    date: "Feb 2026",
  },
  {
    title: "Generative AI Mastermind",
    org: "Outskill",
    date: "Apr 2026",
  },
  {
    title: "HackaMINeD Hackathon (Certificate of Participation)",
    org: "Institute of Technology, Nirma University (in collaboration with Binghamton University)",
    date: "Mar 2026",
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
          <div className="logo">Lipi Patel • UI/UX Designer</div>

          <nav className="nav-links">
            <a href="#work">Work</a>
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
                UI/UX Designer • Research-driven • Beginner Portfolio
              </p>

              <h1>
                I design intuitive digital experiences that make complex tasks
                simpler, clearer, and easier to use.
              </h1>

              <p className="hero-description">
                UI/UX Designer with a strong foundation in user-centered design,
                specializing in wireframing, prototyping, and usability testing.
                I focus on turning complex requirements into clear, visually
                engaging, and user-friendly interfaces through research-driven
                design and thoughtful information architecture.
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
                <p className="small-label">Portfolio Snapshot</p>
                <h3>Designing with clarity, research, and usability</h3>

                <div className="stats-grid">
                  <div className="mini-card">
                    <p>Projects</p>
                    <h4>3 Case Studies</h4>
                  </div>

                  <div className="mini-card">
                    <p>Focus</p>
                    <h4>UI/UX Design</h4>
                  </div>

                  <div className="mini-card">
                    <p>Tools</p>
                    <h4>Figma • React</h4>
                  </div>

                  <div className="mini-card">
                    <p>Location</p>
                    <h4>India</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <SectionTitle
              eyebrow="Selected Work"
              title="Projects that reflect design thinking and problem solving"
              description="These projects showcase my ability to identify user pain points, simplify workflows, and create interfaces that are visually clear, structured, and responsive."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <div className="card project-card" key={project.title}>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <div className="info-box">
                    <h4>Challenge</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div className="info-box">
                    <h4>Approach & Outcome</h4>
                    <p>{project.impact}</p>
                  </div>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="text-link">
                    View Case Study
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="section about-section">
            <div>
              <SectionTitle
                eyebrow="About Me"
                title="A beginner designer building practical and user-focused experiences"
                description="I enjoy designing products that solve real problems through usability, structure, and thoughtful visual design."
              />
            </div>

            <div className="card about-card">
              <p>
                I am a UI/UX Designer with a strong interest in creating
                meaningful digital experiences that are easy to understand and
                enjoyable to use. My work is guided by user-centered design,
                research, wireframing, prototyping, and usability testing.
              </p>

              <p>
                Along with design tools like Figma, I also understand frontend
                basics such as HTML, CSS, JavaScript, and React, which helps me
                think more practically about responsive interfaces and
                implementation-friendly solutions.
              </p>

              <p>
                I am continuously learning and applying modern design practices
                to improve user experience through clarity, accessibility, and
                strong information architecture.
              </p>
            </div>
          </section>

          <section id="skills" className="section">
            <SectionTitle
              eyebrow="Skills"
              title="Tools, methods, and design capabilities"
              description="My skill set combines interface design, UX thinking, research methods, and frontend fundamentals."
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
              description="My academic foundation supports both creative and technical problem solving."
            />

            <div className="card about-card">
              <h3>B.Tech in Computer Science and Engineering</h3>
              <p>Nirma University</p>
              <p>GPA: 8.17</p>
              <p>Jul 2023 — Present</p>
              <p>Ahmedabad, India</p>
              <p>Expected Graduation: June 2027</p>
            </div>
          </section>

          <section className="section">
            <SectionTitle
              eyebrow="Certifications"
              title="Learning and achievements"
              description="I actively keep learning through certifications, workshops, and hands-on participation."
            />

            <div className="projects-grid">
              {certifications.map((item) => (
                <div className="card project-card" key={item.title}>
                  <p className="project-type">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p className="project-summary">{item.org}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <SectionTitle
              eyebrow="Process"
              title="How I approach design"
              description="My design approach focuses on understanding users, structuring information clearly, and refining experiences for usability and responsiveness."
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
                <h2>Let’s connect and create meaningful experiences</h2>
                <p>
                  I am looking for UI/UX design internships, beginner-friendly
                  opportunities, and creative roles where I can contribute,
                  learn, and grow.
                </p>
                <p>
                  <strong>Name:</strong> Lipi Patel
                </p>
                <p>
                  <strong>Role:</strong> UI/UX Designer
                </p>
                <p>
                  <strong>Phone:</strong> 6352139065
                </p>
                <p>
                  <strong>Email:</strong> lipipatel1810@gmail.co
                </p>
                <p>
                  <strong>Location:</strong> India
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:lipipatel1810@gmail.co"
                  className="btn btn-secondary"
                >
                  Email
                </a>
                <a href="#" className="btn btn-secondary">
                  LinkedIn
                </a>
                <a href="#" className="btn btn-secondary">
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