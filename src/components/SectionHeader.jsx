import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45 }}
          className={dark ? "eyebrow-dark" : "eyebrow"}
        >
          <span className="h-1 w-1 rounded-full bg-brand-400" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className={`max-w-2xl text-balance text-base leading-relaxed sm:text-lg ${dark ? "text-white/65" : "text-ink-500"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
