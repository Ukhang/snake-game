## Snake - Game 🐍

Experience the nostalgia of the classic Snake game, crafted from the ground up, showcasing pure coding ingenuity.

## Demo
![Screenshot 2025-01-09 at 4 15 35 PM](https://github.com/user-attachments/assets/40ec5e29-b313-44f4-9572-8775b19572f7)

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
