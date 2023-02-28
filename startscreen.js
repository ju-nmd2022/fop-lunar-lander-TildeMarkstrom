createCanvas(600, 400);



background(10,0,20);

let particles = [];

function createParticle() {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const v = -0.2 + Math.random();
  return { x: x, y: y };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 255, 140);
  ellipse(0, 0, 2);
  pop();
}

for (let i = 0; i < 500; i++) {
  const particle = createParticle();
  particles.push(particle);
}

function draw() {
  
  for (let particle of particles) {
    drawParticle(particle);
  }
}



//earth
//water
noStroke();
fill(0,0,160);
ellipse(30, 30, 250);
//land
fill(0,100,0);
ellipse(56,83,40);
ellipse(65, 83, 70, 40);

push();
angleMode(DEGREES);
rotate(20);
ellipse(112,69, 40, 70);
pop();

rect(34, -20, 100, 60, 10);
ellipse(36, 4, 25, 50);
ellipse(75, 40, 50, 30);
ellipse(114, 35, 40, 45);
ellipse(137,16, 30, 50);
ellipse(14, 6 , 13, 20);
ellipse(105, 117, 6, 20);

//Moon
fill(200,200,160);
ellipse(300, 900, 1200);

//big crater
push();
translate(140,310);
angleMode(DEGREES);
rotate(-15);
ellipse(0,0, 170,20);


beginShape();
noStroke();
vertex(85,0);
bezierVertex(85, 0, 90, 20, 100, 20);
bezierVertex(85, 30, 85, 30, -100, 20);
bezierVertex(-100, 20, -90, 20, -85, 0);
endShape();

fill(170,170,140);
ellipse(0,0, 150,10);

pop();

//small crate

push();
translate(560,350);
angleMode(DEGREES);
rotate(25);
scale(0.6);
ellipse(0,0, 170,20);


beginShape();
noStroke();
vertex(85,0);
bezierVertex(85, 0, 90, 20, 100, 20);
bezierVertex(85, 30, 85, 30, -100, 20);
bezierVertex(-100, 20, -90, 20, -85, 0);
endShape();

fill(170,170,140);
ellipse(0,0, 150,10);

pop();

//rocks

fill(170,170,140);
ellipse(35,387, 10);
ellipse(85, 370, 5);
ellipse(67,382, 7);
ellipse(215, 358, 20);
ellipse(234, 338, 10);
ellipse(471, 378, 10);
ellipse(511, 372, 12);
ellipse(419, 389, 20);
ellipse(395, 334, 5);
