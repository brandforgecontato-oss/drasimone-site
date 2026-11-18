# Revisão da execução autônoma — Dra. Simone Pinheiro

2026-11-18 · fase 4. Preenchido durante a revisão autônoma, item por item, antes do `RELATORIO.md`.

## Revisor (`revisor`, só leitura)

O subagente `revisor` não rodou: o MCP do Playwright não tem navegador (esperado `chromium-1246`, instalado `1248`). A revisão visual e de acessibilidade foi feita pelo agente principal com script Playwright local (navegador 1248) nos três viewports, comparando com `projeto/referencias/direcoes/b-1440.png` e `b-375.png`.

| Item | Gravidade | Resultado | Ação |
|---|---|---|---|
| Hero desktop e mobile iguais à prancha B (nome atrás, retrato, nome em contorno na frente) | alta | ok | Capturas 1440 e 375 conferidas |
| CTA acima da dobra em 375×812 e 1440×900 | alta | ok | Em 768×1024 ficava abaixo: corrigido limitando a escala do hero a 520 px |
| Copy exata de `COPY.md` | média | ok | Seção Avaliações fora (sem avaliações autorizadas), registrado em DECISOES #1 |
| Regras CRBM na copy (sem antes/depois, sem preço, sem "Botox", registro perto do contato) | alta | ok (conferido contra BRIEF §2) | Confirmação da Dra. segue pendente (humano) |
| Vídeo: só a Dra., sem @, sem paciente, sem marca de produto, sem cartela | alta | ok | Quadros do MP4 final extraídos e vistos; resíduo mínimo de blur em ~3,2-3,5 s |
| Vídeo 4,83 s (previsto ~6 s) | baixa | pendente humano | DECISOES #7 |
| Pano cinza e vermelho desfocado no vídeo (14,9-15,2 s) | média | pendente humano | Dev conferir se parece campo cirúrgico/paciente |
| Cisne SVG redesenhado | baixa | ok, aproximação | Trocar se a Dra. enviar vetor |
| Aviso de que fotos e vídeos vêm só da Dra. (sem imagem gerada por IA) | média | ok | Nenhuma imagem gerada |

## Playwright — automáticas

Dev (`localhost:3000`) e produção (`next start` com CSP completa em `localhost:3100`). Resultados idênticos.

| Checagem | 375px | 768px | 1920px |
|---|---|---|---|
| Imagens quebradas | ok | ok | ok |
| Scroll horizontal | ok | ok | ok |
| Um H1 | ok | — | — |
| Imagem sem alt | ok | — | — |
| Campo sem label | ok (não há campos) | — | — |
| Console sem erro (inclui violações de CSP em produção) | ok | — | — |
| Alvos de toque ≥ 44px | corrigido (marca e link do Instagram estavam com 28 e 22 px) | corrigido | corrigido |
| Ordem de foco / teclado | ok (pular, marca, menu, CTAs, mapa, Instagram; foco visível em todos) | — | — |
| `prefers-reduced-motion` | ok (nomes e retrato sem transform ao rolar; sem `<video>`, só poster) | — | — |
| Hero sem JS | ok (H1, CTA e retrato visíveis) | — | — |
| Assinatura anima sem reduzir movimento | ok (nomes ±101 px, retrato −45 px a 450 px de rolagem) | — | — |

Screenshots em `/private/tmp/...` (scratchpad da sessão), não versionados. Mobile 375 e desktop 1440 do hero também em `projeto/referencias/direcoes/` (pranchas, referência).

## Lighthouse (build de produção)

| Perfil | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Desktop | não medido | não medido | não medido | não medido |
| Mobile | não medido | não medido | não medido | não medido |

Não medido: o ambiente bloqueou a instalação do pacote `lighthouse` via `npx`. **Pendência humana (dev):** rodar PageSpeed Insights ou `lighthouse` no preview. Sem número registrado, não declarar 85+.

## Segurança (`seguranca`, só leitura)

Primeira rodada: bloqueado por item crítico.

| Achado | Gravidade | Rota/integração | Ação |
|---|---|---|---|
| S-01 `next@16.3.6` vulnerável (RCE/SSRF em Image Optimization) | crítica | `/_next/image` | corrigido: `next@16.4.6` |
| S-02 dependências transitivas (sharp, zod, glob etc.) | alta | build/lint | corrigido em parte com `npm audit fix`; restam 14 altas só em devDependencies de lint (`eslint-config-next`, cadeia de glob), sem runtime |
| S-03 CSP incompleta | média | headers | corrigido: CSP completa em produção, sem violações no console |
| S-04 `FormularioContato`/`acoes.ts` sem uso | média | components/contato | pendente humano: apagar os dois arquivos (remoção bloqueada aqui); hoje sem exposição (manifest vazio) |
| S-05 zip de mídia bruta na raiz | média | repositório | corrigido: `*.zip` no `.gitignore`; dev mover/apagar o zip |
| S-06 COOP/CORP/Permissions-Policy | baixa | headers | opcional; decidir `preload` do HSTS no lançamento |
| S-07 fetch da fonte no `opengraph-image` | baixa | build | aceito |
| S-08 chave em `.next/` | baixa | — | nada a fazer |
| S-09 `_meio-tmp.mjs` não rastreado | baixa | processo | pendente humano: apagar |

Segunda rodada (após correções): resultado "aprovado com pendências", sem item crítico. `npm audit --omit=dev`: 0 vulnerabilidades; as 14 altas restantes são só `picomatch` na cadeia `eslint-config-next` (lint local), aceitas e registradas (não usar `--force`). CSP e headers conferidos com `curl -sI` na produção local. Novos itens baixos: S-07 CSP com `unsafe-inline` (necessário ao Next e ao JSON-LD; aceito), S-08 HSTS com `preload` (decidir antes do lançamento), S-09 action órfã (mesmo que S-04).

**Trava:** sem item crítico. S-01 corrigido em 18/11 (Next 16.4.6) e confirmado na reauditoria.

## Checklist de entrega

Contra `referencias/checklist-entrega.md`: itens de visual, responsividade, acessibilidade, SEO técnico, conteúdo e código verificados nesta sessão (ok ou corrigido). Pendentes humanos: Lighthouse; domínio, HTTPS e acessos (fase 6); link no WhatsApp com imagem e título (fase 6); Search Console (fase 6); confirmação da copy pela Dra. (nicho regulado); `npm run verificar` completo (ver abaixo).

## Pendências não verificáveis nesta sessão

- Lighthouse mobile/desktop — motivo: instalação via `npx` bloqueada — responsável: dev
- `npm run verificar` completo — motivo: `skills-sync --check` falha só porque `_meio-tmp.mjs` (temporário da fase 2) existe e eu não posso apagar; lint, sintaxe dos scripts e `next build` passam — responsável: dev (apagar o arquivo e rodar `npm run verificar`)
- Revisão pelo subagente `revisor` — motivo: navegador do MCP Playwright não instalado — responsável: dev
- Celular real e Safari/iOS (vídeo, `100svh`, scrub) — motivo: sem dispositivo — responsável: dev
- Vídeo: conferir a olho o trecho 14,9-15,2 s — responsável: dev
