import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import Card from "../utilities/Card";
import { EASE_OUT } from "../../lib/motion";
import { useState } from "react";

const ARCHIVE = [
  {
    name: "Fracture",
    url: "https://fracture-arc.pages.dev/",
    linkLabel: "fracture-arc.pages.dev",
    summary:
      "I broke my foot in March 2026 and got asked the same seven questions every day, so I built a deadpan bilingual FAQ, X-ray viewer included, and now I send the link.",
    tags: ["Next.js", "Tailwind", "Cloudflare Pages"],
  },
  {
    name: "ANUGERAH",
    url: "https://komikasetengahpendeta.pages.dev/",
    linkLabel: "komikasetengahpendeta.pages.dev",
    summary:
      "A single-page event site, shipped fast, for a stand-up comedy special staged in Cibitung in July 2026.",
    tags: ["Next.js", "Tailwind", "Cloudflare Pages"],
  },
  {
    name: "Hout Cutlery",
    url: "https://hout-cutlery.vercel.app/",
    linkLabel: "hout-cutlery.vercel.app",
    summary:
      "A storefront and a real-time inventory dashboard for a small maker, kept in sync through one Supabase database.",
    tags: [
      "React",
      "Next.js",
      "React Query",
      "Tailwind",
      "Framer Motion",
      "Supabase",
    ],
  },
  {
    name: "Christin Wu",
    url: "https://christinwu.com/",
    linkLabel: "christinwu.com",
    summary:
      "Contributed to the storefront for an Indonesian designer footwear label: seasonal collections, designer collaborations, and a bridal line.",
    tags: [".NET", "C#", "Liquid", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "JJ Royal Coffee",
    url: "https://jjroyalcoffee.com/",
    linkLabel: "jjroyalcoffee.com",
    summary:
      "Contributed to a specialty coffee storefront running three languages, three currencies, and multiple regional shipping carriers.",
    tags: [".NET", "C#", "Liquid", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Livin' by Mandiri",
    summary:
      "Contributed to a commerce integration built inside one of Indonesia's largest banking apps.",
  },
  {
    name: "Thekoreandaily",
    url: "https://thekoreandaily.co.id/",
    linkLabel: "thekoreandaily.co.id",
    summary:
      "A Korean-fashion catalogue for a two-person team: the customer-facing storefront and a web admin panel to keep it current.",
    tags: ["React", "Tailwind"],
  },
  {
    name: "The Wild Oasis",
    url: "https://the-wild-oasis-website-hfn.vercel.app/",
    linkLabel: "the-wild-oasis-website-hfn.vercel.app",
    summary:
      "An Airbnb-style booking platform with search and filters, a real-time availability calendar, guest accounts, and an admin dashboard for hosts.",
    tags: ["React", "Next.js", "Tailwind", "React Query", "Context API"],
  },
  {
    name: "Forkify",
    url: "https://forkify-ndn.netlify.app/",
    linkLabel: "forkify-ndn.netlify.app",
    summary:
      "A recipe finder that rescales the ingredients to the number of portions you want to cook.",
    tags: ["React"],
  },
];

export default function Projects({ setSection }) {
  const [ref, inView] = useInView({});
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    inView && setSection("projects");
  }, [inView, setSection]);

  const renderTags = (tech) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span
              className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-6">Projects</h2>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Brandmind ID</h3>
          <a
            href="https://brandmindid.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            brandmindid.com
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">
          Live closed beta
        </p>
        <p className="font-light leading-7 mb-3">
          A brand&apos;s annual strategy usually takes weeks to produce, and
          it only reflects as much as the strategist remembers from a folder
          of documents nobody re-reads. I built a platform that actually
          reads a brand&apos;s documents and social reports, then generates
          the annual strategy, the monthly editorial calendar, and tactical
          campaigns from them.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Retrieval-augmented generation over a self-hosted PostgreSQL and
            pgvector knowledge base, so answers are grounded in the
            client&apos;s material rather than invented
          </li>
          <li>
            Orchestrated with LangChain against GPT-5 via Replicate, with a
            conversational interface built to push back on brand ideas
            rather than agree with them
          </li>
          <li>
            Competitive intelligence pulled from the RivalIQ API and folded
            into strategy output
          </li>
          <li>
            Migrated off managed hosting onto self-hosted infrastructure I
            provisioned and maintain: Dokploy, Postgres 16, Redis, valid TLS
            across frontend and API
          </li>
        </ul>
        {renderTags([
          "Next.js 15",
          "TypeScript",
          "LangChain",
          "pgvector",
          "RAG",
          "Drizzle",
          "Redis",
          "Dokploy",
          "Tailwind",
        ])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-1">Agentic Sales Trainer</h3>
        <p className="font-light text-white/60 text-sm mb-4">
          Client work, available on request
        </p>
        <p className="font-light leading-7 mb-3">
          Sales reps only get better by practicing, and practicing needs a
          trainer in the room, which doesn&apos;t scale across a global
          salesforce. So I built an AI interviewer that plays the buyer
          instead: available any time, in any market, scoring every session
          automatically.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Sales reps hold spoken practice conversations with an AI that
            stays in character as a retail buyer
          </li>
          <li>
            Sessions are scored against the brand&apos;s own selling
            framework, so the feedback matches how the company actually
            evaluates its people
          </li>
          <li>
            An agentic session engine handles multi-turn conversation state,
            scenario branching, and rubric evaluation
          </li>
        </ul>
        {renderTags(["Agents", "Voice AI", "LLM Evaluation", "Next.js"])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-1">Creative Velocity</h3>
        <p className="font-light text-white/60 text-sm mb-4">In build</p>
        <p className="font-light leading-7 mb-3">
          Ad creative gets judged after the budget is already spent, and the
          lesson from it rarely makes it into the next campaign. Every
          campaign starts from opinion again. This closes the loop, so
          performance actually feeds generation.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            A creative ships, n8n pulls performance data from the Meta Ads
            API, and an AI reads what actually worked before shaping the
            next creative
          </li>
          <li>
            Turns ad creative from a series of one-off guesses into a system
            that compounds
          </li>
        </ul>
        {renderTags(["n8n", "Meta Ads API", "LLM", "Automation"])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-1">Back-Office Automation</h3>
        <p className="font-light text-white/60 text-sm mb-4">
          Internal, 100+ employees
        </p>
        <p className="font-light leading-7 mb-3">
          Attendance and payroll administration for a 100+ person company
          was manual spreadsheet work, every month, indefinitely. I built
          workflows that do it instead.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Handles attendance for the People team and payslip generation
            for Finance
          </li>
          <li>
            A separate lead-enrichment pipeline tracks its own progress, so
            a failed run never re-spends API credits on contacts it already
            processed
          </li>
          <li>
            Unglamorous by design: this is the category of AI work that
            pays for itself fastest
          </li>
        </ul>
        {renderTags(["n8n", "Automation", "Python", "API Integration"])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Seharian</h3>
          <div className="flex gap-4">
            <a
              href="https://seharian.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              seharian.app
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.seharian"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Google Play
            </a>
          </div>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">
          Live on Google Play
        </p>
        <p className="font-light leading-7 mb-3">
          Good stories come from ordinary days, but only while they&apos;re
          fresh. I built a quiet diary for storytellers and anyone who keeps
          a journal: it opens straight to today&apos;s page, one plain-text
          note per date, saved as you type. A few lines a day keep the
          details you would otherwise forget, and make them easy to find
          again.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            The Android app has no internet access, so notes can&apos;t leave
            the phone. No account, no ads, no tracking
          </li>
          <li>
            Optional PIN and fingerprint lock, and diary text stays out of
            the recent-apps preview
          </li>
          <li>
            A home-screen widget opens today&apos;s page without launching the
            app
          </li>
          <li>
            Search across every note, pin the stories worth keeping, and
            browse a month calendar that shows which days have entries
          </li>
          <li>
            English and Bahasa Indonesia, light and dark, and an installable
            web version
          </li>
        </ul>
        {renderTags([
          "Kotlin",
          "Jetpack Compose",
          "Room",
          "React",
          "Vite",
          "PWA",
        ])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">ABC Godlike</h3>
          <a
            href="https://abcgodlike.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            abcgodlike.com
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">Live</p>
        <p className="font-light leading-7 mb-3">
          Renting out crypto trading bots means answering one question before
          any other: is this a scam? The client&apos;s self-built site looked
          templated and answered nothing. I rebuilt it as a terminal-style
          landing page that shows the bot working, uses only real trade data,
          and sends every visitor to one action: a WhatsApp chat.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            The hero replays real closed positions from the client&apos;s
            Binance export, labeled with the actual date range and exchange,
            never a simulated feed
          </li>
          <li>
            The build parses that export and fails on any malformed row, or
            when the trades don&apos;t reconcile with the exchange&apos;s own
            totals, so a wrong number can&apos;t ship
          </li>
          <li>
            A safety walkthrough shows how members create a trade-only API
            key with withdrawals off, so the bot can never move their funds
          </li>
          <li>
            English and Indonesian from one typed copy source; a missing
            translation fails the build
          </li>
          <li>
            Fully static, with written runbooks so the client updates prices,
            batches, proof screenshots, and the trade log without me
          </li>
        </ul>
        {renderTags(["Next.js 16", "TypeScript", "Tailwind", "Static Export"])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-2">More projects</h3>
        <ul>
          {ARCHIVE.map(({ name, url, linkLabel, summary, tags }, i) => (
            <motion.li
              key={name}
              custom={i}
              variants={{
                hidden: shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 8 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.25,
                    ease: EASE_OUT,
                    delay: 0.1 + i * 0.04,
                  },
                }),
              }}
              className="py-4 border-b border-white/10 last:border-b-0 last:pb-0"
            >
              <div className="flex lg:flex-row flex-col items-start lg:items-baseline justify-between lg:gap-4 mb-1">
                <h4 className="font-bold text-lg">{name}</h4>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand font-semibold text-sm hover:underline break-all"
                  >
                    {linkLabel}
                  </a>
                )}
              </div>
              <p className="font-light leading-7">{summary}</p>
              {tags && (
                <p className="font-light text-white/60 text-sm mt-1">
                  {tags.join(" · ")}
                </p>
              )}
            </motion.li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
