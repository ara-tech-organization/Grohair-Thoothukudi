import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { clinic, navLinks } from "../data/site";
import { services } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-ink-100 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-60 w-[28rem] rounded-full bg-brand-100/30 blur-3xl"
      />

      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-600">
              {clinic.name} brings together leading hair and skin
              specialists, calm spaces, and advanced treatments — all designed
              around how care should actually feel.
            </p>
            <div className="mt-6 flex items-center gap-2">
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

          <div>
            <div className="label-base">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-ink-700 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/appointment"
                  className="text-ink-700 transition-colors hover:text-brand-600"
                >
                  Book appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="label-base">Services</div>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-ink-700 transition-colors hover:text-brand-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-base">Contact</div>
            <ul className="mt-5 space-y-4 text-sm text-ink-700">
              <li className="flex items-start gap-3">
                <SocialIcon name="MapPin" className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={1.8} />
                <span>{clinic.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-none text-brand-500" />
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SocialIcon name="Mail" className="h-4 w-4 flex-none text-brand-500" strokeWidth={1.8} />
                <a
                  href={`mailto:${clinic.email}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
          <div className="sm:justify-self-start">
            © {year} {clinic.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:justify-self-center">
            <Link to="/privacy" className="hover:text-ink-700">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-ink-300">
              |
            </span>
            <Link
              to="/privacy#terms-and-conditions"
              className="hover:text-ink-700"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="sm:justify-self-end">
            Crafted by{" "}
            <span className="font-medium text-ink-700">ARA Discoveries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
