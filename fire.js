let x = 0;
let y = 0;
let s = 1;

stroke(255);
strokeWeight(1);
fill(255);

rotate(PI);

beginShape();

vertex(x , y);

bezierVertex(x, y, x - 60 * s, y + 10 * s, x - 50 * s , y - 50 * s);
bezierVertex(x - 50 * s, y - 50 * s, x - 50 * s, y - 70 * s, x - 60 * s, y - 80 * s);
bezierVertex(x - 60 * s, y - 80 * s, x - 50 * s, y - 70 * s, x - 40 * s, y - 70 * s);
bezierVertex(x - 40 * s, y - 70 * s, x - 30 * s, y - 70 * s, x - 30 * s, y - 100 * s);
bezierVertex(x - 30 * s, y - 100 * s, x - 16 * s, y - 48 * s, x - 2 * s, y - 140 * s);
bezierVertex(x - 2 * s, y - 140 * s, x + 1 * s, y - 70 * s, x + 10 * s, y - 60 * s);
bezierVertex(x + 10 * s, y - 60 * s, x + 18 * s, y - 75 * s, x + 20 * s, y - 87 * s);
bezierVertex(x + 30 * s, y - 87 * s, x + 40 * s, y, x, y);

endShape();
/* 
beginShape();
scale(0.8);
noStroke();
fill(255,125, 12);
vertex(x , y);

bezierVertex(x, y, x - 60 * s, y + 10 * s, x - 50 * s , y - 50 * s);
bezierVertex(x - 50 * s, y - 50 * s, x - 50 * s, y - 70 * s, x - 60 * s, y - 80 * s);
bezierVertex(x - 60 * s, y - 80 * s, x - 50 * s, y - 70 * s, x - 40 * s, y - 70 * s);
bezierVertex(x - 40 * s, y - 70 * s, x - 30 * s, y - 70 * s, x - 30 * s, y - 100 * s);
bezierVertex(x - 30 * s, y - 100 * s, x - 16 * s, y - 48 * s, x - 2 * s, y - 140 * s);
bezierVertex(x - 2 * s, y - 140 * s, x + 1 * s, y - 70 * s, x + 10 * s, y - 60 * s);
bezierVertex(x + 10 * s, y - 60 * s, x + 18 * s, y - 75 * s, x + 20 * s, y - 87 * s);
bezierVertex(x + 30 * s, y - 87 * s, x + 40 * s, y, x, y);

endShape();
fill(255, 255, 0);
beginShape();

scale(0.7);


vertex(x , y);

bezierVertex(x, y, x - 60 * s, y + 10 * s, x - 50 * s , y - 50 * s);
bezierVertex(x - 50 * s, y - 50 * s, x - 50 * s, y - 70 * s, x - 60 * s, y - 80 * s);
bezierVertex(x - 60 * s, y - 80 * s, x - 50 * s, y - 70 * s, x - 40 * s, y - 70 * s);
bezierVertex(x - 40 * s, y - 70 * s, x - 30 * s, y - 70 * s, x - 30 * s, y - 100 * s);
bezierVertex(x - 30 * s, y - 100 * s, x - 16 * s, y - 48 * s, x - 2 * s, y - 140 * s);
bezierVertex(x - 2 * s, y - 140 * s, x + 1 * s, y - 70 * s, x + 10 * s, y - 60 * s);
bezierVertex(x + 10 * s, y - 60 * s, x + 18 * s, y - 75 * s, x + 20 * s, y - 87 * s);
bezierVertex(x + 30 * s, y - 87 * s, x + 40 * s, y, x, y);

endShape(); */