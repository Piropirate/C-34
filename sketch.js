
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,500,50);
	bob2 = new Bob(250,500,50);
	bob3 = new Bob(300,500,50);
	bob4 = new Bob(350,500,50);
	bob5 = new Bob(400,500,50);

	roof = new Roof(350,100,500);

	rope1 = new Rope(bob1.body,roof.body,-200,0);
	World.add(world,rope1);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	World.add(world,rope2);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	World.add(world,rope3);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	World.add(world,rope4);
	rope5 = new Rope(bob5.body,roof.body,200,0);
	World.add(world,rope5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}

