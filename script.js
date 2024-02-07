//board variables
let board;
let boardWidth = 400;
let boardHeight = 711;
let context;

//bird
let birdWidth = 40;
let birdHeight = 30;
let birdX = boardWidth/8;
let birdY =boardHeight/2;
let birdImg;

let bird = {
  x : birdX,
  y : birdY,
  width : birdWidth,
  height: birdHeight,
}
// pipes
let pipearray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;



// This is just the canvas and the bird.
window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  //bird 
  //  context.fillStyle ="green";
  //  context.fillRect(bird.X,bird.Y,bird.Height,bird.Width);

   //loading Images
   birdImg = new Image();
   birdImg.src = "images/flappybird.png";
   birdImg.onload = function(){
   context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
   }
   requestAnimationFrame(update); 
}
//This is to load the pipes
topPipeImg = new Image();
topPipeImg.src = "images/toppipe.png";

bottomPipeImg = new Image();
bottomPipeImg.src = "images/bottompipe.png";

requestAnimationFrame(update);
setInterval(placePipes,1500); 

//This is going to change frame over and over again
function update(){
  requestAnimationFrame(update);
  context.clearRect(0,0,board.width,board.height);

  //bird
  context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height)

//Pipe
for (let i =0 ; i<pipearray.length; i++){
  let pipe = pipeArray[i];
  context.drawImage(pipe.img, pipe.x,pipe.y,pipe.width,pipe.height);
}
}

function placePipes(){
  let topPipe ={
  img : topPipeImg,
  x : pipeX,
  y :pipeY,
  width: pipeWidth,
  height: pipeHeight,
  passed : false //to see the bird has passed the pipe or not
  }
  pipearray.push(topPipe);
}