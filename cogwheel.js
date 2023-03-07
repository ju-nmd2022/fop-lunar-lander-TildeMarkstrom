let wheelX = 0;
let wheelY = 0;
let wheelXrot = 0;
let wheelYrot = 0;
let rotateX = 0;
let heightY= 300;



function draw(){
//framerate(60);
push();
clear();

rectMode(CENTER);
translate(100,100); 

stroke(120);
strokeWeight(3);
fill(200);
ellipse(wheelX, wheelY, 62);

rotate(rotateX);
rect(wheelX, wheelY, 10, 76 );
rect(wheelX, wheelY, 76, 10);

push();
rotate(PI/4);

rect(wheelXrot, wheelYrot, 10, 76 );
rect(wheelXrot, wheelYrot, 76, 10);

pop();

stroke(120);
strokeWeight(0);
ellipse(wheelX, wheelY, 60);


strokeWeight(3);
fill(236,218,194);
ellipse(wheelX, wheelY, 30);
pop();

wheelX = wheelX + 2.83;

wheelXrot = wheelXrot  + 2;
wheelYrot = wheelYrot  - 2;
}