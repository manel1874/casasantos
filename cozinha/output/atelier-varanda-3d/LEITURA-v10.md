# V10 — Cozinha com zona de roupa compacta

Esta revisão responde aos comentários sobre a área ocupada pela roupa, o pano divisório, as máquinas, o armário de limpeza, a frente de frio e as proporções das imagens.

## O que muda

- A zona interior de roupa passa a um espaço de 1,35 × 1,85 m, aproximadamente 2,50 m², com bancada de 100 × 45 cm, apoio compacto para engomar e duas prateleiras.
- O armário divisor alto e comprido desaparece. Uma divisória fina de vidro e uma porta telescópica com abertura proposta de 90 cm separam a zona de roupa. A entrada continua no extremo interior, sem interferir com o acesso à varanda.
- O pano curto assinalado é retirado da proposta. A sua demolição exige confirmar a função estrutural; a espessura desenhada não permite concluir que seja removível.
- As máquinas em coluna ficam encostadas ao topo do retorno da varanda. Um armário estreito de 30 × 45 cm para produtos de limpeza ocupa o lado adjacente.
- Ficam apenas o frigorífico americano e a despensa na frente de 2,09 m. Retira-se o combinado adicional.
- Mantêm-se a bancada em L, a separação em pedra e vidro para a varanda e o módulo saliente do termoacumulador.
- A ilha proposta tem 90 × 140 cm. O avanço de 20 cm fica no lado dos dois lugares, fora do corredor principal de trabalho.

## Cotas lidas na planta-nova.webp

| Elemento | Cota indicada |
|---|---:|
| Largura interior | 254 + 259,5 = 513,5 cm |
| Profundidade dos módulos laterais | 60 cm |
| Frente direita | 311 cm |
| Frente esquerda | 366 cm |
| Frente diante da I.S. | 209 cm |
| Ilha da proposta inicial | 120 × 180 cm |
| Folgas laterais dessa ilha inicial | cerca de 137 cm |

As folgas de 137 cm pertencem à proposta sem o novo resguardo da zona de roupa. Não podem ser transpostas para uma disposição com o armário divisor dos renders antigos.

## Folgas da V10 calculadas no modelo

| Distância livre proposta | Valor |
|---|---:|
| Ilha / bancada de trabalho | 120 cm |
| Ilha / bancada sob as janelas | 105 cm |
| Ilha / envelope frontal do americano fechado | 90 cm |
| Ilha / face exterior do resguardo da roupa | 104,5 cm |
| Passagem interior da zona de roupa | 90 cm |
| Área livre reservada ao giro da porta J13 | 85 cm de profundidade |

As folgas da cozinha são calculadas com portas e gavetas fechadas. O envelope do americano inclui a frente dos puxadores no modelo; a profundidade e as folgas do equipamento real dependem da ficha do aparelho. A abertura de portas, gavetas ou máquina de lavar loiça ocupa parte das passagens. Os bancos são representados no lado oposto à frente de confeção.

O conjunto de frio usa 209 cm: dois painéis laterais de 2 cm, um painel intermédio de 2 cm, nicho proposto de 95 cm para o americano e despensa de 108 cm. O modelo do frigorífico ainda não foi escolhido; o nicho não é uma validação de instalação.

## O que continua estimado

A varanda não tem uma cota transversal legível nesta imagem. Adotaram-se aproximadamente 1,10 m no retorno e 1,04 m no troço longo, por leitura gráfica. A torre de máquinas reserva 70 × 75 cm e o móvel de limpeza 30 × 45 cm; confirmar estas medidas, o vão pequeno existente e o pano de apoio no topo do retorno antes de fixar a posição.

Também são inferidos os recuos inferiores, as posições de portas não cotadas e a posição da parede da I.S. A implantação proposta diante desta parede determina a folga de 90 cm até ao frigorífico; esta é uma dimensão de projeto a confirmar, não uma medição em obra. O desenho indica 28,00 m² para a cozinha, mas esse rótulo de área não foi usado para esticar a geometria: prevaleceram as cadeias de cotas legíveis. É necessário fechar o perímetro com um levantamento para confirmar a área.

A altura do mobiliário e o pé-direito das imagens de ambiente são hipóteses de representação; não constam das cotas horizontais utilizadas.

## Ficheiros

- [Galeria atualizada](index.html)
- [Planta cotada vetorial](v10/planta-cotada.svg)
- [Planta cotada em PNG](atelier-varanda-v10-planta-cotada.webp)
- [Modelo 3D interativo](v10/modelo-3d.html)
- [Dados e dimensões em metros](v10/modelo.json)
- [Vista do modelo rodada 180°](atelier-varanda-v10-modelo-superior.webp)
- [Vista do modelo na orientação original](atelier-varanda-v10-modelo-geral.webp)
- [Vista interior do modelo](atelier-varanda-v10-modelo-interior.webp)
- [Ambiente superior](atelier-varanda-v10-compacta.webp)
- [Ambiente interior](atelier-varanda-v10-interior.webp)

A planta e o 3D geométrico partem das mesmas coordenadas. As imagens de ambiente foram geradas sobre capturas desse modelo e podem variar em pormenores; não servem para medir. As imagens anteriores mantêm-se no histórico.

## Produção e validação

Modelo nativo em Three.js, empacotado localmente para abrir sem servidor; capturas com Chromium. Folgas principais verificadas por cálculo a partir das coordenadas. Planta SVG gerada em unidades proporcionais a metros.

Ambientes produzidos com a ferramenta integrada image_gen, em modo de edição/transferência de materiais a partir do modelo:
- [Prompt do ambiente superior](v10/prompt-ambiente.txt)
- [Prompt do ambiente interior](v10/prompt-interior.txt)
