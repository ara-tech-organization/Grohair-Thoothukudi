import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.webp";

const SIZES = {
  sm: "h-9",
  md: "h-11",
  lg: "h-14",
};

export default function Logo({ size = "md", className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Advanced GroHair & GloSkin Warangal — home"
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <img
        src={LogoImg}
        alt="Advanced GroHair & GloSkin Warangal"
        className={`${SIZES[size] || SIZES.md} w-auto`}
        width="600"
        height="240"
        decoding="async"
      />
    </Link>
  );
}
