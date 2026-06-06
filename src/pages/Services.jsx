import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { hairTreatments, skinTreatments } from "../data/services";
import { clinic } from "../data/site";

const TABS = [
  { id: "all", label: "All Treatments" },
  { id: "hair", label: "Hair" },
  { id: "skin", label: "Skin" },
];

const VALID_TABS = new Set(TABS.map((t) => t.id));

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("tab");
  const tab = VALID_TABS.has(requested) ? requested : "all";

  const setTab = (next) => {
    const params = new URLSearchParams(searchParams);
    if (next === "all") params.delete("tab");
    else params.set("tab", next);
    setSearchParams(params, { replace: true });
  };

  const list =
    tab === "hair"
      ? hairTreatments
      : tab === "skin"
      ? skinTreatments
      : [...hairTreatments, ...skinTreatments];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Premium hair &amp; skin treatments,{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              one place
            </span>
            .
          </>
        }
        description={`Explore our full menu of hair restoration, skin wellness, laser, and cosmetic procedures — all delivered by certified specialists at our ${clinic.city} clinic.`}
      />

      {/* TREATMENTS */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          {/* <SectionHeader
            eyebrow="Treatments"
            title="Our complete treatment menu"
            description="Every treatment below is offered at our Thoothukudi clinic by trained specialists. Use the filters to narrow down what's most relevant for you."
          /> */}

          <div className="mt-10 flex justify-center">
            <div
              role="tablist"
              aria-label="Filter treatments"
              className="inline-flex rounded-full bg-white p-1 shadow-soft ring-1 ring-ink-100"
            >
              {TABS.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(t.id)}
                    className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-ink-600 hover:text-ink-900"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="services-tab-bg"
                        className="absolute inset-0 -z-0 rounded-full bg-brand-gradient shadow-glow"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {list.map((t, i) => (
                <ServiceCard key={t.slug} service={t} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Sparkles className="mx-auto h-8 w-8 text-brand-500" />
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Not sure where to begin?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-500">
            Book a private consultation. We'll listen first, then design a plan
            tailored to your goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/appointment" variant="primary">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact the Clinic
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
