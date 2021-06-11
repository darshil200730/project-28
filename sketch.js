
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;
var box1,box2,box3
var ground 
var ball
var dustbinimage
var connect
function preload()
{
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
box1=new Box(1200,685,110,10)
box2=new Box(1150,605,10,150)
box3=new Box(1250,605,10,150)
ground=new Ground(800,690,1600,10)
ball=new Ball(400,665,25)
	Engine.run(engine);
  connect=new Connection(ball.ball,{x:700,y:400})
}
function mouseDragged(){
  Matter.Body.setPosition(ball.ball,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  console.log("hide")
  connect.break()
}
function draw() {

  background("pink");
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  ball.display()
image(dustbinimage,1140,525,120,170)
 connect.display()
}



