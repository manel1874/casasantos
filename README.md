# Casa Santos

Site estático que reúne os projetos da cozinha, sala e escritório, com galerias, plantas e modelos 3D existentes.

- Navegação comum em todas as divisões.
- Barra inferior com as três divisões e início em telemóvel.
- Imagens WebP e capas adaptadas ao tamanho do ecrã.
- Sem dependências de execução, analítica ou fontes externas.
- Repositório público e site publicado em https://manel1874.github.io/casasantos/.

## Pré-visualizar

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8765/`.

## Publicar

`node scripts/build.mjs` prepara `dist/`, incluindo apenas o conteúdo do site. O workflow GitHub Pages publica esta pasta após cada push para `main`. A opção de publicação no GitHub deve ser **GitHub Actions**.

## Atualizar os materiais

Os originais permanecem nas pastas do projeto de interiores, fora deste repositório. Para importar versões atualizadas, usar Python com Pillow:

```sh
python3 scripts/import-materials.py /caminho/para/casa
```

Para atualizar apenas uma divisão, acrescentar `--room sala`, `--room cozinha` ou `--room escritorio`.

O importador preserva a resolução dos desenhos, converte fotografias e imagens de ambiente para WebP e acrescenta a navegação comum às galerias. O importador não deve ser executado sobre a própria pasta deste repositório.

## Verificação

`scripts/verify.cjs` usa Playwright com um servidor local ativo. Verifica navegação em 320, 390, 768 e 1440 px, as vistas das três divisões, o histórico da cozinha e os três modelos 3D. Capturas e resultados temporários são ignorados pelo Git.

As imagens são estudos conceptuais. As cotas e condições de obra devem ser confirmadas no local.
