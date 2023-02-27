background(255);



//wheel right + left)
fill(40,40,40);
strokeWeight(4);
stroke(20,20,20);
rect(98, 290, 50, 90);

rect(332, 290, 50, 90);

//wheel connections
rect(150, 338, 40, 10);
rect(195, 327, 10, 10);
ellipse(200, 343, 20);

rect(290, 338, 40, 10);
rect(275, 327, 10);
ellipse(280, 343, 20);

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


//eyes
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

fill(50, 10, 40);
ellipse(15, 23, 25);

fill(40);
strokeWeight(1);
ellipse(2,8,4);
ellipse(45, 30, 4);
ellipse(30, 40, 4);

pop();

push();

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

fill(50, 10, 40);
ellipse(-15, 23, 25);

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

//arm right
push();

angleMode(DEGREES);
translate(320, 207);

stroke(235,177,18);
fill(255,197,28);

ellipse(5, 10, 10);

push();
rotate(320);
rect(0,0, 100, 20);
pop();



pop();

//arm left