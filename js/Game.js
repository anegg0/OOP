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
      // new Phrase("ha"),
      // new Phrase("ha"),
      // new Phrase("ha"),
      // new Phrase("ha"),
      // new Phrase("ha")
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
    // const ul = document.getElementById("phrase");
    // console.log(ul);
    // const letters = ul.getElementsByTagName("li");
    const unguessedLetters = document.querySelectorAll(".hide");
    // console.log(unguessedLetters);
    let res;
    // for (var i = 0; i < unguessedLetters.length; ++i) {
    if (unguessedLetters.length !== 0)
      //       letters[i].className === `hide letter ${this.activePhrase.phrase[i]}`)
      //      {
      res = false;
    //      }
    else {
      res = true;
    }
    // }
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
    // if (this.missed === 5) {
    //   this.gameOver(false);
    //   this.gameReset();
    }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const h1 = document.querySelector("#game-over-message");
    const overlay = document.querySelector("#overlay");
    if (gameWon === true) {
      overlay.classList.remove("start");
      overlay.classList.add("win");
      document.getElementById("overlay").style.display = "flex";
      h1.textContent = "You made it!";
    } else if (gameWon === false) {
      overlay.classList.remove("start");
      overlay.classList.add("lose");
      document.getElementById("overlay").style.display = "flex";
      h1.textContent = "Better luck next time! Why not try again?";
    }
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    // console.log(button.textContent);
    // let res;
    if (this.activePhrase.checkLetter(button.textContent) === true) {
      //  console.log(true);
      //  res = true;
      button.disabled = true;
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      // return this.activePhrase.checkLetter(button.textContent);
    } else if (this.activePhrase.checkLetter(button.textContent) !== true) {

      button.disabled = true;
      button.classList.remove("chosen");
        button.classList.add("wrong");
        this.removeLife();
    }
      if (this.checkForWin() === true) {
        this.gameOver(true);
        this.gameReset();
      } 
      if (this.missed === 5)
     {
      this.gameOver(false);
      this.gameReset();
      //  else if (there are no lives left) {
      // button.classList.remove("chosen");
      //   button.classList.add("wrong");
      //   this.removeLife();
      //   // this.gameReset();
      }
    
  }

  gameReset() {
    const phraseElement = document.querySelector("#phrase");
    const ulPhraseElement = phraseElement.querySelector("ul");
    while (ulPhraseElement.firstChild) {
      ulPhraseElement.removeChild(ulPhraseElement.firstChild);
    }
    // Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class,
    // and not use the `chosen` or `wrong` CSS classes.
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
    console.log(scoreboard);
  }
}
