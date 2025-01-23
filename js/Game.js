class Game {
    constructor(buttonManager, sequence, scoreManager) {
        this.buttonManager = buttonManager;
        this.sequence = sequence;
        this.scoreManager = scoreManager;
        this.currentStep = 0;
        this.isPlaying = false;
        this.isShowingSequence = false;
        this.startButton = document.querySelector('.start-button');
        this.init();
    }

    init() {
        this.startButton.addEventListener('click', () => this.startGame());
    }

    startGame() {
        this.sequence.reset();
        this.currentStep = 0;
        this.isPlaying = true;
        this.scoreManager.resetScore();
        this.startButton.disabled = true;
        this.buttonManager.enableButtons();
        this.nextRound();
    }

    nextRound() {
        this.currentStep = 0;
        const newSequence = this.sequence.generateNextStep();
        this.playSequence(newSequence);
    }

    playSequence(sequence) {
        this.isShowingSequence = true;
        this.buttonManager.disableButtons();

        sequence.forEach((buttonId, index) => {
            setTimeout(() => {
                this.buttonManager.highlightButton(buttonId);
            }, (index + 1) * 1000);
        });

        setTimeout(() => {
            this.isShowingSequence = false;
            this.buttonManager.enableButtons();
        }, (sequence.length + 1) * 1000);
    }

    checkUserInput(buttonId) {
        if (!this.isPlaying || this.isShowingSequence) return;

        const currentSequence = this.sequence.getCurrentSequence();
        if (buttonId === currentSequence[this.currentStep]) {
            this.currentStep++;
            if (this.currentStep === currentSequence.length) {
                this.scoreManager.increaseScore();
                setTimeout(() => this.nextRound(), 1000);
            }
        } else {
            this.endGame();
        }

        this.buttonManager.highlightButton(buttonId);
    }

    endGame() {
        this.isPlaying = false;
        this.buttonManager.disableButtons();
        this.startButton.disabled = false;
        alert(`Игра окончена! Ваш счет: ${this.scoreManager.getScore()}`);
    }
}