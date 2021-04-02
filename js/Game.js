/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
return ['he ate a blue frog','loneliness is everywhere','to be successful you have to be miserable','tomorrow will be better or worse','my grandmother is a hairy troll'];
}
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    let randomNumber = Math.floor(Math.random()*5);
    return this.phrases[randomNumber];
}
// startGame() {
// document.getElementById('overlay').style.display = 'none';
// }
}