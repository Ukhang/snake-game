export class UI {
  private scoreBox: HTMLElement;
  private hiscoreBox: HTMLElement;

  constructor() {
    this.scoreBox = document.getElementById("scoreBox")!;
    this.hiscoreBox = document.getElementById("hiscoreBox")!;
  }

  updateScore(score: number) {
    this.scoreBox.innerHTML = `Score: ${score}`;
  }

  updateHiScore(hiScore: number) {
    this.hiscoreBox.innerHTML = `HiScore: ${hiScore}`;
  }

  showGameOver() {
    alert("Game Over. Press any key to play again!");
  }

  updateHiScoreInLocalStorage(score: number) {
    const hiScore = localStorage.getItem("hiscore");
    let hiScoreVal = hiScore ? JSON.parse(hiScore) : 0;
    if (score > hiScoreVal) {
      localStorage.setItem("hiscore", JSON.stringify(score));
      this.updateHiScore(score);
    }
  }
}
