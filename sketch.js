const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var bgImg
function preload(){
bgImg=loadImage("IMAGES/GamingBackground.png");
}


function setup() {
  createCanvas(windowWidth,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth/2, 700, windowWidth, 20);
  hero = new Hero(400, 600, 100);
  rope = new Rope(hero.body, {x:400, y:50});
  monster = new Monster(1300, 300, 200);
  
  // House 1 {
  // house side 1
  block1 = new Block(700, 100);
  block2 = new Block(700, 100);
  block3 = new Block(700, 100);
  block4 = new Block(700, 100);
  block5 = new Block(700, 100);
  block6 = new Block(700, 100);
  block7 = new Block(700, 100);
  block8 = new Block(700, 100);
  //block9 = new Block(700, 100);
  //block10 = new Block(700, 100);
 
  //house side 2
  blockA = new Block(800, 100);
  blockB = new Block(800, 100);
  blockC = new Block(800, 100);
  blockD = new Block(800, 100);
  blockE = new Block(800, 100);
  blockF = new Block(800, 100);
  blockG = new Block(800, 100);
  blockH = new Block(800, 100);
 // blockI = new Block(800, 100);
 // blockJ = new Block(800, 100);
  
//}

// house 2{
// house side 1
  block11= new Block(900, 100);
  block22= new Block(900, 100);
  block33= new Block(900, 100);
  block44= new Block(900, 100);
  block55= new Block(900, 100);
  block66= new Block(900, 100);



Engine.run(engine);
}

function draw() {
  background(bgImg);  
 
  ground.display();
  hero.display();
  rope.display();
  monster.display();

  //house 1{
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
 // block9.display();
 // block10.display();
  
 

  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();
  blockH.display();
 // blockI.display();
 // blockJ.display();
  
// }

// house 2{
  block11.display();
  block22.display();
  block33.display();
  block44.display();
  block55.display();
  block66.display();


}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}