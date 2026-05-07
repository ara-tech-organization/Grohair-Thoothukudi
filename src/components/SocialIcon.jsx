const PATHS = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: (
    <path d="M14 8h2.5V5H14a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.3l.7-3H14V8.5A.5.5 0 0 1 14.5 8H14z" />
  ),
  Twitter: (
    <path d="M4 4l7.5 9.5L4.5 20H7l5.6-5.7L17 20h3l-7.8-9.9L19 4h-2.5l-4.7 4.8L8 4H4z" />
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
    </>
  ),
};

export default function SocialIcon({ name, className = "h-4 w-4", strokeWidth = 1.6 }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
