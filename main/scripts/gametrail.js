//Image sources
const symbols = [
  "../assests/images/7_image.jpg",
  "../assests/images/bananasingle.jpg",
  "../assests/images/watermelon.jpeg",
  "../assests/images/orange.jpeg",
  "../assests/images/basketBall.jpeg",
];

const lose1Div = document.getElementById("lose-container");
const game1Div = document.getElementById("container");
const prize1Div = document.getElementById("prize-container");
const gaming1Button = document.getElementById("game-button");

//Playing Audio
const sound = new Audio();
sound.src = "../assests/sounds/mixkit-slot-machine-win-alert-1931.wav";

const loseSound = new Audio();
loseSound.src = "../assests/sounds/mixkit-losing-bleeps-2026.wav";

const reelSound = new Audio();
reelSound.src = "../assests/sounds/mixkit-payout-award-ding-1935.wav";

const span = document.getElementById("count");
let count = 5;
let boolValue = false;

//Jackpot Button
const spinButton = document.getElementById("game-button");
let noOfPlays = 0;


//Function for event Listner
const jackpot = () => {
  if (noOfPlays < 5) {
    // debugger;
    spinButton.disabled = true;

    reelSound.play();

    //generating random numbers for image source
    const symbol1 = Math.floor(Math.random() * symbols.length);
    const symbol2 = Math.floor(Math.random() * symbols.length);
    const symbol3 = Math.floor(Math.random() * symbols.length);
    console.log(symbol1, symbol2, symbol3);
    //setting counter for how many times the set interval function is used
    let counter = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    //Animation of Reel1
    const interval1 = setInterval(() => {
      setTimeout(() => {
        document.getElementById("symbol-1").src =
          symbols[(symbol1 + counter1) % symbols.length];
      }, 500);
      counter1++;
      if (counter1 === 40) {
        clearInterval(interval1);
      }
    }, 50);

    //Animation of Reel2
    const interval2 = setInterval(() => {
      setTimeout(() => {
        document.getElementById("symbol-2").src =
          symbols[(symbol2 + counter2) % symbols.length];
      }, 1000);
      counter2++;
      if (counter2 === 60) {
        clearInterval(interval2);
      }
    }, 50);

    //Animation of Reel3
    const interval3 = setInterval(() => {
      setTimeout(() => {
        document.getElementById("symbol-3").src =
          symbols[(symbol3 + counter3) % symbols.length];
      }, 2000);
      counter3++;
      if (counter3 === 80) {
        clearInterval(interval3);
      }
    }, 50);

    //Checking for the win
    setInterval(() => {
      counter++;
      if (counter === 60) {
        spinButton.disabled = false;
        checkForWin(symbol1, symbol2, symbol3);
      }
    }, 80);
    // reelSound.pause();
    noOfPlays++;
    count--;
    if (count === 0 && boolValue === false) {
      setTimeout(() => {
        game1Div.style.display = "none";
        gaming1Button.style.display = "none";
        lose1Div.style.display = "block";
      }, 6000);
    }
    span.innerHTML = count;
  } else {
    noOfPlays = 0;
    game1Div.style.display = "none";
    gaming1Button.style.display = "none";
    lose1Div.style.display = "block";
    loseSound.play();
  }
};

//Function for checking the win
const checkForWin = (symbol1, symbol2, symbol3) => {
  if (symbol1 === symbol2 && symbol2 === symbol3) {
    boolValue === true;
    game1Div.style.display = "none";
    gaming1Button.style.display = "none";
    prize1Div.style.display = "flex";
    sound.play();
  }
};

//Event listener
spinButton.addEventListener("click", jackpot);
