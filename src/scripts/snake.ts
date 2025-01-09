export class Snake {
  private snakeArr: { x: number; y: number }[];
  private inputDir: { x: number; y: number };

  constructor() {
    this.snakeArr = [{ x: 13, y: 15 }];
    this.inputDir = { x: 0, y: 0 };
  }

  // Getters
  get SnakeArr() {
    return this.snakeArr;
  }

  get InputDir() {
    return this.inputDir;
  }

  // Setters
  set InputDir(direction: { x: number; y: number }) {
    this.inputDir = direction;
  }

  // Add a new segment to the snake
  grow() {
    this.snakeArr.unshift({
      x: this.snakeArr[0].x + this.inputDir.x,
      y: this.snakeArr[0].y + this.inputDir.y,
    });
  }

  // Move the snake
  move() {
    for (let i = this.snakeArr.length - 2; i >= 0; i--) {
      this.snakeArr[i + 1] = { ...this.snakeArr[i] };
    }
    this.snakeArr[0].x += this.inputDir.x;
    this.snakeArr[0].y += this.inputDir.y;
  }

  // Check if the snake collides with itself or the wall
  isCollide() {
    for (let i = 1; i < this.snakeArr.length; i++) {
      if (
        this.snakeArr[i].x === this.snakeArr[0].x &&
        this.snakeArr[i].y === this.snakeArr[0].y
      ) {
        return true;
      }
    }
    if (
      this.snakeArr[0].x >= 18 ||
      this.snakeArr[0].x <= 0 ||
      this.snakeArr[0].y >= 18 ||
      this.snakeArr[0].y <= 0
    ) {
      return true;
    }
    return false;
  }

  // Reset the snake
  reset() {
    this.snakeArr = [{ x: 13, y: 15 }];
  }
}
