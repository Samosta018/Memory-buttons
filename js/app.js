document.addEventListener('DOMContentLoaded', () => {
    const sequence = new Sequence();
    const buttonManager = new ButtonManager();
    const scoreManager = new ScoreManager();

    const game = new Game(buttonManager, sequence, scoreManager);
    buttonManager.setGame(game);
});