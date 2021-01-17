
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var body1,body2,body3;
var paper;
var ground;
var groundBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	var options={
		isStatic:true,
	}

	paper = new Paper(100,550,50);
	ground = new Ground(400,600,800,200);
	wall1 = new Wall(700,450,100,10);
	wall2 = new Wall(640,390,10,100);
	wall3 = new Wall(760,390,10,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  
  background(0);
  

  paper.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();


}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:310,y:-600})
	}
}







