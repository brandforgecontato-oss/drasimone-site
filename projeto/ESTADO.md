# Estado do projeto — Dra. Simone (site)

> Lido pelo `/comecar` no início de toda sessão e atualizado no fim de cada fase e a cada marco. Permite `/clear`, trocar de máquina ou passar o projeto para o sócio e retomar daqui.

## Agora

- **Fase atual:** 5 — Refinamento (fase 4 concluída; ver `projeto/RELATORIO.md`)
- **Próximo passo:** o dev revê http://localhost:3000 e pede ajustes, ou diz "pode entregar"
- **Modelo recomendado:** Sonnet
- **Versionamento:** modo 1 — GitHub Desktop, Claude nunca commita/envia
- **Última atualização:** 2026-11-18 por Claude
- **Modo:** cliente real
- **Imagem de pessoa com IA:** não autorizada (só fotos reais)

## Fases

| Metade | # | Fase | Status | Resultado |
|---|---|---|---|---|
| Planejamento | 0 | Ambiente | concluída | — |
| | 1 | Briefing e nicho | concluída | `projeto/BRIEF.md` |
| | 2 | Pacote criativo (recomendação) | concluída | três direções; `projeto/DIRECAO.md`, `projeto/COPY.md`, `projeto/MIDIA.md` |
| | 3 | Portão | concluída | "pode construir" em Decisões aprovadas |
| Execução autônoma | 4 | Construção, revisão e relatório | concluída (com pendências humanas) | `projeto/REVISAO.md`, `projeto/RELATORIO.md` |
| Refinamento | 5 | Refinamento livre | em andamento | — |
| Entrega | 6 | Preview, feedback, lançamento e portfólio | não iniciada | `projeto/FEEDBACK.md`, entrada no portfólio |

## Decisões aprovadas

Uma linha por decisão, com data e quem aprovou. Nunca apague: se mudar, risque e registre a nova. Decisões tomadas sozinho na execução autônoma ficam em `projeto/DECISOES.md`.

- 2026-11-13 — Versionamento modo 1; projeto de cliente real (aprovado por dev)
- 2026-11-14 — Trilha A, landing única, ambição marcante (aprovado por dev)
- 2026-11-14 — Nicho regulado (CRBM): v1 com regras conservadoras, sem antes/depois; dev pergunta à Dra. depois da primeira versão (aprovado por dev)
- 2026-11-14 — Só fotos reais, sem pessoa gerada por IA; domínio drasimonepinheiro.com.br (aprovado por dev)
- 2026-11-18 — Domínio drasimonepinheiro.com.br aprovado também pela Dra.; horário seg–sáb 8h–20h (informado pela Dra.)
- 2026-11-18 — Vídeos só existem com marca d'água do Instagram: usar os recebidos, com recorte do @ e sem a cartela final (dev)
- 2026-11-18 — Mídia fechada: só as 2 fotos e 4 vídeos recebidos, a Dra. não tem outras. Nada gerado no Google Flow nem por IA neste projeto; `MIDIA.md` da fase 2 lista só a mídia recebida, sem prompts; texturas e fundos em CSS/SVG. Paciente do vídeo 03 autorizou uso de imagem (dev)
- 2026-11-18 — Direção B preferida pelo dev; vinheta do logo (vídeo 04) sai da seção Abordagem. Substituta aprovada: trechos do vídeo 03 só com a Dra. (0-3,5 s, 14-15,2 s, 23-24,4 s), sem paciente, sem marca de produto; seção "No consultório" removida da copy. DIRECAO, COPY e MIDIA atualizados (v1 em `projeto/historico/`) (dev)
- 2026-11-18 — **Pode construir**: direção B "Camadas do cisne", COPY.md, MIDIA.md e stack aprovados no portão (dev)

## Stack

Decidida no portão (fase 3), uma linha por camada, com o motivo.

- Base: Next.js + TypeScript + Tailwind (template); fontes Cormorant Garamond + Jost via `next/font/google`; tema escuro fixo (`color-scheme: only dark` no `:root` e no viewport, lição do portfólio)
- GSAP + ScrollTrigger: sim, só na assinatura do hero (paralaxe de três camadas com scrub: nome se abre, retrato sobe); `useGSAP` em folha client, `matchMedia` com movimento reduzido
- Lenis: não, um único scrub curto no hero e página curta
- ~~SplitText: não~~ → SplitText: sim, só nos 5 títulos de seção (linhas em máscara); mudança pedida pelo dev em 2026-11-18 ("faltam animações de texto"). Textos corridos, listas e hero usam fade/subida por ScrollTrigger, sem dividir texto
- Motion: não, microinterações (botão afunda, hover) em CSS; remover o pacote
- 3D / sequência em canvas / View Transitions / Rive / Lottie: não, landing única sem produto 3D
- Peças do scaffold: `VideoComPoster` (vídeo da Dra. na Abordagem), `LinkWhatsApp`, `JsonLdNegocio` (tipo `HealthAndBeautyBusiness`, sem schema médico até o enquadramento ser confirmado), `RevelarAoEntrar` só se necessário
- Formulário, agendamento, login, pagamento: não há (CTA abre o WhatsApp); `seguranca-web` só na auditoria final (links externos, headers, LGPD do vídeo com paciente fora)

## Progresso da execução autônoma

| Marco | Status | Quando | Marco / commit |
|---|---|---|---|
| Início da construção | feito | 2026-11-18 | marco `inicio-construcao` |
| Hero completo | feito | 2026-11-18 | marco `hero` |
| Fim da construção | feito | 2026-11-18 | marco `construcao` |
| Revisão e relatório | feito | 2026-11-18 | `projeto/REVISAO.md`, `projeto/RELATORIO.md` |

Seção em andamento: —

## Pendências

- [ ] Perguntar à Dra. sobre as regras de publicidade (CRBM) após a v1; lista de riscos sai em RELATORIO — **quem:** dev — desde 2026-11-14
- [ ] Google Business Profile: existe? — **quem:** Simone/dev — desde 2026-11-14
- [ ] Verificar e registrar domínio drasimonepinheiro.com.br — **quem:** dev — desde 2026-11-14
- [ ] Links de avaliações, CEP, confirmar e-mail — **quem:** Simone — desde 2026-11-14
- [ ] Como funciona o atendimento online; se há retorno pós-procedimento incluído (COPY §4 e §6) — **quem:** Simone — desde 2026-11-18
- [ ] Confirmar se pode listar "harmonização glútea" como serviço (só nome, sem imagem) — **quem:** dev/Simone — desde 2026-11-18
- [x] Vídeo 03 tem a caixa do preenchedor Yvoire (4-6 s), paciente com marcações e procedimento (8-22 s), certificado (17 s) e paciente no espelho (24-27 s, pode ler como resultado): resolvido em 2026-11-18: só os trechos da Dra. entram (MIDIA atualizado) — **quem:** dev — desde 2026-11-18
- [ ] Apagar `.claude/skills/comecar/scripts/_meio-tmp.mjs` (script temporário da fase 2; o Claude não tem permissão para apagar). Ele faz `skills-sync --check` falhar, então `npm run verificar` só passa depois — **quem:** dev — desde 2026-11-18
- [ ] Apagar arquivos vazios/sem uso: `components/movimento/RolagemSuave.tsx`, `components/movimento/ConfiguracaoMotion.tsx`, `app/providers-movimento.tsx`, `components/secoes/HeroCamadas.tsx`, `components/contato/FormularioContato.tsx`, `components/contato/acoes.ts` — **quem:** dev — desde 2026-11-18
- [ ] Lighthouse no preview (não medido); conferir vídeo 14,9-15,2 s e celular real — **quem:** dev — desde 2026-11-18
- [ ] Mover/apagar `WhatsApp Unknown 2026-11-18 at 09.12.13.zip` na raiz (agora no `.gitignore`) — **quem:** dev — desde 2026-11-18
- [ ] Git local: `origin` sem usuário `brandforgecontato-oss` e remote `template` ausente — **quem:** dev — desde 2026-11-18

## Provisórios a trocar antes de publicar

- Cisne em SVG redesenhado (aproximação do logo)
- Sem CEP, e-mail e avaliações (seção de avaliações fora)

## Lançamento

- Domínio: drasimonepinheiro.com.br (a registrar) · Preview: {{URL}} · Produção: {{URL}}

## Diário curto

- 2026-11-13 — Fase 0 concluída: conta da empresa, remote template e npm install; questionário gerado
- 2026-11-14 — Respostas da Simone recebidas; BRIEF.md concluído (logo recebido, decisões do dev)
- 2026-11-18 — Dra. confirmou: não existe outro arquivo de logo além do JPEG 500×500. Na construção, cisne redesenhado em SVG a partir dele e nome em texto com serifa equivalente
- 2026-11-18 — Mídia da Dra. recebida (2 fotos, 4 vídeos, WhatsApp); triagem em BRIEF §6
- 2026-11-18 — Fase 2 concluída: DIRECAO (A discreta, B marcante recomendada, C uau), COPY, MIDIA e pranchas A/B/C conferidas no navegador; técnicas de 4 referências registradas em `referencias/sites.md`
- 2026-11-18 — Fase 3 concluída: "pode construir" com a direção B; stack registrada
- 2026-11-18 — Fase 4 concluída: landing construída e revisada, segurança sem item crítico (Next 16.4.6); Lighthouse e `verificar` completo pendentes (ver RELATORIO)
- 2026-11-18 — Refinamento: animações de texto (títulos com SplitText, entrada do hero, revelação de parágrafos/listas); desligadas com movimento reduzido e sem JS
- 2026-11-18 — Refinamento: fundo com profundidade (brilhos vinho/champanhe, penas em contorno), decisão #17
- 2026-11-18 — Refinamento: botões do WhatsApp em pílula com logo e brilho, decisão #18
- 2026-11-18 — Refinamento: tela de abertura com o logo, decisão #19
- 2026-11-18 — Refinamento: passos com scroll fixo no desktop, decisão #20
- 2026-11-18 — Refinamento: corte do g nos títulos, Abordagem redesenhada e faixa tipográfica, decisão #21
- 2026-11-18 — Refinamento: efeito de scroll fixo dos passos desfeito, decisão #22
- 2026-11-18 — Refinamento: vídeo da Abordagem trocado pela versão sem marca d'água, decisão #23
- 2026-11-18 — Refinamento: otimização para celular e correção da tela de abertura, decisão #24
