import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Mail, ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/portrait.jpg";
import workReels from "@/assets/work-reels.jpg";
import workPosts from "@/assets/work-posts.jpg";
import workVideo from "@/assets/work-video.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Gambhir — B.Tech CSE (AI&DS) Student & Content Creator" },
      {
        name: "description",
        content:
          "Portfolio of Shivam Gambhir, a B.Tech CSE (AI&DS) student at JECRC University, Alwar, creating content around storytelling, creativity and personal branding.",
      },
      { property: "og:title", content: "Shivam Gambhir — Student & Content Creator" },
      {
        property: "og:description",
        content:
          "Creative portfolio, journey and contact details for Shivam Gambhir — B.Tech CSE (AI&DS) student and content creator.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Creative Space", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  { icon: "🎓", title: "B.Tech Student", copy: "CSE (AI & DS) at JECRC University, Alwar." },
  { icon: "✨", title: "Creative Thinker", copy: "Ideas shaped into stories worth sharing." },
  { icon: "📚", title: "Lifelong Learner", copy: "Curious about tech, design and people." },
];

const work = [
  {
    img: workReels,
    title: "Reels",
    copy: "Short, rhythmic edits built around a single idea and a clean visual mood.",
  },
  {
    img: workPosts,
    title: "Creative Posts",
    copy: "Carousels and layouts where typography, colour and thought stay in balance.",
  },
  {
    img: workVideo,
    title: "Short-form Videos",
    copy: "Story-led films that turn everyday campus moments into something memorable.",
  },
];

const journey = [
  {
    period: "Present",
    title: "B.Tech Student",
    place: "JECRC University, Alwar",
    copy: "Exploring creativity, digital storytelling and personal branding alongside computer science.",
  },
  {
    period: "Next",
    title: "Future Goals",
    place: "Onward",
    copy: "Growing professionally, creatively and personally — with work that stays honest and useful.",
  },
];

const interests = ["Social Media", "Visual Storytelling", "Communication", "Learning & Growth"];

const socials = [
  { icon: Mail, label: "Email", value: "hello@shivamgambhir.com", href: "mailto:hello@shivamgambhir.com" },
  { icon: Instagram, label: "Instagram", value: "@shivamgambhir", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Shivam Gambhir", href: "https://linkedin.com" },
];

function Index() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border/70 bg-card/70 px-5 py-3 backdrop-blur-xl sm:mx-auto sm:px-7"
          style={{ width: "min(100% - 2rem, 72rem)" }}>
          <a href="#top" className="font-display text-lg tracking-tight">
            Shivam<span className="text-gold">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary !px-5 !py-2 text-xs">
            Say hello
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="surface-hero grain relative px-6 pt-36 pb-24 sm:pt-44 lg:pb-32">
        <span className="blob left-[-8%] top-24 h-80 w-80 bg-lavender" />
        <span className="blob right-[-6%] top-56 h-96 w-96 bg-rose" style={{ animationDelay: "-6s" }} />
        <span className="blob bottom-[-10%] left-1/3 h-72 w-72 bg-sage" style={{ animationDelay: "-11s" }} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="font-display text-lg italic text-gold">Creating. Learning. Growing.</p>
            <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.05]">
              Hi, I’m <span className="italic">Shivam Gambhir</span>
            </h1>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              B.Tech CSE (AI&amp;DS) Student · Content Creator · Creative Thinker
            </p>
            <div className="gold-rule mt-7" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A B.Tech CSE (AI&amp;DS) student at JECRC University, Alwar, passionate about content creation,
              creativity, communication, and building meaningful digital experiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#journey" className="btn-primary">
                Explore My Journey
              </a>
              <a href="#contact" className="btn-ghost">
                Let’s Connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-6 opacity-70 blur-3xl"
              style={{
                background: "var(--gradient-soft)",
                borderRadius: "58% 42% 46% 54% / 46% 52% 48% 54%",
              }}
            />
            <img
              src={portrait}
              alt="Portrait of Shivam Gambhir"
              width={912}
              height={1200}
              className="relative w-full object-cover shadow-[var(--shadow-lift)]"
              style={{ borderRadius: "58% 42% 46% 54% / 46% 52% 48% 54%" }}
            />
            <div className="glass-card absolute -bottom-5 left-0 rounded-2xl px-5 py-3 text-sm">
              <p className="font-display text-xl leading-none">JECRC</p>
              <p className="mt-1 text-xs text-muted-foreground">University, Alwar</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight">A Little About Me</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hi, I’m Shivam Gambhir, a B.Tech CSE (AI&amp;DS) student at JECRC University, Alwar. Alongside my
              academic journey, I’m passionate about creativity, communication, personal branding, and creating
              content that connects with people.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 120} className="glass-card rounded-3xl p-6">
                  <span className="text-2xl">{h.icon}</span>
                  <h3 className="mt-4 text-xl">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.copy}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="surface-soft grain relative px-6 py-24 lg:py-32">
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Portfolio</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight">My Creative Space</h2>
            <p className="mt-3 font-display text-lg italic text-muted-foreground">Ideas turned into content.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {work.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 130}
                className={i === 1 ? "md:mt-12" : undefined}
              >
                <article className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-transform duration-500 hover:-translate-y-2">
                  <img
                    src={w.img}
                    alt={`${w.title} — creative work by Shivam Gambhir`}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-card via-card/90 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
                  </div>
                  <div className="flex items-center justify-between px-6 py-5">
                    <h3 className="text-xl">{w.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-gold" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex justify-center">
            <a href="#contact" className="btn-ghost">
              View My Work
            </a>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Timeline</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight">My Journey So Far</h2>
          </Reveal>

          <ol className="relative mt-16 space-y-12 border-l border-border pl-8 sm:pl-12">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.title} delay={i * 140} className="relative">
                <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold/60 bg-background sm:-left-[3.55rem]">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{j.period}</p>
                <h3 className="mt-2 text-2xl">{j.title}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{j.place}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{j.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Interests */}
      <section className="px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Skills &amp; Interests</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)]">What I Love</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {interests.map((t, i) => (
              <Reveal as="span" key={t} delay={i * 90} className="pill-tag">
                {t}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="surface-statement grain px-6 py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <blockquote className="text-[clamp(1.7rem,3.6vw,2.9rem)] leading-snug italic">
            “Learning with purpose. Creating with passion. Growing every day.”
          </blockquote>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              Let’s Create Something Meaningful
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Whether you’d like to collaborate, connect, or simply say hello, I’d love to hear from you.
            </p>
            <ul className="mt-10 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <s.icon className="h-5 w-5 text-gold" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {s.label}
                      </span>
                      <span className="text-sm">{s.value}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={130}>
            <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-7 sm:p-9">
              <div className="grid gap-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-gold"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-gold"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-gold"
                    placeholder="Tell me a little about it…"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
                {sent && (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-gold" /> Thank you — your message has been noted.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <div>
            <p className="font-display text-2xl">Shivam Gambhir</p>
            <p className="mt-1 text-sm text-muted-foreground">B.Tech CSE (AI&amp;DS) Student</p>
            <p className="mt-3 font-display text-base italic text-gold">
              “Creating a little something every day.”
            </p>
          </div>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-full border border-border p-3 transition hover:-translate-y-1 hover:border-gold"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shivam Gambhir. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
