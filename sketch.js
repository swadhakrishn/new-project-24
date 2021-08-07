
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin1;
var box1, box2, box3;
var boxx1, boxx2, boxx3;


var engine, world;

function setup() {
	createCanvas(1000, 950);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var paper1 = new Paper(100,100,100,100);
	var ground = new Ground(100,100,100,100);
	var dustbin1 = new Dustbin(200,200,200,200);

	//box1 = Bodies.rectangle(500, 660, 20, 200, { isStatic: true });
	//World.add(world, box1)
	
	//box2 = Bodies.rectangle(400, 750, 200, 20, { isStatic: true });
	//World.add(world, box2)
	//box2.shapeColor = color(255)
	
	//box3 = Bodies.rectangle(300, 660, 20, 200, { isStatic: true });
	//World.add(world, box3);
	
}


function draw() {

	rectMode(CENTER);
	background(0);

paper1.display();
ground.display();
dustbin1.display();
Bodies.display();
//box1.display();
//box2.display();


drawSprites();
//box3.display();
fill("red");


	drawSprites();

	Engine.run(engine);

}

function keyPressed(){
	if( keyCode === UP_ARROW ){

		Matter.Body.applyForce(paper1Object.body, paper.body.position,{x:85, y:-85});
	}
}

