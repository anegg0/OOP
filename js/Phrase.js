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
        li.setAttribute('class', `hide letter ${character}`);
        li.textContent = character;
        ul.appendChild(li);

      } else {
    const li = document.createElement("li");
        li.setAttribute('class', 'space');
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
    const splittedPhrase = this.phrase.split("");
    const splittedPhraseWithoutSpaces = splittedPhrase.filter(character => character !== " ");
    splittedPhraseWithoutSpaces.forEach((character) => {
      if (character === string) {
        return true;
      } else if (character !== string) {
        return false;
      }
    });
}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    let winLetterCounter = 0;
    this.phrase.forEach((character) => {
      if (character === letter) {
        winLetterCounter += 1;
    const htmlLetter = document.getElementsByClassName(`hide letter ${character}`);
        htmlLetter.classList.remove(`hide letter ${character}`);
        htmlLetter.classList.add(`show letter ${character}`);
      }
    });
    this.winLetterCounter = winLetterCounter;
}
}
