import { Snake } from "./snake";
import { Food } from "./food";
import { AudioManager } from "./audio";
import { UI } from "./ui";

const snake = new Snake();
const food = new Food();
const audio = new AudioManager();
const ui = new UI();

let score = 0;
let lastPaintTime = 0;

function main(ctime: number) {
  window.requestAnimationFrame(main);

  if ((ctime - lastPaintTime) / 1000 < 1 / 7) {
    // speed
    return;
  }

  lastPaintTime = ctime;
  gameEngine();
}

function gameEngine() {
  if (snake.isCollide()) {
    audio.playGameOverSound();
    audio.stopBackgroundMusic();
    snake.reset();
    food.regenerate();
    score = 0;
    ui.updateScore(score);
    ui.showGameOver();
    ui.updateHiScoreInLocalStorage(score);
    audio.playBackgroundMusic();
    return;
  }

  if (
    snake.SnakeArr[0].x === food.FoodPosition.x &&
    snake.SnakeArr[0].y === food.FoodPosition.y
  ) {
    audio.playFoodSound();
    score += 1;
    ui.updateScore(score);
    food.regenerate();
    snake.grow();
  }

  snake.move();
  render();
}

function render() {
  const board = document.getElementById("board")!;
  board.innerHTML = "";

  snake.SnakeArr.forEach((e, index) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = `${e.y}`;
    snakeElement.style.gridColumnStart = `${e.x}`;
    snakeElement.classList.add(index === 0 ? "head" : "snake");
    board.appendChild(snakeElement);
  });

  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = `${food.FoodPosition.y}`;
  foodElement.style.gridColumnStart = `${food.FoodPosition.x}`;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  audio.playMoveSound();
  switch (e.key) {
    case "ArrowUp":
      snake.InputDir = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      snake.InputDir = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      snake.InputDir = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      snake.InputDir = { x: 1, y: 0 };
      break;
  }
});
