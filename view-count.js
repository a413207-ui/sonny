/* 公開瀏覽次數：頁面載入後才向 GoatCounter 讀取。失敗就隱藏，不影響遊戲。 */
(function () {
  var ENDPOINT = 'https://sonnystudio.goatcounter.com/counter/';

  // 儀表板記錄的是 /sonny、/sonny/fishing（沒有結尾斜線）。計數網址兩種都對得到同一筆。
  function canonicalPath(pathname) {
    var p = pathname || '/';
    if (p.length > 1 && p.charAt(p.length - 1) === '/') p = p.slice(0, -1);
    return p || '/';
  }

  function formatCount(n) {
    try { return n.toLocaleString('zh-Hant'); }
    catch (e) { return String(n); }
  }

  function parseCount(value) {
    if (typeof value === 'number' && isFinite(value)) return Math.trunc(value);
    if (typeof value !== 'string') return null;
    var s = value.replace(/[,\s]/g, '');
    if (!/^\d+$/.test(s)) return null;
    return parseInt(s, 10);
  }

  function label(kind, n) {
    var text = formatCount(n);
    return kind === 'total' ? ('全站瀏覽 · ' + text + ' 次') : ('瀏覽 ' + text + ' 次');
  }

  function targetFor(el) {
    var kind = el.getAttribute('data-gc');
    if (kind === 'total') return 'TOTAL';
    if (kind === 'page') return canonicalPath(location.pathname);
    if (kind === 'href') {
      var href = el.getAttribute('data-gc-href');
      if (!href) return null;
      return canonicalPath(new URL(href, location.href).pathname);
    }
    return null;
  }

  function fill(el, kind, n) {
    el.textContent = label(kind, n);
    el.hidden = false;
  }

  function loadOne(el) {
    var kind = el.getAttribute('data-gc');
    var path;
    try { path = targetFor(el); }
    catch (e) { return; }
    if (!path) return;
    fetch(ENDPOINT + encodeURIComponent(path) + '.json', { credentials: 'omit' }).then(function (res) {
      if (res.status === 404) { fill(el, kind, 0); return; }
      if (!res.ok) return;
      return res.json().then(function (data) {
        var n = parseCount(data && data.count);
        if (n === null) return;
        fill(el, kind, n);
      });
    }).catch(function () {});
  }

  function start() {
    var nodes = document.querySelectorAll('[data-gc]');
    for (var i = 0; i < nodes.length; i++) loadOne(nodes[i]);
  }

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
