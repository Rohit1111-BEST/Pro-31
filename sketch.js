var particals = []
var plinko = []
var divisions = []

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  for(var k =0; k <= widht; k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
    for (var j =40; j <=width; j=j=50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50)
{
plinkos.push(new Plinko(j,175));

}

for (var j =0; j < particals.length; j++){

  particals[j].display();
}
for (var j =0; j < division.length; j++){

  division[j].display();
}
for (var j =0; j < plinko.length; j++){

  plinko[j].display();
}
}



var divisionHeight=300;






function draw() {
background(255,255,255);  

if(frameCount%60===0){
  particals.push(new Partical(random(width/2-10, width/2+10),10,10));
}


drawSprites();
division.display();  
ground.display();
particals.display();
plinko.display();
}

