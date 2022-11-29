let x =0;
let y=0;
let img

class Particle {

  constructor(position) {
    this.acceleration = createVector(0, 0.5);
    this.velocity = createVector(random(-2, 2), random(-5,1));
    this.position = position.copy();
    this.lifespan = 300;
  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1.7;
  }

  // Method to display
  display() {
    //noStroke();
    //domGet();
    fill(255, 255, 255, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}

class ParticleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
    // let r = random(0);
    // if (r < 0.1) {
    //   this.particles.push(new Particle(this.origin));
    // } else {
    //   this.particles.push(new Confetti(this.origin));
    // }
  }

  run() {
    // Run every particle
    // ES6 for..of loop
    for (let particle of this.particles) {
      particle.run();
    }

    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}


// function setup() {
//     createCanvas(400, 400);
//     //image(img, 0,0,400,400);
//   }
  
// function draw() {
//     x = document.getElementById('x').value;
//     y = document.getElementById('y').value;
//     poseX = document.getElementById('selectPoseX').value;
//     operatorX = document.getElementById('selectOperationX').value;
//     poseY = document.getElementById('selectPoseY').value;
//     operatorY = document.getElementById('selectOperationY').value;
    
//     poseXInt = parseInt(poseX);
//     xInt = parseInt(x);
//     yInt = parseInt(y);

//     image(img, 0,0,400,400);
//     textAlign(CENTER)
//     //console.log(x);
//     if(x>400 || y>400 || x<0 || y<0){
//         console.log('1')
//         rectMode(CENTER);
//         noStroke();
//         fill(255,0,0);
//         rect(width/2,height/2,width,50);
//         fill(0);
//         textFont('Helvetica');
//         text("You can't see the circle because it is being drawn outside of your canvas.",width/2,height/2)
//     }
    
//     stroke(1);
//     fill(255);
    
//     offsetX = Math.abs(eval(x+operatorX+poseX));
//     offsetY = Math.abs(eval(y+operatorY+poseY));

//     circle(offsetX, offsetY, 10);

//   }

let particleSystem;

function setup() {
  createCanvas(400, 400);
  particleSystem = new ParticleSystem(createVector(width/2, 30));
}

function draw() {
  background(255, 10);
  particleSystem.addParticle();
  particleSystem.run();


  domGet();
}

function domGet(){
  x = document.getElementById('x').value;
  y = document.getElementById('y').value;
poseX = document.getElementById('selectPoseX').value;
operatorX = document.getElementById('selectOperationX').value;
poseY = document.getElementById('selectPoseY').value;
operatorY = document.getElementById('selectOperationY').value;
poseXInt = parseInt(poseX);
xInt = parseInt(x);
yInt = parseInt(y);
offsetX = Math.abs(eval(x+operatorX+poseX));
offsetY = Math.abs(eval(y+operatorY+poseY));
}