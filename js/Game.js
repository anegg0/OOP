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
return [new Phrase('he ate a blue frog'),new Phrase('loneliness is everywhere'),new Phrase('to be successful you have to be miserable'),new Phrase('tomorrow will be better or worse'),new Phrase('my grandmother is a hairy troll')];
}
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    let randomNumber = Math.floor(Math.random()*5);
    return this.phrases[randomNumber];
}
startGame() {
document.getElementById('overlay').style.display = 'none';
this.getRandomPhrase().addPhraseToDisplay();
}
}