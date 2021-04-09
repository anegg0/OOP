/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const btnReset = document.getElementById("btn__reset");
btnReset.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();

});
const qwerty = document.querySelector('#qwerty');
const letters = qwerty.querySelectorAll('.key');
console.log(letters);
// console.log(letters[7]);


const keyA = letters[10];
keyA.addEventListener("click", (e) => {
  game.handleInteraction(keyA);
});

const keyB = letters[23];
keyB.addEventListener("click", (e) => {
  game.handleInteraction(keyB);
});

// const keyC = document.querySelector("#c");
const keyC = letters[21];
keyC.addEventListener("click", (e) => {
  game.handleInteraction(keyC);
});

// const keyD = document.querySelector("#d");
const keyD = letters[12];
keyD.addEventListener("click", (e) => {
  game.handleInteraction(keyD);
});

// const keyE = document.querySelector("#e");
const keyE = letters[2];
keyE.addEventListener("click", (e) => {
  game.handleInteraction(keyE);
});

const keyF = letters[13];
keyF.addEventListener("click", (e) => {
  game.handleInteraction(keyF);
});

const keyG = letters[14];
keyG.addEventListener("click", (e) => {
  game.handleInteraction(keyG);
});

const keyH = letters[15]; 
keyH.addEventListener("click", (e) => {
  game.handleInteraction(keyH);
});

const keyI = letters[7];
keyI.addEventListener("click", (e) => {
  game.handleInteraction(keyI);
});

const keyJ = letters[16];
keyJ.addEventListener("click", (e) => {
  game.handleInteraction(keyJ);
});

const keyK = letters[17];
keyK.addEventListener("click", (e) => {
  game.handleInteraction(keyK);
});

const keyL = letters[18];
keyL.addEventListener("click", (e) => {
  game.handleInteraction(keyL);
});

const keyM = letters[25];
keyM.addEventListener("click", (e) => {
  game.handleInteraction(keyM);
});

const keyN = letters[24];
keyN.addEventListener("click", (e) => {
  game.handleInteraction(keyN);
});

const keyO = letters[8];
keyO.addEventListener("click", (e) => {
  game.handleInteraction(keyO);
});

const keyP = letters[9];
keyP.addEventListener("click", (e) => {
  game.handleInteraction(keyP);
});

const keyQ = letters[0];
keyQ.addEventListener("click", (e) => {
  game.handleInteraction(keyQ);
});

const keyR = letters[3];
keyR.addEventListener("click", (e) => {
  game.handleInteraction(keyR);
});

const keyS = letters[11];
keyS.addEventListener("click", (e) => {
  game.handleInteraction(keyS);
});

const keyT = letters[4];
keyT.addEventListener("click", (e) => {
  game.handleInteraction(keyT);
});

const keyU = letters[6];
keyU.addEventListener("click", (e) => {
  game.handleInteraction(keyU);
});

const keyV = letters[22];
keyV.addEventListener("click", (e) => {
  game.handleInteraction(keyV);
});

const keyW = letters[1];
keyW.addEventListener("click", (e) => {
  game.handleInteraction(keyW);
});

const keyX = letters[20];
keyX.addEventListener("click", (e) => {
  game.handleInteraction(keyX);
});

const keyY = letters[5];
keyY.addEventListener("click", (e) => {
  game.handleInteraction(keyY);
});

const keyZ = letters[19];
keyZ.addEventListener("click", (e) => {
  game.handleInteraction(keyZ);
});
