import { site, urlDoSite } from "@/lib/site";

// Dados estruturados do negócio (schema.org). Só é renderizado quando lib/site.ts tem
// pelo menos o nome preenchido, e omite todo campo vazio: nunca publica dado inventado.
export function JsonLdNegocio() {
  const { nome, descricao, negocio } = site;
  if (!nome) return null;

  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": negocio.tipoSchema,
    "@id": `${urlDoSite()}/#negocio`,
    name: nome,
    url: urlDoSite(),
    image: `${urlDoSite()}/opengraph-image`,
    logo: `${urlDoSite()}/icon-512.png`,
  };
  if (negocio.endereco?.cidade) dados.areaServed = { "@type": "City", name: negocio.endereco.cidade };
  if (negocio.registroProfissional) {
    dados.founder = { "@type": "Person", name: nome, jobTitle: "Biomédica esteta", identifier: negocio.registroProfissional };
  }
  if (descricao) dados.description = descricao;
  if (negocio.telefone) dados.telephone = negocio.telefone;
  if (negocio.email) dados.email = negocio.email;
  if (negocio.horario.length) dados.openingHours = negocio.horario;
  if (negocio.redes.length) dados.sameAs = negocio.redes;
  if (negocio.endereco) {
    const e = negocio.endereco;
    dados.address = {
      "@type": "PostalAddress",
      streetAddress: e.bairro ? `${e.rua}, ${e.bairro}` : e.rua,
      ...(e.cidade && { addressLocality: e.cidade }),
      ...(e.uf && { addressRegion: e.uf }),
      ...(e.cep && { postalCode: e.cep }),
      addressCountry: "BR",
    };
  }

  // JSON.stringify não escapa "<": trocar por < impede fechar a tag <script> por engano.
  const json = JSON.stringify(dados).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
