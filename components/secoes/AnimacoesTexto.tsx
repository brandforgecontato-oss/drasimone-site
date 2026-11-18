"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/** Animações de texto da página, só com movimento permitido. O CSS (`.js`) esconde o texto antes da hora;
 *  sem JS ou com movimento reduzido, tudo aparece parado. */
export function AnimacoesTexto() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      document.documentElement.dataset.movimento = "ok";

      // Entrada do hero: nomes e bloco de texto sobem em sequência (o retrato não espera, é o LCP).
      // Começa pausada e só roda depois que a tela de abertura sai.
      const heroTl = gsap
        .timeline({ defaults: { ease: "power3.out" }, paused: true })
        .to(".hero .nome.cheio span", { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 }, 0)
        .to(".hero .nome.contorno span", { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 }, 0.15)
        .to(".hero .texto > *, .hero .lado", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.45);

      // Paralaxe do hero ("as camadas se abrem"): nomes se afastam e o retrato sobe mais rápido
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
        })
        .to(".nome .s", { x: "-14vw" }, 0)
        .to(".nome .p", { x: "14vw" }, 0)
        .to(".retrato", { y: -90 }, 0);

      // A tela de abertura sai por CSS (script em app/layout.tsx); o hero entra logo depois da saída
      const d = document.documentElement;
      const entrar = (atraso: number) => gsap.delayedCall(atraso, () => heroTl.play());
      const aoSair = () => entrar(0.45);
      if (d.dataset.saiu || !d.classList.contains("js")) entrar(0.05);
      else document.addEventListener("abertura-saiu", aoSair, { once: true });

      // Títulos de seção: linhas sobem de dentro de uma máscara quando entram na tela
      const splits = gsap.utils.toArray<HTMLElement>("[data-titulo]").map((el) =>
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "titulo-linha",
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

      // Abordagem: o vídeo se revela de baixo para cima, o contorno dourado desliza para o lugar e deriva com a rolagem
      ScrollTrigger.create({
        trigger: ".moldura",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(".moldura .quadro", { clipPath: "inset(0% 0 0 0)", duration: 1.3, ease: "power3.inOut" });
          gsap.fromTo(".moldura-linha", { opacity: 0, x: -22, y: -22 }, { opacity: 1, x: 0, y: 0, duration: 1.2, delay: 0.5, ease: "power3.out" });
        },
      });
      gsap.to(".moldura-linha", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: { trigger: ".abordagem", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      // Faixa tipográfica: corre para a esquerda conforme a página rola
      gsap.fromTo(
        ".faixa-trilho",
        { xPercent: 0 },
        {
          xPercent: -50,
          ease: "none",
          scrollTrigger: { trigger: ".faixa", start: "top bottom", end: "bottom top", scrub: 0.6 },
        },
      );

      return () => {
        document.removeEventListener("abertura-saiu", aoSair);
        splits.forEach((s) => s.revert());
      };
    });
  });

  return null;
}
