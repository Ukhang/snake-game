## Snake - Game 🐍

Experience the nostalgia of the classic Snake game, crafted from the ground up, showcasing pure coding ingenuity.

## Demo

![screenshot](https://user-images.githubusercontent.com/94834060/163021895-45898c1b-44d4-46dc-bc84-3c60cd62d12e.png)

## Installation

Follow these steps to set up and run the game locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the game in your browser at:
   ```
   http://localhost:3000
   ```

## Directory Structure

```
|-- public
|   |-- music
|       |-- food.mp3
|       |-- gameover.mp3
|       |-- move.mp3
|       |-- music.mp3
|-- src
    |-- assets
    |   |-- styles.css
    |-- scripts
        |-- audio.ts
        |-- food.ts
        |-- game.ts
        |-- snake.ts
        |-- ui.ts
```

## Development

- **Vite Configuration**: The project uses Vite for fast development and optimized builds.

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
  },
});
```

## Contact

For any queries or suggestions, feel free to reach out:

- Email: [ukhangmarma459@gmail.com](mailto:ukhangmarma459@gmail.com)
