import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  HeartHandshake,
  Cpu,
  Award,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import StatCounter from "../components/StatCounter";

import { clinic } from "../data/site";
import {
  serviceCategories,
  hairTreatments,
  skinTreatments,
} from "../data/services";
import { testimonials, stats } from "../data/testimonials";
import HeroBgImg from "../assets/hero.png";

const features = [
  {
    title: "Experienced Doctors",
    description:
      "Certified trichologists, dermatologists, and cosmetic specialists with decades of combined practice.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Equipment",
    description:
      "Modern lasers, growth-factor systems, and HydraFacial technology in a sterile, premium setting.",
    icon: Cpu,
  },
  {
    title: "Aftercare Support",
    description:
      "Rapid post-procedure check-ins and on-call specialists when you need reassurance, not delays.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Treatment",
    description:
      "Plans built around your hair type, skin condition, and lifestyle — never one-size-fits-all.",
    icon: HeartHandshake,
  },
];

// Featured treatments for the Home page.
const skinFeatured = skinTreatments.filter((t) =>
  ["hydra-facial", "q-switch-laser", "skin-peels"].includes(t.slug)
);
const hairFeatured = hairTreatments.filter((t) =>
  ["hair-transplant", "mesotherapy", "stem-x-27"].includes(t.slug)
);

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed image background */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <img
          src={HeroBgImg}
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          style={{ objectPosition: "right 20%" }}
        />


        <div className="container-px relative mx-auto max-w-7xl pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              <span className="h-1 w-1 rounded-full bg-brand-500" />
              Now in {clinic.city}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
            >
              Hair &amp; Skin Wellness in{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Thoothukudi
              </span>{" "}
              — Tailored to Your Lifestyle
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-700 sm:text-lg"
            >
              Advanced GroHair and GloSkin proudly bring expert care in hair restoration
              and skin health to Thoothukudi. Our certified trichologists and
              skincare professionals deliver customized treatments focused on
              effective, lasting results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="mt-3 max-w-xl text-sm leading-relaxed text-ink-600"
            >
              Trusted by countless clients for life-changing transformations and
              clinical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button to="/appointment" variant="primary">
                Book Appointment
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Button>
              <Button to="/services" variant="secondary">
                Explore Treatments
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-700"
            >
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-brand-500" />
                Certified specialists
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-500" />
                Sterile, premium setting
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-500" />
                Personalized plans
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WELCOME / WHY US */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="We Provide"
                title={
                  <>
                    Welcome to Advanced GroHair &amp; GloSkin{" "}
                    <span className="bg-brand-gradient bg-clip-text text-transparent">
                      Thoothukudi
                    </span>
                  </>
                }
                description="Advanced GroHair and GloSkin combine deep expertise in hair and skin wellness with the serene pace of Thoothukudi. Our clinic blends clinical precision with a luxurious experience, delivered by trained professionals in a safe, sterile setting."
              />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500">
                At our Thoothukudi center, you'll find the best of science,
                technology, and personalized care. Whether it's hair thinning,
                pigmentation issues, premature aging, or any other concern —
                you'll find solutions tailored just for you, backed by trusted
                professionals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/about" variant="secondary">
                  About the Clinic
                </Button>
                <Button to="/appointment" variant="ghost">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                    >
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-gradient" />
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <span className="text-3xl font-bold text-ink-100 select-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-ink-900">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {f.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO — bento */}
      <section className="section bg-ink-50/40">
        <div className="container-px mx-auto max-w-7xl">
          <ServicesBento />
        </div>
      </section>

      {/* SKIN TREATMENTS FEATURE */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={`Top Skin Solutions at GloSkin ${clinic.city}`}
            title="Our Most Popular Skin Treatments"
            description="Our most popular skin treatments are crafted for issues like pigmentation, acne, dullness, and aging. Each session is designed by certified dermatologists to deliver healthy, radiant skin."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skinFeatured.map((t, i) => (
              <ServiceCard
                key={t.slug}
                service={t}
                index={i}
                to="/services?tab=skin"
              />
            ))}
          </div>
        </div>
      </section>

      {/* HAIR TREATMENTS FEATURE */}
      <section className="section bg-ink-50/40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={`Most Popular Hair Solutions in ${clinic.city}`}
            title="Our Most Popular Hair Treatments"
            description="Combat thinning, bald spots, and hair fall with advanced, scientifically proven treatments. All solutions are customized to your hair type, scalp condition, and desired results."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hairFeatured.map((t, i) => (
              <ServiceCard
                key={t.slug}
                service={t}
                index={i}
                to="/services?tab=hair"
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS — before/after + videos */}
      <ResultsSection />

      {/* TRUST / STATS */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 p-8 shadow-card sm:p-12 lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="relative grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionHeader
                  align="left"
                  eyebrow="Why we're trusted"
                  title={`Why ${clinic.city} Clients Trust Us`}
                  description={`At Advanced GroHair & GloSkin ${clinic.city}, we combine advanced equipment, certified specialists, and client-first innovation. That's why we're known for our consistent results and top-tier service.`}
                  dark
                />
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.07 }}
                      className="flex flex-col items-center rounded-2xl bg-white/8 p-5 text-center ring-1 ring-white/10"
                    >
                      <StatCounter
                        value={s.value}
                        suffix={s.suffix}
                        label={s.label}
                        dark
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-ink-50/40">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Real words from real clients who've experienced our care first-hand."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="absolute -right-2 -top-3 text-7xl font-serif leading-none text-brand-100 select-none">"</span>
                <TestimonialCard testimonial={t} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-10 text-white shadow-glow sm:p-14 lg:p-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-12 h-72 w-72 rounded-full bg-black/20 blur-3xl"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ring-white/25">
                  Begin your transformation
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Restore your confidence today with expert hair &amp; skin
                  care.
                </h2>
                <p className="mt-5 max-w-xl text-base text-white/80">
                  Book a private consultation at our {clinic.city} clinic. Our
                  specialists will design a plan tailored to your goals — gently,
                  precisely, beautifully.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <Link
                  to="/appointment"
                  className="btn-base bg-white text-brand-700 shadow-soft hover:bg-ink-50"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="btn-base bg-transparent text-white ring-1 ring-white/40 hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------------------- ResultsSection ----------------------------- */

const beforeAfterPairs = [];

const resultVideos = [];

function ResultsSection() {
  const [playing, setPlaying] = useState(null);

  return (
    <section className="section bg-ink-50/40">
      <div className="container-px mx-auto max-w-7xl">

        {/* heading */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-4 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl"
          >
            We innovate hair restoration solutions
          </motion.h2>
        </div>

        {/* BEFORE / AFTER grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {beforeAfterPairs.map((pair, i) => (
            <motion.div
              key={pair.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink-100"
            >
              <img
                src={pair.img}
                alt={`Hair restoration result ${pair.id}`}
                className="w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* VIDEO SWIPER CAROUSEL */}
        <div className="relative mt-10 results-swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".results-next",
              prevEl: ".results-prev",
            }}
            pagination={{
              el: ".results-dots",
              clickable: true,
              bulletClass: "results-bullet",
              bulletActiveClass: "results-bullet-active",
            }}
            loop={true}
            slidesPerView={2}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 16 },
            }}
            onSlideChange={() => setPlaying(null)}
          >
            {resultVideos.map((v) => (
              <SwiperSlide key={v.id}>
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink-900 shadow-card">
                  {playing === v.id ? (
                    <video
                      src={v.src}
                      autoPlay
                      controls
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 cursor-pointer group"
                      onClick={() => setPlaying(v.id)}
                    >
                      <video
                        src={v.src}
                        className="absolute inset-0 h-full w-full object-cover"
                        muted
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow ring-4 ring-white/20 transition group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* custom nav arrows */}
          <button
            aria-label="Previous"
            className="results-prev absolute -left-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-ink-100 transition-all duration-200 hover:bg-brand-gradient hover:text-white hover:ring-transparent active:scale-90"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            className="results-next absolute -right-5 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-ink-100 transition-all duration-200 hover:bg-brand-gradient hover:text-white hover:ring-transparent active:scale-90"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* dots */}
          <div className="results-dots mt-5 flex justify-center gap-2" />
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/appointment"
            className="btn-base bg-brand-gradient text-white shadow-glow hover:opacity-90"
          >
            Book Your Consultation Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ServicesBento ----------------------------- */

function ServicesBento() {
  // Pre-pick categories so each tile gets a known, distinct treatment.
  const byTitle = (t) => serviceCategories.find((c) => c.title === t);
  const hair = byTitle("Hair Care");
  const skin = byTitle("Skin Treatments");
  const laser = byTitle("Laser Therapies");
  const cosmetic = byTitle("Cosmetic Procedures");
  const aging = byTitle("Anti Aging");

  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:auto-rows-[240px]">
      {/* FEATURE — heading + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 p-8 text-white shadow-card sm:p-10 lg:col-span-7 lg:row-span-2"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative flex h-full flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ring-white/20">
            <span className="h-1 w-1 rounded-full bg-brand-400" />
            Our Services
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[44px]">
            Leading Hair &amp; Skin Treatments at Advanced GroHair &amp; GloSkin —{" "}
            <span className="bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">
              Thoothukudi
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Proven hair restoration, modern dermatological skincare, and refined
            cosmetic care — paired with advanced technology and clinical
            expertise for results that are not just visible, but long-lasting.
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            <Link
              to="/services"
              className="btn-base bg-white text-ink-900 shadow-soft hover:bg-ink-50"
            >
              Explore all treatments
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/appointment"
              className="btn-base bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10"
            >
              Book consultation
            </Link>
          </div>
        </div>
      </motion.div>

      {/* HAIR CARE — wide */}
      <BentoTile
        category={hair}
        delay={0.05}
        className="lg:col-span-5"
        to="/services?tab=hair"
      />

      {/* SKIN TREATMENTS — wide */}
      <BentoTile
        category={skin}
        delay={0.1}
        className="lg:col-span-5"
        accent="ink"
        to="/services?tab=skin"
      />

      {/* Bottom row: 3 compact tiles */}
      <BentoTile
        category={laser}
        delay={0.15}
        compact
        className="lg:col-span-4"
      />
      <BentoTile
        category={cosmetic}
        delay={0.2}
        compact
        className="lg:col-span-4"
      />
      <BentoTile
        category={aging}
        delay={0.25}
        compact
        className="lg:col-span-4"
      />
    </div>
  );
}

const MotionLink = motion(Link);

function BentoTile({
  category,
  delay = 0,
  compact = false,
  accent = "brand",
  className = "",
  to = "/services",
}) {
  if (!category) return null;
  const Icon = category.icon;
  const isInk = accent === "ink";

  return (
    <MotionLink
      to={to}
      aria-label={`${category.title} — view details`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative block overflow-hidden rounded-3xl ${
        isInk
          ? "bg-ink-900 text-white"
          : "bg-white text-ink-900 ring-1 ring-ink-100"
      } p-6 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-2xl transition-opacity duration-500 ${
          isInk ? "bg-brand-500/30 opacity-60" : "bg-brand-50 opacity-0 group-hover:opacity-100"
        }`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105 ${
              isInk
                ? "bg-white/10 text-white ring-1 ring-white/20"
                : "bg-brand-50 text-brand-600 ring-1 ring-brand-100 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent"
            }`}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <ArrowUpRight
            className={`h-5 w-5 transition-all duration-500 ${
              isInk ? "text-white/40 group-hover:text-white" : "text-ink-300 group-hover:text-brand-600"
            } group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
            strokeWidth={1.75}
          />
        </div>

        <h3
          className={`mt-5 text-lg font-semibold tracking-tight ${
            isInk ? "text-white" : "text-ink-900"
          } sm:text-xl`}
        >
          {category.title}
        </h3>
        <p
          className={`mt-2 ${
            compact ? "text-xs" : "text-sm"
          } leading-relaxed ${isInk ? "text-white/70" : "text-ink-500"}`}
        >
          {category.summary}
        </p>

        {!compact && category.points && (
          <ul
            className={`mt-auto flex flex-wrap gap-1.5 pt-5 text-xs font-medium ${
              isInk ? "text-white/80" : "text-ink-600"
            }`}
          >
            {category.points.map((p) => (
              <li
                key={p}
                className={`rounded-full px-2.5 py-1 ${
                  isInk
                    ? "bg-white/10 ring-1 ring-white/15"
                    : "bg-ink-50 ring-1 ring-ink-100"
                }`}
              >
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </MotionLink>
  );
}

