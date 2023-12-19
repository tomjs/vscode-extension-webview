import fs from 'node:fs';
import path from 'node:path';
import chokidar from 'chokidar';

const SRC = path.resolve(__dirname, '../src/template.html');
const DEST = path.resolve(__dirname, '../src/template.ts');

function minifyHtml() {
  if (!fs.existsSync(SRC)) {
    throw new Error(`${SRC} is not found`);
  }

  const html = fs.readFileSync(SRC, 'utf8');

  fs.writeFileSync(DEST, `export default \`${html}\`;\n`, { encoding: 'utf8' });

  console.log('minified template.html successfully!');
}

if (process.env.WATCH) {
  chokidar.watch(SRC).on('change', () => {
    minifyHtml();
  });
}

minifyHtml();
