var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4

var ball1, ball2

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "yellow"
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "yellow"
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "yellow"
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "yellow"

  ball1 = createSprite(700,10,30,30)
  ball2 = createSprite(700,600,30,30)
  ball1.shapeColor = "purple"
  ball2.shapeColor = "orange"

  ball1.velocityY = 5
  ball2.velocityY = -5
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(fixedRect, movingRect)) {
    gameObject1.shapeColor = "blue"
    gameObject2.shapeColor = "blue"
    gameObject3.shapeColor = "blue"
    gameObject4.shapeColor = "blue"
  }
  else {
    gameObject1.shapeColor = "green"
    gameObject2.shapeColor = "green"
    gameObject3.shapeColor = "green"
    gameObject4.shapeColor = "green"
  }

bounceOff(ball1, ball2)





  drawSprites();
}

