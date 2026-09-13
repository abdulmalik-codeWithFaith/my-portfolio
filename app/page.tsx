"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
  Trophy,
  GraduationCap,
  Bot,
  Building2,
  Target,
  Sparkles,
  Code2,
  Server,
  Smartphone,
  BrainCircuit,
  Wrench,
  Layers,
  Rocket,
  Users,
  Zap,
  Lightbulb,
  GitBranch,
  Quote,
  ExternalLink,
  ChevronDown,
  Menu,
  X as CloseIcon,
  Database,
  Cloud,
} from "lucide-react";

/* ==============================================================
   SHARED ANIMATION VARIANTS
   ============================================================== */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ==============================================================
   SECTION EYEBROW — mono-font label, encodes "section index / total"
   which is genuinely meaningful here (this is a single linear page).
   ============================================================== */
function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs text-cyan tracking-[0.2em]">{index}</span>
      <span className="h-px w-8 bg-gradient-to-r from-cyan/60 to-transparent" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
    </div>
  );
}

/* ==============================================================
   NAVIGATION
   ============================================================== */
const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled ? "glasss" : "border border-transparent"
          }`}
        >
          <a href="#top" className="font-display font-semibold tracking-tight text-[15px]">
            code<span className="text-signal">WithFaith</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-text px-4 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-text"
          >
            {open ? <CloseIcon size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 rounded-2xl px-5 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text px-4 py-2 text-sm font-medium text-bg"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* ==============================================================
   AMBIENT BACKGROUND — animated glow blobs + dot grid
   ============================================================== */
function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="blob animate-drift bg-violet"
        style={{ width: 480, height: 480, top: "-10%", left: "-8%" }}
      />
      <div
        className="blob animate-drift-slow bg-cyan"
        style={{ width: 420, height: 420, top: "8%", right: "-10%" }}
      />
      <div
        className="blob animate-drift bg-violet"
        style={{ width: 380, height: 380, bottom: "-8%", left: "20%", animationDelay: "4s" }}
      />
    </div>
  );
}

/* ==============================================================
   HERO — developer status card w/ orbiting tech icons (signature)
   ============================================================== */
const ORBIT_ICONS = [
  { Icon: Code2, r: 150, dur: 22, delay: 0 },
  { Icon: Server, r: 150, dur: 22, delay: -7.3 },
  { Icon: BrainCircuit, r: 150, dur: 22, delay: -14.6 },
  { Icon: Smartphone, r: 205, dur: 30, delay: -5 },
  { Icon: Database, r: 205, dur: 30, delay: -15 },
  { Icon: Cloud, r: 205, dur: 30, delay: -25 },
];

function DevCard() {
  return (
    <div className="flex items-center justify-center h-[380px] sm:h-[440px]">
      {/* Orbit rings */}
      <div className="absolute rounded-full border border-line" style={{ width: 300, height: 300 }} />
      <div className="absolute rounded-full border border-line" style={{ width: 410, height: 410 }} />

      {/* Orbiting icons */}
      {ORBIT_ICONS.map(({ Icon, r, dur, delay }, i) => (
        <div
          key={i}
          className="absolute"
          style={
            {
              animation: `orbit ${dur}s linear infinite`,
              animationDelay: `${delay}s`,
              "--r": `${r}px`,
            } as React.CSSProperties
          }
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl glass glow-cyan">
            <Icon size={18} className="text-cyan" />
          </div>
        </div>
      ))}

      {/* Center card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-[240px] sm:w-[270px] gradient-border glow-violet rounded-2xl p-5 animate-float"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyan/70" />
          <span className="ml-auto font-mono text-[10px] text-muted-2">status.ts</span>
        </div>
        <div className="font-mono text-xs leading-relaxed space-y-1.5">
          <p className="text-muted-2">// currently</p>
          <p>
            <span className="text-violet">const</span> <span className="text-text">dev</span> = {"{"}
          </p>
          <p className="pl-4 text-muted">
            name: <span className="text-cyan">&quot;Abdulrosheed&quot;</span>,
          </p>
          <p className="pl-4 text-muted">
            role: <span className="text-cyan">&quot;Fullstack + AI&quot;</span>,
          </p>
          <p className="pl-4 text-muted">
            building: <span className="text-cyan">&quot;AmTechy&quot;</span>,
          </p>
          <p className="pl-4 text-muted">
            shipping: <span className="text-cyan">&quot;Syntra AI&quot;</span>,
          </p>
          <p className="pl-4 text-muted">
            status: <span className="text-cyan">&quot;open to work&quot;</span>
            <span className="text-text animate-caret">|</span>
          </p>
          <p>{"}"}</p>
        </div>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7 font-mono text-xs text-cyan"
          >
            <Sparkles size={13} />
            Founder of AmTechy &amp; Syntra AI
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-6xl lg:text-[64px] font-semibold leading-[1.08] tracking-tight"
          >
            Hi, I&apos;m <span className="text-signal">Abdulmalik</span>
            <span className="block text-muted-2 text-2xl sm:text-3xl mt-3 font-normal">
              known as codeWithFaith
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            I&apos;m a Fullstack Developer, AI Engineer and Mobile App Developer who builds
            products that solve real problems not demos that just look good in a pitch deck.
            I&apos;ve shipped multiple AI-powered products, and I use AI every day to move faster
            while still writing clean, maintainable, scalable code. I believe AI should make
            developers stronger, not replace them.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg hover:opacity-90 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Abdulmalik-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-line-strong transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <DevCard />
      </div>

      <div className="flex justify-center mt-16">
        <motion.a
          href="#stats"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}

/* ==============================================================
   STATS — animated counters
   ============================================================== */
const STATS = [
  { value: 4, suffix: "+", label: "Hackathon Wins", Icon: Trophy },
  { value: 10, suffix: "+", label: "Developers Mentored", Icon: GraduationCap },
  { value: null, display: "Multiple", label: "AI Products Shipped", Icon: Bot },
  { value: null, display: "Several", label: "Companies Worked With", Icon: Building2 },
  { value: 100, suffix: "%", label: "Problem Solver", Icon: Target },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, target, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, mv, target]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section id="stats" className="py-20 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-5 gap-6"
        >
          {STATS.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center sm:text-left">
              <s.Icon size={18} className="text-cyan mb-3 mx-auto sm:mx-0" />
              <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                {s.value !== null ? <Counter target={s.value} suffix={s.suffix ?? ""} /> : s.display}
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-muted">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   ABOUT
   ============================================================== */
const ABOUT_ROLES = [
  { label: "Founder of AmTechy", Icon: Rocket },
  { label: "Founder of Syntra AI", Icon: BrainCircuit },
  { label: "AI Product Builder", Icon: Bot },
  { label: "Fullstack Engineer", Icon: Code2 },
  { label: "Mobile Developer", Icon: Smartphone },
  { label: "Mentor", Icon: GraduationCap },
];

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <Eyebrow index="01" label="About" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            Software that earns its place in someone&apos;s day.
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            I care less about how impressive a stack looks and more about whether the thing
            I built actually helps someone. That&apos;s what pulled me toward AI products
            they let me turn a real, specific frustration into something that works in minutes
            instead of hours.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            I&apos;ve mentored more than 10 aspiring developers, teaching frontend development
            and guiding them through real-world projects rather than tutorials because that&apos;s
            how I learned best too. I&apos;m always picking up new tools, but I hold the fundamentals
            steady underneath them.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 gap-4"
        >
          {ABOUT_ROLES.map(({ label, Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="glass glass-hover rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-violet" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   SKILLS
   ============================================================== */
const SKILL_GROUPS = [
  {
    title: "Frontend",
    Icon: Code2,
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "TanStack Query", "Vue.js"],
  },
  {
    title: "Backend",
    Icon: Server,
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Prisma", "PostgreSQL", "Firebase Firestore", "Supabase", "REST APIs", "MERN Stack"],
  },
  {
    title: "Mobile",
    Icon: Smartphone,
    items: ["React Native", "Expo"],
  },
  {
    title: "AI",
    Icon: BrainCircuit,
    items: ["OpenAI", "Claude", "Gemini", "AI API Integration", "Prompt Engineering", "AI Automation", "LLM Integration"],
  },
  {
    title: "DevOps & Tools",
    Icon: Wrench,
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "CI/CD", "Figma", "Postman", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/40 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow index="02" label="Skills" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            The stack I actually build with.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            I lean on tools like ChatGPT and Claude daily to accelerate development, automate
            repetitive work, and prototype faster — while the engineering standard stays high.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="gradient-border glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <group.Icon size={17} className="text-cyan" />
                <h3 className="font-display text-sm font-semibold tracking-wide">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-surface-2 border border-line px-3 py-1.5 text-xs text-muted hover:text-text hover:border-line-strong transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   EXPERIENCE — timeline
   ============================================================== */
const EXPERIENCE = [
  {
    role: "Founder",
    org: "AmTechy",
    points: ["Building technology solutions", "Teaching developers", "Community building", "Mentoring"],
  },
  {
    role: "Founder",
    org: "Syntra AI",
    points: ["Built AI-powered software products focused on improving productivity through intelligent automation."],
  },
  {
    role: "Fullstack Developer",
    org: "EventFlow",
    points: ["Built the company's complete fullstack website for an event solutions business offering event websites, branding, content creation, and digital services."],
  },
  {
    role: "Frontend Instructor",
    org: "GeegStack Academy",
    points: ["Taught frontend development", "Mentored aspiring developers", "Designed practical coding exercises", "Helped students solve real-world software problems"],
  },
  {
    role: "Senior Frontend Developer",
    org: "Obeks AI",
    points: ["Worked on AI-powered customer engagement software", "Built frontend interfaces for AI agents that automate customer conversations through WhatsApp and websites"],
  },
  {
    role: "Frontend Developer Intership",
    org: "Mieuve",
    points: ["Worked on frontend applications for a UK-based travel platform", "Built responsive user interfaces", "Collaborated with designers and backend developers"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow index="03" label="Experience" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Where I&apos;ve built and taught.
          </h2>
        </Reveal>

        <div className="mt-14">
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-10"
          >
            {EXPERIENCE.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="relative pl-11 sm:pl-14">
                <span className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-dot" />
                </span>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                    <span className="text-signal font-mono text-sm">{item.org}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                        <span className="text-cyan mt-1.5 shrink-0">
                          <span className="block w-1 h-1 rounded-full bg-cyan" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-muted-2">
            I&apos;ve also completed multiple internships and collaborated on various software
            products beyond what&apos;s listed here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ==============================================================
   PROJECTS
   ============================================================== */
const PROJECTS = [
  {
    name: "Syntra AI",
    tagline: "AI Meeting Assistant",
    description: "Joins meetings, captures the conversation, and turns it into clean summaries and action items so nothing important gets lost after the call ends.",
    tech: ["Next.js", "Typesctipt", "Firebase", "Cloud"],
    code: "https://github.com/abdulmalik-codeWithFaith/Syntra-AI",
    live: "https://syntraai.name.ng"
  },
  {
    name: "AmTechy",
    tagline: "Tech Education Platform",
    description: "A modern learning platform focused on teaching software development through hands-on projects, mentorship, and real-world industry experience.",
    tech: ["Next.js", "Claude", "Firestore", "Typescript"],
    code: "https://github.com/abdulmalik-codeWithFaith/AmTechy",
    live: "https://amtechy.name.ng"
  },
  {
    name: "Postora AI",
    tagline: "AI Marketing Automation Platform",
    description: "Transforms product information into high-quality marketing content, including social media posts, captions, emails, and campaign copy to streamline content creation.",
    tech: ["Next.js", "Firebase Firestore", "AI Automation"],
    code: "https://github.com/abdulmalik-codeWithFaith/postora",
    live: "https://postora-alpha.vercel.app"
  },
  {
    name: "ReachFast",
    tagline: "AI Prospect Research Platform",
    description: "Researches people and companies from publicly available sources, then generates personalized outreach insights to help users connect with prospects faster and more effectively.",
    tech: ["Next.js", "Node.js", "MongoDB", "Gemini"],
    code: "https://github.com/abdulmalik-codeWithFaith/ReachFast",
    live: "https://reach-fast.vercel.app"
  },
  {
    name: "LearnForge AI",
    tagline: "AI Learning Platform",
    description: "An interactive learning platform that combines structured courses, coding challenges, and AI-powered assistance to help learners build practical software development skills.",
    tech: ["Nextjs", "Prism", "PostgreSQL", "Open AI"],
    code: "https://github.com/abdulmalik-codeWithFaith/LearnForge-AI",
    live: "https://learn-forge-ai-woad.vercel.app"
  },
  {
    name: "EventFlow",
    tagline: "Event Services Platform",
    description: "A fullstack platform built for an event solutions company, showcasing event websites, branding, content creation, and digital services with a modern, responsive user experience.",
    tech: ["React", "Firestore", "Typescript", "Resend"],
    code: "",
    live: "https://www.eventflowafrica.com"
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="groups gradient-border glass-hover rounded-2xl p-6 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-surface-2 flex items-center justify-center">
          <Bot size={18} className="text-violet" />
        </div>
        <ArrowUpRight size={18} className="text-muted-2 group-hover:text-cyan group-hover:rotate-45 transition-all" />
      </div>
      <h3 className="font-display text-lg font-semibold">{project.name}</h3>
      <p className="text-signal font-mono text-xs mt-1 mb-3">{project.tagline}</p>
      <p className="text-sm text-muted leading-relaxed flex-1">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-surface-2 border border-line px-2.5 py-1 text-[11px] text-muted-2">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <a
          href={project.code}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full border border-line px-3.5 py-2 hover:border-line-strong transition-colors"
        >
          <Github size={13} /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full bg-text text-bg px-3.5 py-2 hover:opacity-90 transition-opacity"
        >
          <ExternalLink size={13} /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-surface/40 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow index="04" label="Featured Projects" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            AI products, built end to end.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   ACHIEVEMENTS
   ============================================================== */
const ACHIEVEMENTS = [
  { emoji: "🏆", label: "Won 4+ Hackathons" },
  { emoji: "🚀", label: "Shipped Multiple AI Products" },
  { emoji: "👨‍🏫", label: "Mentored 10+ Developers" },
  { emoji: "💻", label: "Worked Across Multiple Companies" },
  { emoji: "📱", label: "Fullstack & Mobile Developer" },
  { emoji: "🤖", label: "AI Product Builder" },
];

function Achievements() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow index="05" label="Achievements" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            A quick scorecard.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={a.label}
              variants={fadeUp}
              className="glass glass-hover rounded-2xl p-6 flex items-center gap-4"
            >
              <span className="text-2xl">{a.emoji}</span>
              <span className="text-sm font-medium">{a.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   WHY WORK WITH ME
   ============================================================== */
const WHY = [
  { title: "Problem Solver", desc: "I start from the friction someone actually feels, not from a feature list.", Icon: Lightbulb },
  { title: "Product Thinker", desc: "I care about why we're building something, not just how, before writing a line of code.", Icon: Layers },
  { title: "Fast Learner", desc: "New stack, new domain — I get to productive speed quickly and keep going.", Icon: Zap },
  { title: "AI-Powered Development", desc: "I use AI daily to move faster, without letting it lower the quality bar.", Icon: BrainCircuit },
  { title: "Scalable Architecture", desc: "I build systems meant to grow, not just demo well on day one.", Icon: GitBranch },
  { title: "Clean Code", desc: "Readable, maintainable code that the next engineer — including future me — can trust.", Icon: Code2 },
  { title: "Team Collaboration", desc: "I communicate clearly with designers, backend engineers, and stakeholders alike.", Icon: Users },
];

function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32 bg-surface/40 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow index="06" label="Why work with me" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            What I bring to a team.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {WHY.map(({ title, desc, Icon }) => (
            <motion.div key={title} variants={fadeUp} className="gradient-border glass-hover rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center mb-4">
                <Icon size={18} className="text-violet" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   TESTIMONIALS (placeholder)
   ============================================================== */
const TESTIMONIALS = [
  {
    quote: "Abdulmalik is an outstanding frontend tutor. He simplifies complex topics, supports students with real projects, and inspires confidence in every session.",
    name: "Abdulrasheed Ibrahim",
    role: "Lead Instructor, Geegstack Academy.",
  },
  {
    quote: "Working with Abdulrosheed was seamless. He transformed our vision into a professional, high-quality platform.",
    name: "Joseph Tochi",
    role: "Founder, EventFlow.",
  },
  {
    quote: "Abdulrosheed integrated seamlessly with our team and delivered clean, scalable frontend solutions for our AI platform.",
    name: "Gabriel",
    role: "CEO, OBEKS AI.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow index="07" label="Testimonials" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Feedback.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="glass glass-hover rounded-2xl p-6 flex flex-col">
              <Quote size={20} className="text-cyan mb-4" />
              <p className="text-sm text-muted leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   CONTACT
   ============================================================== */
const CONTACT_LINKS = [
  { label: "Email", href: "mailto:abdmalikabdrosheed@gmail.com", Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulmalik-abdulrosheed-35780541b?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/abdulmalik-codeWithFaith", Icon: Github },
  { label: "X", href: "https://x.com/broskiprop94216", Icon: Twitter },
  // { label: "WhatsApp", href: "09076956531", Icon: MessageCircle },
];

function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <Eyebrow index="08" label="Contact" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Let&apos;s build something <span className="text-signal">amazing</span> together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-muted max-w-lg mx-auto leading-relaxed">
            Have a product idea, a role to fill, or an AI feature you want built properly?
            I&apos;m usually quick to reply.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {CONTACT_LINKS.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:border-line-strong hover:scale-[1.04] active:scale-[0.98] transition-all"
            >
              <Icon size={16} className="text-cyan" />
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   FOOTER
   ============================================================== */
function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-display text-sm font-semibold tracking-tight">
          code<span className="text-signal">WithFaith</span>
        </p>
        <p className="text-xs text-muted-2 flex items-center gap-1.5">
          Built with <span className="text-red-400">❤</span> using Next.js
        </p>
      </div>
    </footer>
  );
}

/* ==============================================================
   PAGE
   ============================================================== */
export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <WhyWorkWithMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}