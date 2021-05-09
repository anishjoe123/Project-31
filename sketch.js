const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var divisions = []
var plinkos = []  
var score = 0
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,800,480,50)
  for (var a = 0; a <=width; a = a + 80) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }
   for (var b = 75; b <=width; b=b+50) 
   {
      plinkos.push(new Plinkos(b,75));
   }

   for (var b = 50; b <=width-10; b=b+50) 
   {
      plinkos.push(new Plinkos(b,175));
   }

    for (var b = 75; b <=width; b=b+50) 
   {
      plinkos.push(new Plinkos(b,275));
   }
    for (var b = 50; b <=width-10; b=b+50) 
   {
      plinkos.push(new Plinkos(b,375));
   }
}

function draw() {
  background(255,255,255);  
  textSize(20)
  text("Score: "+score,30,30)
  Engine.update(engine);

  ground.display()
  if(frameCount%60===0)
  {
    particles.push(new Particles(random(width/2-10, width/2+10),10,10))
    score++
  }
  for (var c = 0; c < particles.length; c++) {
    particles[c].display();
  }
  for (var b = 0; b < plinkos.length; b++) {
    plinkos[b].display();
  }
  
  for (var a = 0; a < divisions.length; a++) {
    divisions[a].display();
  }

  drawSprites();
}
