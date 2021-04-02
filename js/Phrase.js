/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const ul = document.getElementById("phrase").firstElementChild;

    const splittedPhrase = this.phrase.split("");

    splittedPhrase.forEach((character) => {
      if (character !== " ") {
        ul.appendChild(
          `<li class="hide letter ${character}">${character}</li>`
        );
      } else {
        ul.appendChild(`<li class="space"> </li>`);
      }
    });
  }
}
