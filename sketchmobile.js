let Stalinist;
let Xanh;
let XanhItal;
let rot = 0;
let value = 0;



function preload() {
Stalinist = loadFont('addons/StalinistOne-Regular.ttf');
Xanh = loadFont('addons/XanhMono-Regular.ttf');
XanhItal = loadFont('addons/XanhMono-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  textFont(Stalinist);
  textSize(100);



}

function draw() {
  background('black');

/*
  fill('red');
  rect(-windowWidth/2,-windowHeight/2,30,30);
  rect(-windowWidth/2,(windowHeight/2)-25,30,30);
*/
  push();
  textFont(Xanh);
  textSize(50);
  translate(-windowWidth/2,(windowHeight/2)-25);
  textAlign(LEFT,CENTER);
  fill('white');
  rotateX(millis() / 2500);
  text("Hybridisation is the Lev Manovich's therm to define a specific new digital media nature - ",0,0);
  pop();

    push();
    textFont(Xanh);
    textSize(50);
    translate(-windowWidth/2,(-windowHeight/2)+25);
    textAlign(LEFT,CENTER);
    fill('white');
    rotateX(millis() / 2500);
    text("Kynetic Typography Interactive Poster - by Federico Cordelli - Kynetic Typography Interactive Poster - by Federico Cordelli - ",0,0);
    pop();



//scritte nuove
push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*120);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*120);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*200);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*200);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*300);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*300);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*400);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*400);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,value*500);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();


push();
rotateZ(value);
rotateX(value);
rotateY(value);
scale(1+value,1+value);
translate(0,0,-value*500);

fill('white');
textAlign(CENTER, CENTER);
text("HYBRID",0,0);
pop();

//scrittine


}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight, WEBGL);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}

/*
function touchMoved(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  rot += event.delta;
  //uncomment to block page scrolling
  return false;
}
*/

function touchMoved() {
  value = value + 0.05;

  if (value > 3.1) {
    value = 0;
  }
/*
if (value < -500) {
  value = value-0.05;
}
*/
}
