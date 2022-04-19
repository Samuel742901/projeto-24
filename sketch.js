const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, pedra, rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,300,20);
    pedra = new Pedra(500,300,20);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    pedra.display();
    rubber.display();
    plane.display();
    hammer.display();

    
 
}