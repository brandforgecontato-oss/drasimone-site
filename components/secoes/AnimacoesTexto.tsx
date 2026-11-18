"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/** Animações de texto da página, só com movimento permitido. O CSS (`.js`) esconde o texto antes da hora;
 *  sem JS ou com movimento reduzido, tudo aparece parado. */
export function AnimacoesTexto() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      document.documentElement.dataset.movimento = "ok";

      // Entrada do hero: nomes e bloco de texto sobem em sequência (o retrato não espera, é o LCP)
      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.1 })
        .to(".hero .nome.cheio span", { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 }, 0)
        .to(".hero .nome.contorno span", { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 }, 0.15)
        .to(".hero .texto > *, .hero .lado", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.45);

      // Títulos de seção: linhas sobem de dentro de uma máscara quando entram na tela
      const splits = gsap.utils.toArray<HTMLElement>("[data-titulo]").map((el) =>
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "titulo-linha",
          maskClass: "titulo-mascara",
          autoSplit: true,
          onSplit: (self) => {
            el.dataset.pronto = "true";
            return gsap.from(self.lines, {
              yPercent: 110,
              duration: 1,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            });
          },
        }),
      );

      // Parágrafos, listas, passos e dados: fade e subida suave, em grupos conforme entram
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }),
      });

      return () => splits.forEach((s) => s.revert());
    });
  });

  return null;
}
