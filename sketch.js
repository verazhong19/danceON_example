let x =0;
let y=0;
// let errorMessage;

// function preload(){
//     errorMessage=loadFont('/assets/fonts/Nunito-Regular.ttf',call(),err());
// }

function setup() {
    createCanvas(400, 400);
  }
  
function draw() {
    x = document.getElementById('x').value;
    y = document.getElementById('y').value;
    background(220);
    textAlign(CENTER)
    //console.log(x);
    if(x>400 || y>400 || x<0 || y<0){
        console.log('1')
        rectMode(CENTER);
        noStroke();
        fill(255,0,0);
        rect(width/2,height/2,width,50);
        fill(0);
        textFont('Helvetica');
        text("You can't see the circle because it is being drawn outside of your canvas.",width/2,height/2)
    }
    stroke(1);
    fill(255);
    circle(x, y, 20);
  }

