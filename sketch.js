
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body,
var dustbin,paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new dustbin(720,390,100,10);
	paper = new paper(100,300,10);
    ground = Bodies.rectangle(width/2,400,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



  dustbin.display();
  paper.display();
  ground.display();


  drawSprites();
 
}



