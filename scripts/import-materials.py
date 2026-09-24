"""Import the existing room studies without changing the original project files.

Usage: python scripts/import-materials.py /path/to/casa
Requires Pillow. Runtime: plain static HTML; no Python is needed for hosting.
"""
from pathlib import Path
import os
import re
import shutil
import sys
from PIL import Image, ImageOps

SOURCE = Path(sys.argv[1]).resolve()
DEST = Path(__file__).resolve().parent.parent
ROOMS = {
    'cozinha': ('Cozinha', 'output/atelier-varanda-3d/index.html'),
    'sala': ('Sala', 'output/opcao-05-cozy-sofa-l-v4/index.html'),
    'escritorio': ('Escritório', 'output/proposta-v1/index.html'),
}
ALLOWED = {'.html', '.css', '.js', '.json', '.md', '.txt', '.svg', '.pdf', '.glb', '.png', '.jpeg', '.jpg'}
FILES = [p for room in ROOMS for p in (SOURCE / room).rglob('*')
         if p.is_file() and p.suffix.lower() in ALLOWED
         and not {'tmp', 'node_modules', '__pycache__', '.git', 'anteriores'}.intersection(p.parts)
         and p.name not in {'ABRIR-GALERIA.md', 'modelo-3d-fonte.js'}]
IMAGE_NAMES = {p.name: p.with_suffix('.webp').name for p in FILES if p.suffix.lower() in {'.png', '.jpg', '.jpeg'}}
ICONS = {
 'inicio': '<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
 'cozinha': '<path d="M5 3v7m3-7v7M3 6h7m-4 4v11M18 3v18m0-18c-5 4-5 10 0 10"/>',
 'sala': '<path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 11h4v5h10v-5h4v9H3Zm2 9v2m14-2v2"/>',
 'escritorio': '<path d="M3 12h18M5 12v9m14-9v9M8 3h8v6H8Zm4 6v3"/>',
}

def icon(name):
    return f'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">{ICONS[name]}</svg>'

def navigation(root, active):
    links = [('inicio', 'Início', 'index.html')] + [(k, v[0], f'{k}/{v[1]}') for k, v in ROOMS.items()]
    def items():
        return ''.join(f'<a href="{root}{path}"' + (' aria-current="page"' if key == active else '') + f'>{icon(key)}<span>{label}</span></a>' for key, label, path in links)
    return (f'<a class="casa-skip" href="#conteudo">Saltar para o conteúdo</a>'
            f'<header class="casa-header"><a class="casa-brand" href="{root}index.html" aria-label="Casa Santos — início"><span class="casa-monogram">cs.</span><span>Casa Santos</span></a>'
            f'<nav class="casa-nav" aria-label="Divisões da casa">{items()}</nav><span class="casa-header-note">O projeto da nossa casa</span></header>'
            f'<nav class="casa-mobile-nav" aria-label="Navegação principal">{items()}</nav>')

original_bytes = sum(p.stat().st_size for p in FILES)
for p in FILES:
    relative = p.relative_to(SOURCE)
    out = DEST / relative
    out.parent.mkdir(parents=True, exist_ok=True)
    if p.name in IMAGE_NAMES:
        out = out.with_suffix('.webp')
        with Image.open(p) as image:
            image = ImageOps.exif_transpose(image)
            if image.mode not in ('RGB', 'RGBA'):
                image = image.convert('RGB')
            image.save(out, 'WEBP', quality=86, method=6)
    elif p.suffix in {'.html', '.css', '.json', '.md', '.txt', '.svg', '.js'}:
        s = p.read_text()
        for before, after in IMAGE_NAMES.items():
            s = s.replace(before, after)
        # The living-room gallery builds its six view names dynamically.
        if relative.as_posix() == 'sala/output/opcao-05-cozy-sofa-l-v4/index.html':
            s = s.replace("currentView+'-'+scene+'.png'", "currentView+'-'+scene+'.webp'")
        s = s.replace(str(SOURCE), 'Casa Santos')
        s = re.sub(r'/Users/[^\s"<>]+/([^/\s"<>]+)', r'\1', s)
        if p.suffix == '.html' and 'modelo-3d' not in p.name and 'http-equiv="refresh"' not in s:
            root = '../' * (len(relative.parts) - 1)
            active = relative.parts[0]
            s = s.replace('</head>', f'<link rel="icon" href="{root}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="{root}assets/site.css"><meta name="theme-color" content="#2b392f"></head>')
            s = s.replace('<body>', '<body class="room-page">' + navigation(root, active), 1)
            s = s.replace('<main>', '<main id="conteudo">', 1)
            s = s.replace('Galeria e modelo disponíveis sem servidor ou Internet. Mantém as subpastas juntas ao transportar o projeto.', 'Explora as imagens, consulta as medidas ou abre o modelo 3D.')
            s = re.sub(r'<p>Pasta atual:</p><code class="path">.*?</code>', '', s)
            s = re.sub(r'<div class="top-links">.*?</div>', '', s)
            s = re.sub(r'<div><a href="[^"]*sala/output/.*?</div>', '', s)
        out.write_text(s)
    else:
        shutil.copy2(p, out)

for room, (name, path) in ROOMS.items():
    (DEST / room / 'index.html').write_text(f'<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url={path}"><title>{name} · Casa Santos</title></head><body><p><a href="{path}">Abrir {name}</a></p></body></html>')

# Homepage uses small dedicated covers; technical drawings keep their full resolution.
for room, source in {
    'cozinha': 'cozinha/output/atelier-varanda-3d/atelier-varanda-v12-estilo-natural.png',
    'sala': 'sala/output/opcao-05-cozy-sofa-l-v4/sala-atual-interior-quadro.png',
    'escritorio': 'escritorio/output/proposta-v1/ambiente-interior.png',
}.items():
    with Image.open(SOURCE / source) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        for width in (480, 960):
            cover = ImageOps.fit(image, (width, round(width * 1.12)), centering=(0.5, 0.5))
            cover.save(DEST / 'assets' / f'{room}-{width}.webp', quality=85, method=6)

print(f'Imported {len(FILES)} project files ({original_bytes / 1048576:.1f} MB before image optimization).')
