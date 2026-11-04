// 試玩分頁：在編輯器內直接玩目前關卡
import { byId, validateProject } from '../model.js';
import { mountBattle } from '../battle-view.js';
import { h, numInput, select, toast } from './dom.js';

export default {
  id: 'play',
  title: '試玩',
  render(el, app, args) {
    const p = app.project;
    const ts = (app.tabState.play ||= { stageId: null, seed: null });
    if (args?.stageId) ts.stageId = args.stageId;
    if (!byId(p.stages, ts.stageId)) ts.stageId = p.stages[0]?.id || null;
    if (ts.seed === null) ts.seed = Number(p.settings.rngSeed) || 1;
    const host = h('div', { class: 'play-host', id: 'play-host' });
    const startBtn = h('button', { type: 'button', class: 'primary', id: 'play-start', onclick: () => start() }, '開始試玩');
    el.append(h('div', { class: 'play-bar row' },
      '關卡', select(p.stages.map((s) => [s.id, s.name]), ts.stageId || '', (v) => { ts.stageId = v; }, { id: 'play-stage' }),
      '亂數種子', numInput(ts.seed, (v) => { ts.seed = v; }, { min: 0, max: 2147483647, width: '8em' }),
      startBtn,
      h('span', { class: 'muted' }, '點我方角色 → 點藍格移動 → 點紅框敵人攻擊（再點一次確定）。「全軍委任」讓電腦代打。')),
      host);
    const self = this;
    function start() {
      self.destroy?.();
      const v = validateProject(p);
      if (!v.ok) return toast(`專案有錯誤，不能試玩：${v.errors[0]}`, 'error');
      const st = byId(v.project.stages, ts.stageId);
      if (!st) return toast('還沒有關卡', 'error');
      if (!byId(v.project.maps, st.map)) return toast(`關卡「${st.name}」還沒有選地圖`, 'error');
      try {
        const ctl = mountBattle(host, v.project, st.id, { seed: ts.seed, fast: app.fast, onExit: () => { ctl.destroy(); app.battle = null; self.destroy = null; } });
        app.battle = ctl; // 測試用
        self.destroy = () => { ctl.destroy(); app.battle = null; self.destroy = null; };
      } catch (e) {
        toast(`無法開始：${e.message}`, 'error');
      }
    }
    if (args?.autostart || app.isMobile) start();
    else host.append(h('div', { style: { padding: '20px' } }, '選好關卡後按「開始試玩」。'));
  },
};
