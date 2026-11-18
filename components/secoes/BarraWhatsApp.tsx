"use client";

import { useEffect, useState } from "react";
import { LinkWhatsApp } from "@/components/contato/LinkWhatsApp";

/** Barra fixa só no celular, depois do hero, para não cobrir o CTA principal. */
export function BarraWhatsApp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const obs = new IntersectionObserver(([e]) => setVisivel(!e.isIntersecting), { threshold: 0 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`barra${visivel ? " on" : ""}`} inert={!visivel}>
      <LinkWhatsApp className="btn" />
    </div>
  );
}
