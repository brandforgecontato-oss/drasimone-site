import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";
import { siteIndexavel } from "./lib/site";

// IPs desta máquina na rede local: o servidor de desenvolvimento aceita o celular na mesma rede Wi-Fi
// (o Next bloqueia origens que não sejam localhost). Só vale no `next dev`.
const ipsDaRede = Object.values(networkInterfaces())
  .flat()
  .filter((i) => i && i.family === "IPv4" && !i.internal)
  .map((i) => i!.address);

// Headers de segurança base (skill seguranca-web, assets/headers-seguranca.md).
// CSP completa para o que este site carrega de fato (landing estática, sem scripts de terceiros).
const headersSeguranca = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next injeta scripts inline de hidratação e o JSON-LD é inline; em desenvolvimento o React exige eval.
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "production" ? "" : " 'unsafe-eval'"}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'none'",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ipsDaRede,
  async headers() {
    const headers = siteIndexavel() ? headersSeguranca : [...headersSeguranca, { key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
