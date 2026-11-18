import type { Metadata } from "next";
import Link from "next/link";
import { LinkWhatsApp } from "@/components/contato/LinkWhatsApp";

export const metadata: Metadata = { title: "Página não encontrada | Dra. Simone Pinheiro" };

export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="pagina-erro">
      <h1>Página não encontrada</h1>
      <p>O endereço pode ter mudado. Volte para o início ou fale direto com a Dra. Simone.</p>
      <div className="acoes">
        <Link href="/">Voltar ao início</Link>
        <LinkWhatsApp className="btn" />
      </div>
    </main>
  );
}
