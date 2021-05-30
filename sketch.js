
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var box1,box2,box3;
var gr;
var dustbin1;
function preload()
{
dustbin1Img= loadImage("dustbinImg.png");
paper1Img = loadImage("paperImg.png")
}

function setup() {
	createCanvas(1400,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
 paperObject = new Paper(200,450,40);

 DustbinObject = new Dustbin(1200,650,200,20);
 Dustbin1Object = new Dustbin(1300,550,20,200);
 Dustbin2Object = new Dustbin(1100,550,20,200);
 groundObject=new Ground(1700,670,4000,20);
 
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);
 
  groundObject.display();
  DustbinObject.display();
  Dustbin1Object.display();
  Dustbin2Object.display();
  paperObject.display();
 dustbin1 = createSprite(1200,500,200,200);
 dustbin1.addImage(dustbin1Img);


  drawSprites();
  
 
 
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:385,y:-385});
    
  	}
}
