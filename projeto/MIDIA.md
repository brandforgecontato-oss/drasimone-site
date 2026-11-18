# Plano de mídia — Dra. Simone Pinheiro

Direção recomendada: B, "Camadas do cisne" (`projeto/DIRECAO.md`). Fase 2, 2026-11-18.

**Mídia fechada (decisão do dev, 2026-11-18):** o site usa só as 2 fotos e os 4 vídeos recebidos da Dra. Nada é gerado no Google Flow nem por IA neste projeto, por isso este plano não tem prompts. Texturas e fundos são feitos em CSS/SVG.

## Bloco de estilo compartilhado

Cor natural das fotos dela, sem filtro de pele nem retoque adicional; luz quente já presente nos originais. Quadros retos (sem arco, sem cantos arredondados), sobre fundo vinho `#1C0D11`, com escurecimento leve nas bordas do quadro para fundir com o fundo. Vídeos sempre mudos por padrão, sem cartela do Instagram e com o ícone/@ recortado. Grão de fundo em CSS, fixo, nunca sobre a foto.

**Regra do nicho:** regulado (CRBM). Sem antes e depois, sem mostrar resultado, sem imagem de paciente sem autorização escrita. Vídeos 05 e 06 (glúteo de pacientes) ficam fora da v1. Paciente do vídeo 03 autorizou o uso de imagem (dev, 2026-11-18).

**Imagem de pessoa com IA:** não autorizada. Não se aplica: nada é gerado.

## Mídias planejadas

### Hero desktop · retrato 02 em camadas

- **Uso e composição:** quadro vertical central no hero, entre "Simone" e "Pinheiro"; o nome em contorno dourado passa por cima do quadro. Quadro com no máximo ~400 px de largura (o original tem 784 px), para não perder nitidez em tela 2x além do aceitável.
- **Tipo e formato:** imagem · AVIF + WebP via `next/image`
- **Proporção e duração:** 5:8 (recorte do original 784×1280, cortando o topo com a faixa de luz do salão) · estática
- **Movimento de câmera:** não se aplica (paralaxe da assinatura feita no código)
- **Prompt Google Flow:** não se aplica (mídia real, nada gerado)
- **Caminho do original/final:** original `projeto/referencias/midia/recebido/02-WhatsApp Image 2026-11-16 at 16.20.33.jpeg` · final `public/media/hero/retrato-02.jpg`
- **Poster:** não se aplica
- **Reserva na página:** quadro 5:8, 400×640 no desktop, fundo `#2A1419`
- **Processado (2026-11-18):** `public/media/hero/retrato-02.jpg` (784×1280, progressivo, 108 KB) · `.webp` (784×1280, 107 KB) · `.avif` (784×1280, 60 KB). Imagem inteira, sem recorte; o recorte 5:8 / 4:5 fica no componente (`object-fit`/`object-position`). Integração pendente (agente principal).
- **Status:** processada

### Hero mobile · retrato 02 em largura total

- **Uso e composição:** retrato ocupa a largura da tela (menos margens), recorte 4:5 centrado no rosto; o nome em contorno passa por cima na parte inferior; H1 e CTA abaixo.
- **Tipo e formato:** imagem · AVIF + WebP via `next/image` (mesmo arquivo do desktop com `sizes` e recorte por `object-position`)
- **Proporção e duração:** 4:5 · estática
- **Movimento de câmera:** não se aplica
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** `public/media/hero/retrato-02.jpg` (o mesmo)
- **Poster:** não se aplica
- **Reserva na página:** quadro 4:5 na largura útil, fundo `#2A1419`
- **Processado:** usa os mesmos arquivos do hero desktop (`retrato-02.jpg/.webp/.avif`).
- **Status:** processada

### Abordagem · a Dra. se preparando (trechos do vídeo 03)

- **Uso e composição:** quadro 9:16 ao lado da frase "Sem exagero." (seção 2), com a legenda "No consultório da Clínica CCL, Setor Marista"; no celular, largura de ~80% da tela abaixo do texto. Substitui a vinheta do logo (vídeo 04), que o dev tirou em 2026-11-18.
- **Tipo e formato:** vídeo · MP4 (H.264) + WebM, sem áudio
- **Proporção e duração:** 9:16 · ~6 s em loop, montado só com trechos em que aparece a Dra.: 0 a 3,5 s, 14 a 15,2 s e 23 a 24,4 s do original (conferir os pontos exatos no processamento)
- **Movimento de câmera:** o do original
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** original `projeto/referencias/midia/recebido/03-WhatsApp Video 2026-11-16 at 16.14.45.mp4` · final `public/media/abordagem/dra-consultorio.mp4` · `public/media/abordagem/dra-consultorio.webm` · corte de referência usado na prancha: `projeto/referencias/midia/processado/prancha-consultorio-dra.mp4`
- **Poster:** `public/media/abordagem/dra-consultorio-poster.jpg` (Dra. de máscara olhando para a câmera, ~23,5 s do original)
- **Reserva na página:** quadro 9:16, 360×640 no desktop, fundo `#2A1419`
- **Tratamento:** fora do corte, obrigatoriamente: caixa do preenchedor Yvoire (4 a 6 s, marca de produto), paciente com marcações e procedimento (8 a 22 s), certificado (17 s), paciente no espelho (24 a 27 s, pode ler como resultado), logo e cartela (28 s em diante). O @ muda de posição: recortar com leve ampliação (~1,15×) e, onde não sair, desfoque localizado; não ampliar além do original (576×1024). Movimento reduzido: só o poster.
- **Processado (2026-11-18):** `public/media/abordagem/dra-consultorio.mp4` (H.264 High, yuv420p, faststart, sem áudio, 576×1024, 30 fps, 4,83 s, 821 KB) · `dra-consultorio.webm` (VP9, 576×1024, 4,83 s, 567 KB) · `dra-consultorio-poster.jpg` (576×1024, 30 KB, quadro de ~14,7 s do original: Dra. de máscara olhando para a câmera). Trechos reais usados do original: 0,25-3,9 s, 14,3-15,2 s, 23,5-23,78 s (pontos ajustados após conferir quadros: 0-0,2 s mostra outra pessoa em primeiro plano; 14,0-14,2 s é transição com caixa e paciente; 23,0-23,4 s e 23,8 s em diante é paciente). @/ícone removido com `delogo` localizado (sem ampliação além de 1,15× centrada). Duração ficou abaixo dos ~6 s previstos: o material seguro da Dra. não chega a mais. Integração pendente (agente principal).
- **Status:** processada

### Sobre · retrato 01

- **Uso e composição:** retrato de perfil na seção 6, quadro vertical do lado oposto ao vídeo da seção 5.
- **Tipo e formato:** imagem · AVIF + WebP via `next/image`
- **Proporção e duração:** 1:2 original (615×1280), exibido em 3:5 com recorte da parte de baixo · estática
- **Movimento de câmera:** não se aplica
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** original `projeto/referencias/midia/recebido/01-WhatsApp Image 2026-11-16 at 16.17.17.jpeg` · final `public/media/sobre/retrato-01.jpg`
- **Poster:** não se aplica
- **Reserva na página:** quadro 3:5, até 360×600, fundo `#2A1419`
- **Processado (2026-11-18):** `public/media/sobre/retrato-01.jpg` (615×1280, progressivo, 100 KB) · `.webp` (615×1280, 102 KB) · `.avif` (615×1280, 56 KB). Imagem inteira; o recorte 3:5 (parte de baixo) fica no componente. Integração pendente (agente principal).
- **Status:** processada

### Marca · cisne

- **Uso e composição:** cisne no menu, no rodapé e no favicon; o nome vai em texto (Cormorant), não em imagem.
- **Tipo e formato:** SVG redesenhado a partir do logo (não há vetor), em Champanhe `#D6B270`
- **Caminho do original/final:** original `projeto/referencias/marca/logo-original.jpeg` · final `public/media/marca/cisne.svg` e `app/icon.svg`
- **Status:** recebida (redesenho na construção)

## Mídia do cliente

| Arquivo recebido | Uso | Tratamento | Destino no site | Status |
|---|---|---|---|---|
| `01-WhatsApp Image 2026-11-16 at 16.17.17.jpeg` · 615×1280 | Sobre | recorte 3:5, comprimir, AVIF/WebP | `public/media/sobre/retrato-01.jpg` (+ .webp, .avif) | processada |
| `02-WhatsApp Image 2026-11-16 at 16.20.33.jpeg` · 784×1280 | Hero (desktop e mobile), Open Graph | recorte 5:8 e 4:5, comprimir | `public/media/hero/retrato-02.jpg` (+ .webp, .avif) | processada |
| `03-WhatsApp Video 2026-11-16 at 16.14.45.mp4` · 576×1024 · 35,4 s | Abordagem | só trechos da Dra. (0-3,5 s, 14-15,2 s, 23-24,4 s), recortar @, MP4+WebM, poster | `public/media/abordagem/dra-consultorio.mp4`, `.webm`, `-poster.jpg` | processada |
| `04-WhatsApp Video 2026-11-16 at 16.18.33.mp4` · 576×1024 · 13,4 s | fora da v1 | — | — | fora (dev tirou, 2026-11-18) |
| `05-WhatsApp Video 2026-11-16 at 16.19.26.mp4` · 576×1024 · 14,5 s | fora da v1 | — | — | fora (regra CRBM conservadora) |
| `06-WhatsApp Video 2026-11-16 at 16.20.21.mp4` · 1024×576 · 14,6 s | fora da v1 | — | — | fora (regra CRBM conservadora) |
| `logo-original.jpeg` · 500×500 | Marca | redesenho do cisne em SVG | `public/media/marca/cisne.svg` | recebida |

Mídias pendentes do cliente: nenhuma (mídia fechada). Se a direção A ou C for escolhida no portão, este plano é ajustado antes da aprovação: A usa o retrato 02 no hero à direita; C usa a vinheta 04 no hero (quadro máximo ~640 px com borda dissolvida) e o retrato 01 dentro da máscara de pena.
