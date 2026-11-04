// 匯出成單一 HTML 遊戲檔：把遊戲執行模組、CSS、專案資料全部內嵌，不引用任何外部檔或網址。
// 沒有 build step：在瀏覽器裡讀取同資料夾的原始碼，把每個 ES module 包成函式後串起來。
// 規則：執行用模組只能用 `import { a, b } from './x.js'`、`import * as X from './x.js'`
// 和 `export function / const / let / class`，否則匯出時會報錯。

export const RUNTIME_MODULES = ['config.js', 'formula.js', 'pixels.js', 'anim.js', 'model.js', 'render.js', 'battle.js', 'battle-view.js', 'game-main.js'];

export function bundleModules(sources) {
  let out = "'use strict';\nconst __mods = Object.create(null);\n";
  for (const name of RUNTIME_MODULES) {
    let src = sources[name];
    if (typeof src !== 'string') throw new Error(`缺少模組 ${name}`);
    const need = (dep) => {
      if (!RUNTIME_MODULES.includes(dep) || RUNTIME_MODULES.indexOf(dep) >= RUNTIME_MODULES.indexOf(name)) throw new Error(`${name} 引用了不在執行清單裡（或順序不對）的 ${dep}`);
      return `__mods[${JSON.stringify(dep)}]`;
    };
    src = src.replace(/import\s*\{([^}]*)\}\s*from\s*'\.\/([\w-]+\.js)';?/g, (_, names, dep) => {
      const list = names.split(',').map((s) => s.trim()).filter(Boolean).map((s) => s.replace(/^(\w+)\s+as\s+(\w+)$/, '$1: $2'));
      return `const { ${list.join(', ')} } = ${need(dep)};`;
    });
    src = src.replace(/import\s*\*\s*as\s+(\w+)\s+from\s*'\.\/([\w-]+\.js)';?/g, (_, alias, dep) => `const ${alias} = ${need(dep)};`);
    const exported = [];
    src = src.replace(/^export\s+((?:async\s+)?function\*?|const|let|class)\s+([\w$]+)/gm, (_, kw, id) => {
      exported.push(id);
      return `${kw} ${id}`;
    });
    if (/^\s*(import|export)\b/m.test(src)) throw new Error(`${name} 有匯出器看不懂的 import / export 寫法`);
    out += `__mods[${JSON.stringify(name)}] = (() => {\n${src}\nreturn { ${exported.join(', ')} };\n})();\n`;
  }
  out += "__mods['game-main.js'].bootGame();\n";
  return out.replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--');
}

const escHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function buildGameHtml(project, sources, css) {
  const json = JSON.stringify(project).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
  const title = escHtml(project.meta?.name || '戰棋遊戲');
  return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; base-uri 'none'; form-action 'none'">
<meta name="generator" content="tactics-rpg editor">
<title>${title}</title>
<style>
html, body { margin: 0; height: 100%; background: #1b1d26; }
#game { height: 100vh; height: 100dvh; }
.boot-error { padding: 24px; color: #fbb; font: 16px system-ui, sans-serif; }
${css.replace(/<\/(style)/gi, '<\\/$1')}
</style>
</head>
<body>
<div id="game"></div>
<script type="application/json" id="project-data">${json}</script>
<script>
${bundleModules(sources)}
</script>
</body>
</html>
`;
}

// 在瀏覽器裡讀取同資料夾的原始碼（同源，不連外）
export async function loadRuntimeSources() {
  const sources = {};
  await Promise.all(RUNTIME_MODULES.map(async (name) => {
    const r = await fetch(new URL(`./${name}`, import.meta.url));
    if (!r.ok) throw new Error(`讀取 ${name} 失敗`);
    sources[name] = await r.text();
  }));
  const r = await fetch(new URL('./game.css', import.meta.url));
  if (!r.ok) throw new Error('讀取 game.css 失敗');
  return { sources, css: await r.text() };
}
