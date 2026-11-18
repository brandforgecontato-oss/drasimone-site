"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Assinatura "as camadas se abrem": ao rolar o hero, os nomes se afastam e o retrato sobe mais rápido.
 *  Sem JS ou com movimento reduzido, a composição fica estática. */
export function HeroCamadas({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        tl.to(".nome .s", { x: "-14vw" }, 0)
          .to(".nome .p", { x: "14vw" }, 0)
          .to(".retrato", { y: -90 }, 0);
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className={className} id="inicio">
      {children}
    </section>
  );
}
