export function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      className={className}
    >
      <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
