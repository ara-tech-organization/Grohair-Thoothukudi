import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";

const SIZES = {
  sm: "w-24",
  md: "w-36",
  lg: "w-44",
};

export default function Logo({ size = "md", className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Advanced GroHair & GloSkin Namakkal — home"
      className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <img
        src={LogoImg}
        alt="Advanced GroHair & GloSkin Namakkal"
        className={`${SIZES[size] || SIZES.md} h-auto`}
        width="600"
        height="240"
        decoding="async"
      />
    </Link>
  );
}
