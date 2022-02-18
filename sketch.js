var Runner, Runner_running;

function preload(){

  

  //pre-load images
  Path.Image = loadImage("path.png");
  Runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(0,0,400,400);
  path.addImage("path", groundImage);
  path.x = path.width /2;
  path.velocityY = -4; 

  jaxon = createSprite(200,350,50,50);
  jaxon.addAnimation("running", Runner_running);
  jaxon.scale = 0.5;
}

function draw() {
  background(0);

  if (keyDown("left")) {
    jaxon.velocityX = -2;
  }
  if (keyDown("right")) {
    jaxon.velocityX = 2;
  }

  if (path.x < 0) {
    path.x = path.width / 2;
  }
  
  drawSprite();

}
