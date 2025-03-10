var textpath1 = document.querySelector('#text_path_1');
var textpath2 = document.querySelector('#text_path_2');
var textpath3 = document.querySelector('#text_path_3');

function updateTextPathOffset1(offset1) {
  textpath1.setAttribute('startOffset', 200 + offset1);
}
function updateTextPathOffset2(offset2) {
  textpath2.setAttribute('startOffset', 240 + offset2);
}
function updateTextPathOffset3(offset3) {
  textpath3.setAttribute('startOffset', 240 + offset3);
}

function onScroll() {
  requestAnimationFrame(function() {
    updateTextPathOffset1(window.scrollY * 0.9);
    updateTextPathOffset2(window.scrollY * 0.83);
    updateTextPathOffset3(window.scrollY * 0.85);
  });
}

window.addEventListener('scroll', onScroll);
