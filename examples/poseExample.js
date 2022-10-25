let x =0;
let y=0;
let img
// let errorMessage;

// function preload(){
//     errorMessage=loadFont('/assets/fonts/Nunito-Regular.ttf',call(),err());
// }
function preload() {
    img = loadImage('assets/img/ts.png')
}


function setup() {
    createCanvas(400, 400);
    //image(img, 0,0,400,400);
  }
  
function draw() {
    x = document.getElementById('x').value;
    y = document.getElementById('y').value;
    poseX = document.getElementById('selectPoseX').value;
    operatorX = document.getElementById('selectOperationX').value;
    poseY = document.getElementById('selectPoseY').value;
    operatorY = document.getElementById('selectOperationY').value;
    
    poseXInt = parseInt(poseX);
    xInt = parseInt(x);
    yInt = parseInt(y);

    image(img, 0,0,400,400);
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
    
    offsetX = Math.abs(eval(x+operatorX+poseX));
    offsetY = Math.abs(eval(y+operatorY+poseY))

    circle(offsetX, offsetY, 10);

  }

