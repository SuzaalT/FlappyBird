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
}