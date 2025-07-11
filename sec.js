document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
}, false);

document.addEventListener("selectstart", function(e) {
  e.preventDefault();
}, false);

document.addEventListener("dragstart", function(e) {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);

document.addEventListener("keydown", function(e) {
  if (e.keyCode === 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && ['u', 's', 'c'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
  }
}, false);

(function() {
  let devtools = { open: false };
  const threshold = 160;
  setInterval(function() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if ((widthThreshold || heightThreshold) && !devtools.open) {
      devtools.open = true;
      alert("🚫 Herramientas del navegador detectadas. Esta acción está deshabilitada.");
    }
  }, 1000);
})();
