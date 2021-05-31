// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 0;
var slider;
var randomBool = false;
var multiplier =1;

var strokeWidth =10;
function setup() {
  createCanvas(600, 600);
  button = createButton('Switch Random On');
  button.mousePressed(toggleRandom);

  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider.style('width', '600px');

}
function draw() {
  
  background(51);
  
  translate(300,height);
 

  stroke(0,255,0);
  angle=slider.value();
  branch(150);
  
}
 
function branch(len){

  if(randomBool){
    frameRate(2);
    multiplier = random(0.8,1.2);
  }
  else{
    multiplier = 1;
    frameRate(10);
  }


  
  if(len>60) {
  stroke(102,51,0);
  }
  else{
  stroke(0,255,0);
  }
  strokeWeight(len / 10);
  line(0,0,0,-len);
  translate (0,-len);
  if (len>2){
  push();
  rotate (angle*multiplier);
  branch (len*0.67*multiplier);
  pop();
  push();
  rotate(-angle*multiplier);
  branch (len*0.67*multiplier);
  pop();
  }

  //line(0,0,0,-len*0.67);
}


function toggleRandom() {
  if (randomBool) {
    randomBool = false;
    button.html('Switch Random On');
  } else {
    randomBool = true;
    button.html('Switch Random Off');
  }
}
