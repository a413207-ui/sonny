// 安全公式運算器：自寫 tokenizer + 遞迴下降 parser，編譯成閉包樹執行。
// 不使用任何「把字串當程式執行」的機制；只認得白名單裡的變數與函式。
import { FORMULA_MAX_LEN } from './config.js';

const MAX_DEPTH = 64;

// 變數白名單：攻方 / 守方能力（中文 + 英文別名）
const STAT_ALIAS = {
  武力: 'str', str: 'str',
  統帥: 'lead', lead: 'lead',
  智力: 'int', int: 'int',
  血量: 'hp', hp: 'hp',
  等級: 'lv', lv: 'lv',
};
const SIDES = { atk: true, def: true };
const GLOBALS = { matchup: true, terrainDef: true, terrainEva: true, skillPower: true, rand: true };

const FUNCS = {
  min: { min: 1, max: 99, fn: (a) => Math.min(...a) },
  max: { min: 1, max: 99, fn: (a) => Math.max(...a) },
  floor: { min: 1, max: 1, fn: (a) => Math.floor(a[0]) },
  ceil: { min: 1, max: 1, fn: (a) => Math.ceil(a[0]) },
  round: { min: 1, max: 1, fn: (a) => Math.round(a[0]) },
  abs: { min: 1, max: 1, fn: (a) => Math.abs(a[0]) },
  clamp: { min: 3, max: 3, fn: (a) => Math.min(Math.max(a[0], a[1]), a[2]) },
};
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

export const VARIABLE_HELP = [
  'atk.武力 atk.統帥 atk.智力 atk.血量 atk.等級（英文 atk.str / lead / int / hp / lv）',
  'def.武力 def.統帥 def.智力 def.血量 def.等級（同上）',
  'matchup（相剋倍率）、terrainDef（守方地形防禦 0~1）、terrainEva（守方地形閃避 0~1）、skillPower、rand（0~1 亂數）',
  '函式：min max floor ceil round abs clamp(x, 下限, 上限)；運算：+ - * / % ^ 括號、比較 > < >= <= == !=、三元 a > b ? x : y',
];

class FormulaError extends Error {
  constructor(msg, pos) {
    super(msg);
    this.pos = pos;
  }
}

const isDigit = (c) => c >= '0' && c <= '9';
const isIdentStart = (c) => /[\p{L}_]/u.test(c);
const isIdentPart = (c) => /[\p{L}\p{N}_]/u.test(c);

function tokenize(src) {
  const toks = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === ' ' || c === '\t' || c === '\n' || c === '\r') { i++; continue; }
    if (isDigit(c) || (c === '.' && isDigit(src[i + 1] || ''))) {
      let j = i;
      while (j < src.length && isDigit(src[j])) j++;
      if (src[j] === '.') { j++; while (j < src.length && isDigit(src[j])) j++; }
      if (isIdentPart(src[j] || '') || src[j] === '.') throw new FormulaError(`第 ${j + 1} 個字附近的數字格式不對`, j);
      toks.push({ t: 'num', v: Number(src.slice(i, j)), pos: i });
      i = j;
      continue;
    }
    if (isIdentStart(c)) {
      let j = i;
      const parts = [];
      for (;;) {
        const s = j;
        while (j < src.length && isIdentPart(src[j])) j++;
        parts.push(src.slice(s, j));
        if (src[j] === '.' && isIdentStart(src[j + 1] || '')) { j++; continue; }
        break;
      }
      toks.push({ t: 'id', v: parts, pos: i });
      i = j;
      continue;
    }
    const two = src.slice(i, i + 2);
    if (two === '>=' || two === '<=' || two === '==' || two === '!=') {
      toks.push({ t: 'op', v: two, pos: i });
      i += 2;
      continue;
    }
    if ('+-*/%^(),?:<>'.includes(c)) {
      toks.push({ t: 'op', v: c, pos: i });
      i++;
      continue;
    }
    throw new FormulaError(`第 ${i + 1} 個字「${c}」不能用在公式裡`, i);
  }
  toks.push({ t: 'end', pos: src.length });
  return toks;
}

function parse(src) {
  const toks = tokenize(src);
  let p = 0;
  let depth = 0;
  const peek = () => toks[p];
  const isOp = (v) => toks[p].t === 'op' && toks[p].v === v;
  const expect = (v) => {
    if (!isOp(v)) throw new FormulaError(`第 ${toks[p].pos + 1} 個字附近少了「${v}」`, toks[p].pos);
    p++;
  };
  const enter = () => {
    if (++depth > MAX_DEPTH) throw new FormulaError('公式巢狀太深', toks[p].pos);
  };

  function ternary() {
    enter();
    const cond = equality();
    let node = cond;
    if (isOp('?')) {
      p++;
      const a = ternary();
      expect(':');
      const b = ternary();
      node = { k: 'tern', c: cond, a, b };
    }
    depth--;
    return node;
  }
  function binLevel(next, ops) {
    return () => {
      let l = next();
      while (toks[p].t === 'op' && ops.includes(toks[p].v)) {
        const op = toks[p++].v;
        l = { k: 'bin', op, l, r: next() };
      }
      return l;
    };
  }
  function unary() {
    if (isOp('-') || isOp('+')) {
      const op = toks[p++].v;
      enter();
      const v = unary();
      depth--;
      return op === '-' ? { k: 'neg', v } : v;
    }
    return power();
  }
  function power() {
    const base = primary();
    if (isOp('^')) {
      p++;
      enter();
      const exp = unary(); // 右結合
      depth--;
      return { k: 'bin', op: '^', l: base, r: exp };
    }
    return base;
  }
  function primary() {
    const tk = peek();
    if (tk.t === 'num') { p++; return { k: 'num', v: tk.v }; }
    if (isOp('(')) {
      p++;
      const e = ternary();
      expect(')');
      return e;
    }
    if (tk.t === 'id') {
      p++;
      const name = tk.v.join('.');
      if (isOp('(')) {
        if (tk.v.length !== 1 || !has(FUNCS, name)) throw new FormulaError(`不認得的函式「${name}」`, tk.pos);
        p++;
        const args = [];
        if (!isOp(')')) {
          args.push(ternary());
          while (isOp(',')) { p++; args.push(ternary()); }
        }
        expect(')');
        const f = FUNCS[name];
        if (args.length < f.min || args.length > f.max) {
          const need = f.min === f.max ? `${f.min} 個` : `至少 ${f.min} 個`;
          throw new FormulaError(`函式 ${name} 需要 ${need}參數`, tk.pos);
        }
        return { k: 'call', f: f.fn, args };
      }
      return { k: 'var', ref: resolveVar(tk.v, tk.pos) };
    }
    if (tk.t === 'end') throw new FormulaError('公式不完整', tk.pos);
    throw new FormulaError(`第 ${tk.pos + 1} 個字「${tk.v}」放錯位置`, tk.pos);
  }
  const multiplicative = binLevel(unary, ['*', '/', '%']);
  const additive = binLevel(multiplicative, ['+', '-']);
  const relational = binLevel(additive, ['<', '>', '<=', '>=']);
  const equality = binLevel(relational, ['==', '!=']);

  if (toks[0].t === 'end') throw new FormulaError('公式是空的', 0);
  const ast = ternary();
  if (peek().t !== 'end') throw new FormulaError(`第 ${peek().pos + 1} 個字附近多了東西`, peek().pos);
  return ast;
}

function resolveVar(parts, pos) {
  const name = parts.join('.');
  if (parts.length === 1 && has(GLOBALS, parts[0])) return { g: parts[0] };
  if (parts.length === 2 && has(SIDES, parts[0]) && has(STAT_ALIAS, parts[1])) {
    return { side: parts[0], stat: STAT_ALIAS[parts[1]] };
  }
  throw new FormulaError(`不認得的變數「${name}」`, pos);
}

const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : 0);

function compileNode(n) {
  switch (n.k) {
    case 'num': { const v = n.v; return () => v; }
    case 'var': {
      const r = n.ref;
      if (r.g) return (ctx) => num(has(ctx, r.g) ? ctx[r.g] : 0);
      return (ctx) => {
        const s = has(ctx, r.side) ? ctx[r.side] : null;
        return s && has(s, r.stat) ? num(s[r.stat]) : 0;
      };
    }
    case 'neg': { const v = compileNode(n.v); return (c) => -v(c); }
    case 'tern': {
      const c = compileNode(n.c), a = compileNode(n.a), b = compileNode(n.b);
      return (x) => (c(x) !== 0 ? a(x) : b(x));
    }
    case 'call': {
      const args = n.args.map(compileNode), f = n.f;
      return (c) => f(args.map((a) => a(c)));
    }
    case 'bin': {
      const l = compileNode(n.l), r = compileNode(n.r);
      switch (n.op) {
        case '+': return (c) => l(c) + r(c);
        case '-': return (c) => l(c) - r(c);
        case '*': return (c) => l(c) * r(c);
        case '/': return (c) => { const d = r(c); return d === 0 ? 0 : l(c) / d; };
        case '%': return (c) => { const d = r(c); return d === 0 ? 0 : l(c) % d; };
        case '^': return (c) => Math.pow(l(c), r(c));
        case '<': return (c) => (l(c) < r(c) ? 1 : 0);
        case '>': return (c) => (l(c) > r(c) ? 1 : 0);
        case '<=': return (c) => (l(c) <= r(c) ? 1 : 0);
        case '>=': return (c) => (l(c) >= r(c) ? 1 : 0);
        case '==': return (c) => (l(c) === r(c) ? 1 : 0);
        case '!=': return (c) => (l(c) !== r(c) ? 1 : 0);
      }
    }
  }
  throw new Error('internal');
}

// 編譯公式。成功：{ ok: true, run(ctx) }；失敗：{ ok: false, error, pos }
export function compileFormula(src) {
  if (typeof src !== 'string') return { ok: false, error: '公式必須是文字', pos: 0 };
  if (src.length > FORMULA_MAX_LEN) return { ok: false, error: `公式太長（上限 ${FORMULA_MAX_LEN} 字，目前 ${src.length} 字）`, pos: FORMULA_MAX_LEN };
  try {
    const fn = compileNode(parse(src));
    return {
      ok: true,
      run(ctx = {}) {
        const v = fn(ctx && typeof ctx === 'object' ? ctx : {});
        return Number.isFinite(v) ? v : 1; // 非有限數字 fallback 為 1
      },
    };
  } catch (e) {
    if (e instanceof FormulaError) return { ok: false, error: e.message, pos: e.pos };
    if (e instanceof RangeError) return { ok: false, error: '公式太複雜', pos: 0 };
    throw e;
  }
}

// 檢查公式，回傳錯誤訊息（中文）或 null
export function checkFormula(src) {
  const r = compileFormula(src);
  return r.ok ? null : r.error;
}

const cache = new Map();
// 計算公式；公式錯誤時回傳 fallback
export function evalFormula(src, ctx, fallback = 1) {
  let c = cache.get(src);
  if (!c) {
    c = compileFormula(src);
    if (cache.size > 200) cache.clear();
    cache.set(src, c);
  }
  return c.ok ? c.run(ctx) : fallback;
}
