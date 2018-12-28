const squares = document.querySelectorAll(".square");
const modeButtons = document.querySelectorAll(".mode");
const selectedButton = document.querySelector(".selected");
const resetButton = document.querySelector("#reset");
const messageSpan = document.querySelector("#message");

const header = document.querySelector('#header');
const systemMessageDisplay = document.querySelector("#default-code");
const userMessageDisplay = document.querySelector("#user-code");

var numSquares = 6;                   // pocet generovanych barev
var pickedColor;                      // hrou vybraná barva
messageSpan.innerHTML = pickedColor;


for (let i = 0; i < squares.length; i++) {          //kazdemu ctverci dej handler 
  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;
    if (pickedColor == clickedColor) {
      changeColors(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      // messageDisplay.text = "Spatna volba!";
    }
  });
};

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    // messageDisplay.text = "Spravna volba!";
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function resetGame() {
  var colors = generateRandomColors(numSquares);
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  messageSpan.innerHTML = pickedColor;
}

window.addEventListener('load', resetGame);

resetButton.addEventListener('click', resetGame);

modeButtons[0].addEventListener('click', function(){
  numSquares = 3;
});

modeButtons[1].addEventListener('click', function(){
  numSquares = 6;
});
