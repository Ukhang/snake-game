export class AudioManager {
  private foodSound: HTMLAudioElement;
  private gameOverSound: HTMLAudioElement;
  private moveSound: HTMLAudioElement;
  private musicSound: HTMLAudioElement;

  constructor() {
    this.foodSound = new Audio("../../public/music/food.mp3");
    this.gameOverSound = new Audio("../../public/music/gameover.mp3");
    this.moveSound = new Audio("../../public/music/move.mp3");
    this.musicSound = new Audio("../../public/music/music.mp3");
  }

  playFoodSound() {
    this.foodSound.play();
  }

  playGameOverSound() {
    this.gameOverSound.play();
  }

  playMoveSound() {
    this.moveSound.play();
  }

  playBackgroundMusic() {
    this.musicSound.play();
  }

  stopBackgroundMusic() {
    this.musicSound.pause();
  }
}
