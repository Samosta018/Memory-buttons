class ScoreManager {
    constructor() {
        this.score = 0;
        this.scoreDisplay = document.createElement('div');
        this.init();
    }

    init() {
        this.scoreDisplay.className = 'score-display';
        this.updateScoreDisplay();
        document.querySelector('.main').prepend(this.scoreDisplay);
    }

    increaseScore() {
        this.score++;
        this.updateScoreDisplay();
    }

    resetScore() {
        this.score = 0;
        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        this.scoreDisplay.textContent = `Счет: ${this.score}`;
    }

    getScore() {
        return this.score;
    }
}