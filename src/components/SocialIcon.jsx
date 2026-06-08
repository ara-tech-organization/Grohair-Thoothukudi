const PATHS = {
  MapPin: (
    <>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  Mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </>
  ),
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
  WhatsApp: (
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.07c-.21.59-1.22 1.13-1.68 1.2-.43.06-.97.09-1.56-.1-.36-.11-.82-.26-1.4-.51-2.46-1.06-4.07-3.54-4.19-3.71-.12-.17-.97-1.29-.97-2.46s.61-1.74.83-1.98c.22-.24.48-.3.64-.3l.46.01c.15.01.35-.06.54.41.21.5.71 1.72.77 1.85.06.12.1.27.02.43-.08.16-.12.26-.24.4l-.36.42c-.12.13-.25.27-.11.53.14.26.63 1.04 1.35 1.68.93.83 1.71 1.09 1.97 1.21.26.12.41.1.56-.06.15-.16.64-.75.81-1.01.17-.26.34-.21.57-.13.23.08 1.45.68 1.7.81.25.12.41.18.47.28.06.1.06.59-.15 1.18z" fill="currentColor" stroke="none" />
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
