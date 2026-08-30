# Snake Game Vol. 2

A responsive browser-based version of the classic Snake game, built with HTML, CSS, and vanilla JavaScript. Guide the snake around the board, collect food to increase your score, and try to beat your saved high score without hitting the walls or the snake's body.

## Features

- Classic grid-based Snake gameplay
- Random food placement
- Live score tracking
- High score saved with `localStorage`
- Wall and self-collision detection
- Keyboard arrow controls for desktop
- On-screen directional controls for smaller screens
- Responsive layout for desktop and mobile devices
- Automatic restart prompt when the game ends

## Built With

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Font Awesome icons
- Google Fonts
- Web Storage API

## How to Play

1. Open `index.html` in a web browser.
2. Use the arrow keys to start moving the snake.
3. On a smaller screen, use the on-screen arrow controls.
4. Collect the red food to grow the snake and increase your score.
5. Avoid hitting the edges of the board or the snake's body.

## Project Structure

```text
snake-game-vol-2/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The game board uses a 30 × 30 CSS Grid. JavaScript stores each snake segment as a pair of grid coordinates and updates the snake at a fixed interval. Food is placed at a randomly generated position. When the snake reaches the food, its body grows, its score increases, and its highest score is stored in the browser.

The game ends when the snake crosses the board boundary or collides with its own body.

## Run Locally

No installation or build tools are required.

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in your browser.

For a local development server, you can also use the Live Server extension in Visual Studio Code.

## Future Improvements

- Add a start and pause button
- Replace the browser alert with a custom game-over screen
- Prevent food from appearing on the snake's body
- Add selectable difficulty levels
- Add sound effects and theme options
- Improve the accessibility of the on-screen controls

## Author

Created by **Winstone Anderson**.

- [GitHub](https://github.com/winstone01)
- [Portfolio](https://winstone01.github.io/portfolio_website/)

## License

This project is available for educational and portfolio use.
