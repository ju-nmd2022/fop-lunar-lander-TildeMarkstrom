createCanvas(600, 400);
frameRate(30);

let gameIsActive = true;

let firex = 0;
let firey = 0;

let x = 295;
let velocity = 1;
let acceleration =0.2;
let y = -20;
let s = 0.3;

let shoeX = 30;
let shoeY = 200;
let shoeS = 0.7;
let shoeSpeed = 3;
let shoeDirection = "right";


function draw(){
background(10,0,20);

function fire(){
push();
stroke(255,0,0);
strokeWeight(1);
fill(255,0,0);

translate(x + 110* s,y + 140 * s);
scale(1);
rotate(PI);

beginShape();

vertex(firex * s, firey * s);

bezierVertex(firex, firey, firex - 60 * s, firey + 10 * s, firex - 50 * s , firey - 50 * s);
bezierVertex(firex - 50 * s, firey - 50 * s, firex - 50 * s, firey - 70 * s, firex - 60 * s, firey - 80 * s);
bezierVertex(firex - 60 * s, firey - 80 * s, firex - 50 * s, firey - 70 * s, firex - 40 * s, firey - 70 * s);
bezierVertex(firex - 40 * s, firey - 70 * s, firex - 30 * s, firey - 70 * s, firex - 30 * s, firey - 100 * s);
bezierVertex(firex - 30 * s, firey - 100 * s, firex - 16 * s, firey - 48 * s, firex - 2 * s, firey - 140 * s);
bezierVertex(firex - 2 * s, firey - 140 * s, firex + 1 * s, firey - 70 * s, firex + 10 * s, firey - 60 * s);
bezierVertex(firex + 10 * s, firey - 60 * s, firex + 18 * s, firey - 75 * s, firex + 20 * s, firey - 87 * s);
bezierVertex(firex + 30 * s, firey - 87 * s, firex + 40 * s, firey, firex, firey);

endShape();


beginShape();
scale(0.9);
noStroke();
fill(255,125, 12);
vertex(firex * s, firey * s);

bezierVertex(firex, firey, firex - 60 * s, firey + 10 * s, firex - 50 * s , firey - 50 * s);
bezierVertex(firex - 50 * s, firey - 50 * s, firex - 50 * s, firey - 70 * s, firex - 60 * s, firey - 80 * s);
bezierVertex(firex - 60 * s, firey - 80 * s, firex - 50 * s, firey - 70 * s, firex - 40 * s, firey - 70 * s);
bezierVertex(firex - 40 * s, firey - 70 * s, firex - 30 * s, firey - 70 * s, firex - 30 * s, firey - 100 * s);
bezierVertex(firex - 30 * s, firey - 100 * s, firex - 16 * s, firey - 48 * s, firex - 2 * s, firey - 140 * s);
bezierVertex(firex - 2 * s, firey - 140 * s, firex + 1 * s, firey - 70 * s, firex + 10 * s, firey - 60 * s);
bezierVertex(firex + 10 * s, firey - 60 * s, firex + 18 * s, firey - 75 * s, firex + 20 * s, firey - 87 * s);
bezierVertex(firex + 30 * s, firey - 87 * s, firex + 40 * s, firey, firex, firey);

endShape();
fill(255, 255, 0);

scale(0.8);

vertex(firex , firey);

bezierVertex(firex, firey, firex - 60 * s, firey + 10 * s, firex - 50 * s , firey - 50 * s);
bezierVertex(firex - 50 * s, firey - 50 * s, firex - 50 * s, firey - 70 * s, firex - 60 * s, firey - 80 * s);
bezierVertex(firex - 60 * s, firey - 80 * s, firex - 50 * s, firey - 70 * s, firex - 40 * s, firey - 70 * s);
bezierVertex(firex - 40 * s, firey - 70 * s, firex - 30 * s, firey - 70 * s, firex - 30 * s, firey - 100 * s);
bezierVertex(firex - 30 * s, firey - 100 * s, firex - 16 * s, firey - 48 * s, firex - 2 * s, firey - 140 * s);
bezierVertex(firex - 2 * s, firey - 140 * s, firex + 1 * s, firey - 70 * s, firex + 10 * s, firey - 60 * s);
bezierVertex(firex + 10 * s, firey - 60 * s, firex + 18 * s, firey - 75 * s, firex + 20 * s, firey - 87 * s);
bezierVertex(firex + 30 * s, firey - 87 * s, firex + 40 * s, firey, firex, firey);

endShape();
pop();
push();
stroke(255,0,0);
strokeWeight(1);
fill(255,0,0);

translate(x + 30* s,y + 140 * s);
scale(1);
rotate(PI);

beginShape();

vertex(firex * s, firey * s);

bezierVertex(firex, firey, firex - 60 * s, firey + 10 * s, firex - 50 * s , firey - 50 * s);
bezierVertex(firex - 50 * s, firey - 50 * s, firex - 50 * s, firey - 70 * s, firex - 60 * s, firey - 80 * s);
bezierVertex(firex - 60 * s, firey - 80 * s, firex - 50 * s, firey - 70 * s, firex - 40 * s, firey - 70 * s);
bezierVertex(firex - 40 * s, firey - 70 * s, firex - 30 * s, firey - 70 * s, firex - 30 * s, firey - 100 * s);
bezierVertex(firex - 30 * s, firey - 100 * s, firex - 16 * s, firey - 48 * s, firex - 2 * s, firey - 140 * s);
bezierVertex(firex - 2 * s, firey - 140 * s, firex + 1 * s, firey - 70 * s, firex + 10 * s, firey - 60 * s);
bezierVertex(firex + 10 * s, firey - 60 * s, firex + 18 * s, firey - 75 * s, firex + 20 * s, firey - 87 * s);
bezierVertex(firex + 30 * s, firey - 87 * s, firex + 40 * s, firey, firex, firey);

endShape();


beginShape();
scale(0.9);
noStroke();
fill(255,125, 12);
vertex(firex * s, firey * s);

bezierVertex(firex, firey, firex - 60 * s, firey + 10 * s, firex - 50 * s , firey - 50 * s);
bezierVertex(firex - 50 * s, firey - 50 * s, firex - 50 * s, firey - 70 * s, firex - 60 * s, firey - 80 * s);
bezierVertex(firex - 60 * s, firey - 80 * s, firex - 50 * s, firey - 70 * s, firex - 40 * s, firey - 70 * s);
bezierVertex(firex - 40 * s, firey - 70 * s, firex - 30 * s, firey - 70 * s, firex - 30 * s, firey - 100 * s);
bezierVertex(firex - 30 * s, firey - 100 * s, firex - 16 * s, firey - 48 * s, firex - 2 * s, firey - 140 * s);
bezierVertex(firex - 2 * s, firey - 140 * s, firex + 1 * s, firey - 70 * s, firex + 10 * s, firey - 60 * s);
bezierVertex(firex + 10 * s, firey - 60 * s, firex + 18 * s, firey - 75 * s, firex + 20 * s, firey - 87 * s);
bezierVertex(firex + 30 * s, firey - 87 * s, firex + 40 * s, firey, firex, firey);

endShape();
fill(255, 255, 0);

scale(0.8);

vertex(firex , firey);

bezierVertex(firex, firey, firex - 60 * s, firey + 10 * s, firex - 50 * s , firey - 50 * s);
bezierVertex(firex - 50 * s, firey - 50 * s, firex - 50 * s, firey - 70 * s, firex - 60 * s, firey - 80 * s);
bezierVertex(firex - 60 * s, firey - 80 * s, firex - 50 * s, firey - 70 * s, firex - 40 * s, firey - 70 * s);
bezierVertex(firex - 40 * s, firey - 70 * s, firex - 30 * s, firey - 70 * s, firex - 30 * s, firey - 100 * s);
bezierVertex(firex - 30 * s, firey - 100 * s, firex - 16 * s, firey - 48 * s, firex - 2 * s, firey - 140 * s);
bezierVertex(firex - 2 * s, firey - 140 * s, firex + 1 * s, firey - 70 * s, firex + 10 * s, firey - 60 * s);
bezierVertex(firex + 10 * s, firey - 60 * s, firex + 18 * s, firey - 75 * s, firex + 20 * s, firey - 87 * s);
bezierVertex(firex + 30 * s, firey - 87 * s, firex + 40 * s, firey, firex, firey);

endShape();
pop();
}

// ---------------- ground -----------------
beginShape();
noStroke();
fill(138,115,78);
vertex(0,250);
bezierVertex(35,257,55, 325, 150, 309);
bezierVertex(168, 320, 185, 340, 220, 330);
bezierVertex(240, 325, 280, 345, 330, 330);
bezierVertex(380, 320, 420, 310, 470, 280);
bezierVertex(500, 305, 520, 326, 550, 240);
bezierVertex(570, 230, 580, 250, 600, 240);
vertex(600,400);
vertex(0,400);
endShape();

beginShape();
fill(212, 191, 160);
vertex(0,260);
bezierVertex(33, 320, 75, 295, 89, 324);
bezierVertex(94, 344, 132, 350, 213, 389);
vertex(140,384);
vertex(0,377);

endShape();

beginShape();
fill(212, 191, 160);
vertex(600, 261);
bezierVertex(532, 259, 598, 298, 462, 298);
bezierVertex(455, 319, 413, 324, 381, 361);
bezierVertex(354, 356, 341, 366, 295, 381);
vertex(309,400);
vertex(600,400);
vertex(600,261);
endShape();


beginShape();

fill(236,218,194);

vertex(0,340);
bezierVertex(0,340, 20, 350, 30, 350);
bezierVertex(50, 350, 80, 360, 120, 360);
bezierVertex(180, 390, 230, 380, 250, 370);
bezierVertex(280, 375, 290, 375, 300, 375);
bezierVertex(300, 375, 350, 375, 400, 375);
bezierVertex(420, 370, 450, 360, 480, 365);
bezierVertex(500, 370, 520, 375, 560, 380);
bezierVertex(580, 380, 590, 370, 600, 375);
vertex(600, 375);
vertex(600, 400);
vertex(0, 400);
vertex(0, 340);

endShape();


//---------------- mark ---------------
beginShape();
fill(255,0,0);
stroke(255,0,0);
strokeWeight(3);

vertex(295, 376);
vertex(293, 378);
vertex(317, 382);

vertex(293, 386);
vertex(295, 388);
vertex(319, 384);

vertex(343, 388);
vertex(345, 386);
vertex(321, 382);

vertex(345, 378);
vertex(343, 376);
vertex(317, 381);

vertex(295, 376);

endShape();

// -- wall-e ---

//jetpack
push();
noStroke();
fill(56,124, 126);
rect(x + 2 * s, y + -26 * s, 56 * s, 40 * s, 10 * s);
rect(x + 100 * s, y - 26 * s, 56 * s, 40 * s, 10 * s);
pop();

//wheel right + left)
fill(50);
strokeWeight(2);
stroke(40);
rect(x -52 * s, y + 100 * s, 50 * s, 100 * s);

line(x - 52 * s, y + 108 * s, x - 2 * s, y + 108 * s);
line(x - 52 * s, y + 117 * s, x - 2 * s, y + 117 * s);
line(x - 52 * s, y + 126 * s, x - 2 * s, y + 126 * s);
line(x - 52 * s, y + 135 * s, x - 2 * s, y + 135 * s);
line(x - 52 * s, y + 146 * s, x - 2 * s, y + 146 * s);
line(x - 52 * s, y + 155 * s, x - 2 * s, y + 155 * s);
line(x - 52 * s, y + 164 * s, x - 2 * s, y + 164 * s);
line(x - 52 * s, y + 173 * s, x - 2 * s, y + 173 * s);
line(x - 52 * s, y + 182 * s, x - 2 * s, y + 182 * s);
line(x - 52 * s, y + 191 * s, x - 2 * s, y + 191 * s);

rect(x + 163 * s, y + 100 * s, 50 * s, 100 * s);

line(x + 163 * s, y + 108 * s, x + 211 * s, y + 108 * s);
line(x + 163 * s, y + 117 * s, x + 211 * s, y + 117 * s);
line(x + 163 * s, y + 126 * s, x + 211 * s, y + 126 * s);
line(x + 163 * s, y + 135 * s, x + 211 * s, y + 135 * s);
line(x + 163 * s, y + 146 * s, x + 211 * s, y + 146 * s);
line(x + 163 * s, y + 155 * s, x + 211 * s, y + 155 * s);
line(x + 163 * s, y + 164 * s, x + 211 * s, y + 164 * s);
line(x + 163 * s, y + 173 * s, x + 211 * s, y + 173 * s);
line(x + 163 * s, y + 182 * s, x + 211 * s, y + 182 * s);
line(x + 163 * s, y + 191 * s, x + 211 * s, y + 191 * s);

//wheel connections
rect(x, y + 168 * s, 40 * s, 10 * s);
rect(x + 42 * s, y + 156 *s, 10 * s);
ellipse(x + 47 * s, y + 172 * s, 15 * s);

rect(x + 121 * s, y + 168 * s, 40 * s, 10 * s);
rect(x + 109 * s, y + 156 * s, 10 * s);
ellipse(x + 114 * s, y + 172 * s, 15* s);

//Cords to the eyes
beginShape();
noFill();
stroke(10);
strokeWeight(3);
vertex(x + 77 * s, y - 50 * s);
bezierVertex(x + 75 * s, y - 40 * s, x + 55 * s, y - 33 * s, x + 45 * s, y - 55 * s);
endShape();

beginShape();
vertex(x + 83 * s, y - 50 * s);
bezierVertex(x + 85 * s, y - 40 * s, x + 105 * s, y - 33 * s, x + 115 * s, y - 55 * s);
endShape();

//neck
fill(220,152,10);
strokeWeight(1);
stroke(235,177,18);

rect(x + 60 * s, y - 26 * s, 15 * s, 40 * s, 5 * s);

fill(255,197,28);

beginShape();
vertex(x + 65 * s, y );
bezierVertex(x + 65 * s, y, x + 65 * s, y - 10 * s, x + 72 * s, y - 40 *s);
bezierVertex(x + 72 * s, y - 40 * s, x + 72 * s, y  - 40 * s, x + 88 * s, y - 40 * s);
bezierVertex(x + 88 * s, y - 40 * s, x + 88 * s, y - 40 * s, x + 95 * s, y);
bezierVertex(x + 95 * s, y, x + 95 * s, y, x + 65 * s, y);
endShape();

rect(x + 76 * s, y - 60 * s, 8 * s, 20 * s);

rect(x + 60 * s, y - 80 * s, 40 * s, 20 * s);

//eye right 
push();

translate(x + 95 * s, y -95 * s);
scale(s * 1.2);
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

//camera eye
fill(50, 10, 40);
ellipse(15, 23, 25);
fill(20);
ellipse(15,23, 10);

//eye screws
fill(40);
strokeWeight(1);
ellipse(2,8,4);
ellipse(45, 30, 4);
ellipse(30, 40, 4);

pop();

push();

//eye left
translate(x + 65 * s, y - 95 * s);
scale(s * 1.2);
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

//camera eye left
fill(50, 10, 40);
ellipse(-15, 23, 25);
fill(20);
ellipse(-15,23, 10);

//eye screws left
strokeWeight(1);
fill(40);
ellipse(-2, 8, 4);
ellipse(-45, 30, 4);
ellipse(-30, 40, 4);

pop();

//box

fill(255,197,28);
strokeWeight(2);
stroke(235,177,18);
rect(x, y, 160 * s, 160 * s);

//box-body shadows
push();
stroke(205,150,0);
strokeWeight(5);
noFill();

line(x + 20 * s, y + 50 * s, x + 20 * s, y + 110 * s);
line(x + 80 * s, y + 50 * s, x + 80 * s, y + 110 * s);
line(x + 140 * s, y + 50 * s, x + 140 * s, y + 110 * s);
pop();

//box-body details
stroke(60);
strokeWeight(2);
fill(80);
rect(x, y, 160 * s , 50 * s);

//left side
rect(x, y, 50 * s);
line(x, y + 10 * s,  x + 50 * s, y + 10 * s);
line(x, y + 25 * s,  x + 50 * s, y + 25 * s);

push();
beginShape();
fill(140);
vertex(x, y + 25 * s );
bezierVertex(x + 20 * s, y + 10 * s, x + 30 * s, y + 10 * s, x + 50 * s, y + 25 * s);
endShape();
pop();

push();
strokeWeight(1);
line(x + 10 * s, y + 23 * s , x + 40 * s, y + 23 * s);
pop();

//middle
push();
fill(20);
noStroke();
rect(x + 55 * s, y + 10 * s, 20 * s);

fill(220);
rect(x + 57 * s, y + 12 * s, 16 * s, 3 * s);
rect(x + 57 * s, y + 17 * s, 16 * s, 3 * s);
pop();

rect(x + 80 * s, y + 10 * s, 26 * s, 35 * s);

push();
fill(0, 200, 0);
stroke(0, 150, 0);
strokeWeight(1);
ellipse(x + 88 * s, y + 18 * s, 8 * s);
pop();

line(x + 88 * s, y + 27 * s, x + 98 * s, y + 27 * s);
line(x + 88 * s, y + 31 * s, x + 98 * s, y + 31 * s);
line(x + 88 * s, y + 35 * s, x + 98 * s, y + 35 * s);
line(x + 88 * s, y + 39 * s, x + 98 * s, y + 39 * s);

push();
stroke(10);
fill(200);
strokeWeight(1);
rect( x + 58 * s, y + 35 * s, 8 * s);
pop();

//right side
rect(x + 110 * s, y, 50 * s);

line(x + 110 * s, y + 10 * s, x + 160 * s, y + 10 * s);
line(x + 110 * s, y + 25 * s, x + 160 * s, y + 25 * s);

push();
stroke(140,10,10);
fill(180, 20, 20);
ellipse(x + 135 * s, y + 38 * s, 40 * s, 10 * s);
pop();

//jetpack straps
push();
fill(77, 184, 188);

//left
rect(x + 15 * s, y -10 * s, 30 * s, 100 * s, 8 * s);

beginShape();
vertex(x + 24 * s, y + 87 * s);
bezierVertex(x + 24 * s, y + 84 * s, x + 20 * s, y + 99 * s, x + -1 * s, y + 99 *s);
vertex(x - 1 * s,y + 99 *s);
vertex(x - 1 * s,y + 110 *s);
bezierVertex(x -1 * s, y + 110 * s, x + 36 * s, y + 110 * s, x + 36 * s, y + 84 * s);

endShape();


//right

rect(x + 115 * s, y -10 * s, 30 * s, 100 * s, 8 * s);

beginShape();
vertex(x + 135 * s, y + 84 * s);
bezierVertex(x + 135 * s, y + 84 * s, x + 134 * s, y + 99 * s, x + 162 * s, y + 99 * s);
vertex(x + 162 * s, y + 99 * s);
vertex(x + 162 * s, y + 110 * s);
bezierVertex(x + 162 * s, y + 110 * s, x + 124 * s, y + 110 * s, x + 124 * s, y + 84 * s); 
endShape();

pop();

//hand right
push();
translate(x + 160 * s, y + 66 * s);

rect(-3, 0, 20 * s, 10 * s);
pop();

push();
translate(x + 155 * s, y + 86 * s);
rotate(PI);
scale(s * 1.5);
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
pop();

//hand left
push();
translate( x -10 * s, y + 66 * s);

rect(0,0, 20 * s, 10 * s);
pop();

push();
translate(x + 5 * s, y + 56 * s);
scale(1.5 * s);
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
pop();

stroke(59,35,19);
strokeWeight(2 * shoeS);
fill(96,62,32);


beginShape();
vertex(shoeX + 25 * shoeS, shoeY);
bezierVertex(shoeX + 15 * shoeS, shoeY + 27 * shoeS, shoeX + 25 * shoeS, shoeY + 27 * shoeS, shoeX + 25 * shoeS, shoeY + 27 * shoeS);
bezierVertex(shoeX + 25 * shoeS, shoeY + 27 * shoeS, shoeX + 25 * shoeS, shoeY + 37 * shoeS, shoeX + 52 * shoeS, shoeY + 30 * shoeS);
bezierVertex(shoeX + 57 * shoeS, shoeY + 25 * shoeS, shoeX + 74 * shoeS, shoeY + 34 * shoeS, shoeX + 77 * shoeS, shoeY + 55 * shoeS);
vertex(shoeX + 77 * shoeS, shoeY + 55 * shoeS);
vertex(shoeX + 17 * shoeS, shoeY + 55 * shoeS);
vertex(shoeX + 17 * shoeS, shoeY + 52 * shoeS);
vertex(shoeX + 1 * shoeS, shoeY + 55 * shoeS);
vertex(shoeX -25 * shoeS, shoeY + 55 * shoeS);
bezierVertex(shoeX - 25 * shoeS, shoeY + 55 * shoeS, shoeX -20 * shoeS, shoeY + 25 * shoeS, shoeX - 25 * shoeS, shoeY);
endShape();

ellipse(shoeX, shoeY, 50 * shoeS, 10 * shoeS);

beginShape();
stroke(0,255,0);
noFill();
strokeWeight(6);
vertex(shoeX, shoeY + 3 * shoeS);
bezierVertex(shoeX -5 * shoeS, shoeY - 10 * shoeS, shoeX - 8 * shoeS, shoeY - 17 * shoeS, shoeX + 5 * shoeS, shoeY - 22 * shoeS);
endShape();

fill(0,255,0);
noStroke();
ellipse(shoeX + 17 * shoeS, shoeY - 21 * shoeS, 30 * shoeS, 12 * shoeS);
ellipse(shoeX - 17 * shoeS, shoeY - 15 * shoeS, 25 * shoeS, 12 * shoeS);


// 
distance = int(dist(x, y, shoeX,shoeY));
if ((distance < 50 && shoeDirection === "right") || (distance < 10 && shoeDirection === "left")){
    state = "losescreen";
    resetscreen();
}


if (gameIsActive === true){
   y = y + velocity;
   velocity = velocity + acceleration;
   shoeX = shoeX + shoeSpeed;
   if(shoeX > 540){
    shoeSpeed = - 3 ;
    shoeDirection = "left";
   }
   if(shoeX < 20){
    shoeSpeed = + 3;
    shoeDirection = "right";
   }

 

if (keyIsDown(32)){ 
     velocity = velocity - 0.5;}
    
  }

if(y > 320 && velocity <=10){
    gameIsActive=false;
    velocity = 0;
} 
else if ( y > 320){
    gameIsActive = false;
    velocity=0;

}
function resetscreen(){
    y= -20;
    } 
}  
