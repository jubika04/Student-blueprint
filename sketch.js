const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);

    ball1 = new Ball(50,100,20,10);
    ball2 = new Ball(250,100,50,30);


    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ball1.display();
    ball2.display();
    
}