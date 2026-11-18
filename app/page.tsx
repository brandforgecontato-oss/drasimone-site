import { AnimacoesTexto } from "@/components/secoes/AnimacoesTexto";
import { BarraWhatsApp } from "@/components/secoes/BarraWhatsApp";
import { Abordagem, Hero, Menu, Onde, Passos, Procedimentos, Rodape, Sobre } from "@/components/secoes/Secoes";

export default function Inicio() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Menu />
      <main id="conteudo">
        <Hero />
        <Abordagem />
        <Procedimentos />
        <Passos />
        <Sobre />
        <Onde />
      </main>
      <Rodape />
      <BarraWhatsApp />
      <AnimacoesTexto />
    </>
  );
}
