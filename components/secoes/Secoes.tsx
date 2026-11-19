import Image from "next/image";
import { LinkWhatsApp } from "@/components/contato/LinkWhatsApp";
import { VideoComPoster } from "@/components/midia/VideoComPoster";
import { site } from "@/lib/site";
import { Cisne } from "./Cisne";

const { negocio } = site;
const registro = negocio.registroProfissional;
const telefoneExibido = (() => {
  const d = negocio.whatsapp.replace(/\D/g, "").replace(/^55/, "");
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
})();

export function Menu() {
  return (
    <header className="nav">
      <a className="marca" href="#inicio">
        <Cisne />
        Dra. Simone Pinheiro
      </a>
      <nav aria-label="Principal">
        <ul>
          <li>
            <a href="#procedimentos">Procedimentos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#onde">Onde atendo</a>
          </li>
        </ul>
      </nav>
      <LinkWhatsApp className="btn" />
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="nome cheio" aria-hidden="true">
        <span className="s">Simone</span>
        <span className="p">Pinheiro</span>
      </div>
      <figure className="retrato">
        <Image
          src="/media/hero/retrato-02.jpg"
          alt="Dra. Simone Pinheiro, biomédica esteta, em retrato com a mão apoiada no queixo"
          width={784}
          height={1280}
          priority
          sizes="(max-width: 820px) 70vw, 400px"
        />
      </figure>
      <div className="nome contorno" aria-hidden="true">
        <span className="s">Simone</span>
        <span className="p">Pinheiro</span>
      </div>
      <div className="espaco" aria-hidden="true" />
      <div className="texto">
        <p className="registro">Biomédica esteta · {registro}</p>
        <h1>Harmonização facial e corporal em Goiânia</h1>
        <p className="apoio">
          Procedimentos planejados para realçar seus traços, sem exagero. Atendimento no Setor Marista e online.
        </p>
        <LinkWhatsApp className="btn" />
      </div>
      <p className="lado">
        <strong>Setor Marista, Goiânia</strong>
        Segunda a sábado, das 8h às 20h
      </p>
    </section>
  );
}

export function Abordagem() {
  return (
    <section className="abordagem" aria-labelledby="t-abordagem">
      <div className="abordagem-texto">
        <h2 id="t-abordagem" data-titulo>
          Sem exagero.
        </h2>
        <p data-reveal>
          Harmonizar é realçar o que já é seu. Cada procedimento começa por entender seus traços, sua história e o que
          você quer manter.
        </p>
        <blockquote data-reveal>
          Realçar sua beleza natural e revelar sua autenticidade.”
          <cite>Dra. Simone Pinheiro</cite>
        </blockquote>
      </div>
      <figure className="consultorio">
        <div className="moldura">
          <span className="moldura-linha" aria-hidden="true" />
          <div className="quadro">
            <VideoComPoster
              src="/media/abordagem/dra-consultorio"
              poster="/media/abordagem/dra-consultorio-poster.jpg"
              largura={464}
              altura={832}
              alt="Vídeo: a Dra. Simone Pinheiro se preparando para um atendimento no consultório"
              sizes="(max-width: 820px) 80vw, 420px"
            />
          </div>
        </div>
        <figcaption data-reveal>No consultório da Clínica CCL, Setor Marista</figcaption>
      </figure>
    </section>
  );
}

/** Faixa decorativa entre seções: frases já presentes na copy, em contorno, que correm com a rolagem. */
export function Faixa() {
  const frases = ["Beleza natural", "Sem exageros", "Do início ao fim"];
  const bloco = (chave: string) => (
    <div className="faixa-bloco" key={chave}>
      {frases.map((f, i) => (
        <span className="faixa-item" key={f}>
          <span className={i === 1 ? "cheia" : undefined}>{f}</span>
          <Cisne />
        </span>
      ))}
    </div>
  );
  return (
    <div className="faixa" aria-hidden="true">
      <div className="faixa-trilho">
        {bloco("a")}
        {bloco("b")}
      </div>
    </div>
  );
}

const rosto = [
  "Harmonização facial feminina",
  "Harmonização facial masculina",
  "Preenchimentos faciais e full face",
  "Toxina botulínica",
  "Fios de tração faciais",
  "Bioestimuladores faciais",
  "Rejuvenescimento facial",
  "Clareadores",
  "Estética regenerativa facial",
];
const corpo = [
  "Harmonização glútea",
  "Preenchimentos corporais",
  "Bioestimuladores corporais",
  "Estética regenerativa corporal",
];
const tecnologia = ["Ultrassom microfocado / macrofocado", "Endolaser", "CO2 fracionado", "Radiofrequência e outros"];

export function Procedimentos() {
  return (
    <section className="proc" id="procedimentos" aria-labelledby="t-proc">
      <div className="intro">
        <h2 id="t-proc" data-titulo>Procedimentos</h2>
        <p data-reveal>Há 10 anos em harmonização facial e corporal. O plano de cada pessoa é definido na consulta.</p>
        <div data-reveal>
          <LinkWhatsApp className="btn" />
        </div>
      </div>
      <div>
        <h3 data-reveal>Rosto</h3>
        <ul>
          {rosto.map((p) => (
            <li key={p} data-reveal>{p}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 data-reveal>Corpo</h3>
        <ul>
          {corpo.map((p) => (
            <li key={p} data-reveal>{p}</li>
          ))}
        </ul>
        <h3 className="sub" data-reveal>Tecnologias de rejuvenescimento</h3>
        <ul>
          {tecnologia.map((p) => (
            <li key={p} data-reveal>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Passos() {
  return (
    <section className="passos" aria-labelledby="t-passos">
      <div className="passos-topo">
        <h2 id="t-passos" data-titulo>Acompanhamento do início ao fim</h2>
        <p data-reveal>
          Você fala com a Dra. Simone em todas as etapas, da primeira conversa ao acompanhamento depois do
          procedimento.
        </p>
      </div>
      <ol>
        <li data-reveal>
          <h3>Consulta</h3>
          <p>
            Conversa sobre o que você quer, avaliação dos seus traços e indicação do que faz sentido para você.
          </p>
        </li>
        <li data-reveal>
          <h3>Procedimento</h3>
          <p>Realizado pela própria Dra. Simone, com o plano combinado na consulta.</p>
        </li>
        <li data-reveal>
          <h3>Acompanhamento</h3>
          <p>Orientações para depois e contato com ela para tirar dúvidas.</p>
        </li>
      </ol>
    </section>
  );
}

export function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-labelledby="t-sobre">
      <div className="quadro" data-reveal>
        <Image
          src="/media/sobre/retrato-01.jpg"
          alt="Dra. Simone Pinheiro em retrato de perfil"
          width={615}
          height={1280}
          sizes="(max-width: 820px) 80vw, 360px"
        />
      </div>
      <div>
        <h2 id="t-sobre" data-titulo>Dra. Simone Pinheiro</h2>
        <p data-reveal>
          Biomédica esteta, {registro}. Há 10 anos atua em harmonização facial e corporal, com mulheres e homens de
          todas as idades. Seu trabalho é realçar a beleza natural de cada paciente, sem exageros, e acompanhar cada
          procedimento do início ao fim.
        </p>
        <p data-reveal>Também atende online.</p>
      </div>
    </section>
  );
}

export function Onde() {
  const e = negocio.endereco;
  return (
    <section className="onde" id="onde" aria-labelledby="t-onde">
      <h2 id="t-onde" data-titulo>Onde atendo</h2>
      <div>
        <dl>
          {e && (
            <div data-reveal>
              <dt>Endereço</dt>
              <dd>
                {e.rua}, {e.bairro}, {e.cidade}-{e.uf}
                {e.cep && `, CEP ${e.cep}`}
              </dd>
            </div>
          )}
          <div data-reveal>
            <dt>Horário</dt>
            <dd>Segunda a sábado, das 8h às 20h</dd>
          </div>
          <div data-reveal>
            <dt>Online</dt>
            <dd>Também atendo online.</dd>
          </div>
        </dl>
        {e && (
          <a
            className="mapa"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.rua}, ${e.bairro}, ${e.cidade}-${e.uf}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
          </a>
        )}
        <p className="fecha" style={{ marginTop: 28 }} data-reveal>
          Para agendar, chame no WhatsApp: {telefoneExibido}
        </p>
        <div data-reveal>
          <LinkWhatsApp className="btn" />
        </div>
        <p className="registro registro-contato" data-reveal>Dra. Simone Pinheiro, biomédica esteta, {registro}</p>
      </div>
    </section>
  );
}

export function Rodape() {
  const e = negocio.endereco;
  const instagram = negocio.redes[0];
  return (
    <footer className="rodape">
      <div className="marca">
        <Cisne />
        Dra. Simone Pinheiro
      </div>
      <p>
        {e && `${e.rua}, ${e.bairro}, ${e.cidade}-${e.uf}`} · {telefoneExibido}
      </p>
      <p>
        Biomédica esteta, {registro}
        {instagram && (
          <>
            {" · "}
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              Instagram @drasimonepinheiro
            </a>
          </>
        )}
      </p>
      <p className="aviso">
        As informações deste site não substituem a consulta. A indicação de cada procedimento é feita na avaliação
        individual.
      </p>
      <p>© 2026 Dra. Simone Pinheiro</p>
    </footer>
  );
}
