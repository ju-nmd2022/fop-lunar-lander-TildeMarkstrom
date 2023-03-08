let shoeX = 100;
let shoeY = 100;
let shoeS = 1.1;


function draw(){

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
ellipse(shoeY + 17 * shoeS, shoeY - 21 * shoeS, 30 * shoeS, 12 * shoeS);
ellipse(shoeY - 17 * shoeS, shoeY - 15 * shoeS, 25 * shoeS, 12 * shoeS);
}