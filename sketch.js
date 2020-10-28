
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mySprite;
var ground,boy;

function preload()
{
	backgroundImg = loadImage("PluckingMangoes/boy.png");	
	backgroundImg = loadImage("PluckingMangoes/mango.png");
	backgroundImg = loadImage("PluckingMangoes/stone.png");
	backgroundImg = loadImage("PluckingMangoes/tree.png");	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	mySprite = createSprite(200,50);

	boy = new Boy(200,50,10,10);
	
	
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);

	ground.display();
	mySprite.display();
	//boy.display();
	

  	drawSprites();
 
}



