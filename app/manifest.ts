import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.nome,
    short_name: "Dra. Simone",
    description: site.descricao,
    start_url: "/",
    display: "standalone",
    lang: "pt-BR",
    background_color: "#1C0D11",
    theme_color: "#1C0D11",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
