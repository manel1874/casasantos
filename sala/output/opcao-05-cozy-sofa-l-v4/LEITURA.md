# Opção 5 — Sofá de linhas direitas, biblioteca maior e aparador

Revisão dos três comentários à versão do sofá em L. Mantêm-se o estilo acolhedor, o L à direita de quem olha para o filme e a projeção na parede do fundo.

## As três alterações

1. **Sofá menos fofo:** braços e encosto mais finos, linhas direitas, almofadas de assento mais firmes e tecido liso de linho em tom areia. Dimensão proposta: cerca de 2,70 × 1,95 m. O conjunto desloca-se ligeiramente para o centro e avança para permitir o aparador e o acesso à estante.
2. **Estante ampliada:** de 1,15 m para cerca de 3,00 m ao longo da parede direita, com 34 cm de profundidade e altura proposta de 2,20 m. Cinco módulos, prateleiras para livros e arrumação inferior fechada. Mantêm-se as prateleiras do nicho.
3. **Aparador atrás do sofá:** peça de madeira com cerca de 2,30 × 0,35 m e 70 cm de altura, alinhada com as costas do tramo principal. O candeeiro e uma pequena planta passam para o tampo; sai a pequena mesa de apoio anterior.

## Circulação e mobiliário

- Faixa principal livre à esquerda: 90 cm no modelo.
- Entre o retorno do sofá e a frente da estante: 65 cm, para acesso aos livros. A passagem principal continua à esquerda.
- Entre a frente do aparador e a fachada: cerca de 1,20 m. No pequeno trecho alinhado com a grelha/radiador, o esquema deixa cerca de 98 cm.
- A segunda planta passa para o aparador, libertando o chão atrás do sofá.
- Fica uma poltrona verde-azeitona. Mesa de pedra com 70 cm de diâmetro, aproximadamente 35 cm à frente do sofá e 48 cm do retorno.
- O tampo do aparador fica ligeiramente abaixo do encosto. As portas abrem para o lado da fachada.

## Luz e projeção

- G1/G2: manter a intenção dos pontos gerais anteriores; confirmar o alinhamento final com o mobiliário real.
- E1: alimentação para a estante maior, com luz quente regulável e comando independente.
- N1/A1: luz do nicho e possibilidade de aplique mantidas.
- T: candeeiro agora sobre o aparador. Prever alimentação junto à peça, com o cabo fora das passagens.
- P: reserva de posição horizontal para projetor no teto. Não representa instalação em cima do aparador. Confirmar altura, distância e cablagem com o equipamento escolhido.
- A imagem de estudo mantém 2,20 m de largura na parede do fundo. As luzes das estantes podem apagar durante o filme.

## Medidas e imagens

As medidas são conceptuais e devem ser confirmadas no local. Os renders ilustram o ambiente e não são desenhos à escala nem uma simulação do contraste real de cinema. A planta é a referência para comparar a disposição.

As duas imagens foram editadas com a ferramenta integrada image_gen a partir da versão anterior. Não foi utilizado o modo CLI/API. Os prompts completos estão em prompts.json.

A versão anterior mantém-se em ../opcao-05-cozy-sofa-l-v3/.


## Variante sem projeção

Acrescentadas duas imagens com a parede do fundo livre: sala-cozy-l-vista-interior-sem-projecao.webp e sala-cozy-l-vista-geral-sem-projecao.webp. As imagens com projeção e as versões anteriores mantêm-se. A página permite alternar entre Com projeção e Sem projeção. As plantas e os pontos de luz são os mesmos. Prompts e modo da ferramenta integrada em prompts-sem-projecao.json.

## Quadro e poltrona de linhas direitas

A poltrona verde passa a ter braços finos e retos, almofadas de assento mais firmes e pequenos pés de madeira, aproximando-se da linguagem do sofá principal. Mantém-se a localização e a dimensão de estudo de 78 × 78 cm.

A sugestão de quadro é uma paisagem abstrata horizontal com cerca de 150 × 90 cm, em areia, verde-azeitona e terracota, com moldura fina de madeira. É uma proposta visual criada para a simulação. Proponho uma tela leve sem vidro, com fixação que permita removê-la: antes do filme, retirar e guardar noutra divisão. Confirmar a fixação e as medidas com a peça real.

A galeria passa a ter duas vistas e três estados da parede: Com quadro, Parede livre e Com projeção. O quadro é retirado nas duas últimas. O botão Comparar com a anterior e a ligação para a versão anterior foram removidos da página; as imagens anteriores mantêm-se nos ficheiros.

Os seis ficheiros sala-atual-{interior,geral}-{quadro,livre,cinema}.png usam a nova poltrona. As plantas não mudam, pois a implantação se mantém. Prompts completos em prompts-quadro-poltrona.json; edição com a ferramenta integrada image_gen.

## Modelo 3D navegável e vistas vetoriais

Acrescentado `modelo-3d.html`, no mesmo formato navegável do escritório: cinco vistas, rotação e zoom, corte das paredes, medidas e pontos de luz. Mantém a implantação de `dados-cozy-l.json`, incluindo sofá em L de 2,70 × 1,95 m, poltrona de linhas direitas, estante de 3 m e aparador de 2,30 × 0,35 m. A galeria e todas as imagens anteriores mantêm-se.

Os três estados — quadro, parede livre e cinema — estão disponíveis no visualizador e como ficheiros `modelos-3d/sala-{quadro,livre,cinema}.glb`. Cada estado tem uma axonometria e uma vista superior com cotas em SVG; os SVG são vetoriais, sem imagem raster incorporada. Também se pode exportar a vista atual diretamente no visualizador. O GLB usa metros e conserva paredes completas, com teto omitido para inspeção.

O modelo foi construído com geometria Three.js; não é uma conversão automática dos renders. O pavimento, os livros, as plantas e o quadro são geometria. A imagem de cinema é um desenho indicativo. A geometria segue a planta de estudo, que pode diferir dos renders conceptuais nos pormenores.

Pé-direito assumido de **2,70 m** e paredes de **18 cm**; posições e alturas dos vãos e do nicho a confirmar. A altura da lente do projetor de 2,375 m é uma proposta de modelação, dependente do equipamento real. Os pontos de luz mostram localizações de estudo e não uma simulação fotométrica. Dados e pressupostos completos em `modelo-3d.json`.

Fonte editável: `../../tmp/modelo-3d/model.js`. O visualizador funciona localmente, com biblioteca incluída em `modelo-3d.js`. Licença Three.js em `modelo-3d-LICENCA.txt`.

## Modelo integrado na galeria

O modelo 3D está agora incorporado diretamente em `index.html`, na secção «A sala em 3D». A ligação «Explorar modelo 3D» desloca a página até essa secção. Mantêm-se os controlos de vista, medidas, pontos de luz e exportação; a altura do modelo adapta-se aos controlos e ao ecrã. A escolha entre quadro, parede livre e projeção é sincronizada nos dois sentidos com a galeria. A página independente continua disponível através de «Abrir numa janela maior».
