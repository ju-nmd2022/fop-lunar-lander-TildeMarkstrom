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

//neck
fill(255,197,28);
strokeWeight(1);
stroke(235,177,18);

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