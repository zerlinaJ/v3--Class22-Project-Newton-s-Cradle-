const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(750,700);
    engine = Engine.create();
    world = engine.world;
    
    bobDiameter = 45;
    
    roof = new Roof(375,100,600,20)
    bob1 = new Bob(195,550,45);
    bob2 = new Bob(285,550,45);
    bob3 = new Bob(375,550,45);
    bob4 = new Bob(465,550,45);
    bob5 = new Bob(555,550,45);

    rope1 = new Rope(bob1.body,roof.body,-bobDiameter*4, 0)
    rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2, 0)
    rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0, 0)
    rope4 = new Rope(bob4.body,roof.body,bobDiameter*2, 0)
    rope5 = new Rope(bob5.body,roof.body,bobDiameter*4, 0)
    
}

function draw(){
    background(0);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    roof.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

   
}

function keyPressed(){

	if(keyCode === 32){
		
		Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300});
	  }
}

/*
function setup(){
    var canvas = createCanvas(750,700);
    engine = Engine.create();
    world = engine.world;
    
    bobDiameter = 40;
    
    roof = new Roof(375,100,600,20)
    bob1 = new Bob(170,550,45);
    bob2 = new Bob(260,550,45);
    bob3 = new Bob(350,550,45);
    bob4 = new Bob(440,550,45);
    bob5 = new Bob(530,550,45);

    rope1 = new Rope(bob1.body,roof.body,-bobDiameter*5.1, 0)
    rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2.8, 0)
    rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.5, 0)
    rope4 = new Rope(bob4.body,roof.body,bobDiameter*1.8, 0)
    rope5 = new Rope(bob5.body,roof.body,bobDiameter*4, 0)
    

}

function draw(){
    background(0);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    roof.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

   
}

function keyPressed(){

	if(keyDown("space")){
		
		Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-200});
	  }
}

*/