import ClipboardJS from 'clipboard';
import 'hint.css/hint.css';

function clearTooltip(e) {
    e.currentTarget.setAttribute('class', 'code-example');
    e.currentTarget.removeAttribute('aria-label');
}
function showTooltip(e, msg) {
    e.setAttribute('class', 'code-example hint--left');
    e.setAttribute('aria-label', msg);
}
function addCopyTooltip(e) {
    e.currentTarget.setAttribute('class', 'code-example hint--left');
    e.currentTarget.setAttribute('aria-label', "Click to Copy");
}
function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    } else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    } else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }
    return actionMsg;
}

var snippets = document.querySelectorAll(".code-example");
snippets.forEach((snippet) => {
    snippet.setAttribute("data-clipboard-snippet", "");
    snippet.addEventListener('mouseleave', clearTooltip);
    snippet.addEventListener('blur', clearTooltip);
    snippet.addEventListener('mouseover', addCopyTooltip);
});
var clipboardSnippets = new ClipboardJS("[data-clipboard-snippet]", {
  target: function (trigger) {
    return trigger;
  },
});
clipboardSnippets.on("success", function (e) {
  e.clearSelection();
  showTooltip(e.trigger, "Copied!");
});
clipboardSnippets.on("error", function (e) {
  showTooltip(e.trigger, fallbackMessage(e.action));
});