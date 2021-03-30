const detection = document.querySelector("body");
const result = document.querySelector("#result");
let target;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function generateRandom() {
  target = getRandomInt(10);
  target = target.toString();
  return target;
}

target = generateRandom();

detection.addEventListener("keydown", (key) => {
  console.log(key.key);
  result.textContent = "Let's see if you got it...";
  setTimeout(function () {
    if (key.key.toString() === target) {
      correctInput();
    } else {
      incorrect();
    }
  }, 1000);
});

function correctInput() {
  result.textContent = "You got it";
}

function incorrect() {
  result.textContent = "Try again";
}
