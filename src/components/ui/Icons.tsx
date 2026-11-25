export function DiagArrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Line icons used on the hero globe, one per service. */
export const serviceIcons: Record<string, string> = {
  "web-development": "M3 5h18v14H3zM3 9h18M6.5 7h.01M9 7h.01",
  "app-development": "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
  "ux-ui-design": "M12 3l7 8-7 10-7-10zM12 3v8M12 11a1.5 1.5 0 1 0 0 .01",
  saas: "M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z",
  "gen-ai": "M12 4l1.8 4.7L18.5 10l-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.3zM18 16l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z",
  ecommerce: "M5 8h14l-1.2 12H6.2zM9 8V6.5a3 3 0 0 1 6 0V8",
  blockchain: "M4 4h6v6H4zM14 14h6v6h-6zM10 7h3a2 2 0 0 1 2 2v5M14 17h-3a2 2 0 0 1-2-2v-5",
  devops: "M8 9a3 3 0 1 0 0 6c3 0 5-6 8-6a3 3 0 1 1 0 6c-3 0-5-6-8-6z",
  "custom-software-development": "M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
  "quality-assurance": "M12 3l7 3v6c0 4.2-3 7.3-7 9-4-1.7-7-4.8-7-9V6zM9 12l2 2 4-4",
};
