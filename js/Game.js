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
    return [
      new Phrase("he ate a blue frog"),
      new Phrase("loneliness is everywhere"),
      new Phrase("to be successful you have to be miserable"),
      new Phrase("tomorrow will be worse"),
      new Phrase("my grandmother is a hairy troll"),
    ];
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * 5);
    let selectedPhrase = this.phrases[randomNumber];
    this.activePhrase = selectedPhrase;
    return selectedPhrase;
  }

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.getRandomPhrase().addPhraseToDisplay();
    // this.activePhrase.addPhraseToDisplay();
    // console.log(`this.activePhrase: ${this.activePhrase.phrase.length}`);
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const ul = document.getElementById("phrase");
    const letters = ul.getElementsByTagName("li");
    // console.log(totalLettersToMatch);
    let totalLettersMatched;
    let totalLettersToMatch;
    for (var i = 0; i < letters.length; ++i) {
      if (
        letters[i].className === `show letter ${this.activePhrase.phrase[i]}`
      ) {
        totalLettersMatched += 1;
        // console.log(this.activePhrase.phrase[i]);
        // console.log(letters[i].className);
      } else if (letters[i].className === "space") {
        totalLettersMatched += 1;
      }
    }
      if (totalLettersMatched === totalLettersToMatch) {
          return true;
      }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {}

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  // gameOver(gameWon) {
  // }
}
