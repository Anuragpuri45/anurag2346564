var anurag ,anurag2,ground; 
function preload(){
  //pre-load images
  anurag2=loadAnimation("Runner-1.png","Runner-2.png" );
  ground2=loadAnimation("path.png")
}

function setup(){
  createCanvas(600,600);
  //create sprites here
  ground=createSprite(200,150,50,50);
  ground.addAnimation("runner",ground2)
  anurag=createSprite(200,500,50,50);
  anurag.addAnimation("run",anurag2)
  anurag.scale=0.07
  invisible2=createSprite(350,300,10,600)
  invisible2.visible=false
  invisible=createSprite(60,300,10,600)
  invisible.visible=false
}

function draw() {
  background("white");
  if(keyDown("d")){
    anurag.velocityX = 8;
  }
  if(keyDown("w")){
    anurag.velocityX = -8;
  }
  ground.velocityY=5;
  if(ground.y>400){
  ground.y=height/2;
  }
  anurag.collide(invisible);
  anurag.collide(invisible2);
drawSprites()
}
