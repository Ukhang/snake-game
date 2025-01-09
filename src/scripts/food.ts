// src/scripts/food.ts
export class Food {
  private food: { x: number; y: number };

  constructor() {
    this.food = { x: 6, y: 8 };
  }

  // Get the current food position
  get FoodPosition() {
    return this.food;
  }

  // Generate new random food position
  regenerate() {
    const a = 2;
    const b = 16;
    this.food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
}
