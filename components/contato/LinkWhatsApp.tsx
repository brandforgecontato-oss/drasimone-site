// Link para WhatsApp com número e mensagem pré-preenchida. Dados vêm de lib/site.ts;
// renderiza null se o telefone não estiver preenchido. O texto visível é o nome acessível.
import { site } from "@/lib/site";

export const MENSAGEM_AGENDAR = "Olá, Dra. Simone. Vim pelo site e gostaria de agendar uma consulta.";

type Props = {
  mensagem?: string;
  className?: string;
  children?: React.ReactNode;
};

export function LinkWhatsApp({ mensagem = MENSAGEM_AGENDAR, className, children = "Agendar pelo WhatsApp" }: Props) {
  const digitos = (site.negocio.whatsapp || site.negocio.telefone).replace(/\D/g, "");
  if (!digitos) return null;
  const telefone = digitos.startsWith("55") ? digitos : `55${digitos}`;

  return (
    <a
      href={`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
      </svg>
      {children}
    </a>
  );
}
