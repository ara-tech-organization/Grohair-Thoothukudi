import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  AlertCircle,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import { clinic } from "../data/site";
import { submitForm } from "../lib/api";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot — must stay empty
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (formError) setFormError("");
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    setFormError("");
    const result = await submitForm({ type: "contact", ...form });
    setSubmitting(false);

    if (!result.ok) {
      if (result.errors) {
        setErrors(result.errors);
        return;
      }
      setFormError(
        result.error === "network"
          ? "Couldn't reach the server. Check your connection and try again."
          : "Something went wrong sending your message. Please try again."
      );
      return;
    }
    navigate("/thank-you", { state: { type: "contact" } });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            We'd love to{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              hear from you
            </span>
          </>
        }
        description="Questions about a treatment, pricing, or your first visit? Send us a note — our team responds within one business day."
      />

      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="card lg:col-span-7"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-sm text-ink-500">
                    We typically reply within a few hours during clinic hours.
                  </p>
                </div>
                <span className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow sm:inline-flex">
                  <Send className="h-4 w-4" />
                </span>
              </div>

              <form
                noValidate
                onSubmit={onSubmit}
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <Field
                  label="Full name"
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={update("name")}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                />
                <Field
                  label="Phone"
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 9XXXXXXXXX"
                  value={form.phone}
                  onChange={update("phone")}
                  error={errors.phone}
                />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="label-base mb-2 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    placeholder="Tell us about your goals or the treatment you're curious about…"
                    value={form.message}
                    onChange={update("message")}
                    className="input-base resize-none"
                  />
                  {errors.message && <FieldError text={errors.message} />}
                </div>
                {/* Honeypot — bots fill it, humans don't see it */}
                <div
                  className="hidden"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px" }}
                >
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>

                {formError && (
                  <div className="sm:col-span-2 flex items-start gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm text-brand-700 ring-1 ring-brand-100">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-ink-400">
                    By sending this form, you agree to our privacy practices.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting}
                    aria-busy={submitting}
                    className={submitting ? "cursor-wait opacity-70" : ""}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* INFO */}
            <div className="space-y-6 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="card"
              >
                <h3 className="text-base font-semibold text-ink-900">
                  Clinic Information
                </h3>
                <ul className="mt-5 space-y-5 text-sm text-ink-600">
                  <InfoLine icon={MapPin} label="Address" value={clinic.address} />
                  <InfoLine
                    icon={Phone}
                    label="Phone"
                    value={
                      <a
                        href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                        className="hover:text-brand-600"
                      >
                        {clinic.phone}
                      </a>
                    }
                  />
                  <InfoLine
                    icon={Mail}
                    label="Email"
                    value={
                      <a
                        href={`mailto:${clinic.email}`}
                        className="hover:text-brand-600"
                      >
                        {clinic.email}
                      </a>
                    }
                  />
                  <InfoLine
                    icon={Clock}
                    label="Working hours"
                    value={
                      <div className="space-y-0.5">
                        {clinic.hours.map((h) => (
                          <div key={h.day} className="flex justify-between gap-6">
                            <span>{h.day}</span>
                            <span className="text-ink-500">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    }
                  />
                </ul>

                <div className="mt-7 border-t border-ink-100 pt-5">
                  <div className="label-base">Follow us</div>
                  <div className="mt-3 flex items-center gap-2">
                    {clinic.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-600 ring-1 ring-ink-200 transition-all duration-300 hover:bg-brand-gradient hover:text-white hover:ring-transparent"
                      >
                        <SocialIcon name={s.label} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* MAP */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-card ring-1 ring-ink-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-50">
                  <iframe
                    title={`${clinic.shortName} ${clinic.city} — location map`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.0!2d78.1674!3d11.2189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDEzJzA4LjAiTiA3OMKwMTAnMDIuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-col items-start justify-between gap-3 px-3 pb-2 pt-3 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-2.5 text-xs text-ink-600">
                    <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <div className="leading-snug">
                      <div className="font-semibold text-ink-900">
                        {clinic.shortName} — {clinic.city}
                      </div>
                      <div className="text-ink-500">{clinic.address}</div>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${clinic.shortName} ${clinic.city}, ${clinic.address}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-none items-center gap-1 rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-ink-100 transition-colors hover:bg-brand-50 hover:ring-brand-100"
                  >
                    Get directions
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
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

function FieldError({ text }) {
  return (
    <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-brand-700">
      <AlertCircle className="h-3 w-3" />
      {text}
    </p>
  );
}

function InfoLine({ icon: Icon, label, value }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-400">
          {label}
        </div>
        <div className="mt-1 text-sm text-ink-700">{value}</div>
      </div>
    </li>
  );
}
