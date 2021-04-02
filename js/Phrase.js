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
    const li = document.createElement("li");
        li.setAttribute('class', `hide letter ${character}`);
        li.textContent = character;
        ul.appendChild(li);

      } else {
    const li = document.createElement("li");
        li.setAttribute('class', 'space');
        li.textContent = character;
        ul.appendChild(li);
      }
    });
  }
}
