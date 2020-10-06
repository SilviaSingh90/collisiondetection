var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400, 400, 80, 50);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  

 


 



 
 }

function draw() {
  background(0);
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  console.log (movingRect.x - fixedRect.x);  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    &&movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2  ){
    movingRect.shapeColor = "Red";
    fixedRect.shapeColor = "Red";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}