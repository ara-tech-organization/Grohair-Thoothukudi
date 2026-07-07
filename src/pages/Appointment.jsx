import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { hairTreatments, skinTreatments } from "../data/services";
import { clinic } from "../data/site";
import { submitForm } from "../lib/submitForm";

const TREATMENT_GROUPS = [
  { label: "Hair", options: hairTreatments.map((t) => t.title) },
  { label: "Skin", options: skinTreatments.map((t) => t.title) },
];

const todayISO = () => new Date().toISOString().split("T")[0];

export default function Appointment() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
    notes: "",
    company: "", // honeypot — must stay empty
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (!form.treatment) next.treatment = "Choose a treatment.";
    if (!form.date) next.date = "Select a date.";
    if (!form.time) next.time = "Pick a time slot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;
    setSubmitError("");
    setSubmitting(true);

    if (form.company) {
      navigate("/thank-you", { state: { type: "appointment", form } });
      return;
    }

    const messageLines = [
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
    ];
    if (form.notes.trim()) messageLines.push("", form.notes.trim());

    try {
      await submitForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        treatment: form.treatment,
        message: messageLines.join("\n"),
      });
      navigate("/thank-you", { state: { type: "appointment", form } });
    } catch {
      setSubmitError("Something went wrong booking your appointment. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title={
          <>
            Reserve your private{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              consultation
            </span>
          </>
        }
        description={`Tell us a little about you and choose a time that works. Our team at ${clinic.shortName} ${clinic.city} will confirm shortly.`}
      />

      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* FORM */}
            <motion.form
              noValidate
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="card lg:col-span-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                    Your details
                  </h2>
                  <p className="mt-1 text-sm text-ink-500">
                    All fields marked are required. We'll keep your info private.
                  </p>
                </div>
                <span className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow sm:inline-flex">
                  <Stethoscope className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  id="ap-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={update("name")}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  id="ap-email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                />
                <Field
                  label="Phone"
                  id="ap-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 9XXXXXXXXX"
                  value={form.phone}
                  onChange={update("phone")}
                  error={errors.phone}
                />

                <TreatmentDropdown
                  value={form.treatment}
                  error={errors.treatment}
                  onChange={(value) => {
                    setForm((prev) => ({ ...prev, treatment: value }));
                    if (errors.treatment)
                      setErrors((prev) => ({ ...prev, treatment: undefined }));
                  }}
                />

                <div>
                  <label htmlFor="ap-date" className="label-base mb-2 block">
                    Preferred date
                  </label>
                  <input
                    id="ap-date"
                    type="date"
                    min={todayISO()}
                    value={form.date}
                    onChange={update("date")}
                    className="input-base"
                  />
                  {errors.date && <FieldError text={errors.date} />}
                </div>

                <div>
                  <label htmlFor="ap-time" className="label-base mb-2 block">
                    Preferred time
                  </label>
                  <input
                    id="ap-time"
                    type="time"
                    value={form.time}
                    onChange={update("time")}
                    className="input-base"
                  />
                  {errors.time && <FieldError text={errors.time} />}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="ap-notes" className="label-base mb-2 block">
                    Notes (optional)
                  </label>
                  <textarea
                    id="ap-notes"
                    rows={5}
                    placeholder="Anything you'd like us to know — concerns, allergies, preferred specialist…"
                    value={form.notes}
                    onChange={update("notes")}
                    className="input-base resize-none"
                  />
                </div>

                {/* Honeypot — bots fill it, humans don't see it */}
                <div
                  className="hidden"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px" }}
                >
                  <label htmlFor="ap-company">Company</label>
                  <input
                    id="ap-company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>

                {submitError && (
                  <div className="sm:col-span-2">
                    <FieldError text={submitError} />
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-col-reverse items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="text-xs text-ink-400">
                    By booking, you agree to our cancellation and privacy policies.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting}
                    aria-busy={submitting}
                    className={submitting ? "cursor-wait opacity-70" : ""}
                  >
                    {submitting ? "Booking…" : "Confirm Appointment"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.form>

            {/* SUMMARY / TRUST */}
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-6 lg:col-span-4"
            >
              <div className="card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold text-ink-900">
                    Your booking
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  <Row label="Name" value={form.name || "—"} />
                  <Row label="Treatment" value={form.treatment || "—"} />
                  <Row
                    label="Date"
                    value={form.date ? formatDate(form.date) : "—"}
                  />
                  <Row label="Time" value={form.time || "—"} />
                </ul>
              </div>

              <div className="card">
                <h3 className="text-base font-semibold text-ink-900">
                  Why book with us
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-600">
                  <Bullet>Certified trichologists &amp; dermatologists</Bullet>
                  <Bullet>Sterile, premium clinic environment</Bullet>
                  <Bullet>Personalized plans, honest assessments</Bullet>
                  <Bullet>Confidential, secure booking</Bullet>
                </ul>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700 ring-1 ring-brand-100">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Free first consultation
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function Field({ label, id, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="label-base mb-2 block">
        {label}
      </label>
      <input id={id} {...props} className="input-base" />
      {error && <FieldError text={error} />}
    </div>
  );
}

function TreatmentDropdown({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClickAway = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <label htmlFor="ap-treatment" className="label-base mb-2 block">
        Treatment
      </label>
      <button
        type="button"
        id="ap-treatment"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="input-base flex w-full items-center justify-between gap-2 text-left"
      >
        <span className={value ? "text-ink-800" : "text-ink-400"}>
          {value || "Choose a treatment"}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-ink-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-2xl bg-white p-1.5 shadow-card ring-1 ring-ink-100"
        >
          {TREATMENT_GROUPS.map((group) => (
            <li key={group.label}>
              <div className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                {group.label}
              </div>
              <ul>
                {group.options.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={value === option}
                      onClick={() => {
                        onChange(option);
                        setOpen(false);
                      }}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                        value === option
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-700 hover:bg-ink-50"
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      {error && <FieldError text={error} />}
    </div>
  );
}

function FieldError({ text }) {
  return (
    <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-brand-700">
      <AlertCircle className="h-3 w-3" />
      {text}
    </p>
  );
}

function Row({ label, value }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-ink-100 pb-3 last:border-0 last:pb-0">
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-400">
        {label}
      </span>
      <span className="max-w-[60%] truncate text-right text-sm font-medium text-ink-800">
        {value}
      </span>
    </li>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-500" />
      <span>{children}</span>
    </li>
  );
}
