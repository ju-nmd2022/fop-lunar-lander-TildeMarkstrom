background(255);
//fire right


push();
scale(0.6);
translate(550,600);
angleMode(DEGREES);
rotate(180);

stroke(255,0,0);
strokeWeight(1);
fill(255,0,0);

beginShape();
vertex(100,100);
bezierVertex(100, 100, 40, 110, 50, 50);
bezierVertex(50, 50, 50, 30, 40, 20);
bezierVertex(40, 20, 50, 30, 60, 30);
bezierVertex(60, 30, 70, 30, 70, 0);
bezierVertex(70, 0, 84, 52, 98 ,-40);
bezierVertex(98, -40, 101, 30, 110, 40);
bezierVertex(110, 40, 118, 25, 120, 13);
bezierVertex(130, 13, 140, 100, 100, 100);
endShape();

push();
translate(25, 30);
scale(0.7);
noStroke();
fill(255, 125,0);
beginShape();
vertex(100,100);
bezierVertex(100, 100, 40, 110, 50, 50);
bezierVertex(50, 50, 50, 30, 40, 20);
bezierVertex(40, 20, 50, 30, 60, 30);
bezierVertex(60, 30, 70, 30, 70, 0);
bezierVertex(70, 0, 84, 52, 98 ,-40);
bezierVertex(98, -40, 101, 30, 110, 40);
bezierVertex(110, 40, 118, 25, 120, 13);
bezierVertex(130, 13, 140, 100, 100, 100);
endShape();
pop();

push();
translate(42, 50);
scale(0.5);
noStroke();
fill(255, 255 ,0);
beginShape();
vertex(100,100);
bezierVertex(100, 100, 40, 110, 50, 50);
bezierVertex(50, 50, 50, 30, 40, 20);
bezierVertex(40, 20, 50, 30, 60, 30);
bezierVertex(60, 30, 70, 30, 70, 0);
bezierVertex(70, 0, 84, 52, 98 ,-40);
bezierVertex(98, -40, 101, 30, 110, 40);
bezierVertex(110, 40, 118, 25, 120, 13);
bezierVertex(130, 13, 140, 100, 100, 100);
endShape();
pop();

pop();

//fire left

push();
scale(0.6);
translate(420,600);
angleMode(DEGREES);
rotate(180);

stroke(255,0,0);
strokeWeight(1);
fill(255,0,0);

beginShape();
vertex(100,100);
bezierVertex(100, 100, 40, 110, 50, 50);
bezierVertex(50, 50, 50, 30, 40, 20);
bezierVertex(40, 20, 50, 30, 60, 30);
bezierVertex(60, 30, 70, 30, 70, 0);
bezierVertex(70, 0, 84, 52, 98 ,-40);
bezierVertex(98, -40, 101, 30, 110, 40);
bezierVertex(110, 40, 118, 25, 120, 13);
bezierVertex(130, 13, 140, 100, 100, 100);
endShape();

push();
translate(25, 30);
scale(0.7);
noStroke();
fill(255, 125,0);
beginShape();
vertex(100,100);
bezierVertex(100, 100, 40, 110, 50, 50);
bezierVertex(50, 50, 50, 30, 40, 20);
bezierVertex(40, 20, 50, 30, 60, 30);
bezierVertex(60, 30, 70, 30, 70, 0);
bezierVertex(70, 0, 84, 52, 98 ,-40);
bezierVertex(98, -40, 101, 30, 110, 40);
bezierVertex(110, 40, 118, 25, 120, 13);
bezierVertex(130, 13, 140, 100, 100, 100);
endShape();
pop();

push();
translate(42, 50);
scale(0.5);
noStroke();
fill(255, 255 ,0);
beginShape();
vertex(100,100);
bezierVertex(100, 100, 40, 110, 50, 50);
bezierVertex(50, 50, 50, 30, 40, 20);
bezierVertex(40, 20, 50, 30, 60, 30);
bezierVertex(60, 30, 70, 30, 70, 0);
bezierVertex(70, 0, 84, 52, 98 ,-40);
bezierVertex(98, -40, 101, 30, 110, 40);
bezierVertex(110, 40, 118, 25, 120, 13);
bezierVertex(130, 13, 140, 100, 100, 100);
endShape();
pop();

pop();

//jetpack
push();
fill(56,124, 126);
rect(162, 133, 56, 40, 10);
rect(260, 133, 56, 40, 10);
pop();

//wheel right + left)
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

//wheel connections
rect(160, 318, 40, 10);
rect(200, 307, 10, 10);
ellipse(205, 325, 20);

rect(280, 318, 40, 10);
rect(265, 307, 10);
ellipse(270, 325, 20);

//Cords to the eyes
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

//neck
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

//eye right 
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
rect(160,150,160,160);

//box-body shadows
push();
stroke(205,150,0);
strokeWeight(5);
noFill();

line(170, 201, 170, 254);
line(240, 201, 240, 254);
line(310, 201, 310, 254);
pop();

//box-body details
stroke(60);
strokeWeight(2);
fill(80);
rect(160,150, 160, 50);

//left side
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

//middle
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

//right side
rect(270, 150, 50);

line(270, 158, 320, 158);
line(270, 170, 320, 170);

push();
stroke(140,10,10);
fill(180, 20, 20);
ellipse(295, 186, 40, 10);
pop();

//jetpack straps
push();
fill(77, 184, 188);

//left
rect(175,145,30,100, 8);

beginShape();
vertex(184,244);
bezierVertex(184, 244, 180, 259, 159, 259);
vertex(159,259);
vertex(159, 270);
bezierVertex(159,270, 196, 270, 196, 244);
endShape();

//right
rect(275,145,30,100, 8);

beginShape();
vertex(295,244);
bezierVertex(295, 244, 299, 259, 322, 259);
vertex(322,259);
vertex(322, 270);
bezierVertex(322,270, 284, 270, 284, 244); 
endShape();

pop();

//hand right
push();
translate(310,206);

rect(0,0, 20,10);
pop();

push();
translate(315,225);
rotate(PI);
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

//hand left
push();
translate(151,206);

rect(0,0, 20,10);
pop();

push();
translate(165,195);
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

