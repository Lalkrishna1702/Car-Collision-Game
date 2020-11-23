var car, wall;

var speed, weight, deformation;

function setup() {

  createCanvas(1600,400);
  
  car = createSprite(100,200,50,50);
  car.shapeColor = color(255,255,255);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(0,0,256);

  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background(0);  

  car.velocityX = speed;

  if(wall.x - car.x < wall.width /2 + car.width /2){

    car.velocityX = 0;
    deformation =  0.5*weight*speed*speed / 22500;

    if(deformation < 100){
      car.shapeColor = color(0, 255, 0);
    }else if(deformation >= 100 && deformation <=180){
      car.shapeColor = color(230, 230, 0);
    }else{
      car.shapeColor = color(255, 0, 0);
    }

  }
  drawSprites();
}

/*function deformation(){
  0.5*weight*speed*speed / 22500;
}*/