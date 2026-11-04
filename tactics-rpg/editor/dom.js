// 小型 DOM 工具
export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else if (k === 'value') el.value = v;
    else if (k === 'checked') el.checked = !!v;
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

export function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = h('a', { href: url, download: filename, style: { display: 'none' } });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
export const downloadText = (filename, text, type = 'application/json') => downloadBlob(filename, new Blob([text], { type: `${type};charset=utf-8` }));

export const safeFileName = (s) => String(s || 'project').replace(/[\\/:*?"<>|\s]+/g, '_').slice(0, 60) || 'project';

let toastTimer = 0;
export function toast(msg, kind = 'info') {
  let el = document.getElementById('toast');
  if (!el) { el = h('div', { id: 'toast' }); document.body.append(el); }
  el.textContent = msg;
  el.className = `show ${kind}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.className = ''; }, kind === 'error' ? 6000 : 2500);
}

// 數字輸入
export function numInput(value, onChange, { min, max, step = 1, width = '5em' } = {}) {
  return h('input', {
    type: 'number', value, min, max, step, style: { width },
    onchange: (e) => {
      let v = Number(e.target.value);
      if (!Number.isFinite(v)) v = Number(value) || 0;
      if (min !== undefined) v = Math.max(min, v);
      if (max !== undefined) v = Math.min(max, v);
      e.target.value = v;
      onChange(v);
    },
  });
}

export function select(options, value, onChange, attrs = {}) {
  return h('select', { ...attrs, onchange: (e) => onChange(e.target.value) },
    options.map(([v, label]) => h('option', { value: v, selected: v === value ? true : null }, label)));
}

export function confirmDelete(what, refs) {
  const msg = refs.length
    ? `「${what}」正在被使用：\n- ${refs.slice(0, 12).join('\n- ')}${refs.length > 12 ? `\n…等 ${refs.length} 處` : ''}\n\n仍要刪除嗎？引用處會變成空白。`
    : `確定要刪除「${what}」嗎？`;
  return window.confirm(msg);
}
