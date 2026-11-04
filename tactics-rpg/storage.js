// localStorage 存檔：每個專案一個 key（tacticsRpg.projects.<id>），另有索引與「目前專案」。
import { STORAGE_PREFIX } from './config.js';

const KEY_INDEX = `${STORAGE_PREFIX}index`;
const KEY_CURRENT = `${STORAGE_PREFIX}current`;
const projectKey = (id) => `${STORAGE_PREFIX}projects.${id}`;

function safeGet(k) {
  try { return localStorage.getItem(k); } catch { return null; }
}

export function listProjects() {
  try {
    const v = JSON.parse(safeGet(KEY_INDEX) || '[]');
    return Array.isArray(v) ? v.filter((x) => x && typeof x.id === 'string') : [];
  } catch { return []; }
}

export function loadProjectRaw(id) {
  const s = safeGet(projectKey(id));
  if (!s) return null;
  try { return JSON.parse(s); } catch { return null; }
}

export const currentProjectId = () => safeGet(KEY_CURRENT);

const isQuota = (e) => e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014 || /quota/i.test(e.message || ''));

// 儲存；回傳 { ok, quota?, error?, bytes }
export function saveProject(project) {
  const text = JSON.stringify(project);
  try {
    localStorage.setItem(projectKey(project.meta.id), text);
    const idx = listProjects().filter((x) => x.id !== project.meta.id);
    idx.unshift({ id: project.meta.id, name: project.meta.name, updated: project.meta.updated });
    localStorage.setItem(KEY_INDEX, JSON.stringify(idx));
    localStorage.setItem(KEY_CURRENT, project.meta.id);
    return { ok: true, bytes: text.length * 2 };
  } catch (e) {
    return { ok: false, quota: isQuota(e), error: String(e?.message || e), bytes: text.length * 2 };
  }
}

export function setCurrent(id) {
  try { localStorage.setItem(KEY_CURRENT, id); } catch { /* 忽略 */ }
}

// 估計 localStorage 已用量（UTF-16，每字 2 bytes）
export function storageUsage() {
  let n = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      n += (k.length + (localStorage.getItem(k) || '').length) * 2;
    }
  } catch { /* 忽略 */ }
  return n;
}
