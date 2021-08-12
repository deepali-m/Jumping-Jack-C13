
var player,player2;
var platform,platform2;
var player_image, platform_image;

function preload(){
  player_image=loadImage("images/jack2.png")
  platform_image = loadImage("images/p1.png");
  player2_image=loadImage("images/jack2.png")
  platform2_image = loadImage("images/p2.png");
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(250,300,20,50);
  player.addImage("player",player_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform_image)
  platform.scale=0.15

  
  
}

function draw() {
  background('#F2F5B6');
  
  if(keyDown("up"))
  {
    player.velocityY=-10
  }

// adding gravity
  player.velocityY = player.velocityY +0.8;
// stopping the player from falling down
  player.collide(platform)

//calling the function
 // spawnPlatform();

  drawSprites();
}

// creating a new function spawnPlatform()
function spawnPlatform(){
//creating sprite
  var platforms = createSprite(250,0,50,50);
// applying velocity
  platforms.velocityY = 4;
  }








