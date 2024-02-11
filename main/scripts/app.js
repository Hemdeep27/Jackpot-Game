const playButton = document.getElementById("button-landing");
const gameContainer = document.getElementById("container");
const indexDiv = document.getElementById("app");
const loseDiv = document.getElementById("lose-container");
const prizeDiv = document.getElementById("prize-container");
const gamingButton = document.getElementById("game-button");


const entrySound = document.getElementById("my-Audio");

playButton.addEventListener("click", () => {
  indexDiv.style.display = "none";
  gameContainer.style.display = "block";
  gamingButton.style.display = "block";
  entrySound.pause();
});



window.onload = () => {
  console.log("playing");
  entrySound.muted = false;
  entrySound.play();
}
