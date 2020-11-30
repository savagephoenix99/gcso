var car 
var wall 
var carType
var speed
var weight
var deformation

function setup() {
  createCanvas(400,400);
  wall=createSprite(370, 200, 50, 400);
  wall.shapeColor= "#cb4154"
  car=createSprite(30, 200, 50, 50);
  car.shapeColor= "turquoise"
  carType=Math.round(random(1,5))
  if(carType===1){
    carType="creta"
    weight=1286
    speed=102
    car.velocityX=7;
  }
  if(carType===2){
    carType="cyclap"
    weight=3000
    speed=45
    car.velocityX=2.5;
  }
  if(carType===3){
    carType="zena"
    weight=2260 
    speed=60
    car.velocityX=4;
  }
  if(carType===4){
    carType="tourus"
    weight=1522
    speed=40
    car.velocityX=1;
  }
  if(carType===5){
    carType="mustang"
    weight=1770
    speed=80
    car.velocityX=5.5;
  }


}

function draw() {
  background("lime");  
  if(touching(car, wall)){
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500 
    console.log(deformation);
    if(deformation<80){
      car.shapeColor="green"
    }
    if(deformation>80 && deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>180){
      car.shapeColor="red"
    }
  }
  drawSprites();
}