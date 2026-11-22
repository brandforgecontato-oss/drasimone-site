import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Cisne } from "@/components/secoes/Cisne";
import { JsonLdNegocio } from "@/components/seo/JsonLd";
import { site, siteIndexavel, urlDoSite } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const titulo = "Dra. Simone Pinheiro | Harmonização facial em Goiânia";

export const metadata: Metadata = {
  metadataBase: new URL(urlDoSite()),
  title: titulo,
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: titulo,
    description: "Biomédica esteta, CRBM 11287. Harmonização facial e corporal no Setor Marista e online.",
  },
  twitter: { card: "summary_large_image", title: titulo, description: site.descricao },
  authors: [{ name: site.nome }],
  creator: site.nome,
  // O tema escuro é fixo; o viewport do Next não aceita "only dark".
  other: { "color-scheme": "only dark" },
  robots: siteIndexavel() ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1C0D11",
};

// Controla a tela de abertura sem depender do React: marca `js` só quando há movimento permitido, e dispara a
// saída (CSS) quando a página carregou e passaram 2,4 s, com teto de 5 s. Se a animação (GSAP) não ficar pronta
// até 3,5 s depois da saída, remove `js` e o conteúdo aparece parado.
const controleAbertura = `(function(){var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("js");var saiu=false;function sair(){if(saiu)return;saiu=true;d.dataset.saiu="1";document.dispatchEvent(new Event("abertura-saiu"));setTimeout(function(){if(d.dataset.movimento!=="ok")d.classList.remove("js")},3500)}function agendar(){setTimeout(sair,Math.max(0,2400-performance.now()))}if(document.readyState==="complete")agendar();else addEventListener("load",agendar);setTimeout(sair,5000)})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: controleAbertura }} />
      </head>
      <body>
        {/* Tela de abertura: só aparece com a marca `js` (movimento permitido); sai por AnimacoesTexto */}
        <div className="loader" aria-hidden="true">
          <div className="loader-miolo">
            <Cisne className="loader-cisne" />
            <p className="loader-nome">Dra. Simone Pinheiro</p>
            <span className="loader-linha" />
            <p className="loader-sub">Biomédica esteta</p>
          </div>
        </div>
        {children}
        <JsonLdNegocio />
      </body>
    </html>
  );
}
