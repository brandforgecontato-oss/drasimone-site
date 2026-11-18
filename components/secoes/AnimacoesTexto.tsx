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

      // Tela de abertura: espera a página carregar e pelo menos 2,6 s (a animação do logo leva ~2,4 s)
      const loader = document.querySelector<HTMLElement>(".loader");
      let temporizador: ReturnType<typeof setTimeout> | undefined;
      const sair = () => {
        document.documentElement.dataset.carregado = "1";
        gsap.to(loader, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(loader, { display: "none" });
            ScrollTrigger.refresh();
          },
        });
        gsap.delayedCall(0.45, () => heroTl.play());
      };
      const agendar = () => {
        temporizador = setTimeout(sair, Math.max(0, 2600 - performance.now()));
      };
      if (loader && document.documentElement.classList.contains("js")) {
        if (document.readyState === "complete") agendar();
        else window.addEventListener("load", agendar, { once: true });
      } else {
        heroTl.play();
      }

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
        clearTimeout(temporizador);
        window.removeEventListener("load", agendar);
        splits.forEach((s) => s.revert());
      };
    });
  });

  // Passos: no desktop a seção fica fixa e cada passo entra conforme a rolagem (scrub, reversível);
  // no celular não fixa: os passos entram em sequência ao aparecer.
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ movimento: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 821px)" }, (ctx) => {
      const { movimento, desktop } = ctx.conditions as { movimento: boolean; desktop: boolean };
      if (!movimento) return;
      const passos = gsap.utils.toArray<HTMLElement>("[data-passo]");
      if (!desktop) {
        ScrollTrigger.batch(passos, {
          start: "top 90%",
          once: true,
          onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" }),
        });
        return;
      }
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: { trigger: ".passos", start: "top top", end: "+=170%", pin: true, scrub: 0.6, anticipatePin: 1 },
      });
      passos.forEach((el, i) => tl.to(el, { opacity: 1, y: 0, duration: 1 }, i * 1.2));
      tl.to({}, { duration: 0.6 }); // respiro no fim, com os três passos visíveis
    });
  });

  return null;
}
