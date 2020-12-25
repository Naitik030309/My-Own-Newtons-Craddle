const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function setup() {
	createCanvas(windowWidth/1, windowHeight/1);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse=Mouse.create(canvas.elt);
     canvasmouse.pixelRatio=pixelDensity();
     
     var options={
       mouse:canvasmouse
     }

     mConstraint=MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

	roof=new Roof(width/3,height/10,width/7,20);

	diameter=100;

	ball1=new Ball(width/3-diameter*2,height/2+150,diameter);
	ball2=new Ball(width/3-diameter*1,height/2+150,diameter);
	ball3=new Ball(width/3,height/2+150,diameter);
	ball4=new Ball(width/3+diameter*1,height/2+150,diameter);
	ball5=new Ball(width/3+diameter*2,height/2+150,diameter);

	rope1=new Rope(ball1.body,roof.body,-diameter*2,0);
	rope2=new Rope(ball2.body,roof.body,-diameter*1,0);
	rope3=new Rope(ball3.body,roof.body,0,0);
	rope4=new Rope(ball4.body,roof.body,+diameter*1,0);
	rope5=new Rope(ball5.body,roof.body,+diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  roof.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
		
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	strokeWeight(3);
	stroke("white");
	fill("black");
	textSize(25);
	text("Drag any pendulum and then watch the transfer of ",725,100);
	text("momentum from one pendulum to the other pendulum.",725,125);
  
 
}
function drawline(constraint)
{
	ballbodyposition=constraint.bodyA.position;
	roofbodyposition=constraint.bodyB.position;
	roofbodyoffset=constraint.pointB;
	roofbodyx=roofbodyposition.x+roofbodyoffset.x;
	roofbodyy=roofbodyposition.y+roofbodyoffset.y;
	line(ballbodyposition.x,ballbodyposition.y,roofbodyx,roofbodyy);

}
function mousePressed(){
	Matter.Body.setPosition(ball1.body,{x: mouseX,y: mouseY});
}

