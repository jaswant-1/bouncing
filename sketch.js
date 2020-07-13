function setup() {
  createCanvas(800,400);
  e = createSprite(400,50,50,50);
  f = createSprite(400,600,50,50);
  c = createSprite(400,300,50,50);
  d = createSprite(400,200,50,50);
  //a.velocityY = 4
  //b.velocityY = -4
  e.shapeColor = ("green");
  f.shapeColor = ("blue");
}

function draw() {
  background(255,255,255);  
  drawSprites();

if (touching (e,f)) {
e.shapeColor = "red"
f.shapeColor = "red"
//a.velocityY = a.velocityY*-1
//b.velocityY = b.velocityY*-1
}
else {
 e.shapeColor = ("green");
 f.shapeColor = ("blue");
}
if (touching(f,c)) {
  f.shapeColor = "red"
  c.shapeColor = "red"
}
else {
  f.shapeColor = "green"
  c.shapeColor = "blue"
}
if (touching(d,f)) {
  d.shapeColor = "red"
  f.shapeColor = "red"
}
else {
  d.shapeColor = "green"
  f.shapeColor = "blue"
}
  f.x = mouseX
  f.y = mouseY
//line (a.x,a.y,b.x,b.y)
}

