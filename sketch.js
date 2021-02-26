const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1 =  new Box(700,350,50,50);
    box2 =  new Box(750,350,50,50);
    box3 =  new Box(700,300,50,50);
    box4 =  new Box(750,300,50,50);
    box5 =  new Box(700,250,50,50);
    box6 =  new Box(750,250,50,50);
    box7 =  new Box(700,200,50,50);
    box8 =  new Box(750,200,50,50);
    box9 =  new Box(700,150,50,50);
    box10 =  new Box(750,150,50,50);
    ball1 = new Ball(200,200);
    rope = new Rope(ball1.body,{x:500,y:10});
}

function draw(){

    background("blue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball1.display();
    rope.display();
}   

function mouseDragged(){

    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});

}