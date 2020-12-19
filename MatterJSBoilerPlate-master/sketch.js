
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 30);


	Engine.run(engine);

	trashcan1 = new Trashcan(width/2-100, 600, 20, 200);
	trashcan2 = new Trashcan(width/2+100, 600, 20, 200);
	trashcan3 = new Trashcan2(width/2-100, 630, 200, 20)

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  //trashcan1.display();
  //trashcan2.display();
  trashcan3.display();
  paper.display();

 rect(ground.position.x, ground.position.y, 800, 10);

  drawSprites();
 
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-50})
	}
}