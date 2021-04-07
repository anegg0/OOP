/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
// console.log(game);
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase.length}`);
const btnReset = document.getElementById("btn__reset");
btnReset.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();

});

const keyA = document.querySelector("#a");
keyA.addEventListener("click", (e) => {
  game.handleInteraction(keyA);
});

const keyB = document.querySelector("#b");
keyB.addEventListener("click", (e) => {
  game.handleInteraction(keyB);
});

const keyC = document.querySelector("#c");
keyC.addEventListener("click", (e) => {
  game.handleInteraction(keyC);
});

const keyD = document.querySelector("#d");
keyD.addEventListener("click", (e) => {
  game.handleInteraction(keyD);
});

const keyE = document.querySelector("#e");
keyE.addEventListener("click", (e) => {
  game.handleInteraction(keyE);
});

const keyF = document.querySelector("#f");
keyF.addEventListener("click", (e) => {
  game.handleInteraction(keyF);
});

const keyG = document.querySelector("#g");
keyG.addEventListener("click", (e) => {
  game.handleInteraction(keyG);
});

const keyH = document.querySelector("#h");
keyH.addEventListener("click", (e) => {
  game.handleInteraction(keyH);
});

const keyI = document.querySelector("#i");
keyI.addEventListener("click", (e) => {
  game.handleInteraction(keyI);
});

const keyJ = document.querySelector("#j");
keyJ.addEventListener("click", (e) => {
  game.handleInteraction(keyJ);
});

const keyK = document.querySelector("#k");
keyK.addEventListener("click", (e) => {
  game.handleInteraction(keyK);
});

const keyL = document.querySelector("#l");
keyL.addEventListener("click", (e) => {
  game.handleInteraction(keyL);
});

const keyM = document.querySelector("#m");
keyM.addEventListener("click", (e) => {
  game.handleInteraction(keyM);
});

const keyN = document.querySelector("#n");
keyN.addEventListener("click", (e) => {
  game.handleInteraction(keyN);
});

const keyO = document.querySelector("#o");
keyO.addEventListener("click", (e) => {
  game.handleInteraction(keyO);
});

const keyP = document.querySelector("#o");
keyO.addEventListener("click", (e) => {
  game.handleInteraction(keyP);
});

const keyQ = document.querySelector("#q");
keyQ.addEventListener("click", (e) => {
  game.handleInteraction(keyQ);
});

const keyR = document.querySelector("#r");
keyR.addEventListener("click", (e) => {
  game.handleInteraction(keyR);
});

const keyS = document.querySelector("#s");
keyS.addEventListener("click", (e) => {
  game.handleInteraction(keyS);
});

const keyT = document.querySelector("#t");
keyT.addEventListener("click", (e) => {
  game.handleInteraction(keyT);
});

const keyU = document.querySelector("#u");
keyU.addEventListener("click", (e) => {
  game.handleInteraction(keyU);
});

const keyV = document.querySelector("#v");
keyV.addEventListener("click", (e) => {
  game.handleInteraction(keyV);
});

const keyW = document.querySelector("#w");
keyW.addEventListener("click", (e) => {
  game.handleInteraction(keyW);
});

const keyX = document.querySelector("#x");
keyX.addEventListener("click", (e) => {
  game.handleInteraction(keyX);
});

const keyY = document.querySelector("#y");
keyY.addEventListener("click", (e) => {
  game.handleInteraction(keyY);
});

const keyZ = document.querySelector("#z");
keyZ.addEventListener("click", (e) => {
  game.handleInteraction(keyZ);
});
