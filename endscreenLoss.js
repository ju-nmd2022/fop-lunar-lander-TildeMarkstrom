createCanvas(600, 400);

function draw(){
background(10,0,20);

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


}