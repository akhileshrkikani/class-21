var movingRect,fixedRect,redRect,blueRect,pinkRect;


function setup() {
  createCanvas(800,400);
  

  fixedRect=createSprite(600,100,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY=-4

  movingRect=createSprite(300,100,20,50);
  movingRect.shapeColor="blue";

  redRect=createSprite(600,200,50,50);
  redRect.shapeColor="blue";
  redRect.velocityY=4

  blueRect=createSprite(100,100,90,50);
  blueRect.shapeColor="blue";
}

function draw() {
  background("black");  



  movingRect.x=mouseX
  movingRect.y=mouseY


 if(isTouching(movingRect,blueRect)){
  movingRect.shapeColor="red";
  blueRect.shapeColor="red";
 }
 else{
   
   movingRect.shapeColor="blue";
   blueRect.shapeColor="blue";
 
 }
 bounceOff(fixedRect,redRect);


  drawSprites();
}
