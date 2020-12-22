const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29;
var polygon1,img,slingshot;

function preload() {
    img=loadImage("polygon img.png");
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(500,680,1000,20);
    ground2 = new Ground(400, 505, 400, 20);
    ground3 = new Ground(800,200,200,20);
    
    block1=new Box(265,502,60,40);
    block2=new Box(320,502,60,40);
    block3=new Box(380,502,60,40);
    block4=new Box(435,502,60,40);
    block5=new Box(500,502,60,40);
    block6=new Box(290,430,60,40);
    block7=new Box(350,430,60,40);
    block8=new Box(410,430,60,40);
    block9=new Box(470,430,60,40);
    block10=new Box(319,370,60,40);
    block11=new Box(380,370,60,40);
    block12=new Box(440,370,60,40);
    block13=new Box(350,310,60,40);
    block14=new Box(410,310,60,40);
    block15=new Box(380,280,60,40);
    block16=new Box(740,180,60,40);
    block17=new Box(800,180,60,40);
    block18=new Box(860,180,60,40);
    block19=new Box(770,140,60,40);
    block20=new Box(830,140,60,40);
    block21=new Box(800,100,60,40);
    
    polygon1=new polygon(100,300,30);
    slingshot = new Slingshot(player.body,{x:100, y:300});

}
function draw(){
    background(192);
    Engine.update(engine);
    
    ellipseMode(RADIUS);
    ellipse(100,300,10);

    strokeWeight(4);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    player.display();
    ground1.display();
   ground2.display();
   ground3.display();
   slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}