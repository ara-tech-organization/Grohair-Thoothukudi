import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { hairTreatments } from "../data/services";
import { hairTreatmentDetails } from "../data/hairTreatmentDetails";
import { clinic } from "../data/site";
import Button from "../components/Button";

export default function HairTreatmentDetail() {
  const { slug } = useParams();
  const treatment = hairTreatments.find((t) => t.slug === slug);
  const detail = hairTreatmentDetails[slug];

  if (!treatment || !detail) return <Navigate to="/Services" replace />;

  const Icon = treatment.icon;

  return (
    <>
      {/* BREADCRUMB */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-px mx-auto max-w-7xl py-3">
          <div className="flex items-center justify-between gap-4">
            <nav className="flex items-center gap-1.5 text-sm text-ink-500" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
              <Link to="/Services" className="hover:text-brand-600 transition-colors">Services</Link>
              <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
              <Link to="/Services/hair-treatment" className="hover:text-brand-600 transition-colors">Hair Treatments</Link>
              <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
              <span className="text-ink-900 font-medium truncate max-w-[140px] sm:max-w-none">{treatment.title}</span>
            </nav>
            <Link
              to="/Services/hair-treatment"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-600 transition-all hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 flex-none"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </Link>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="section overflow-hidden bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700 ring-1 ring-brand-100">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                Hair Treatment
              </div>

              <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                Introducing Advanced{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  {treatment.title}
                </span>
              </h1>

              <p className="mt-3 text-lg font-medium text-brand-600">
                {detail.tagline}
              </p>

              <p className="mt-5 text-base leading-relaxed text-ink-600">
                {detail.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button to="/appointment" variant="primary">
                  Book Consultation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Button>
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="btn-base bg-white text-ink-700 ring-1 ring-ink-200 hover:ring-brand-300 hover:text-brand-600 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-brand-50 -z-10" />
              <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-100">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-brand-50/50">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1 w-1 rounded-full bg-brand-500" />
              The Process
            </div>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              {detail.process.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              {detail.process.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY + BENEFITS */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Why */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700 ring-1 ring-brand-100">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                Why This Treatment
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                {detail.why.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                {detail.why.description}
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700 ring-1 ring-brand-100">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                Benefits Include
              </div>
              <ul className="mt-5 space-y-3">
                {detail.benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-ink-50/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700 ring-1 ring-brand-100">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                Why Choose Us
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                {detail.whyChoose.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                {detail.whyChoose.description}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detail.whyChoose.points.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-500" strokeWidth={2} />
                  <span className="text-sm font-medium text-ink-800">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-50 p-10 ring-1 ring-brand-100 sm:p-14 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand-100/40 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                Begin Your Transformation
              </div>
              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
                {detail.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600">
                {detail.cta.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button to="/appointment" variant="primary">
                  Book An Appointment
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Button>
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="btn-base bg-white text-ink-700 ring-1 ring-ink-200 hover:ring-brand-300 hover:text-brand-600 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
