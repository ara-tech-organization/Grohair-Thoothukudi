import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-ink-100/70 bg-white/80 backdrop-blur-xl"
            : "border-b border-transparent bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="container-px mx-auto flex h-[68px] max-w-7xl items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-[700] transition-colors duration-200 ${
                    isActive
                      ? "text-brand-700"
                      : "text-ink-600 hover:text-ink-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-5 rounded-full bg-brand-500"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button to="/appointment" variant="primary">
              Book Appointment
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-ink-200 text-ink-700 transition-colors hover:bg-ink-50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden"
          >
            <div className="container-px mx-auto max-w-7xl pb-6 pt-2">
              <div className="rounded-3xl border border-ink-100 bg-white/95 p-4 shadow-card backdrop-blur-xl">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3 text-base font-[700] transition-colors ${
                          isActive
                            ? "bg-brand-50 text-brand-700"
                            : "text-ink-700 hover:bg-ink-50"
                        }`
                      }
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 opacity-60" />
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-3 border-t border-ink-100 pt-3">
                  <Button to="/appointment" variant="primary" className="w-full">
                    Book Appointment
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
