var particals = []
var plinko = []
var divisions = []
var divisionHeight=300;

var engine, world;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  if(frameCount%60===0){
    particals.push(new Partical(random(width/2-10, width/2+10),10,10));
  }
  
  for (var j =0; j < particals.length; j++){
  
    particals[j].display();
  }



 
  
}




function draw() {
background(255,255,255);  
Engine.update(engine)

for (var j =0; j < particals.length; j++)
{ particals[j].display(); }

for(var k =0; k <= width; k = k+ 80){
  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
}
  for (var j =40; j <=width; j=j+50)
{
plinko.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50)
{
plinko.push(new Plinko(j,175));

}

for (var j =0; j < divisions.length; j++){

divisions[j].display();
}
for (var j =0; j < plinko.length; j++){

plinko[j].display();
}








}