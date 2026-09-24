import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output);
for (const entry of ['index.html', '404.html', '.nojekyll', 'assets', 'cozinha', 'sala', 'escritorio']) {
  await stat(path.join(root, entry));
  await cp(path.join(root, entry), path.join(output, entry), { recursive: true });
}
console.log('Site pronto em dist/.');
