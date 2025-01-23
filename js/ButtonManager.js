class ButtonManager {
    constructor() {
        this.buttons = document.querySelectorAll('.memory-button');
        this.game = null;
        this.init();
    }

    setGame(game) {
        this.game = game;
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button));
        });
    }

    handleButtonClick(button) {
        const buttonId = button.id;
        this.highlightButton(buttonId);
        if (this.game) {
            this.game.checkUserInput(buttonId);
        }
    }

    highlightButton(buttonId) {
        const button = document.getElementById(buttonId);

        if (!button) {
            console.error(`Кнопка с id ${buttonId} не найдена!`);
            return;
        }

        button.classList.add('active');

        setTimeout(() => {
            button.classList.remove('active');
        }, 500);
    }

    disableButtons() {
        this.buttons.forEach(button => {
            button.disabled = true;
        });
    }

    enableButtons() {
        this.buttons.forEach(button => {
            button.disabled = false;
        });
    }
}