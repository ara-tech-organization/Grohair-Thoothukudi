import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  Eye,
  ShieldCheck,
  HeartHandshake,
  Cpu,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Plus,
  Scissors,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import StatCounter from "../components/StatCounter";
import Button from "../components/Button";
import { clinic } from "../data/site";
import { stats } from "../data/testimonials";

const pillars = [
  {
    title: "Our Mission",
    description:
      "To make world-class hair and skin care effortlessly accessible in Warangal — combining clinical precision with a calm, considered patient experience.",
    icon: Compass,
  },
  {
    title: "Our Vision",
    description:
      "A clinic that people return to for life — known for honest assessments, refined results, and an unwavering commitment to safety and aesthetics.",
    icon: Eye,
  },
];

const reasons = [
  {
    title: "Certified Specialists",
    description:
      "Trichologists, dermatologists, and cosmetic experts trained on modern techniques and refreshed continuously.",
    icon: Stethoscope,
  },
  {
    title: "Modern Equipment",
    description:
      "Lasers, growth-factor systems, and HydraFacial technology — sterilized, calibrated, and operated by trained staff.",
    icon: Cpu,
  },
  {
    title: "Personalized Plans",
    description:
      "We start with a detailed consult and tailor treatment to your hair type, skin condition, and lifestyle.",
    icon: HeartHandshake,
  },
  {
    title: "Safe & Sterile",
    description:
      "Strict clinical protocols and a serene, premium space designed to feel calm from the moment you walk in.",
    icon: ShieldCheck,
  },
];

const hairFaqs = [
  {
    q: "How long does a hair transplant procedure take?",
    a: "Most sessions take 6–8 hours depending on the number of grafts. We pace the day with breaks and a quiet recovery space designed for comfort.",
  },
  {
    q: "When will I see hair regrowth after treatment?",
    a: "Initial growth is typically visible from the third or fourth month, with denser, fuller results between months 9 and 12.",
  },
  {
    q: "Is PRP painful?",
    a: "PRP is performed under topical anesthesia and feels like mild pressure. Most clients return to work the same day with no downtime.",
  },
  {
    q: "How many Mesotherapy sessions are needed?",
    a: "A standard course is 6–8 sessions spaced 2–3 weeks apart. Maintenance sessions every few months keep results stable.",
  },
  {
    q: "Are hair transplant results permanent?",
    a: "Yes — transplanted follicles are taken from areas resistant to hair loss, so the new growth is permanent and behaves like natural hair.",
  },
  {
    q: "Do I need to shave my head before a transplant?",
    a: "Not always. Depending on technique and graft count, we offer unshaven, partially shaved, and fully shaved options.",
  },
];

const skinFaqs = [
  {
    q: "How is a HydraFacial different from a regular facial?",
    a: "HydraFacial uses a multi-step medical-grade system that cleanses, exfoliates, and infuses serums in one session — no scrubbing, immediate glow.",
  },
  {
    q: "Are laser treatments safe for Indian skin?",
    a: "Yes. Our Q-Switch and other lasers are calibrated for darker skin tones, with safety patch tests before any full session.",
  },
  {
    q: "How many Q-Switch Laser sessions are needed for pigmentation?",
    a: "Most clients see clear improvement after 4–6 sessions. We tailor the plan based on pigmentation depth and skin response.",
  },
  {
    q: "Is downtime needed after a Cosmelan Peel?",
    a: "Mild redness and peeling are normal for 5–7 days. We provide a complete home-care kit to support recovery.",
  },
  {
    q: "How long do HydraFacial results last?",
    a: "Most clients enjoy a fresh glow for 4–6 weeks. Monthly sessions are ideal for sustained clarity, hydration, and texture.",
  },
  {
    q: "Can I combine multiple skin treatments?",
    a: "Often, yes — but our dermatologists design treatment plans in sequence to ensure your skin barrier stays healthy.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Clinic"
        title={
          <>
            Refined hair &amp; skin care, built around{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              you
            </span>
            .
          </>
        }
        description={`Advanced GroHair & GloSkin ${clinic.city} brings together two leading brands in hair and skin wellness, delivered by certified specialists in a calm, modern setting designed for results that last.`}
      />

      {/* MISSION & VISION */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card card-hover relative overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-50 blur-2xl"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-base leading-relaxed text-ink-500">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-ink-50/40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why choose us"
            title="A standard of care, refined"
            description="Every detail of the Advanced GroHair & GloSkin experience is designed for trust — from how we consult to how we deliver every result."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="card card-hover"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {r.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="FAQs"
            title="Questions, answered"
            description="A few things our clients in Warangal often ask before their first visit."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-10">
            <FaqColumn
              icon={Scissors}
              eyebrow="Hair Treatments"
              title="Hair care, simplified"
              items={hairFaqs}
            />
            <FaqColumn
              icon={Sparkles}
              eyebrow="Skin Treatments"
              title="Skin care, demystified"
              items={skinFaqs}
              tone="ink"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-ink-100 sm:p-12">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((s) => (
                <StatCounter
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Sparkles className="mx-auto h-8 w-8 text-brand-500" />
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Ready to begin your transformation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
            Book a private consultation with our specialists at our {clinic.city}{" "}
            clinic.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/appointment" variant="primary">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/services" variant="secondary">
              Explore Treatments
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------- FAQ --------------------------------- */

function FaqColumn({ icon: Icon, eyebrow, title, items, tone = "brand" }) {
  const [open, setOpen] = useState(0);
  const isInk = tone === "ink";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl p-6 shadow-card sm:p-8 ${
        isInk
          ? "bg-ink-900 text-white"
          : "bg-white text-ink-900 ring-1 ring-ink-100"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl ${
          isInk ? "bg-brand-500/30" : "bg-brand-50"
        }`}
      />

      <div className="relative flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
            isInk
              ? "bg-white/10 text-white ring-1 ring-white/20"
              : "bg-brand-gradient text-white shadow-glow"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div>
          <div
            className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
              isInk ? "text-brand-200" : "text-brand-700"
            }`}
          >
            {eyebrow}
          </div>
          <h3
            className={`text-xl font-semibold tracking-tight ${
              isInk ? "text-white" : "text-ink-900"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      <ul className="relative mt-6 space-y-2">
        {items.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
            isInk={isInk}
          />
        ))}
      </ul>
    </motion.div>
  );
}

function FaqItem({ item, isOpen, onToggle, isInk }) {
  return (
    <li
      className={`overflow-hidden rounded-2xl border transition-colors ${
        isInk
          ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
          : "border-ink-100 bg-white hover:bg-ink-50/60"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span
          className={`text-sm font-medium sm:text-[15px] ${
            isInk ? "text-white" : "text-ink-900"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
            isInk
              ? "bg-white/10 text-white"
              : isOpen
              ? "bg-brand-gradient text-white shadow-glow"
              : "bg-ink-50 text-ink-700"
          }`}
        >
          <Plus
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            strokeWidth={2}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div
              className={`px-5 pb-5 text-sm leading-relaxed ${
                isInk ? "text-white/75" : "text-ink-500"
              }`}
            >
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
