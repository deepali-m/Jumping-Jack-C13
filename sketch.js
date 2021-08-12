
var player,jack2;
var platform,platform2;
var jack_image, platform_image;
var platform1,platform2,platform3,platform4,platform5,platform6;
var score = 0;


// class 13
var platformGroups;

var bg;
var jumpSound;


//
function preload(){
  jack_image=loadImage("images/jack2.png")
  
 
platform1 = loadImage("images/platform1.png")
platform2 = loadImage("images/platform2.png")
platform3 = loadImage("images/platform3.png")
platform4 = loadImage("images/platform4.png")
platform5 = loadImage("images/platform5.png")
platform6 = loadImage("images/platform6.png")

//class 13
bgImg= loadImage("images/bg.png");
//jumpSound = loadSound("")
//leftSound = loadSound("")
//rightSound = loadSound("")
//

}


function setup() {
  createCanvas(500, 500);
  bg = createSprite(250,250,500,500);
  bg.addImage(bgImg)
  bg.scale =0.2;
  player = createSprite(250,300,20,50);
  player.addImage("player",jack_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform3)
  platform.scale=0.1;
  //class 13
  platformGroups = new Group();
 
  
}

function draw() {
  background(0);

  //calculate and display score
    score = Math.round(frameCount/10);

  // printing score
    textSize(20);
    fill(0);
    text("Score " + score , 350,50);
    
  if(keyDown("up"))
  {
    player.velocityY=-10
    //jumpSound1.play()
  }

  if(keyDown("left"))
  {
    player.x = player.x - 7;
    //leftSound.play()
  }

  if(keyDown("right"))
  {
    player.x = player.x + 7;
    //rightSound.play()

  }

  player.velocityY = player.velocityY +0.8;
  player.collide(platform);
  //class 13
  player.collide(platformGroups);
  //
  spawnPlatform();

  drawSprites();
}

function spawnPlatform(){
  if(frameCount % 40 ===0){
    //class 13
    platform.destroy();
    //

    var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 5;

  var r = Math.round(random(1,6))
  switch (r){
    case 1 : platforms.addImage(platform1);
    break;
    case 2 : platforms.addImage(platform2);
    break;
    case 3 : platforms.addImage(platform3);
    break;
    case 4 : platforms.addImage(platform4);
    break;
    case 5 : platforms.addImage(platform5);
    break;
    case 6 : platforms.addImage(platform6);
    break;
  }
  platforms.collide(player);
  platforms.scale = 0.1;
//class 13
  platformGroups.add(platforms);
//
  platforms.x = random(0,500);
  }
}











