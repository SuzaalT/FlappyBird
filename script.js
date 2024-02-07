// board variables
let canvas;
let boardWidth = 400;
let boardHeight = 711;
let context;

// bird
let birdWidth = 40;
let birdHeight = 30;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};

//Pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//Game Physics
let velocityX = -2;
let velocityY = 0;
let gravity = 0.4
// This is just the canvas and the bird.

let gameOver = false;

window.onload = () => {
  canvas = document.getElementById("board");
  canvas.height = boardHeight;
  canvas.width = boardWidth;
  context = canvas.getContext("2d");

  // loading Images
  birdImg = new Image();
  birdImg.src = "images/flappybird.png";
  birdImg.onload = () => {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };

  topPipeImg = new Image();
  topPipeImg.src = "images/toppipe.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "images/bottompipe.png";

  requestAnimationFrame(update);
  setInterval(placePipes, 1500); // Corrected function name
  document.addEventListener("keydown", moveBird); 
};

// This is going to change frame over and over again
function update() {
  requestAnimationFrame(update);

if(gameOver){
  return;
}

  context.clearRect(0, 0, canvas.width, canvas.height);

  // bird
  velocityY +=gravity;  
  bird.y += velocityY;
  bird.y = Math.max(bird.y + velocityY, 0)
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  if (bird.y > canvas.height){
    gameOver = true;
  }

  //pipes
  for (let i = 0; i < pipeArray.length; i++){
    let pipe = pipeArray[i];
    pipe.x +=velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    
    if (detectCollision(bird,pipe)){
      gameOver = true;
    }
  }
}

function placePipes(){

let randomPipeY =pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
let openingSpace =board.height/4

  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    width: pipeWidth,
    height: pipeHeight,
    passed: false
  }
  pipeArray.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg,
    x: pipeX,
    y: randomPipeY + pipeHeight + openingSpace,
    width: pipeWidth,
    height: pipeHeight,
    passed: false
  }
  pipeArray.push(bottomPipe);
}

function moveBird(e){
  if (e.code ==="Space"){
    velocityY = -5                                          ;
  }
}

function detectCollision(a,b){
  return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
  a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
  a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
  a.y + a.height > b.y; 
}
while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
  pipeArray.shift(); //removes first element from the array
}

//score
context.fillStyle = "white";
context.font="45px sans-serif";
context.fillText(score, 5, 45);

if (gameOver) {
  context.fillText("GAME OVER", 5, 90);
}

if(gameOver){
  context.fillText("GameOver", 5,90)
}