"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// GSAP, ScrollTrigger e SplitText ficam fora do pacote inicial: só carregam depois que a página ficou interativa.
const Animacoes = dynamic(() => import("./AnimacoesTexto").then((m) => m.AnimacoesTexto), { ssr: false });

export function Movimento() {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const ocioso = "requestIdleCallback" in window;
    const id = ocioso ? window.requestIdleCallback(() => setAtivo(true), { timeout: 600 }) : window.setTimeout(() => setAtivo(true), 250);
    return () => (ocioso ? window.cancelIdleCallback(id) : window.clearTimeout(id));
  }, []);

  return ativo ? <Animacoes /> : null;
}
