// 相剋表分頁：兵種 × 兵種 等級表、等級倍率、傷害 / 命中率公式欄（安全運算器）、試算
import { GRADES, DEFAULT_GRADE_MULT, DEFAULT_DAMAGE_FORMULA, DEFAULT_HIT_FORMULA, FORMULA_MAX_LEN } from '../config.js';
import { compileFormula, VARIABLE_HELP } from '../formula.js';
import { byId, gradeOf, gradeMult } from '../model.js';
import { h, numInput, select } from './dom.js';

export default {
  id: 'matchups',
  title: '相剋表',
  render(el, app) {
    const p = app.project;
    const s = p.settings;
    el.append(h('h2', {}, '兵種相剋表與公式'));

    // ---- 相剋表 ----
    const uts = p.unitTypes;
    const cell = (a, d) => {
      const g = p.matchups[a.id]?.[d.id] || '';
      const sel = select([['', '（B）'], ...GRADES.map((x) => [x, x])], g, (v) => {
        if (v) (p.matchups[a.id] ||= {})[d.id] = v;
        else if (p.matchups[a.id]) { delete p.matchups[a.id][d.id]; if (!Object.keys(p.matchups[a.id]).length) delete p.matchups[a.id]; }
        sel.parentElement.className = `grade-${v || 'B'}`;
        app.change();
        updateTrial();
      }, { dataset: { atk: a.id, def: d.id } });
      return h('td', { class: `grade-${g || 'B'}` }, sel);
    };
    el.append(h('div', { class: 'card', style: { overflow: 'auto' } },
      h('h3', {}, '相剋表（列 = 攻方，欄 = 守方）'),
      uts.length ? h('table', { class: 'grid matchup', id: 'matchup-table' },
        h('tr', {}, h('th', {}, '攻＼守'), uts.map((d) => h('th', {}, d.name))),
        uts.map((a) => h('tr', {}, h('th', { class: 'left' }, a.name), uts.map((d) => cell(a, d)))),
      ) : h('div', { class: 'muted' }, '先到「兵種」分頁新增兵種。'),
      h('div', { class: 'muted' }, '空白視為 B（等倍）。'),
    ));

    // ---- 等級倍率 ----
    el.append(h('div', { class: 'card' },
      h('h3', {}, '等級倍率 ', h('span', { class: 'note' }, '預設值，可修改')),
      h('div', { class: 'row' }, GRADES.map((g) => h('span', { class: `grade-${g}`, style: { padding: '2px 6px', borderRadius: '4px' } }, `${g} ×`,
        numInput(s.gradeMultipliers[g], (v) => { s.gradeMultipliers[g] = v; app.change(); updateTrial(); }, { min: 0, max: 100, step: 0.1, width: '4.5em' }))),
      h('button', { type: 'button', onclick: () => { s.gradeMultipliers = { ...DEFAULT_GRADE_MULT }; app.change(); app.rerender(); } }, '恢復預設')),
      h('div', { class: 'muted' }, `預設：${GRADES.map((g) => `${g}=${DEFAULT_GRADE_MULT[g]}`).join('、')}。公式裡用 matchup 取得這個倍率。`),
    ));

    // ---- 公式欄 ----
    const formulaBox = (key, title, def, hint) => {
      const err = h('div', { class: 'formula-err', id: `${key}-err` });
      const counter = h('span', { class: 'muted' });
      const ta = h('textarea', { rows: 2, id: `${key}-input`, maxlength: FORMULA_MAX_LEN + 50, spellcheck: 'false' }, s[key]);
      const check = () => {
        const v = ta.value;
        counter.textContent = `${v.length} / ${FORMULA_MAX_LEN} 字`;
        const r = compileFormula(v);
        if (r.ok) {
          err.className = 'formula-err ok-text';
          err.textContent = v === s[key] ? '✓ 公式正確，已儲存' : '✓ 公式正確';
          if (v !== s[key]) { s[key] = v; app.change(); err.textContent = '✓ 公式正確，已儲存'; }
          ta.style.borderColor = '';
        } else {
          err.className = 'formula-err error-text';
          err.textContent = `✗ ${r.error}（這個公式不會被儲存，仍使用上一個正確的公式）`;
          ta.style.borderColor = '#b02a2a';
        }
        updateTrial();
      };
      ta.addEventListener('input', check);
      const box = h('div', { class: 'card' },
        h('h3', {}, title, ' ', h('span', { class: 'note' }, '預設佔位公式，請 Sonny 自行修改')),
        ta, h('div', { class: 'row' }, err, h('span', { class: 'spacer' }), counter,
          h('button', { type: 'button', onclick: () => { ta.value = def; check(); } }, '恢復預設')),
        h('div', { class: 'muted' }, hint));
      queueMicrotask(check);
      return box;
    };
    el.append(
      formulaBox('damageFormula', '傷害公式', DEFAULT_DAMAGE_FORMULA, `預設：${DEFAULT_DAMAGE_FORMULA}。結果取整數、最低 0。`),
      formulaBox('hitFormula', '命中率公式（0～100 的百分比）', DEFAULT_HIT_FORMULA, `預設：${DEFAULT_HIT_FORMULA}。結果會限制在 0～100；沒命中就顯示「閃避！」。`),
      h('div', { class: 'card' }, h('h3', {}, '可以用的變數與函式'), h('ul', {}, VARIABLE_HELP.map((t) => h('li', {}, t))),
        h('div', { class: 'muted' }, `除以 0 結果為 0；結果不是正常數字時當作 1；公式最長 ${FORMULA_MAX_LEN} 字。只認得上面列出的名字，其他一律報錯。`)),
    );

    // ---- 試算 ----
    const ts = (app.tabState.matchups ||= { atk: null, def: null, terrain: null });
    const chars = p.characters;
    if (!byId(chars, ts.atk)) ts.atk = chars.find((c) => c.faction === 'ally')?.id || chars[0]?.id || null;
    if (!byId(chars, ts.def)) ts.def = chars.find((c) => c.faction === 'enemy')?.id || chars[1]?.id || null;
    if (!byId(p.terrains, ts.terrain)) ts.terrain = p.terrains[0]?.id || null;
    const out = h('div', { id: 'trial-result' });
    const charOpts = chars.map((c) => [c.id, `${c.name}（${byId(p.unitTypes, c.unitType)?.name || '無兵種'}）`]);
    el.append(h('div', { class: 'card' },
      h('h3', {}, '試算'),
      chars.length ? h('div', { class: 'row' },
        '攻方', select(charOpts, ts.atk, (v) => { ts.atk = v; updateTrial(); }, { id: 'trial-atk' }),
        '守方', select(charOpts, ts.def, (v) => { ts.def = v; updateTrial(); }, { id: 'trial-def' }),
        '守方地形', select(p.terrains.map((t) => [t.id, t.name]), ts.terrain, (v) => { ts.terrain = v; updateTrial(); }, { id: 'trial-terrain' })) : h('div', { class: 'muted' }, '先建立角色才能試算。'),
      out));
    function updateTrial() {
      const a = byId(chars, ts.atk), d = byId(chars, ts.def), t = byId(p.terrains, ts.terrain);
      if (!a || !d || !t) { out.textContent = ''; return; }
      const grade = gradeOf(p, a.unitType, d.unitType);
      const mult = gradeMult(p, grade);
      const stat = (c) => ({ str: c.stats['武力'], lead: c.stats['統帥'], int: c.stats['智力'], hp: c.stats['血量'], lv: c.level });
      const ctx = (rand) => ({ atk: stat(a), def: stat(d), matchup: mult, terrainDef: t.defBonus, terrainEva: t.evaBonus, skillPower: 0, rand });
      const dmgF = compileFormula(s.damageFormula), hitF = compileFormula(s.hitFormula);
      const dmg = (r) => Math.max(0, Math.round(dmgF.run(ctx(r))));
      const lo = dmg(0), mid = dmg(0.5), hi = dmg(1);
      const hit = Math.min(100, Math.max(0, hitF.run(ctx(0.5))));
      out.innerHTML = '';
      out.append(
        h('div', {}, `相剋：${byId(p.unitTypes, a.unitType)?.name || '無'} → ${byId(p.unitTypes, d.unitType)?.name || '無'} = `, h('b', {}, `${grade}（×${mult}）`),
          `　守方地形：${t.name}（terrainDef ${t.defBonus}、terrainEva ${t.evaBonus}）`),
        h('div', { style: { fontSize: '18px' } }, '傷害 ', h('b', { id: 'trial-damage' }, String(mid)), lo !== hi ? h('span', { class: 'muted' }, `（rand 0～1：${lo}～${hi}）`) : '',
          '　命中率 ', h('b', { id: 'trial-hit' }, `${Math.round(hit)}%`),
          `　${d.name} 血量 ${d.stats['血量']} → ${Math.max(0, d.stats['血量'] - mid)}`),
      );
    }
    updateTrial();
  },
};
