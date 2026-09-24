# V12 — Sete alterações e cinco ambientes

## Os sete pedidos, integrados

1. **Armários suspensos na parede do fogão.** Carvalho, semelhantes à V8, com 35 cm de fundo e 75 cm de altura, entre 1,55 e 2,30 m. Dois troços deixam um intervalo de 62 cm para o exaustor. A distância de instalação final depende dos equipamentos escolhidos.
2. **Prateleiras na ilha, opostas às cadeiras.** Nichos abertos com 30 cm de profundidade dentro da ilha de 90 × 140 cm. Mantêm-se os dois lugares e o avanço de 20 cm do tampo; as prateleiras não projetam para o corredor de trabalho.
3. **Garrafeira nos armários junto à lavandaria.** Nicho vertical com 35 cm de largura, em madeira com divisórias diagonais, inspirado em [garrafeira.webp](../../garrafeira.webp). É uma garrafeira aberta, sem refrigeração. O conjunto corrido conserva 1,51 m: garrafeira 35 cm + módulo técnico 65 cm + armário 51 cm. O termoacumulador muda de módulo dentro da mesma frente; confirmar tubagens e acesso de manutenção. A profundidade de 70 cm é comum a toda a frente.
4. **Frigorífico alinhado com a despensa.** Avança-se a face da despensa 11,5 cm para coincidir com o plano das portas do americano. Os puxadores têm o mesmo limite frontal no modelo. A frente total mantém 2,09 m. O frigorífico real e as folgas de instalação ainda dependem da seleção do aparelho.
5. **Prateleiras na face do pladur virada para a cozinha.** Três prateleiras de 120 × 15 cm, com bases a 1,35 / 1,70 / 2,05 m. A fixação deve ser definida com reforço interior do pladur. Não atravessam a entrada da lavandaria.
6. **Cinco estilos decorativos.** Natural contemporâneo, japandi, mediterrânico, clássico contemporâneo e urbano com nogueira. As cinco imagens usam a mesma perspetiva e conservam a disposição. O modelo permite trocar entre as cinco paletas; na opção clássica acrescenta molduras discretas às frentes.
7. **Modelo 3D interativo integrado na galeria**, seguindo a interação do escritório: rotação, aproximação, deslocação, seis vistas, cinco ambientes, mostrar/ocultar medidas e mostrar/ocultar suspensos. Também abre numa página própria, sem servidor e sem Internet.

## Estilos

| Opção | Materiais e cores |
|---|---|
| Natural contemporâneo | Verde sálvia, carvalho natural, pedra creme, tecidos claros. |
| Japandi | Areia, madeira clara, pedra marfim, decoração reduzida. |
| Mediterrânico | Terracota suave, carvalho lavado, cerâmica branca e pedra areia. |
| Clássico contemporâneo | Azul profundo, molduras discretas, carvalho, pedra clara e latão. |
| Urbano com nogueira | Grafite, nogueira, pedra cinzenta clara e metal escuro. |

## Folgas verificadas no modelo

| Entre elementos | Medida proposta |
|---|---:|
| Ilha e bancada de trabalho | 120 cm |
| Ilha e bancada das janelas | 105 cm |
| Ilha e puxadores do americano fechado | 90 cm |
| Ilha e parede de pladur | 98,5 cm |
| Ilha e bordo das prateleiras, à altura destas | 83,5 cm |
| Entrada aberta da lavandaria | 90 cm |
| Passagem interior da zona de roupa | 90 cm |

As prateleiras na parede reduzem a folga à altura do corpo; a distância no pavimento até ao pladur mantém-se. Os bancos ficam fora do comprimento dessas prateleiras, mas a passagem junto a pessoas sentadas depende da posição das cadeiras. Os valores da tabela consideram portas e gavetas fechadas. Abrir aparelhos ou móveis ocupa parte das passagens.

## Cotas de origem e hipóteses

Mantêm-se as cotas legíveis em `planta-nova.webp`: largura de 254 + 259,5 = 513,5 cm; frente direita 311 cm; frente esquerda 366 cm; frente diante da I.S. 209 cm; bases laterais 60 cm. A ilha da planta inicial media 120 × 180 cm; a ilha compacta proposta mede 90 × 140 cm.

Continuam estimadas a largura da varanda, os recuos inferiores, a posição da parede da I.S. e os vãos sem cotas. A posição da parede da I.S. determina a folga de 90 cm diante do americano. Os rótulos de área do desenho não foram usados para esticar a geometria. Alturas, profundidades e divisões dos móveis são propostas de representação; confirmar com levantamento e equipamentos. A remoção do pano assinalado em versões anteriores continua sujeita à identificação da função estrutural.

## Ficheiros

- [Galeria atualizada](index.html)
- [Modelo 3D interativo](v12/modelo-3d.html)
- [Planta cotada](v12/planta-cotada.svg)
- [Alçados da arrumação](v12/alcados-arrumacao.svg)
- [Dados em metros](v12/modelo.json)
- [V8 usada como referência para suspensos](atelier-varanda-v8-imersiva-entrada.webp)
- [Notas da V11](LEITURA-v11.md)

Imagens finais: `atelier-varanda-v12-estilo-{natural,japandi,mediterranico,classico,urbano}.png`, `atelier-varanda-v12-superior.webp` e `atelier-varanda-v12-inverso.webp`, todas na pasta desta galeria.

A planta e o modelo usam as mesmas coordenadas. Os renders de ambiente ilustram luz e acabamentos e podem variar em pormenores; não servem para medir. O 3D representa as paletas de forma simplificada e permite verificar a geometria. Mantêm-se as versões anteriores no histórico.

## Produção

Imagens criadas com a ferramenta integrada **image_gen**, em modos de edição, interpretação do modelo e variantes de materiais; sem CLI. [Prompts finais e correção da vista superior](v12/prompts.json).

Modelo em Three.js com OrbitControls, empacotado localmente; desenhos vetoriais SVG. Verificação das folgas, do alinhamento das frentes, dos módulos da garrafeira, dos limites das prateleiras da ilha e dos controlos da galeria e do modelo em Chromium.
