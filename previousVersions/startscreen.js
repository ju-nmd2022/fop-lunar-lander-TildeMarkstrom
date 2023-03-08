function setup(){
window.createCanvas(600, 400);
}

let particles = [];


//particles
// The following 34 lines of code was adapted from Garrit Schaaps lectures
function createParticle() {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const v = -0.1 + 0.2 * Math.random();
  const a = Math.PI + Math.random() * Math.PI;
  return { x: x, y: y, velocity: v, angle: a};
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 255, 140);
  ellipse(0, 0, 2);
  pop();
}

function updateParticle(particle) {
  particle.y = particle.y + particle.velocity;
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;

}

for (let i = 0; i < 800; i++) {
  const particle = createParticle();
  particles.push(particle);
}

function draw(){
  background(10,0,20);
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }

//-----------------earth---------------------
//-----------------water-----------------------
noStroke();
fill(0,0,160);
ellipse(30, 30, 250);
//-----------------land----------------------
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

//-----------------Moon------------------
fill(200,200,160);
ellipse(300, 900, 1200);

//------------------big crater----------------
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

//---------------small crate------------------

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

//-------------------rocks--------------------

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

//------------------------------------WALL-E------------------------------------

push();
scale(0.5);
angleMode(DEGREES);
translate(750,158);
rotate(13);

//-------------wheel right + left)-----------------
fill(50);
strokeWeight(4);
stroke(40);
rect(108, 260, 50, 100);

line(108, 268, 158, 268);
line(108, 277, 158, 277);
line(108, 286, 158, 286);
line(108, 295, 158, 295);
line(108, 304, 158, 304);
line(108, 313, 158, 313);
line(108, 322, 158, 322);
line(108, 331, 158, 331);
line(108, 340, 158, 340);
line(108, 349, 158, 349);
line(108, 358, 158, 358);

rect(322, 260, 50, 100);

line(323, 268, 368, 268);
line(323, 277, 368, 277);
line(323, 286, 368, 286);
line(323, 295, 368, 295);
line(323, 304, 368, 304);
line(323, 313, 368, 313);
line(323, 322, 368, 322);
line(323, 331, 368, 331);
line(323, 340, 368, 340);
line(323, 349, 368, 349);
line(323, 358, 368, 358);

//------------------wheel connections-------------------
rect(160, 318, 40, 10);
rect(200, 307, 10, 10);
ellipse(205, 325, 20);

rect(280, 318, 40, 10);
rect(265, 307, 10);
ellipse(270, 325, 20);

//------------------Cords to the eyes-------------------
beginShape();
noFill();
stroke(10);
strokeWeight(3);
vertex(237, 110);
bezierVertex(235, 120, 215,127, 205, 105);
endShape();

beginShape();
vertex(243, 110);
bezierVertex(245, 120, 265, 127, 275, 105);
endShape();

//---------------------neck-------------------------
fill(220,152,10);
strokeWeight(1);
stroke(235,177,18);

rect(220, 134, 15, 40, 5);

fill(255,197,28);

beginShape();
vertex(225, 150);
bezierVertex(225, 150, 225, 150, 232,120);
bezierVertex(232,120, 232, 120, 248, 120);
bezierVertex(248, 120, 248, 120, 255, 150);
bezierVertex(255, 150, 255, 150, 225, 150);
endShape();

rect(236,100,8,20);

rect(220,80, 40,20);

//---------------------eye right -----------------------
push();

translate(255, 65);
scale(1.2);
fill(210);
stroke(0);
strokeWeight(3);

line(0,0,55.43,19.95);

beginShape();
vertex(55.43, 19.95);
bezierVertex(55.43, 19.95, 59.14 ,49.17 ,30.15, 47.31);
bezierVertex(30.15, 47.31, 1.16, 45.46, -7.65, 19.95);
bezierVertex(-7.65, 19.95, -8.11, 8.44, 0, 0);
endShape();

//----------------------camera eye----------------
fill(50, 10, 40);
ellipse(15, 23, 25);
fill(20);
ellipse(15,23, 10);

//-----------------------eye screws----------------
fill(40);
strokeWeight(1);
ellipse(2,8,4);
ellipse(45, 30, 4);
ellipse(30, 40, 4);

pop();

push();

//-------------------eye left---------------------
translate(225, 65);
scale(1.2);
fill(210);
stroke(0);
strokeWeight(3);

line(0, 0, -55.43, 19.95);

beginShape();
vertex(-55.43, 19.95);
bezierVertex(-55.43, 19.95, -59.14, 49.17, -30.7, 47.31);
bezierVertex(-30.15, 47.31, -1.16, 45.46, 7.65, 19.95);
bezierVertex(7.65, 19.95, 8.11, 8.44, 0, 0);
endShape();

//----------------camera eye left------------------
fill(50, 10, 40);
ellipse(-15, 23, 25);
fill(20);
ellipse(-15,23, 10);

//-------------------eye screws left----------------
strokeWeight(1);
fill(40);
ellipse(-2, 8, 4);
ellipse(-45, 30, 4);
ellipse(-30, 40, 4);

pop();

//----------------------box-------------------------
fill(255,197,28);
strokeWeight(2);
stroke(235,177,18);
rect(160,150,160,160);

//-------------------------box-body shadows--------------------
push();
stroke(205,150,0);
strokeWeight(5);
noFill();

line(170, 201, 170, 254);
line(240, 201, 240, 254);
line(310, 201, 310, 254);
pop();

//-----------------box-body details-----------------
stroke(60);
strokeWeight(2);
fill(80);
rect(160,150, 160, 50);

//-----------------left side----------------------
rect(160,150, 50);
line(160, 158, 210, 158);
line(160, 170, 210, 170);

push();
beginShape();
fill(140);
vertex(160,170);
bezierVertex(180,160, 190, 160, 210, 170);
endShape();
pop();

push();
strokeWeight(1);
line(170, 168, 200, 168);
pop();

//---------------------middle---------------------
push();
fill(20);
noStroke();
rect(215,160,20);

fill(220);
rect(217, 162, 16, 3);
rect(217, 167, 16, 3);
pop();

rect(240,160, 26, 35);

push();
fill(0, 200, 0);
stroke(0, 150, 0);
strokeWeight(1);
ellipse(248, 168, 8);
pop();

line(248, 177, 258, 177);
line(248, 181, 258, 181);
line(248, 185, 258, 185);
line(248, 189, 258, 189);

push();
stroke(10);
fill(200);
strokeWeight(1);
rect(218, 185, 8);
pop();

//---------------------right side------------------
rect(270, 150, 50);

line(270, 158, 320, 158);
line(270, 170, 320, 170);

push();
stroke(140,10,10);
fill(180, 20, 20);
ellipse(295, 186, 40, 10);
pop();

//-------------------arm right------------------------
push();

angleMode(DEGREES);
translate(320, 207);

stroke(235,177,18);
fill(255,197,28);

ellipse(5, 10, 10);

rotate(320);
rect(0,0, 100, 20);
fill(50);
stroke(50);
rect(0, 15, 100, 5);
pop();

//-----------Hand right----------------
push();
translate(401,146);
angleMode(DEGREES);
rotate(320);

rect(0,0, 20,10);
pop();

push();
translate(405,130);
rotate(320);
scale(1.5);
strokeWeight(1);
beginShape();
vertex(0,0);
vertex(0,20);
vertex(35,20);
vertex(35, 12);
vertex(20, 10);
vertex(35, 8);
vertex(35, 0);
vertex(0,0);
endShape();

beginShape();
vertex(0, 5);
vertex(0, 15);
vertex(20, 15);
vertex(20, 5);
vertex(0,5);
endShape();
pop();

//--------------------arm left-------------
push();

angleMode(DEGREES);
translate(145, 224);

stroke(235,177,18);
fill(255,197,28);

ellipse(10, -5, 10);

rotate(220);
rect(0,0, 100, 20);
fill(50);
stroke(50);
rect(0, 0, 100, 5);
pop();

//----------------------hand left-------------------
push();
translate(71,156);
angleMode(DEGREES);
rotate(220);

rect(0,0, 20,10);
pop();

push();
translate(50,154);
rotate(220);
scale(1.5);
strokeWeight(1);
beginShape();
vertex(0,0);
vertex(0,20);
vertex(35,20);
vertex(35, 12);
vertex(20, 10);
vertex(35, 8);
vertex(35, 0);
vertex(0,0);
endShape();

beginShape();
vertex(0, 5);
vertex(0, 15);
vertex(20, 15);
vertex(20, 5);
vertex(0,5);
endShape();
pop();

pop();

//-----------text----------

textSize(20);
fill(255,244, 40, 190);
text("Press SPACE to start",145,180,200,40);
}
