/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

// console.log(game);
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
const btnReset = document.getElementById('btn__reset');
btnReset.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});
