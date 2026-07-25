import { useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import hero from "./assets/hero.png";
import chonk from "./assets/portfolio/Chonk.png";
import storyTeller from "./assets/portfolio/StoryTeller.png";
import storyPainter from "./assets/portfolio/StoryPainter.png";
import liveChat from "./assets/portfolio/LiveChat.jpg";
import searchAndRescue from "./assets/portfolio/HIFdrone.jpg";
import soilMoisture from "./assets/portfolio/WateringPlant.jpg";
import homeworkHelper from "./assets/portfolio/HomeworkHelper.jpg";
import clipVista from "./assets/portfolio/ClipVista.png";
import schoolDatabase from "./assets/portfolio/SchoolDatabase.jpg";
import pokemonIndex from "./assets/portfolio/PokemonIndex.png";
import dataAnnotation from "./assets/freelance/DataAnnotation.png";
import elevatedTransmission from "./assets/freelance/ElevatedTransmission.png";
import spartanMma from "./assets/freelance/SpartanMMA.jpg";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "More", href: "#more" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "About", href: "#about" },
];

const metrics = [
  { value: "99.98%", label: "platform uptime delivered" },
  { value: "3×", label: "faster automation cycles" },
  { value: "2,400+", label: "images in a production ML pipeline" },
];

const roles = [
  {
    company: "Apple",
    role: "Software Tools & Automation Engineer",
    date: "Aug 2025 — Present",
    summary:
      "Building the infrastructure and internal tools that keep Darwin Kernel integration moving.",
    highlights: [
      "Migrated kernel test coverage to a Kubernetes-based integration pipeline with dynamic upstream service queries.",
      "Shipped an ad-hoc test dispatch system that cut urgent integration turnaround from hours to minutes.",
      "Built a hardware test lab from the ground up and led onboarding for kernel triage workflows.",
    ],
    tags: ["Kubernetes", "REST APIs", "Darwin Kernel", "CI"],
  },
  {
    company: "Avere",
    role: "Software Engineer / Business Analyst",
    date: "Feb 2025 — Aug 2025",
    summary:
      "Connected technical delivery with business requirements for a large-scale public systems integration.",
    highlights: [
      "Defined integration endpoints and migration tables for DMV data exchange across legacy and new systems.",
      "Improved Java Spring reliability and refreshed the React experience across development, UAT, and production.",
      "Built a Node.js, Puppeteer, and Java automation bot that made bid detection and posting 3× faster.",
    ],
    tags: ["Java Spring", "React", "Node.js", "Selenium"],
  },
  {
    company: "Zinley",
    role: "Founding Engineer",
    date: "Mar 2024 — Aug 2025",
    summary:
      "Helped take an AI product from early build to public launch across backend, reliability, docs, and growth.",
    highlights: [
      "Developed Go services for user settings, projects, LLM prompts, and failover orchestration.",
      "Built Supabase and PostgreSQL infrastructure plus custom endpoints and access policies.",
      "Led reliability work with Datadog and Statuspage, maintaining 99.98% frontend and backend uptime.",
    ],
    tags: ["Go", "PostgreSQL", "Supabase", "Datadog"],
  },
  {
    company: "Apple",
    role: "CoreOS Software Engineer",
    date: "Jun 2023 — Nov 2023",
    summary:
      "Improved test coverage, triage, and pipeline visibility across Apple platforms.",
    highlights: [
      "Identified 63 persistent failures with Splunk and reported more than 250 software build issues.",
      "Integrated XCTest with Python automation, reducing test execution cycles by 30%.",
      "Improved pipeline health visibility by 75% through monitoring integrations.",
    ],
    tags: ["Python", "XCTest", "Splunk", "CoreOS"],
  },
];

const projects = [
  {
    number: "01",
    title: "C.H.O.N.K",
    kicker: "Computer vision · Active",
    description:
      "A continuous-learning cat classifier built on TensorFlow and ResNet50, backed by an automated collection and multi-stage validation pipeline.",
    image: chonk,
    alt: "C.H.O.N.K cat classification project logo",
    tags: ["TensorFlow", "ResNet50", "ETL", "Python"],
    href: "https://github.com/ethan2000liu/-C.H.O.N.K",
  },
  {
    number: "02",
    title: "AI Story Teller",
    kicker: "Generative AI",
    description:
      "An image-to-story application that combines Hugging Face computer vision models with GPT-2 to turn visual context into original narratives.",
    image: storyTeller,
    alt: "AI Story Teller application preview",
    tags: ["Transformers", "GPT-2", "OpenAI", "Python"],
    href: "https://github.com/ethan2000liu/AI-story-teller",
  },
  {
    number: "03",
    title: "AI Story Painter",
    kicker: "Text-to-image",
    description:
      "A generative image application exploring LLM-assisted prompts and multiple Hugging Face model workflows.",
    image: storyPainter,
    alt: "AI Story Painter application preview",
    tags: ["Hugging Face", "LLMs", "Computer Vision"],
    href: "https://github.com/ethan2000liu/AI-story-painter",
  },
  {
    number: "04",
    title: "React Live Chat",
    kicker: "Realtime product",
    description:
      "A full-stack messaging experience with authentication, sockets, group and direct chat, plus file attachments.",
    image: liveChat,
    alt: "React Live Chat application preview",
    tags: ["React", "Node.js", "Sockets", "ChatEngine"],
    href: "https://github.com/ethan2000liu/FullStack-Live-Chat",
  },
];

const archivedRoles = [
  {
    company: "Apple",
    role: "Tech Advisor",
    date: "Jun 2022 — Feb 2024",
    description:
      "Resolved complex Apple product issues while maintaining 90% customer satisfaction and helping reduce escalations to senior support.",
    tags: ["Technical Support", "Troubleshooting", "Documentation"],
  },
  {
    company: "Ren Energy",
    role: "Full-Stack Developer Intern",
    date: "Mar 2022 — Aug 2022",
    description:
      "Led interns building a JavaScript and TypeScript data-validation API that improved accuracy while sharply reducing manual errors.",
    tags: ["TypeScript", "Node.js", "APIs", "MySQL"],
  },
  {
    company: "Finders Tree",
    role: "Software QA Specialist",
    date: "Sep 2018 — May 2022",
    description:
      "Combined exploratory testing with Selenium automation in Java to improve SaaS test coverage and reduce critical defects.",
    tags: ["Java", "Selenium", "QA", "Security Testing"],
  },
  {
    company: "Purple Cow Agency",
    role: "Data Clerk",
    date: "Jul 2020 — Dec 2020",
    description:
      "Structured data for 200+ customers and used MySQL, ELT workflows, and Tableau to surface retention and processing insights.",
    tags: ["MySQL", "Tableau", "Excel", "ELT"],
  },
  {
    company: "NETWORK Sound",
    role: "Embedded Software Engineer Intern",
    date: "Nov 2019 — May 2020",
    description:
      "Improved an ESP32 sound-control system in C and helped integrate CAPWAP and IAPP networking protocols.",
    tags: ["C", "ESP32", "Embedded", "Networking"],
  },
];

const freelanceWork = [
  {
    title: "AI Code Evaluation",
    client: "DataAnnotation",
    description:
      "Evaluated AI-generated code for correctness and quality, and authored diverse coding problems and reference solutions.",
    image: dataAnnotation,
    alt: "DataAnnotation",
  },
  {
    title: "Website Development & Maintenance",
    client: "Elevated Transmission",
    description:
      "Developed and maintained a customer-facing website for an automotive transmission shop.",
    image: elevatedTransmission,
    alt: "Elevated Transmission website",
    href: "https://elevatedtransmission.com/",
  },
  {
    title: "WordPress Website",
    client: "Spartan MMA",
    description:
      "Designed and launched a responsive WordPress website for a martial arts school.",
    image: spartanMma,
    alt: "Spartan MMA website",
    href: "https://spartanspringtown.com/",
  },
];

const archivedProjects = [
  {
    title: "Search & Rescue with AI/ML",
    date: "2020 — 2023",
    description:
      "A Raspberry Pi rescue system combining GPS, thermal imagery, SMS communication, OpenCV, and TensorFlow.",
    image: searchAndRescue,
    alt: "Search and rescue drone project",
    tags: ["C", "Python", "OpenCV", "Raspberry Pi"],
  },
  {
    title: "School Database",
    date: "2020 — 2021",
    description:
      "A cleaned and organized MySQL database that helped more than 80 students find and select general-education courses.",
    image: schoolDatabase,
    alt: "School database project",
    tags: ["MySQL", "Data Cleaning"],
  },
  {
    title: "Homework Helper SaaS",
    date: "2020",
    description:
      "A Python and Node.js Discord bot used by a community of more than 200 students for homework support.",
    image: homeworkHelper,
    alt: "Homework Helper project",
    tags: ["Python", "Node.js", "Discord"],
  },
  {
    title: "Soil Moisture Controller",
    date: "2020",
    description:
      "Embedded C software that reads soil moisture through GPIO and an ADC, then displays and acts on the result.",
    image: soilMoisture,
    alt: "Soil moisture controller project",
    tags: ["C", "GPIO", "Embedded Systems"],
  },
  {
    title: "ClipVista",
    date: "2022",
    description:
      "A YouTube-inspired video discovery interface with search, categories, channel data, views, and likes.",
    image: clipVista,
    alt: "ClipVista video platform",
    tags: ["React", "Video API", "UI"],
    href: "https://clipvista.netlify.app",
  },
  {
    title: "Pokémon Index",
    date: "2024",
    description:
      "A React application that fetches data from PokéAPI and presents browsable Pokémon details.",
    image: pokemonIndex,
    alt: "Pokémon Index application",
    tags: ["React", "PokéAPI"],
    href: "https://github.com/kfc0105/pokedexApp",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Go", "Swift", "Java", "TypeScript", "C / C++", "SQL", "Bash"],
  },
  {
    title: "Systems & Data",
    items: ["Kubernetes", "Docker", "PostgreSQL", "MySQL", "Nginx", "Splunk", "Datadog", "AWS"],
  },
  {
    title: "Product",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Tailwind", "Swagger", "Vite"],
  },
  {
    title: "AI & Quality",
    items: ["TensorFlow", "OpenCV", "LLMs", "Selenium", "XCTest", "GitHub Actions", "Tableau"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Ethan Liu, home">
          EL<span>.</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      <main id="main">
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Software tools &amp; automation engineer
            </p>
            <h1>
              I build the systems behind <em>reliable</em> software.
            </h1>
            <p className="hero-intro">
              I&apos;m Ethan Liu — an engineer at Apple working across automation, integration
              infrastructure, full-stack products, and applied AI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <FiArrowDown aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="/Ethan-Liu-Resume.pdf" download>
                Résumé <FiDownload aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/ethan2000liu" target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ethanwliu/" target="_blank" rel="noreferrer">
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration representing software engineering">
            <div className="visual-index">01 / SYSTEMS</div>
            <img src={hero} alt="" />
            <div className="visual-note visual-note-top">AUTOMATION</div>
            <div className="visual-note visual-note-bottom">AI / ML</div>
            <div className="visual-status">
              <span />
              Currently building at Apple
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Selected outcomes">
          {metrics.map((metric) => (
            <div className="metric" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section projects-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / SELECTED WORK</p>
              <h2>Projects built to learn, ship, and improve.</h2>
            </div>
            <p>
              A focused selection across machine learning, generative AI, and full-stack
              product development.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                aria-label={`View ${project.title} on GitHub`}
              >
                <div className="project-image">
                  <span>{project.number}</span>
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <div>
                      <p>{project.kicker}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <FiArrowUpRight aria-hidden="true" />
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading section-heading-light">
            <div>
              <p className="section-index">02 / EXPERIENCE</p>
              <h2>From low-level test systems to public-facing products.</h2>
            </div>
            <a className="text-link" href="/Ethan-Liu-Resume.pdf" target="_blank" rel="noreferrer">
              Read the full résumé <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="timeline">
            {roles.map((role, index) => (
              <article className="role" key={`${role.company}-${role.role}`}>
                <div className="role-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="role-meta">
                  <p>{role.company}</p>
                  <span>{role.date}</span>
                </div>
                <div className="role-details">
                  <h3>{role.role}</h3>
                  <p className="role-summary">{role.summary}</p>
                  <ul className="role-highlights">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <ul className="tag-list tag-list-dark" aria-label={`${role.company} technologies`}>
                    {role.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section archive-section" id="more">
          <div className="section-heading">
            <div>
              <p className="section-index">03 / MORE + ARCHIVE</p>
              <h2>The rest of the work still matters.</h2>
            </div>
            <p>
              Earlier roles, client work, and experiments that shaped the engineer I am today.
              Kept compact, but never erased.
            </p>
          </div>

          <div className="archive-group">
            <div className="archive-group-heading">
              <p>Experience archive</p>
              <span>05 additional roles</span>
            </div>
            <div className="archive-role-list">
              {archivedRoles.map((role) => (
                <article className="archive-role" key={`${role.company}-${role.role}`}>
                  <div>
                    <p>{role.company}</p>
                    <h3>{role.role}</h3>
                  </div>
                  <p className="archive-role-description">{role.description}</p>
                  <div className="archive-role-meta">
                    <span>{role.date}</span>
                    <ul>
                      {role.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="archive-group">
            <div className="archive-group-heading">
              <p>Client &amp; freelance work</p>
              <span>03 engagements</span>
            </div>
            <div className="freelance-grid">
              {freelanceWork.map((work) => {
                const content = (
                  <>
                    <div className="freelance-image">
                      <img src={work.image} alt={work.alt} />
                    </div>
                    <div className="freelance-content">
                      <div>
                        <p>{work.client}</p>
                        <h3>{work.title}</h3>
                      </div>
                      {work.href && <FiArrowUpRight aria-hidden="true" />}
                      <p className="freelance-description">{work.description}</p>
                    </div>
                  </>
                );

                return work.href ? (
                  <a
                    className="freelance-card"
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                    key={work.client}
                  >
                    {content}
                  </a>
                ) : (
                  <article className="freelance-card" key={work.client}>
                    {content}
                  </article>
                );
              })}
            </div>
          </div>

          <div className="archive-group">
            <div className="archive-group-heading">
              <p>Project archive</p>
              <span>06 additional builds</span>
            </div>
            <div className="archive-project-grid">
              {archivedProjects.map((project) => {
                const content = (
                  <>
                    <div className="archive-project-image">
                      <img src={project.image} alt={project.alt} />
                    </div>
                    <div className="archive-project-content">
                      <div className="archive-project-title">
                        <span>{project.date}</span>
                        {project.href && <FiArrowUpRight aria-hidden="true" />}
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <ul>
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                );

                return project.href ? (
                  <a
                    className="archive-project"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    key={project.title}
                  >
                    {content}
                  </a>
                ) : (
                  <article className="archive-project" key={project.title}>
                    {content}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section toolkit-section" id="toolkit">
          <div className="section-heading">
            <div>
              <p className="section-index">04 / TOOLKIT</p>
              <h2>Broad enough to connect the whole system.</h2>
            </div>
            <p>
              I work from infrastructure and data through APIs, product interfaces, automated
              testing, and observability.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-title">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-lead">
            <p className="section-index">05 / ABOUT</p>
            <h2>Curious by default. Practical by design.</h2>
          </div>
          <div className="about-copy">
            <p className="about-intro">
              I&apos;m a multilingual engineer who enjoys untangling complex systems, making
              workflows more dependable, and turning emerging technology into useful products.
            </p>
            <p>
              My path spans Apple platform engineering, startup product development, data
              systems, embedded software, and applied machine learning. That range helps me move
              comfortably between technical depth and the people a system needs to serve.
            </p>
            <div className="education-grid">
              <article>
                <span>Graduate</span>
                <h3>Georgia Institute of Technology</h3>
                <p>M.S. Computer Science</p>
              </article>
              <article>
                <span>Undergraduate</span>
                <h3>California State University, Sacramento</h3>
                <p>B.S. Computer Engineering</p>
              </article>
            </div>
            <p className="languages">English &amp; Mandarin — Native · Japanese — Elementary</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-index">06 / CONTACT</p>
          <h2>Let&apos;s build something dependable.</h2>
          <p>
            Have an engineering problem, product idea, or role that fits? I&apos;d be glad to
            hear about it.
          </p>
          <a className="contact-email" href="mailto:ethan2000liu@gmail.com">
            ethan2000liu@gmail.com <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href="https://github.com/ethan2000liu" target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ethanwliu/" target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="mailto:ethan2000liu@gmail.com">
              <FiMail aria-hidden="true" /> Email
            </a>
            <a href="/Ethan-Liu-Resume.pdf" download>
              <FiDownload aria-hidden="true" /> Résumé
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="monogram" href="#top" aria-label="Back to top">
          EL<span>.</span>
        </a>
        <p>Designed and built by Ethan Liu · {new Date().getFullYear()}</p>
        <a href="#top">
          Back to top <FiArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}

export default App;
