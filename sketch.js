
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2;
var plane ;
var rotator1;
var rotater2;
var rotater3;
var angle1,angle2,angle3;
 var ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(400, 400);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  var plane_options = {
    isStatic :true
     
  }
  var ground_options = {
    isStatic :true
     
  }
  var r_options = {
    isStatic : true
  }
  var ball_ops = {
    restitution:0.2
    ,friction:0.04
  }

plane = Bodies.rectangle(200,390,400,20, plane_potions);
World.add(world,plane);

block1 = Bodies.rectangle(300,150,100,10,ground_options);
fill('brown');
rectMode(CENTER);
ellipseMode(RADIUS);
World.add(world,block1);

block2 = Bodies.rectangle(150,300,100,10,ground_options);
fill('brown');
rectMode(CENTER);
ellipseMode(RADIUS);
World.add(world,block2);


rotator1 = Bodies.rectangle(250,200,150,20,r_options);
World.add(world,rotator1);

rotator2 = Bodies.rectangle(150,100,150,20,r_options);
World.add(world,rotator2);


rotator3 = Bodies.rectangle(350,300,150,20,r_options);
World.add(world,rotator3);

ball1 = Bodies.circle(220,10,10,ball_ops);
World.add(world,ball1);

ball2 = Bodies.circle(160,10,10,ball_ops);
World.add(world,ball2);

ball3 = Bodies.circle(150,10,10,ball_ops);
World.add(world,ball3);

ball4= Bodies.circle(120,10,10,ball_ops);
World.add(world,ball4);

ball5 = Bodies.circle(200,10,10,ball_ops);
World.add(world,ball5);

}


function draw() {
background(51);
Engine.update(engine);

Matter.Body.rotate(rotator1,angle1)
push();
translate(rotater1.position.x,rotater1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1+=0.2;

Matter.Body.rotate(rotator2,angle2)
push();
translate(rotater2.position.x,rotater2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2+=0.4;

Matter.Body.rotate(rotator3,angle3)
push();
translate(rotater3.position.x,rotater3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3+=0.6;

ellipse(ball.position.x,ball.position.y,10);
rect(ground.position.x,ground.position.y,400,20);
  
 
 
}



