import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="card card-hover relative flex h-full flex-col"
    >
      <Quote
        className="absolute right-6 top-6 h-7 w-7 text-brand-100"
        strokeWidth={1.5}
      />
      <div className="flex items-center gap-1 text-brand-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-700">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 text-sm font-semibold text-ink-700">
          {testimonial.name
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-ink-900">
            {testimonial.name}
          </div>
          <div className="text-xs text-ink-500">{testimonial.role}</div>
        </div>
      </figcaption>
    </motion.figure>
  );
}
