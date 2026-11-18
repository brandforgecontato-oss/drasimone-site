// Cisne do logo, redesenhado em SVG (não há vetor): penas sobrepostas, pescoço e corpo. Cor vem de currentColor.
export function Cisne({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} fill="currentColor" aria-hidden="true">
      <defs>
        <path id="pena" d="M0 0C3-9 13-15 25-15 23-5 12 2 0 0Z" />
      </defs>
      <g transform="translate(30 34)">
        <use href="#pena" transform="rotate(-160) scale(.75)" opacity=".5" />
        <use href="#pena" transform="rotate(-132) scale(.9)" opacity=".65" />
        <use href="#pena" transform="rotate(-104) scale(1)" opacity=".8" />
        <use href="#pena" transform="rotate(-76) scale(1)" />
      </g>
      <path d="M4 33C8 47 44 50 57 34 46 38 24 37 4 33Z" />
      <path
        d="M48 35C57 33 57 25 54 19 51 14 51 11 55 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="55.5" cy="8.2" r="3" />
      <path d="M57.5 6.6 63.5 9 57.7 10.8Z" />
    </svg>
  );
}
