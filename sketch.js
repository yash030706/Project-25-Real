var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject, groundObject;
var world;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	dustbinObj = new dustbin(1200,650);
	paperObject = new paper(200,450,70);
	groundObject = new ground(width/2,670,width,20);

	//var render = Render.create({
	//	element: document.body,
	//	engine: engine,
	//	options: {
	//	  width: 1200,
	//	  height: 700,
	//	  wireframes: false
	//	}
	  //});
  



	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  //keyPressed();
  drawSprites();
  
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



