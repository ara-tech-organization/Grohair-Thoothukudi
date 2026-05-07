import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const MotionLink = motion(Link);

export default function ServiceCard({ service, index = 0, to = "/services" }) {
  const Icon = service.icon;
  const hasImage = Boolean(service.image);

  return (
    <MotionLink
      to={to}
      aria-label={`${service.title} — view details`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="card card-hover group relative block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white [content-visibility:auto] [contain-intrinsic-size:1px_460px]"
    >
      {hasImage ? (
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden sm:-mx-8 sm:-mt-8">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />

            {/* floating icon badge */}
            <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-ink-100 transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>

            {/* arrow */}
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-600 shadow-soft ring-1 ring-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-brand-600">
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </span>
          </div>
        </div>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-transform duration-500 group-hover:scale-105 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <ArrowUpRight
              className="h-5 w-5 text-ink-300 transition-all duration-500 group-hover:text-brand-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </div>
        </>
      )}

      <h3
        className={`relative text-xl font-semibold tracking-tight text-ink-900 ${
          hasImage ? "" : "mt-6"
        }`}
      >
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-500">
        {service.summary}
      </p>

      {service.points && (
        <ul className="relative mt-6 space-y-2 text-sm text-ink-600">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {p}
            </li>
          ))}
        </ul>
      )}
    </MotionLink>
  );
}
