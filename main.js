w = words["6"];
n = w.length;
spinwords = [];
cells = [];


document.addEventListener("DOMContentLoaded", function(){
  debug = document.getElementById("debug");
  init();
});

function init() {
  for (let i = 1; i < 6; i++){
    spinwords.unshift(newword());
  }
  debug.value = spinwords.join();
  for (let i = 0; i < 5; i++){
    cells[i] = [];
    for (let x = 0; x < 6; x++){
      id = "cell" + i + "-" + x;
      console.log(id)
      cells[i][x] = document.getElementById(id);
    }
  }
  setInterval(scrollwords, 500);
}

function scrollwords() {
  spinwords.unshift(newword());
  spinwords.pop();
  for (let i = 0; i < 5; i++){
    for (let x = 0; x < 6; x++){
      cells[i][x].innerHTML = spinwords[i][x];
    }
  }
}

function newword() {
  return w[Math.floor(Math.random() * n)].toUpperCase();
}