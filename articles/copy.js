// Copy-prompt button. Same behaviour as the asset pages (/buckets/, /skills101/).
function copyPrompt(preId, btnId) {
  var text = document.getElementById(preId).innerText;
  var btn = document.getElementById(btnId);
  function done() {
    if (btn.classList.contains('done')) { return; }
    var original = btn.textContent;
    btn.textContent = 'Copied';
    btn.classList.add('done');
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('done');
    }, 1800);
  }
  function fallback() {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(fallback);
  } else {
    fallback();
  }
}
