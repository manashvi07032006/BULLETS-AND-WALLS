var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "brown";
  //bullet.debug = true;

  thickness = Math.round(random(22,83));
  //thickness = 70;
  wall = createSprite(1200, 200, thickness,200);
  wall.shapeColor = "grey";
  //wall.debug = true;
  //speed = 223
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  //weight = 32
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  //bullet.x = mouseX;+
  if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
   damage = Math.round((0.5 * weight * speed * speed) / (thickness * thickness * thickness));
   //console.log("damage= " + damage);
    
      if(damage >10){
        bullet.shapeColor = color(255, 0, 0);//RED
      }
      else{
        bullet.shapeColor = color(0,225,0);//RED
      }
    }
  drawSprites();
  textSize(20);
  fill("pink");
  text("damage= "+damage, 800, 100);
  text("SPEED OF bullet: "+ speed, 200, 300);
  text("WEIGHT OF bullet: "+weight, 200, 350)
  text("THICKNESS OF wall: "+thickness, 1200, 350);
}

function hasCollided(){
  bulletRightEdge  = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
}
}