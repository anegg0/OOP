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
    return selectedPhrase;
  }
  startGame() {
    document.getElementById("overlay").style.display = "none";
    // this.getRandomPhrase().addPhraseToDisplay();
    let selectedPhrase = this.getRandomPhrase();
    this.activePhrase = selectedPhrase;
    selectedPhrase.addPhraseToDisplay();
    // console.log(this.activePhrase);
    console.log(selectedPhrase);
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const unguessedLetters = document.querySelectorAll(".hide");
    let res;
    if (unguessedLetters.length !== 0) 
      res = false;
    else if (unguessedLetters.length === 0 && this.missed !== 5) {
      res = true;
    }
    return res;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const lives = document.querySelectorAll(".tries");
    this.missed += 1;
    let nextRemainingTry = lives[this.missed - 1];
    let image = nextRemainingTry.firstChild;
    image.src = "./images/lostHeart.png";

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const h1 = document.querySelector("#game-over-message");
    const overlay = document.querySelector("#overlay");
    if (gameWon === true) {
      document.getElementById("overlay").style.display = "flex";
      overlay.classList.remove("start");
      overlay.classList.remove("lose");
      overlay.classList.add("win");
      h1.textContent = "You made it!";
      this.gameReset();
    } else if (gameWon === false) {
      document.getElementById("overlay").style.display = "flex";
      overlay.classList.remove("start");
      overlay.classList.remove("win");
      overlay.classList.add("lose");
      h1.textContent = "Better luck next time! Why not try again?";
      this.gameReset();
    }
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    if (this.activePhrase.checkLetter(button.textContent) === true) {
      button.disabled = true;
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
    } else if (this.activePhrase.checkLetter(button.textContent) !== true) {
      button.disabled = true;
      button.classList.remove("chosen");
      button.classList.add("wrong");
      this.removeLife();
    }
    if (this.checkForWin() === true) {
      this.gameOver(true);
    }
  }

  gameReset() {
    const phraseElement = document.querySelector("#phrase");
    const ulPhraseElement = phraseElement.querySelector("ul");
    while (ulPhraseElement.firstChild) {
      ulPhraseElement.removeChild(ulPhraseElement.firstChild);
    }
    const buttons = document.querySelectorAll(".key");
    buttons.forEach((button) => {
      button.classList.remove("chosen");
      button.classList.remove("wrong");
      button.disabled = false;
    });
    const scoreboard = Array.from(document.getElementsByTagName("img"));
    scoreboard.forEach((image) => {
      image.src = "./images/liveHeart.png";
    });
  }
}
