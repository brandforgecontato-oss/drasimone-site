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
- **Status:** recebida

### Hero mobile · retrato 02 em largura total

- **Uso e composição:** retrato ocupa a largura da tela (menos margens), recorte 4:5 centrado no rosto; o nome em contorno passa por cima na parte inferior; H1 e CTA abaixo.
- **Tipo e formato:** imagem · AVIF + WebP via `next/image` (mesmo arquivo do desktop com `sizes` e recorte por `object-position`)
- **Proporção e duração:** 4:5 · estática
- **Movimento de câmera:** não se aplica
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** `public/media/hero/retrato-02.jpg` (o mesmo)
- **Poster:** não se aplica
- **Reserva na página:** quadro 4:5 na largura útil, fundo `#2A1419`
- **Status:** recebida

### Abordagem · vinheta das penas do cisne

- **Uso e composição:** quadro quadrado ao lado da frase "Sem exagero." (seção 2); só o trecho das penas douradas, sem o logo e sem a cartela.
- **Tipo e formato:** vídeo · MP4 (H.264) + WebM, sem áudio
- **Proporção e duração:** 1:1 (recorte do miolo do 576×1024, que já tem faixas pretas em cima e embaixo) · trecho ~0 a 6 s (conferir o ponto exato no processamento), em loop com fusão de 0,5 s no fim para esconder o salto
- **Movimento de câmera:** o do original (aproximação lenta nas penas)
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** original `projeto/referencias/midia/recebido/04-WhatsApp Video 2026-11-16 at 16.18.33.mp4` · final `public/media/abordagem/penas.mp4` · `public/media/abordagem/penas.webm`
- **Poster:** `public/media/abordagem/penas-poster.jpg` (quadro de penas bem iluminado)
- **Reserva na página:** quadro 1:1, até 520 px, fundo `#0D0B0A`
- **Tratamento:** recortar o ícone e o @ do canto superior direito (o recorte 1:1 já remove a maior parte; ampliar 1,2× se sobrar), remover o trecho do logo e a cartela final. Movimento reduzido: só o poster.
- **Status:** recebida

### No consultório · reel da Dra. com paciente

- **Uso e composição:** quadro 9:16 na seção 5, ao lado do texto; no celular, largura de ~80% da tela.
- **Tipo e formato:** vídeo · MP4 (H.264) + WebM; mudo por padrão, com controle de som se o áudio original for aproveitável
- **Proporção e duração:** 9:16 · ~0 a 31 s (corte antes da cartela final do Instagram; conferir o ponto exato no processamento); toca ao entrar na tela, sem loop, com poster
- **Movimento de câmera:** o do original
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** original `projeto/referencias/midia/recebido/03-WhatsApp Video 2026-11-16 at 16.14.45.mp4` · final `public/media/consultorio/consultorio.mp4` · `public/media/consultorio/consultorio.webm`
- **Poster:** `public/media/consultorio/consultorio-poster.jpg` (quadro da Dra. de jaleco, sem paciente)
- **Reserva na página:** quadro 9:16, 360×640 no desktop, fundo `#2A1419`
- **Tratamento:** o @ muda de posição ao longo do reel (canto superior direito e lateral esquerda); recortar com leve ampliação (~1,15×) e, onde não sair, cobrir com desfoque localizado; cortar a cartela final; não ampliar além do original (576×1024).
- **Status:** recebida

### Sobre · retrato 01

- **Uso e composição:** retrato de perfil na seção 6, quadro vertical do lado oposto ao vídeo da seção 5.
- **Tipo e formato:** imagem · AVIF + WebP via `next/image`
- **Proporção e duração:** 1:2 original (615×1280), exibido em 3:5 com recorte da parte de baixo · estática
- **Movimento de câmera:** não se aplica
- **Prompt Google Flow:** não se aplica
- **Caminho do original/final:** original `projeto/referencias/midia/recebido/01-WhatsApp Image 2026-11-16 at 16.17.17.jpeg` · final `public/media/sobre/retrato-01.jpg`
- **Poster:** não se aplica
- **Reserva na página:** quadro 3:5, até 360×600, fundo `#2A1419`
- **Status:** recebida

### Marca · cisne

- **Uso e composição:** cisne no menu, no rodapé e no favicon; o nome vai em texto (Cormorant), não em imagem.
- **Tipo e formato:** SVG redesenhado a partir do logo (não há vetor), em Champanhe `#D6B270`
- **Caminho do original/final:** original `projeto/referencias/marca/logo-original.jpeg` · final `public/media/marca/cisne.svg` e `app/icon.svg`
- **Status:** recebida (redesenho na construção)

## Mídia do cliente

| Arquivo recebido | Uso | Tratamento | Destino no site | Status |
|---|---|---|---|---|
| `01-WhatsApp Image 2026-11-16 at 16.17.17.jpeg` · 615×1280 | Sobre | recorte 3:5, comprimir, AVIF/WebP | `public/media/sobre/retrato-01.jpg` | recebida |
| `02-WhatsApp Image 2026-11-16 at 16.20.33.jpeg` · 784×1280 | Hero (desktop e mobile), Open Graph | recorte 5:8 e 4:5, comprimir | `public/media/hero/retrato-02.jpg` | recebida |
| `03-WhatsApp Video 2026-11-16 at 16.14.45.mp4` · 576×1024 · 35,4 s | No consultório | recortar @, cortar cartela, MP4+WebM, poster | `public/media/consultorio/` | recebida |
| `04-WhatsApp Video 2026-11-16 at 16.18.33.mp4` · 576×1024 · 13,4 s | Abordagem | recorte 1:1 do miolo, trecho das penas, loop com fusão, poster | `public/media/abordagem/` | recebida |
| `05-WhatsApp Video 2026-11-16 at 16.19.26.mp4` · 576×1024 · 14,5 s | fora da v1 | — | — | fora (regra CRBM conservadora) |
| `06-WhatsApp Video 2026-11-16 at 16.20.21.mp4` · 1024×576 · 14,6 s | fora da v1 | — | — | fora (regra CRBM conservadora) |
| `logo-original.jpeg` · 500×500 | Marca | redesenho do cisne em SVG | `public/media/marca/cisne.svg` | recebida |

Mídias pendentes do cliente: nenhuma (mídia fechada). Se a direção A ou C for escolhida no portão, este plano é ajustado antes da aprovação: A usa o retrato 02 no hero à direita e não usa a vinheta; C usa a vinheta 04 no hero (quadro máximo ~640 px com borda dissolvida) e o retrato 01 dentro da máscara de pena.
