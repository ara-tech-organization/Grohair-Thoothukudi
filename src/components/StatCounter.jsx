import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatCounter({ value, suffix = "", label, duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOutCubic(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    value >= 1000 ? display.toLocaleString("en-US") : display.toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-baseline gap-0.5">
        <span className="bg-brand-gradient bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
          {formatted}
        </span>
        <span className="bg-brand-gradient bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
        {label}
      </div>
    </motion.div>
  );
}
