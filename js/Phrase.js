/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.winLetterCounter = 0;
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const ul = document.getElementById("phrase").firstElementChild;

    const splittedPhrase = this.phrase.split("");
    splittedPhrase.forEach((character) => {
      if (character !== " ") {
        const li = document.createElement("li");
        li.setAttribute("class", `hide letter ${character}`);
        li.textContent = character;
        ul.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.setAttribute("class", "space");
        li.textContent = character;
        ul.appendChild(li);
      }
      return splittedPhrase;
    });
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(string) {
    const selectedPhrase = this.phrase;
    return selectedPhrase.includes(string);
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const splittedPhrase = this.phrase.split("");
    splittedPhrase.forEach((character) => {
      if (character === letter) {
        const htmlLetter = document.querySelector(`.hide.letter.${character}`);
        htmlLetter.classList.remove('hide');
        htmlLetter.classList.add('show');
      }
    });
  }
}
