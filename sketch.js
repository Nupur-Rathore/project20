var car, wall;
var speed, weight;





function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  
  
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color(80, 80, 80);
  
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var df=0.5*weight*speed*speed/22500;

    if (df > 180){
      car.shapeColor="red";
    }

    if (df >= 100 && df <= 180){
      car.shapeColor="yellow";
    }
    
    if (df < 100){
      car.shapeColor="green";
    }


  }
  drawSprites();
}