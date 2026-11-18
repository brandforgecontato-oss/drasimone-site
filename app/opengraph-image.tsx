import { ImageResponse } from "next/og";

// Texto exato: projeto/COPY.md "Open Graph". Sem foto de paciente nem promessa (nicho regulado, CRBM).
export const alt = "Dra. Simone Pinheiro | Biomédica esteta, CRBM 11287. Harmonização facial e corporal em Goiânia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEXTO = "Simone Pinheiro";

// Cormorant Garamond via Google Fonts (subset só do texto). Sem rede ou falha: cai na fonte padrão do ImageResponse.
async function fonteSerifa(): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&text=${encodeURIComponent(TEXTO)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const fonte = await fonteSerifa();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#1C0D11",
          color: "#F4ECE4",
        }}
      >
        <div style={{ width: 96, height: 2, background: "#D6B270", marginBottom: 48 }} />
        <div style={{ fontSize: 132, lineHeight: 1, fontFamily: fonte ? "Cormorant Garamond" : "serif" }}>{TEXTO}</div>
        <div style={{ fontSize: 36, color: "#D6B270", marginTop: 48, letterSpacing: 1 }}>Biomédica esteta · CRBM 11287</div>
        <div style={{ fontSize: 30, marginTop: 16 }}>Harmonização facial e corporal · Goiânia</div>
      </div>
    ),
    {
      ...size,
      fonts: fonte ? [{ name: "Cormorant Garamond", data: fonte, style: "normal", weight: 500 }] : undefined,
    },
  );
}
