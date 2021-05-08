

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1,ground2;
var polygon,polygon_image

var slingShot;

function preload(){
polygon_image=loadImage("polygon.png")

}



function setup(){

var canvas=createCanvas(1000,600);

engine = Engine.create();
world = engine.world;

ground1=new Ground(420,300,320,10)
ground2=new Ground(850,220,220,10)


    //line1
    block1 =new Block(300,275,40,40);
    block2 =new Block(340,275,40,40);
    block3 =new Block(380,275,40,40);
    block4 =new Block(420,275,40,40);
    block5 =new Block(460,275,40,40);
    block6 =new Block(500,275,40,40);
    block7 =new Block(540,275,40,40);

    //line2

    block8 =new Block(340,235,40,40);
    block9 =new Block(380,235,40,40);
    block10 =new Block(420,235,40,40);
    block11=new Block(460,235,40,40);
    block12=new Block(500,235,40,40);

    //line3

    block13 =new Block(380,195,40,40);
    block14 =new Block(420,195,40,40);
    block15=new Block(460,195,40,40);

    //top

    block16 =new Block(420,155,40,40);

//second tower//line1

    block17=new Block(770,200,40,40)
    block18=new Block(810,200,40,40)
    block19=new Block(850,200,40,40)
    block20=new Block(890,200,40,40)
    block21=new Block(930,200,40,40)

    //line2
    block22=new Block(810,150,40,40)
    block23=new Block(850,150,40,40)
    block24=new Block(890,150,40,40)
//line3

block25=new Block(850,100,40,40)

    polygon=Bodies.circle(100,150,40)
    World.add(world,polygon)

    slingShot=new SlingShot(this.polygon,{x:100,y:150})

}

function draw(){
Engine.update(engine);
background(255)

imageMode(CENTER)
image(polygon_image,polygon.position.x,polygon.position.y,50,50)

ground1.display();

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

ground2.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();

block25.display();

slingShot.display();
}


function mouseDragged(){
	
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
        
}

function mouseReleased(){
	
    slingShot.fly()
 }
function keyPressed(){
    if(keyCode === 32){
       slingShot.attached(polygon);
      
       Matter.Body.setPosition(polygon,{x:100,y:150})
    }
}
 
 