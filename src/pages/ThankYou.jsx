import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Calendar, Mail, Phone, Sparkles } from "lucide-react";

import Button from "../components/Button";
import { clinic } from "../data/site";

export default function ThankYou() {
  const location = useLocation();
  const type = location.state?.type;
  const form = location.state?.form;

  const isAppointment = type === "appointment";
  const isContact = type === "contact";

  const headline = isAppointment
    ? "Your appointment is in!"
    : isContact
    ? "Message received."
    : "Thank you.";

  const sub = isAppointment
    ? `We've received your booking request. Our team at ${clinic.shortName} ${clinic.city} will confirm shortly via call or email.`
    : isContact
    ? "Thanks for reaching out — we'll respond within one business day."
    : "We appreciate you stopping by.";

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 bottom-10 h-44 w-44 rounded-full bg-brand-200/40 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-24 h-52 w-52 rounded-full bg-ink-100/70 blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-px relative mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-card ring-1 ring-ink-100 sm:p-14"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 220, damping: 18 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow"
          >
            <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="eyebrow mt-7 inline-flex"
          >
            <span className="h-1 w-1 rounded-full bg-brand-500" />
            Confirmation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-4 max-w-xl text-balance text-base text-ink-500"
          >
            {sub}
          </motion.p>

          {isAppointment && form && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-8 grid max-w-md gap-3 rounded-2xl bg-ink-50/70 p-5 text-left text-sm text-ink-700"
            >
              <DetailRow icon={Sparkles} label="Treatment" value={form.treatment} />
              <DetailRow icon={Calendar} label="Date" value={`${form.date}  ·  ${form.time}`} />
              <DetailRow icon={Mail} label="Email" value={form.email} />
              <DetailRow icon={Phone} label="Phone" value={form.phone} />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button to="/" variant="primary">
              <ArrowLeft className="h-4 w-4" />
              Return Home
            </Button>
            <Link
              to="/Services"
              className="btn-secondary"
            >
              Explore Treatments
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-white text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1 leading-tight">
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-medium text-ink-800">{value || "—"}</div>
      </div>
    </div>
  );
}
